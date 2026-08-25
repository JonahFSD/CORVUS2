"use client";

import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Database,
  Fingerprint,
  Heart,
  Info,
  LockKeyhole,
  Moon,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Watch,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import {
  demoObservations,
  demoPriorState,
  demoReflection,
  demoWearableMetrics,
} from "@/domain/demo-scenario";
import {
  chooseNextStep,
  computeSocialCapacity,
  type DimensionKey,
  type PersonalState,
  updatePersonalState,
} from "@/domain/state-model";

type DemoPhase = "ready" | "updating" | "updated";
type EvidenceReview = "confirmed" | "correction";
type ActionResponse = "accepted" | "declined" | null;

interface DimensionMetadata {
  key: DimensionKey;
  label: string;
  description: string;
  cautionWhenHigh: boolean;
}

const dimensionMetadata: readonly DimensionMetadata[] = [
  {
    key: "belonging",
    label: "Belonging",
    description: "Feeling included and known",
    cautionWhenHigh: false,
  },
  {
    key: "support",
    label: "Perceived support",
    description: "Someone feels reliably available",
    cautionWhenHigh: false,
  },
  {
    key: "agency",
    label: "Social agency",
    description: "Capacity to initiate or deepen a tie",
    cautionWhenHigh: false,
  },
  {
    key: "avoidance",
    label: "Social threat",
    description: "Avoidance, worry, or rejection pressure",
    cautionWhenHigh: true,
  },
  {
    key: "receptivity",
    label: "Receptivity",
    description: "Available energy for connection",
    cautionWhenHigh: false,
  },
  {
    key: "recoveryLoad",
    label: "Recovery load",
    description: "Sleep, strain, illness, and wider load",
    cautionWhenHigh: true,
  },
];

const formatDelta = (delta: number): string => {
  if (delta > 0) {
    return `+${Math.round(delta)}`;
  }
  return `${Math.round(delta)}`;
};

const stateTone = (key: DimensionKey, mean: number): "supportive" | "neutral" | "caution" => {
  const metadata = dimensionMetadata.find((dimension) => dimension.key === key);
  const cautionWhenHigh = metadata?.cautionWhenHigh ?? false;

  if (cautionWhenHigh) {
    if (mean >= 55) return "caution";
    if (mean <= 40) return "supportive";
    return "neutral";
  }

  if (mean < 48) return "caution";
  if (mean >= 60) return "supportive";
  return "neutral";
};

const StateConstellation = ({ state, phase }: { state: PersonalState; phase: DemoPhase }) => {
  const radius = 76;
  const circumference = 2 * Math.PI * radius;
  const capacity = computeSocialCapacity(state);
  const dashOffset = circumference - (capacity / 100) * circumference;

  return (
    <div className={`constellation ${phase === "updated" ? "constellation-updated" : ""}`}>
      <svg aria-label={`Current social capacity ${capacity} out of 100`} viewBox="0 0 190 190">
        <title>Current social capacity</title>
        <circle className="constellation-track" cx="95" cy="95" r={radius} />
        <circle
          className="constellation-progress"
          cx="95"
          cy="95"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        <circle className="orbit orbit-one" cx="54" cy="48" r="4" />
        <circle className="orbit orbit-two" cx="146" cy="72" r="3" />
        <circle className="orbit orbit-three" cx="55" cy="138" r="3" />
      </svg>
      <div className="constellation-copy">
        <span>social capacity</span>
        <strong>{capacity}</strong>
        <small>{phase === "updated" ? "right now" : "prior estimate"}</small>
      </div>
    </div>
  );
};

const DimensionRow = ({
  metadata,
  state,
  updated,
}: {
  metadata: DimensionMetadata;
  state: PersonalState;
  updated: boolean;
}) => {
  const estimate = state.dimensions[metadata.key];
  const tone = stateTone(metadata.key, estimate.mean);
  const intervalWidth = estimate.interval[1] - estimate.interval[0];

  return (
    <div className="dimension-row">
      <div className="dimension-heading">
        <div>
          <span className="dimension-label">{metadata.label}</span>
          <span className="dimension-description">{metadata.description}</span>
        </div>
        <div className="dimension-reading">
          {updated && estimate.delta !== 0 ? (
            <span className={`delta delta-${tone}`}>{formatDelta(estimate.delta)}</span>
          ) : null}
          <strong>{Math.round(estimate.mean)}</strong>
        </div>
      </div>
      <div className="dimension-track" aria-hidden="true">
        <span
          className={`uncertainty-range range-${tone}`}
          style={{ left: `${estimate.interval[0]}%`, width: `${intervalWidth}%` }}
        />
        {updated ? (
          <span className="prior-marker" style={{ left: `${estimate.priorMean}%` }} />
        ) : null}
        <span className={`mean-marker marker-${tone}`} style={{ left: `${estimate.mean}%` }} />
      </div>
    </div>
  );
};

