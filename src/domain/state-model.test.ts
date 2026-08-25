import { describe, expect, it } from "vitest";

import { demoObservations, demoPriorState } from "./demo-scenario";
import { chooseNextStep, computeSocialCapacity, updatePersonalState } from "./state-model";

describe("updatePersonalState", () => {
  it("distinguishes depleted capacity from a loss of social agency", () => {
    const result = updatePersonalState(demoPriorState, demoObservations);

    expect(result.dimensions.recoveryLoad.mean).toBeGreaterThan(
      demoPriorState.dimensions.recoveryLoad.mean + 10,
    );
    expect(result.dimensions.receptivity.mean).toBeLessThan(
      demoPriorState.dimensions.receptivity.mean - 10,
    );
    expect(result.dimensions.agency.mean).toBeGreaterThanOrEqual(60);
    expect(result.dimensions.avoidance.mean).toBeLessThan(45);
  });

  it("retains the evidence used for every changed dimension", () => {
    const result = updatePersonalState(demoPriorState, demoObservations);

    expect(result.dimensions.recoveryLoad.evidenceIds).toEqual(
      expect.arrayContaining(["whoop-recovery", "journal-depletion"]),
    );
    expect(result.dimensions.receptivity.interval[0]).toBeLessThan(
      result.dimensions.receptivity.mean,
    );
    expect(result.dimensions.receptivity.interval[1]).toBeGreaterThan(
      result.dimensions.receptivity.mean,
    );
  });

  it("derives a bounded capacity indicator from the separate state dimensions", () => {
    const result = updatePersonalState(demoPriorState, demoObservations);

    expect(computeSocialCapacity(demoPriorState)).toBe(66);
    expect(computeSocialCapacity(result)).toBe(50);
  });
});

describe("chooseNextStep", () => {
  it("protects recovery while preserving a promising relationship", () => {
    const updatedState = updatePersonalState(demoPriorState, demoObservations);
    const recommendation = chooseNextStep(updatedState);

    expect(recommendation.id).toBe("recover-then-connect");
    expect(recommendation.action).toContain("Maya");
    expect(recommendation.autonomous).toBe(false);
  });
});
