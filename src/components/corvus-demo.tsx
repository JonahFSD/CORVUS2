"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  LockKeyhole,
  MapPin,
  Pause,
  Pencil,
  Play,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Video,
  WalletCards,
  X,
} from "lucide-react";
import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";

import { mayaAnswer, therapistDirectory } from "@/domain/demo-data";
import {
  compileIntakeManifest,
  createTherapistHandoff,
  findEligibleTherapists,
  type ManifestItem,
  reviewManifest,
  type TherapistProfile,
} from "@/domain/intake-workflow";
import {
  getStageFrame,
  STAGE_DEMO_DURATION_MS,
  type StagePhase,
} from "@/domain/stage-choreography";

type RunMode = "idle" | "auto" | "manual";
type InteractivePhase = Exclude<StagePhase, "complete">;

const phaseOrder: readonly InteractivePhase[] = ["story", "manifest", "matches", "handoff"];
const phaseLabels: Record<InteractivePhase, string> = {
  story: "Disclosure",
  manifest: "Manifest",
  matches: "Match",
  handoff: "Handoff",
};

const correctedContext = "A move, a breakup, anxiety at work, and poor sleep.";

const initialsFor = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

function ParticleField({ active, phase }: { active: boolean; phase: StagePhase }) {
  return (
    <div
      className={`particle-field particle-phase-${phase} ${active ? "particle-field-active" : ""}`}
      aria-hidden="true"
    >
      <div className="particle-origin" />
      {Array.from({ length: 44 }, (_, index) => {
        const angle = index * 2.39996;
        const distance = 10 + ((index * 19) % 78);
        const x = (50 + Math.cos(angle) * distance * 0.52).toFixed(3);
        const y = (50 + Math.sin(angle) * distance * 0.38).toFixed(3);
        const manifestX = (27 + (index % 3) * 23 + ((index % 4) - 1.5) * 0.55).toFixed(3);
        const manifestY = (28 + Math.floor(index / 3) * 3.05).toFixed(3);
        const matchX = (index % 2 === 0 ? 35 + (index % 5) : 67 + (index % 5)).toFixed(3);
        const matchY = (31 + Math.floor(index / 2) * 1.65).toFixed(3);
        const handoffX = (70 + ((index % 6) - 2.5) * 1.6).toFixed(3);
        const handoffY = (22 + Math.floor(index / 6) * 7.5).toFixed(3);
        return (
          <span
            key={`${x}-${y}`}
            style={
              {
                "--particle-x": `${x}%`,
                "--particle-y": `${y}%`,
                "--particle-delay": `${(index % 11) * -0.16}s`,
                "--particle-size": `${index % 7 === 0 ? 4 : 2}px`,
                "--manifest-x": `${manifestX}%`,
                "--manifest-y": `${manifestY}%`,
                "--match-x": `${matchX}%`,
                "--match-y": `${matchY}%`,
                "--handoff-x": `${handoffX}%`,
                "--handoff-y": `${handoffY}%`,
              } as CSSProperties
            }
          />
        );
      })}
      <div className="signal-line" />
    </div>
  );
}

