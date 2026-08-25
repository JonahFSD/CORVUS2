import { z } from "zod";

export const dimensionKeySchema = z.enum([
  "belonging",
  "support",
  "agency",
  "avoidance",
  "receptivity",
  "recoveryLoad",
]);

export type DimensionKey = z.infer<typeof dimensionKeySchema>;

export interface StateEstimate {
  mean: number;
  standardDeviation: number;
  interval: readonly [number, number];
  priorMean: number;
  delta: number;
  evidenceIds: readonly string[];
}

export interface PersonalState {
  modelVersion: string;
  asOf: string;
  dimensions: Record<DimensionKey, StateEstimate>;
}

export const stateObservationSchema = z.object({
  id: z.string().min(1),
  source: z.enum(["journal", "wearable", "checkIn"]),
  dimension: dimensionKeySchema,
  estimate: z.number().min(0).max(100),
  reliability: z.number().min(0.05).max(1),
  observedAt: z.iso.datetime({ offset: true }),
  label: z.string().min(1),
  detail: z.string().min(1),
  provenance: z.string().min(1),
});

export type StateObservation = z.infer<typeof stateObservationSchema>;

export interface Recommendation {
  id: "recover-then-connect" | "gentle-reach-out" | "clarify-first";
  title: string;
  action: string;
  rationale: readonly string[];
  confidence: "early signal" | "moderate";
  autonomous: false;
}

const PROCESS_STANDARD_DEVIATION = 4;
const MINIMUM_STANDARD_DEVIATION = 6;
const INTERVAL_Z_SCORE = 1.28;

const clamp = (value: number, minimum = 0, maximum = 100): number =>
  Math.min(maximum, Math.max(minimum, value));

const round = (value: number, digits = 1): number => {
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
};

const intervalFor = (mean: number, standardDeviation: number): readonly [number, number] => [
  round(clamp(mean - INTERVAL_Z_SCORE * standardDeviation)),
  round(clamp(mean + INTERVAL_Z_SCORE * standardDeviation)),
];

const updateDimension = (
  key: DimensionKey,
  prior: StateEstimate,
  observations: readonly StateObservation[],
): StateEstimate => {
  let mean = prior.mean;
  let variance = prior.standardDeviation ** 2 + PROCESS_STANDARD_DEVIATION ** 2;
  const relevantObservations = observations.filter((observation) => observation.dimension === key);

  for (const observation of relevantObservations) {
    const measurementStandardDeviation = 7 + (1 - observation.reliability) * 20;
    const measurementVariance = measurementStandardDeviation ** 2;
    const gain = variance / (variance + measurementVariance);

    mean += gain * (observation.estimate - mean);
    variance = Math.max((1 - gain) * variance, MINIMUM_STANDARD_DEVIATION ** 2);
  }

  const boundedMean = round(clamp(mean));
  const standardDeviation = round(Math.sqrt(variance));

  return {
    mean: boundedMean,
    standardDeviation,
    interval: intervalFor(boundedMean, standardDeviation),
    priorMean: prior.mean,
    delta: round(boundedMean - prior.mean),
    evidenceIds: relevantObservations.map((observation) => observation.id),
  };
};

export const updatePersonalState = (
  prior: PersonalState,
  unvalidatedObservations: readonly StateObservation[],
): PersonalState => {
  const observations = z.array(stateObservationSchema).parse(unvalidatedObservations);

  return {
    modelVersion: "pitch-kalman-v0.1",
    asOf: observations.at(-1)?.observedAt ?? prior.asOf,
    dimensions: {
      belonging: updateDimension("belonging", prior.dimensions.belonging, observations),
      support: updateDimension("support", prior.dimensions.support, observations),
      agency: updateDimension("agency", prior.dimensions.agency, observations),
      avoidance: updateDimension("avoidance", prior.dimensions.avoidance, observations),
      receptivity: updateDimension("receptivity", prior.dimensions.receptivity, observations),
      recoveryLoad: updateDimension("recoveryLoad", prior.dimensions.recoveryLoad, observations),
    },
  };
};

export const chooseNextStep = (state: PersonalState): Recommendation => {
  const { agency, avoidance, receptivity, recoveryLoad } = state.dimensions;

  if (recoveryLoad.mean >= 55 && receptivity.mean < 50 && agency.mean >= 55) {
    return {
      id: "recover-then-connect",
      title: "Protect tonight. Keep tomorrow warm.",
      action:
        "Skip the extra event tonight. Tomorrow morning, send Maya a two-line coffee invitation in your own words.",
      rationale: [
        "Recovery load moved above your recent range.",
        "You still show interest and agency; the constraint looks like capacity, not avoidance.",
        "A one-to-one follow-up preserves momentum without adding another high-load event.",
      ],
      confidence: "moderate",
      autonomous: false,
    };
  }

  if (avoidance.mean >= 55) {
    return {
      id: "clarify-first",
      title: "Make the next question smaller.",
      action:
        "Before choosing an action, note whether contact feels unwanted, risky, or simply tiring.",
      rationale: [
        "The current evidence does not cleanly separate low capacity from social threat.",
        "One short clarification is safer than a confident recommendation.",
      ],
      confidence: "early signal",
      autonomous: false,
    };
  }

  return {
    id: "gentle-reach-out",
    title: "Follow the warmest thread.",
    action: "Choose one promising connection and make one low-pressure invitation.",
    rationale: [
      "Current capacity is compatible with a small social action.",
      "A specific follow-up creates more useful evidence than another broad event.",
    ],
    confidence: "early signal",
    autonomous: false,
  };
};

export const computeSocialCapacity = (state: PersonalState): number => {
  const { agency, receptivity, recoveryLoad } = state.dimensions;
  return Math.round((agency.mean + receptivity.mean + (100 - recoveryLoad.mean)) / 3);
};

export const createPriorEstimate = (mean: number, standardDeviation: number): StateEstimate => ({
  mean,
  standardDeviation,
  interval: intervalFor(mean, standardDeviation),
  priorMean: mean,
  delta: 0,
  evidenceIds: [],
});
