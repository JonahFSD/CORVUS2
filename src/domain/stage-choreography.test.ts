import { describe, expect, it } from "vitest";

import { getStageFrame, STAGE_DEMO_DURATION_MS } from "./stage-choreography";

describe("stage choreography", () => {
  it("maps elapsed time onto the complete thirty-second product story", () => {
    expect(STAGE_DEMO_DURATION_MS).toBe(30_000);
    expect(getStageFrame(0)).toMatchObject({ phase: "story", secondsRemaining: 30 });
    expect(getStageFrame(4_000)).toMatchObject({ phase: "manifest", manifestStep: 0 });
    expect(getStageFrame(5_000)).toMatchObject({ phase: "manifest", manifestStep: 1 });
    expect(getStageFrame(6_000)).toMatchObject({ phase: "manifest", manifestStep: 2 });
    expect(getStageFrame(8_000)).toMatchObject({ phase: "manifest", manifestStep: 3 });
    expect(getStageFrame(10_000)).toMatchObject({ phase: "manifest", manifestStep: 4 });
    expect(getStageFrame(12_000)).toMatchObject({ phase: "matches", matchStep: 0 });
    expect(getStageFrame(17_000)).toMatchObject({ phase: "matches", matchStep: 1 });
    expect(getStageFrame(19_000)).toMatchObject({ phase: "handoff", handoffStep: 0 });
    expect(getStageFrame(25_000)).toMatchObject({ phase: "handoff", handoffStep: 3 });
    expect(getStageFrame(29_999)).toMatchObject({ phase: "handoff", secondsRemaining: 1 });
    expect(getStageFrame(30_000)).toMatchObject({ phase: "complete", secondsRemaining: 0 });
  });

  it("clamps early and late clock values", () => {
    expect(getStageFrame(-1).elapsedMs).toBe(0);
    expect(getStageFrame(45_000).elapsedMs).toBe(STAGE_DEMO_DURATION_MS);
  });
});