export function DemoExperience() {
  const [phase, setPhase] = useState<DemoPhase>("ready");
  const [actionResponse, setActionResponse] = useState<ActionResponse>(null);
  const [evidenceReviews, setEvidenceReviews] = useState<Record<string, EvidenceReview>>({});

  const updatedState = useMemo(() => updatePersonalState(demoPriorState, demoObservations), []);
  const currentState = phase === "updated" ? updatedState : demoPriorState;
  const recommendation = useMemo(() => chooseNextStep(updatedState), [updatedState]);

  const updateModel = () => {
    if (phase !== "ready") return;
    setPhase("updating");
    window.setTimeout(() => setPhase("updated"), 720);
  };

  const resetDemo = () => {
    setPhase("ready");
    setActionResponse(null);
    setEvidenceReviews({});
  };

  const reviewEvidence = (id: string, review: EvidenceReview) => {
    setEvidenceReviews((current) => ({ ...current, [id]: review }));
  };

  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Wayfinder home">
          <span className="brand-mark" aria-hidden="true">
            <CircleDot size={17} strokeWidth={2.4} />
          </span>
          <span>Wayfinder</span>
        </a>
        <div className="topbar-meta">
          <span className="demo-pill">
            <span className="live-dot" />
            Synthetic demo
          </span>
          <span className="model-pill">Model v0.1</span>
          <span className="avatar" role="img" aria-label="Demo participant JE">
            JE
          </span>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">
          <Fingerprint size={15} aria-hidden="true" />
          Participant-owned intelligence
        </div>
        <h1>
          A model that works <em>for you.</em>
        </h1>
        <p>
          Your signals already tell a story. Wayfinder turns the ones you choose to share into one
          clear, correctable next step.
        </p>
        <div className="trust-row">
          <span>
            <LockKeyhole size={14} aria-hidden="true" /> You choose every signal
          </span>
          <span>
            <ShieldCheck size={14} aria-hidden="true" /> Nothing happens without you
          </span>
        </div>
      </section>

      <section className="demo-grid" aria-label="Wayfinder model demonstration">
        <div className="evidence-column">
          <article className="panel wearable-panel">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">01 · observe</span>
                <h2>Today’s body signal</h2>
              </div>
              <span className="connected-badge">
                <Watch size={14} aria-hidden="true" /> WHOOP connected
              </span>
            </div>

            <div className="metric-grid">
              {demoWearableMetrics.map((metric, index) => (
                <div className="metric" key={metric.label}>
                  <span className="metric-icon" aria-hidden="true">
                    {index === 0 ? <Activity size={15} /> : null}
                    {index === 1 ? <Heart size={15} /> : null}
                    {index === 2 ? <Moon size={15} /> : null}
                  </span>
                  <span className="metric-label">{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <small>{metric.change}</small>
                </div>
              ))}
            </div>

            <div className="baseline-note">
              <Database size={15} aria-hidden="true" />
              Compared with your 28-day baseline—not a population average.
            </div>
          </article>

          <article className="panel reflection-panel">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">02 · describe</span>
                <h2>How did today feel?</h2>
              </div>
              <span className="private-badge">
                <LockKeyhole size={13} aria-hidden="true" /> Private
              </span>
            </div>

            <label className="sr-only" htmlFor="demo-reflection">
              Today’s reflection
            </label>
            <textarea id="demo-reflection" readOnly value={demoReflection} />

            <div className="language-boundary">
              <Sparkles size={15} aria-hidden="true" />
              <span>
                <strong>Language layer</strong> turns this into evidence. It does not decide your
                state.
              </span>
              <span className="fixture-label">fixture</span>
            </div>

            <button
              className="primary-action"
              type="button"
              onClick={updateModel}
              disabled={phase !== "ready"}
            >
              {phase === "ready" ? (
                <>
                  Update my model <ArrowRight size={18} aria-hidden="true" />
                </>
              ) : null}
              {phase === "updating" ? (
                <>
                  <RefreshCw className="spin" size={18} aria-hidden="true" /> Updating beliefs…
                </>
              ) : null}
              {phase === "updated" ? (
                <>
                  <Check size={18} aria-hidden="true" /> Model updated
                </>
              ) : null}
            </button>
          </article>

          <div className="privacy-footnote">
            <Info size={15} aria-hidden="true" />
            This pitch uses synthetic data. Wayfinder is a wellbeing pattern tracker, not a
            diagnostic or medical system.
          </div>
        </div>

        <article className={`panel model-panel model-panel-${phase}`}>
          <div className="model-heading">
            <div>
              <span className="section-kicker">03 · infer</span>
              <h2>Your state, in context</h2>
              <p>
                Six separate estimates. Shaded bands show uncertainty; the small line marks the
                prior.
              </p>
            </div>
            <StateConstellation state={currentState} phase={phase} />
          </div>

          {phase === "updating" ? (
            <div className="model-loading" aria-live="polite">
              <span className="model-scan" />
              <div>
                <strong>Weighing 8 observations</strong>
                <span>Personal baseline + journal evidence</span>
              </div>
            </div>
          ) : (
            <div className="dimension-list" aria-live="polite">
              {dimensionMetadata.map((metadata) => (
                <DimensionRow
                  key={metadata.key}
                  metadata={metadata}
                  state={currentState}
                  updated={phase === "updated"}
                />
              ))}
            </div>
          )}

          {phase === "updated" ? (
            <div className="interpretation-card reveal">
              <div className="interpretation-icon" aria-hidden="true">
                <Sparkles size={17} />
              </div>
              <div>
                <span className="interpretation-label">Most likely explanation</span>
                <h3>This looks like depletion—not avoidance.</h3>
                <p>
                  Your interest in connection is intact. The strongest change is a temporary drop in
                  capacity, supported by both your words and your wearable baseline.
                </p>
              </div>
              <span className="confidence-badge">moderate confidence</span>
            </div>
          ) : (
            <div className="waiting-card">
              <span className="waiting-orbit" aria-hidden="true" />
              <div>
                <strong>Waiting for today’s evidence</strong>
                <span>Your prior remains visible until you choose to update it.</span>
              </div>
            </div>
          )}

          {phase === "updated" ? (
            <details className="evidence-drawer reveal">
              <summary>
                <span>
                  <Database size={15} aria-hidden="true" /> Inspect the evidence
                </span>
                <span className="summary-meta">8 observations</span>
                <ChevronDown className="chevron" size={16} aria-hidden="true" />
              </summary>
              <div className="evidence-list">
                {demoObservations.map((observation) => {
                  const review = evidenceReviews[observation.id];
                  return (
                    <div className="evidence-item" key={observation.id}>
                      <span
                        className={`source-icon source-${observation.source}`}
                        aria-hidden="true"
                      >
                        {observation.source === "wearable" ? (
                          <Watch size={14} />
                        ) : (
                          <Sparkles size={14} />
                        )}
                      </span>
                      <div className="evidence-copy">
                        <strong>{observation.label}</strong>
                        <span>{observation.provenance}</span>
                        {review === "correction" ? (
                          <small>Correction queued for review in this synthetic demo.</small>
                        ) : null}
                      </div>
                      <div className="evidence-actions">
                        <button
                          className={review === "confirmed" ? "review-selected" : ""}
                          type="button"
                          onClick={() => reviewEvidence(observation.id, "confirmed")}
                          aria-label={`Confirm ${observation.label}`}
                        >
                          <Check size={13} aria-hidden="true" />
                          <span>Accurate</span>
                        </button>
                        <button
                          className={review === "correction" ? "review-correction" : ""}
                          type="button"
                          onClick={() => reviewEvidence(observation.id, "correction")}
                          aria-label={`Correct ${observation.label}`}
                        >
                          <X size={13} aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          ) : null}
        </article>
      </section>

      {phase === "updated" ? (
        <section className="next-step next-step-visible reveal">
          <div className="next-step-accent" aria-hidden="true">
            <span>04</span>
          </div>
          <div className="next-step-main">
            <span className="section-kicker section-kicker-light">One bounded next step</span>
            <h2>{recommendation.title}</h2>
            <p>{recommendation.action}</p>
            <div className="reason-row">
              {recommendation.rationale.map((reason) => (
                <span key={reason}>
                  <CheckCircle2 size={15} aria-hidden="true" /> {reason}
                </span>
              ))}
            </div>
          </div>
          <div className="next-step-actions">
            {actionResponse === null ? (
              <>
                <button
                  className="accept-action"
                  type="button"
                  onClick={() => setActionResponse("accepted")}
                >
                  I’ll try this <ArrowRight size={17} aria-hidden="true" />
                </button>
                <button
                  className="decline-action"
                  type="button"
                  onClick={() => setActionResponse("declined")}
                >
                  Not for me
                </button>
              </>
            ) : (
              <div className="response-confirmation" aria-live="polite">
                <CheckCircle2 size={20} aria-hidden="true" />
                <div>
                  <strong>
                    {actionResponse === "accepted" ? "Experiment selected" : "Preference noted"}
                  </strong>
                  <span>
                    {actionResponse === "accepted"
                      ? "Tomorrow’s outcome can become new evidence."
                      : "The model learns without penalizing you."}
                  </span>
                </div>
              </div>
            )}
            <small>No message is sent automatically.</small>
          </div>
        </section>
      ) : null}

      {phase === "updated" ? (
        <button className="reset-button" type="button" onClick={resetDemo}>
          <RefreshCw size={14} aria-hidden="true" /> Reset the pitch demo
        </button>
      ) : null}

      <footer className="principles">
        <span>Signals you choose</span>
        <span className="principle-separator" aria-hidden="true" />
        <span>Inferences you can correct</span>
        <span className="principle-separator" aria-hidden="true" />
        <span>Outcomes in your real life</span>
      </footer>
    </main>
  );
}