export function CorvusDemo() {
  const proposals = useMemo(() => compileIntakeManifest(mayaAnswer), []);
  const [mode, setMode] = useState<RunMode>("idle");
  const [manualPhase, setManualPhase] = useState<StagePhase>("story");
  const [elapsedMs, setElapsedMs] = useState(0);
  const [manifest, setManifest] = useState<ManifestItem[]>(proposals);
  const [editingId, setEditingId] = useState<ManifestItem["id"] | null>(null);
  const [draftValue, setDraftValue] = useState("");
  const [selectedTherapist, setSelectedTherapist] = useState<TherapistProfile | null>(null);
  const autoStartedAt = useRef(0);

  const frame = getStageFrame(elapsedMs);
  const phase = mode === "auto" ? frame.phase : manualPhase;
  const isAuto = mode === "auto";

  useEffect(() => {
    if (!isAuto || frame.phase === "complete") {
      return;
    }

    const updateClock = () => {
      setElapsedMs(Math.min(Date.now() - autoStartedAt.current, STAGE_DEMO_DURATION_MS));
    };
    const timer = window.setInterval(updateClock, 100);
    updateClock();
    return () => window.clearInterval(timer);
  }, [isAuto, frame.phase]);

  const autoManifest = useMemo(() => {
    const review: Parameters<typeof reviewManifest>[1] = {};
    const correctedProposals =
      frame.manifestStep >= 1
        ? proposals.map((proposal) =>
            proposal.id === "presenting-context"
              ? { ...proposal, value: correctedContext }
              : proposal,
          )
        : proposals;
    if (frame.manifestStep >= 2) {
      review["presenting-context"] = { decision: "approved" };
    }
    if (frame.manifestStep >= 3) {
      review["client-goal"] = { decision: "approved" };
    }
    if (frame.manifestStep >= 4) {
      review["care-preferences"] = { decision: "approved" };
    }
    return reviewManifest(correctedProposals, review);
  }, [frame.manifestStep, proposals]);

  const visibleManifest = isAuto ? autoManifest : manifest;
  const matches = useMemo(
    () => findEligibleTherapists(visibleManifest, therapistDirectory),
    [visibleManifest],
  );
  const autoTherapist =
    therapistDirectory.find((therapist) => therapist.id === "lena-brooks") ?? null;
  const handoffTherapist = isAuto ? autoTherapist : selectedTherapist;
  const handoff = useMemo(
    () =>
      handoffTherapist ? createTherapistHandoff("Maya", visibleManifest, handoffTherapist) : null,
    [handoffTherapist, visibleManifest],
  );
  const allReviewed = manifest.every((item) => item.decision !== "proposed");

  const beginAuto = () => {
    setManifest(proposals);
    setEditingId(null);
    setSelectedTherapist(null);
    setElapsedMs(0);
    autoStartedAt.current = Date.now();
    setMode("auto");
  };

  const beginManual = () => {
    setMode("manual");
    setManualPhase("manifest");
  };

  const resetToLaunch = () => {
    setMode("idle");
    setManualPhase("story");
    setElapsedMs(0);
    setManifest(proposals);
    setEditingId(null);
    setSelectedTherapist(null);
  };

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
  };

  const chooseTherapist = (therapist: TherapistProfile) => {
    setSelectedTherapist(therapist);
    setManualPhase("handoff");
  };

  const activePhase: InteractivePhase = phase === "complete" ? "handoff" : phase;
  const activePhaseIndex = phaseOrder.indexOf(activePhase);

  return (
    <main className={`app-shell mode-${mode}`}>
      <ParticleField active={isAuto && phase !== "complete"} phase={phase} />

      <header className="topbar">
        <button className="brand" type="button" onClick={resetToLaunch} aria-label="Corvus home">
          <span className="brand-glyph">C</span>
          <span>CORVUS</span>
        </button>
        <div className="topbar-meta">
          <span className="status-badge">
            <span /> SYNTHETIC DEMO
          </span>
          <span className="boundary-badge">INTAKE / NOT THERAPY</span>
          {isAuto ? (
            <button className="restart-button" type="button" onClick={beginAuto}>
              <RefreshCw size={14} /> Restart
            </button>
          ) : null}
        </div>
      </header>

      <div
        className="stage-timeline"
        role="progressbar"
        aria-label="Demo progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(isAuto ? frame.progress * 100 : activePhaseIndex * 33.333)}
      >
        <div className="timeline-track">
          <span
            style={{ width: `${isAuto ? frame.progress * 100 : activePhaseIndex * 33.333}%` }}
          />
        </div>
        <div className="timeline-labels">
          {phaseOrder.map((item, index) => (
            <span
              className={
                index === activePhaseIndex && phase !== "complete" ? "timeline-active" : ""
              }
              key={item}
            >
              <b>0{index + 1}</b> {phaseLabels[item]}
            </span>
          ))}
        </div>
        {isAuto && phase !== "complete" ? (
          <div className="countdown" aria-live="polite">
            <span>{frame.secondsRemaining}</span> seconds remaining
          </div>
        ) : null}
      </div>

      {phase === "story" ? (
        <section className="story-stage" id="top">
          <div className="story-copy">
            <span className="eyebrow">THE MOMENT AFTER SOMEONE FINALLY SAYS IT</span>
            <h1>{isAuto ? "She already said the hard part." : "Tell your story once."}</h1>
            <p>
              People already tell AI what is wrong. Corvus turns that conversation into a path to
              the right human—with the person in control of every word.
            </p>
            <div className="launch-actions">
              {!isAuto ? (
                <>
                  <button
                    className="primary-button launch-button"
                    type="button"
                    onClick={beginAuto}
                  >
                    <Play size={18} fill="currentColor" /> Run 30-second demo
                  </button>
                  <button className="secondary-button" type="button" onClick={beginManual}>
                    Build my manifest <ArrowRight size={16} />
                  </button>
                </>
              ) : (
                <div className="autopilot-chip">
                  <Pause size={15} /> AUTOPILOT / LISTENING
                </div>
              )}
            </div>
          </div>

          <article className="conversation-card" aria-label="Synthetic AI conversation">
            <div className="panel-kicker">
              <span>PRIVATE CONVERSATION</span>
              <span>01:47 AM</span>
            </div>
            <div className="chat-thread">
              <div className="speaker-label">
                <span>M</span> MAYA
              </div>
              <div className="chat-bubble chat-user">{mayaAnswer}</div>
              <div className="chat-bubble chat-ai">
                <Sparkles size={15} />
                <span>
                  Would it help to turn this into something you can review before choosing a
                  therapist?
                </span>
              </div>
            </div>
            <div className="conversation-boundary">
              <LockKeyhole size={15} /> Nothing leaves without Maya's review.
            </div>
          </article>
        </section>
      ) : null}

      {phase === "manifest" ? (
        <section className="workspace-stage manifest-stage">
          <div className="stage-heading">
            <div>
              <span className="eyebrow">CLIENT-CONTROLLED MANIFEST</span>
              <h1>{isAuto ? "Your story, structured." : "Review what Corvus understood"}</h1>
            </div>
            <span className="safety-chip">
              <ShieldCheck size={15} /> Not a diagnosis
            </span>
          </div>

          <div className="manifest-layout">
            <div className="manifest-list">
              {visibleManifest.map((item, index) => {
                const activeManifestIndex = frame.manifestStep <= 2 ? 0 : frame.manifestStep - 2;
                const isResolving = isAuto && activeManifestIndex === index;
                return (
                  <article
                    className={`manifest-card decision-${item.decision} ${isResolving ? "is-resolving" : ""}`}
                    key={item.id}
                  >
                    <div className="manifest-card-heading">
                      <div>
                        <span className="manifest-index">0{index + 1}</span>
                        <span>{item.label}</span>
                      </div>
                      <span className={`decision-pill decision-${item.decision}`}>
                        {item.decision === "approved" ? <Check size={12} /> : null}
                        {item.decision}
                      </span>
                    </div>
                    {editingId === item.id && !isAuto ? (
                      <div className="edit-area">
                        <textarea
                          aria-label={`Edit ${item.label}`}
                          value={draftValue}
                          onChange={(event) => setDraftValue(event.target.value)}
                        />
                        <button
                          className="compact-primary"
                          type="button"
                          aria-label={`Save ${item.label}`}
                          onClick={() => saveEdit(item.id)}
                        >
                          Save edit
                        </button>
                      </div>
                    ) : (
                      <p className="manifest-value">{item.value}</p>
                    )}
                    <div className="source-link">
                      <span>Source linked</span>
                      <q>{item.sourceSpan}</q>
                    </div>
                    {isAuto && index === 0 && frame.manifestStep === 1 ? (
                      <div className="correction-event">Maya changed panic → anxiety</div>
                    ) : null}
                    {!isAuto ? (
                      <div className="manifest-actions">
                        <button
                          type="button"
                          aria-label={`Edit ${item.label}`}
                          onClick={() => startEditing(item)}
                        >
                          <Pencil size={13} /> Edit
                        </button>
                        <button
                          type="button"
                          aria-label={`Approve ${item.label}`}
                          onClick={() => decide(item.id, "approved")}
                        >
                          <Check size={13} /> Approve
                        </button>
                        <button
                          type="button"
                          aria-label={`Withhold ${item.label}`}
                          onClick={() => decide(item.id, "withheld")}
                        >
                          <X size={13} /> Withhold
                        </button>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>

            <aside className="manifest-summary">
              <div className="summary-icon">
                <FileCheck2 size={25} />
              </div>
              <span className="eyebrow">CONTROL LAYER</span>
              <h2>Maya decides what becomes true.</h2>
              <p>
                Corvus proposes. Maya corrects, approves, or withholds. Only approved facts can move
                forward.
              </p>
              <div className="manifest-counts">
                <span>
                  <b>{visibleManifest.filter((item) => item.decision === "approved").length}</b>{" "}
                  APPROVED
                </span>
                <span>
                  <b>{visibleManifest.filter((item) => item.decision === "proposed").length}</b> TO
                  REVIEW
                </span>
              </div>
              {!isAuto ? (
                <button
                  className="primary-button"
                  type="button"
                  disabled={!allReviewed || matches.length === 0}
                  onClick={() => setManualPhase("matches")}
                >
                  Find eligible therapists <ArrowRight size={16} />
                </button>
              ) : (
                <div className="automation-readout">
                  <span className="scan-dot" />
                  {
                    [
                      "Reading source 1 / 3",
                      "Recording Maya's correction",
                      "Approving source 1 / 3",
                      "Approving source 2 / 3",
                      "Approving source 3 / 3",
                    ][frame.manifestStep]
                  }
                </div>
              )}
            </aside>
          </div>
        </section>
      ) : null}

      {phase === "matches" ? (
        <section className="workspace-stage matches-stage">
          <div className="stage-heading">
            <div>
              <span className="eyebrow">BOUNDED, EXPLAINABLE MATCHING</span>
              <h1>{isAuto ? "Two people fit the facts." : "Choose who feels right"}</h1>
            </div>
            <span className="safety-chip">
              <UserRoundCheck size={15} /> {matches.length} eligible matches
            </span>
          </div>

          <div className="constraint-strip">
            {["ILLINOIS", "VETTED", "BLUE CROSS", "VIRTUAL", "AFTER 5PM", "WOMAN"].map(
              (constraint) => (
                <span key={constraint}>
                  <Check size={12} /> {constraint}
                </span>
              ),
            )}
          </div>

          <div className="match-grid">
            {matches.map((match, index) => {
              const selected = isAuto && frame.matchStep === 1 && index === 0;
              return (
                <article
                  className={`therapist-card ${selected ? "therapist-selected" : ""}`}
                  key={match.therapist.id}
                >
                  <div className="therapist-topline">
                    <span className="therapist-avatar">{initialsFor(match.therapist.name)}</span>
                    <div>
                      <h2>
                        {match.therapist.name}, {match.therapist.credentials}
                      </h2>
                      <span>LICENSE VERIFIED / ACCEPTING CLIENTS</span>
                    </div>
                    <ShieldCheck size={19} />
                  </div>
                  <div className="therapist-facts">
                    <span>
                      <MapPin size={13} /> Illinois
                    </span>
                    <span>
                      <Video size={13} /> Virtual
                    </span>
                    <span>
                      <Clock3 size={13} /> After 5 p.m.
                    </span>
                    <span>
                      <WalletCards size={13} /> Blue Cross
                    </span>
                  </div>
                  <div className="match-reasons">
                    <span className="eyebrow">WHY THIS MATCH</span>
                    {match.reasons.slice(0, 3).map((reason) => (
                      <span key={reason}>
                        <CheckCircle2 size={13} /> {reason}
                      </span>
                    ))}
                  </div>
                  {selected ? (
                    <div className="selected-signal">
                      <Check size={14} /> MAYA SELECTS LENA
                    </div>
                  ) : null}
                  {!isAuto ? (
                    <button
                      className="primary-button"
                      type="button"
                      aria-label={`Choose ${match.therapist.name}`}
                      onClick={() => chooseTherapist(match.therapist)}
                    >
                      Choose {match.therapist.name.split(" ")[0]} <ArrowRight size={16} />
                    </button>
                  ) : null}
                </article>
              );
            })}
          </div>
          {!isAuto ? (
            <button
              className="back-button"
              type="button"
              onClick={() => setManualPhase("manifest")}
            >
              <ArrowLeft size={15} /> Back to manifest
            </button>
          ) : null}
        </section>
      ) : null}

      {phase === "handoff" && handoff ? (
        <section className="handoff-stage">
          <div className="handoff-copy">
            <span className="eyebrow">THE HUMAN HANDOFF</span>
            <h1>{isAuto ? "Nothing gets lost in the handoff." : "Preview the handoff"}</h1>
            <p>
              The exact context Maya approved. No diagnosis. No mystery score. A better place to
              begin.
            </p>
            <div className="handoff-lock">
              <LockKeyhole size={16} /> Nothing is shared until Maya confirms.
            </div>
          </div>

          <article className="handoff-document">
            <div className="document-header">
              <div>
                <span className="document-brand">CORVUS / INTAKE MANIFEST</span>
                <h2>Maya → Lena Brooks, LCSW</h2>
              </div>
              <span className="document-status">CLIENT APPROVED</span>
            </div>
            <div className="document-facts">
              {handoff.approvedFacts.map((fact, index) => {
                const revealed = !isAuto || frame.handoffStep > index;
                return (
                  <div className={`document-fact ${revealed ? "fact-revealed" : ""}`} key={fact.id}>
                    <span>{fact.label}</span>
                    <strong>{revealed ? fact.value : "Linking approved source…"}</strong>
                    <small>SOURCE / “{fact.sourceSpan}”</small>
                  </div>
                );
              })}
            </div>
            <div className="document-boundary">
              <ShieldCheck size={16} />
              <span>Not a diagnosis or treatment recommendation.</span>
            </div>
            {!isAuto ? (
              <button
                className="primary-button"
                type="button"
                onClick={() => setManualPhase("complete")}
              >
                Confirm handoff <ArrowRight size={16} />
              </button>
            ) : (
              <div className="automation-readout">
                <span className="scan-dot" /> Preparing approved context for Lena
              </div>
            )}
          </article>
        </section>
      ) : null}

      {phase === "complete" && handoff ? (
        <section className="complete-stage">
          <div className="completion-signal">
            <Check size={34} />
          </div>
          <span className="eyebrow">AI OUT / HUMAN IN</span>
          <h1>Ready for the first conversation</h1>
          <p>{handoff.therapist.name} starts with the context Maya chose to share.</p>
          <strong>{isAuto ? "Maya does not start from zero." : "Maya starts with a human."}</strong>
          <button className="primary-button replay-button" type="button" onClick={beginAuto}>
            <RefreshCw size={16} /> Replay 30-second demo
          </button>
        </section>
      ) : null}

      <footer className="footer-boundary">
        <span>SYNTHETIC DATA</span>
        <span>NO DIAGNOSIS</span>
        <span>NO TREATMENT RECOMMENDATION</span>
        <span>CLIENT-CONTROLLED SHARING</span>
      </footer>
    </main>
  );
}
