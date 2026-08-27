"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  MessageCircleMore,
  Pencil,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  Video,
  WalletCards,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import { mayaAnswer, therapistDirectory } from "@/domain/demo-data";
import {
  compileIntakeManifest,
  createTherapistHandoff,
  findEligibleTherapists,
  type ManifestItem,
  reviewManifest,
  type TherapistProfile,
} from "@/domain/intake-workflow";

type DemoPhase = "story" | "manifest" | "matches" | "handoff" | "complete";

const phaseOrder: readonly Exclude<DemoPhase, "complete">[] = [
  "story",
  "manifest",
  "matches",
  "handoff",
];

const phaseLabels: Record<Exclude<DemoPhase, "complete">, string> = {
  story: "Tell",
  manifest: "Review",
  matches: "Choose",
  handoff: "Share",
};

const initialsFor = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export function CorvusDemo() {
  const proposals = useMemo(() => compileIntakeManifest(mayaAnswer), []);
  const [phase, setPhase] = useState<DemoPhase>("story");
  const [manifest, setManifest] = useState<ManifestItem[]>(proposals);
  const [editingId, setEditingId] = useState<ManifestItem["id"] | null>(null);
  const [draftValue, setDraftValue] = useState("");
  const [selectedTherapist, setSelectedTherapist] = useState<TherapistProfile | null>(null);

  const matches = useMemo(() => findEligibleTherapists(manifest, therapistDirectory), [manifest]);
  const handoff = useMemo(
    () => (selectedTherapist ? createTherapistHandoff("Maya", manifest, selectedTherapist) : null),
    [manifest, selectedTherapist],
  );
  const allReviewed = manifest.every((item) => item.decision !== "proposed");

  const decide = (id: ManifestItem["id"], decision: "approved" | "withheld") => {
    setManifest((current) => reviewManifest(current, { [id]: { decision } }));
  };

  const startEditing = (item: ManifestItem) => {
    setEditingId(item.id);
    setDraftValue(item.value);
  };

  const saveEdit = (id: ManifestItem["id"]) => {
    setManifest((current) =>
      current.map((item) => (item.id === id ? { ...item, value: draftValue.trim() } : item)),
    );
    setEditingId(null);
    setDraftValue("");
  };

  const chooseTherapist = (therapist: TherapistProfile) => {
    setSelectedTherapist(therapist);
    setPhase("handoff");
  };

  const resetDemo = () => {
    setPhase("story");
    setManifest(proposals);
    setEditingId(null);
    setDraftValue("");
    setSelectedTherapist(null);
  };

  const activePhase: Exclude<DemoPhase, "complete"> = phase === "complete" ? "handoff" : phase;

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Corvus home">
          <span className="brand-mark" aria-hidden="true">
            <HeartHandshake size={19} />
          </span>
          <span>CORVUS</span>
        </a>
        <div className="topbar-meta">
          <span className="demo-badge">
            <span className="demo-dot" aria-hidden="true" /> Synthetic product demo
          </span>
          <span className="boundary-badge">Intake, not therapy</span>
        </div>
      </header>

      <nav className="progress" aria-label="Demo progress">
        {phaseOrder.map((item, index) => {
          const currentIndex = phaseOrder.indexOf(activePhase);
          const complete = index < currentIndex || phase === "complete";
          const active = item === activePhase && phase !== "complete";
          return (
            <div
              className={`progress-item ${active ? "progress-active" : ""} ${complete ? "progress-complete" : ""}`}
              key={item}
            >
              <span className="progress-number">{complete ? <Check size={13} /> : index + 1}</span>
              <span>{phaseLabels[item]}</span>
              {index < phaseOrder.length - 1 ? <ChevronRight size={14} /> : null}
            </div>
          );
        })}
      </nav>

      {phase === "story" ? (
        <section className="story-stage" id="top">
          <div className="story-copy">
            <span className="eyebrow">The moment after someone finally says it</span>
            <h1>Tell your story once.</h1>
            <p>
              Maya already told an AI what is going on. Corvus turns that disclosure into a
              source-linked draft she controls—then helps her reach an eligible therapist.
            </p>
            <div className="promise-row">
              <span>
                <LockKeyhole size={16} /> Maya approves every detail
              </span>
              <span>
                <UserRoundCheck size={16} /> A therapist makes every clinical decision
              </span>
            </div>
          </div>

          <article className="conversation-card" aria-label="Synthetic AI conversation">
            <div className="conversation-header">
              <span className="conversation-avatar">M</span>
              <div>
                <strong>Maya’s private conversation</strong>
                <span>Today, 1:47 a.m.</span>
              </div>
              <LockKeyhole size={16} />
            </div>
            <div className="chat-thread">
              <div className="chat-bubble chat-user">{mayaAnswer}</div>
              <div className="chat-bubble chat-ai">
                <Sparkles size={15} aria-hidden="true" />
                <span>
                  You have been carrying a lot since the move and breakup. Would it help to turn
                  what you shared into something you can review before choosing a therapist?
                </span>
              </div>
            </div>
            <div className="conversation-boundary">
              <ShieldCheck size={16} /> Nothing leaves this conversation without Maya’s review.
            </div>
            <button className="primary-button" type="button" onClick={() => setPhase("manifest")}>
              Build my manifest <ArrowRight size={18} />
            </button>
          </article>
        </section>
      ) : null}

      {phase === "manifest" ? (
        <section className="workspace-stage">
          <div className="stage-heading">
            <div>
              <span className="eyebrow">Client-controlled manifest</span>
              <h1>Review what Corvus understood</h1>
              <p>Every proposal points back to Maya’s words. She can edit it or withhold it.</p>
            </div>
            <span className="safety-chip">
              <ShieldCheck size={16} /> Not a diagnosis
            </span>
          </div>

          <div className="manifest-layout">
            <div className="manifest-list">
              {manifest.map((item) => (
                <article className={`manifest-card decision-${item.decision}`} key={item.id}>
                  <div className="manifest-card-heading">
                    <div>
                      <span className="manifest-label">{item.label}</span>
                      <span className={`decision-pill decision-pill-${item.decision}`}>
                        {item.decision}
                      </span>
                    </div>
                    <button
                      className="text-button"
                      type="button"
                      aria-label={`Edit ${item.label}`}
                      onClick={() => startEditing(item)}
                    >
                      <Pencil size={14} /> Edit
                    </button>
                  </div>

                  {editingId === item.id ? (
                    <div className="edit-area">
                      <label htmlFor={`edit-${item.id}`}>Edit {item.label}</label>
                      <textarea
                        id={`edit-${item.id}`}
                        aria-label={`Edit ${item.label}`}
                        value={draftValue}
                        onChange={(event) => setDraftValue(event.target.value)}
                      />
                      <div className="edit-actions">
                        <button
                          className="secondary-button"
                          type="button"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </button>
                        <button
                          className="compact-primary"
                          type="button"
                          aria-label={`Save ${item.label}`}
                          onClick={() => saveEdit(item.id)}
                        >
                          Save edit
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="manifest-value">{item.value}</p>
                  )}

                  <blockquote>
                    <MessageCircleMore size={14} /> “{item.sourceSpan}”
                  </blockquote>

                  <div className="manifest-actions">
                    <button
                      className="approve-button"
                      type="button"
                      aria-label={`Approve ${item.label}`}
                      onClick={() => decide(item.id, "approved")}
                    >
                      <Check size={15} /> Approve
                    </button>
                    <button
                      className="withhold-button"
                      type="button"
                      aria-label={`Withhold ${item.label}`}
                      onClick={() => decide(item.id, "withheld")}
                    >
                      <X size={15} /> Withhold
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="manifest-summary">
              <FileCheck2 size={24} />
              <h2>Maya stays in control</h2>
              <p>
                Approved items can be used for matching and included in her handoff. Withheld items
                stay out.
              </p>
              <dl>
                <div>
                  <dt>Approved</dt>
                  <dd>{manifest.filter((item) => item.decision === "approved").length}</dd>
                </div>
                <div>
                  <dt>Withheld</dt>
                  <dd>{manifest.filter((item) => item.decision === "withheld").length}</dd>
                </div>
                <div>
                  <dt>Needs review</dt>
                  <dd>{manifest.filter((item) => item.decision === "proposed").length}</dd>
                </div>
              </dl>
              <button
                className="primary-button"
                type="button"
                disabled={!allReviewed || matches.length === 0}
                onClick={() => setPhase("matches")}
              >
                Find eligible therapists <ArrowRight size={18} />
              </button>
              {!allReviewed ? <small>Review every item to continue.</small> : null}
              {allReviewed && matches.length === 0 ? (
                <small>Matching preferences must be approved to search.</small>
              ) : null}
            </aside>
          </div>
        </section>
      ) : null}

      {phase === "matches" ? (
        <section className="workspace-stage">
          <div className="stage-heading">
            <div>
              <span className="eyebrow">Verified eligibility, explained</span>
              <h1>Choose who feels right</h1>
              <p>Corvus narrows the directory. Maya chooses the person.</p>
            </div>
            <span className="safety-chip">
              <UserRoundCheck size={16} /> {matches.length} eligible matches
            </span>
          </div>

          <div className="match-grid">
            {matches.map((match, index) => (
              <article className="therapist-card" key={match.therapist.id}>
                <div className="therapist-topline">
                  <span className={`therapist-avatar avatar-${index + 1}`}>
                    {initialsFor(match.therapist.name)}
                  </span>
                  <div>
                    <h2>
                      {match.therapist.name}, {match.therapist.credentials}
                    </h2>
                    <span>Verified synthetic profile</span>
                  </div>
                  <ShieldCheck size={20} />
                </div>
                <div className="therapist-facts">
                  <span>
                    <MapPin size={14} /> Illinois
                  </span>
                  <span>
                    <Video size={14} /> Virtual
                  </span>
                  <span>
                    <Clock3 size={14} /> After 5 p.m.
                  </span>
                  <span>
                    <WalletCards size={14} /> Blue Cross
                  </span>
                </div>
                <div className="match-reasons">
                  <span className="manifest-label">Why this match</span>
                  {match.reasons.map((reason) => (
                    <span key={reason}>
                      <CheckCircle2 size={14} /> {reason}
                    </span>
                  ))}
                </div>
                <button
                  className="primary-button"
                  type="button"
                  aria-label={`Choose ${match.therapist.name}`}
                  onClick={() => chooseTherapist(match.therapist)}
                >
                  Choose {match.therapist.name.split(" ")[0]} <ArrowRight size={18} />
                </button>
              </article>
            ))}
          </div>
          <button className="back-button" type="button" onClick={() => setPhase("manifest")}>
            <ArrowLeft size={16} /> Back to manifest
          </button>
        </section>
      ) : null}

      {phase === "handoff" && handoff ? (
        <section className="handoff-stage">
          <div className="handoff-copy">
            <span className="eyebrow">The human handoff</span>
            <h1>Preview the handoff</h1>
            <p>This is exactly what {handoff.therapist.name} will receive—and nothing else.</p>
            <div className="handoff-lock">
              <LockKeyhole size={18} /> Nothing is shared until Maya confirms.
            </div>
          </div>

          <article className="handoff-document">
            <div className="document-header">
              <div>
                <span className="document-brand">CORVUS</span>
                <h2>{handoff.clientName}’s approved intake context</h2>
              </div>
              <div className="document-recipient">
                <span>Prepared for</span>
                <strong>
                  {handoff.therapist.name}, {handoff.therapist.credentials}
                </strong>
              </div>
            </div>
            <div className="document-facts">
              {handoff.approvedFacts.map((fact) => (
                <div className="document-fact" key={fact.id}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                  <small>Source: “{fact.sourceSpan}”</small>
                </div>
              ))}
            </div>
            <div className="document-boundary">
              <Stethoscope size={18} />
              <span>{handoff.boundary}</span>
            </div>
            <button className="primary-button" type="button" onClick={() => setPhase("complete")}>
              Confirm handoff <ArrowRight size={18} />
            </button>
          </article>
        </section>
      ) : null}

      {phase === "complete" && handoff ? (
        <section className="complete-stage">
          <div className="complete-icon">
            <HeartHandshake size={42} />
          </div>
          <span className="eyebrow">The AI exits center stage</span>
          <h1>Ready for the first conversation</h1>
          <p>
            {handoff.therapist.name} starts with the context Maya approved. Maya still tells her
            story in her own voice—she just does not start from zero.
          </p>
          <strong>Maya starts with a human.</strong>
          <button className="secondary-button reset-demo" type="button" onClick={resetDemo}>
            <RefreshCw size={16} /> Reset the demo
          </button>
        </section>
      ) : null}

      <footer className="footer-boundary">
        Synthetic data only · No diagnosis · No treatment recommendation · No information shared
        outside this demo
      </footer>
    </main>
  );
}
