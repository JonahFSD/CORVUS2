import { createPriorEstimate, type PersonalState, type StateObservation } from "./state-model";

export const demoReflection =
  "Dinner was genuinely fun. I liked talking to Maya and want to see her again, but I felt oddly disconnected in the bigger group. I slept badly, and the thought of another event tonight feels exhausting—not scary, just too much.";

export const demoPriorState: PersonalState = {
  modelVersion: "pitch-prior-v0.1",
  asOf: "2026-08-24T20:00:00-05:00",
  dimensions: {
    belonging: createPriorEstimate(64, 10),
    support: createPriorEstimate(61, 11),
    agency: createPriorEstimate(62, 10),
    avoidance: createPriorEstimate(34, 11),
    receptivity: createPriorEstimate(64, 13),
    recoveryLoad: createPriorEstimate(29, 10),
  },
};

export const demoObservations: readonly StateObservation[] = [
  {
    id: "whoop-recovery",
    source: "wearable",
    dimension: "recoveryLoad",
    estimate: 81,
    reliability: 0.84,
    observedAt: "2026-08-25T07:12:00-05:00",
    label: "Recovery below personal baseline",
    detail: "Recovery 34%; HRV 18% below and resting heart rate 7 bpm above the 28-day baseline.",
    provenance: "Synthetic WHOOP snapshot · participant connected",
  },
  {
    id: "whoop-capacity",
    source: "wearable",
    dimension: "receptivity",
    estimate: 36,
    reliability: 0.68,
    observedAt: "2026-08-25T07:12:00-05:00",
    label: "Lower available capacity",
    detail: "Sleep need was missed by 1h 46m after three irregular nights.",
    provenance: "Synthetic WHOOP snapshot · participant connected",
  },
  {
    id: "journal-depletion",
    source: "journal",
    dimension: "recoveryLoad",
    estimate: 70,
    reliability: 0.75,
    observedAt: "2026-08-25T18:40:00-05:00",
    label: "Self-reported depletion",
    detail: "The participant describes another event as exhausting.",
    provenance: "Journal · “another event tonight feels exhausting”",
  },
  {
    id: "journal-capacity",
    source: "journal",
    dimension: "receptivity",
    estimate: 34,
    reliability: 0.82,
    observedAt: "2026-08-25T18:40:00-05:00",
    label: "Low capacity for a group event",
    detail: "The reflection distinguishes exhaustion from fear.",
    provenance: "Journal · “not scary, just too much”",
  },
  {
    id: "journal-belonging",
    source: "journal",
    dimension: "belonging",
    estimate: 49,
    reliability: 0.72,
    observedAt: "2026-08-25T18:40:00-05:00",
    label: "Connection lagged interaction volume",
    detail: "The group interaction was positive but did not feel deeply connecting.",
    provenance: "Journal · “felt oddly disconnected in the bigger group”",
  },
  {
    id: "journal-agency",
    source: "journal",
    dimension: "agency",
    estimate: 72,
    reliability: 0.78,
    observedAt: "2026-08-25T18:40:00-05:00",
    label: "Interest in a specific follow-up",
    detail: "The participant names a person they want to see again.",
    provenance: "Journal · “want to see her again”",
  },
  {
    id: "journal-avoidance",
    source: "journal",
    dimension: "avoidance",
    estimate: 29,
    reliability: 0.74,
    observedAt: "2026-08-25T18:40:00-05:00",
    label: "Threat is not the leading explanation",
    detail: "The participant explicitly separates low capacity from fear.",
    provenance: "Journal · “not scary”",
  },
  {
    id: "journal-support",
    source: "journal",
    dimension: "support",
    estimate: 58,
    reliability: 0.48,
    observedAt: "2026-08-25T18:40:00-05:00",
    label: "Support remains uncertain",
    detail: "A promising connection is present, but reliable support is not yet established.",
    provenance: "Journal · inferred from the Maya interaction",
  },
];

export const demoWearableMetrics = [
  { label: "Recovery", value: "34%", change: "low", tone: "warning" },
  { label: "HRV", value: "41 ms", change: "−18% vs baseline", tone: "warning" },
  { label: "Sleep", value: "5h 42m", change: "−1h 46m need", tone: "warning" },
] as const;
