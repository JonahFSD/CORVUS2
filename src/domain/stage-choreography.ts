export const STAGE_DEMO_DURATION_MS = 30_000;

export type StagePhase = "story" | "manifest" | "matches" | "handoff" | "complete";

export interface StageFrame {
  elapsedMs: number;
  phase: StagePhase;
  progress: number;
  secondsRemaining: number;
  manifestStep: 0 | 1 | 2 | 3 | 4;
  matchStep: 0 | 1;
  handoffStep: 0 | 1 | 2 | 3;
}

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(Math.max(value, minimum), maximum);

export const getStageFrame = (rawElapsedMs: number): StageFrame => {
  const elapsedMs = clamp(rawElapsedMs, 0, STAGE_DEMO_DURATION_MS);
  const phase: StagePhase =
    elapsedMs >= STAGE_DEMO_DURATION_MS
      ? "complete"
      : elapsedMs >= 19_000
        ? "handoff"
        : elapsedMs >= 12_000
          ? "matches"
          : elapsedMs >= 4_000
            ? "manifest"
            : "story";

  const manifestStep: StageFrame["manifestStep"] =
    elapsedMs >= 10_000
      ? 4
      : elapsedMs >= 8_000
        ? 3
        : elapsedMs >= 6_000
          ? 2
          : elapsedMs >= 5_000
            ? 1
            : 0;
  const matchStep: StageFrame["matchStep"] = elapsedMs >= 17_000 ? 1 : 0;
  const handoffStep: StageFrame["handoffStep"] =
    elapsedMs >= 25_000 ? 3 : elapsedMs >= 23_000 ? 2 : elapsedMs >= 21_000 ? 1 : 0;

  return {
    elapsedMs,
    phase,
    progress: elapsedMs / STAGE_DEMO_DURATION_MS,
    secondsRemaining: Math.ceil((STAGE_DEMO_DURATION_MS - elapsedMs) / 1_000),
    manifestStep,
    matchStep,
    handoffStep,
  };
};
