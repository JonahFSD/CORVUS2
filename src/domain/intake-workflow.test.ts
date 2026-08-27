import { describe, expect, it } from "vitest";

import {
  compileIntakeManifest,
  createTherapistHandoff,
  findEligibleTherapists,
  reviewManifest,
  type TherapistProfile,
} from "./intake-workflow";

const mayaAnswer =
  "Since I moved to Chicago in June, I have been panicking at work and sleeping badly. The breakup made it worse. I want help feeling steady again. I would prefer a woman therapist, after 5 p.m., virtual, and in-network with Blue Cross.";

describe("compileIntakeManifest", () => {
  it("turns Maya's answer into source-linked proposals without diagnosing her", () => {
    const manifest = compileIntakeManifest(mayaAnswer);

    expect(manifest).toEqual([
      {
        id: "presenting-context",
        label: "What happened",
        value: "A move, a breakup, panic at work, and poor sleep.",
        sourceSpan:
          "Since I moved to Chicago in June, I have been panicking at work and sleeping badly. The breakup made it worse.",
        decision: "proposed",
        sensitive: true,
      },
      {
        id: "client-goal",
        label: "What Maya wants",
        value: "Feel steady again.",
        sourceSpan: "I want help feeling steady again.",
        decision: "proposed",
        sensitive: true,
      },
      {
        id: "care-preferences",
        label: "What matters for care",
        value: "Woman therapist, after 5 p.m., virtual, and in-network with Blue Cross.",
        sourceSpan:
          "I would prefer a woman therapist, after 5 p.m., virtual, and in-network with Blue Cross.",
        decision: "proposed",
        sensitive: true,
      },
    ]);
  });
});

describe("reviewManifest", () => {
  it("preserves source evidence while applying Maya's edits and withholding choice", () => {
    const proposals = compileIntakeManifest(mayaAnswer);

    const reviewed = reviewManifest(proposals, {
      "presenting-context": {
        decision: "approved",
        value: "A move, a breakup, anxiety at work, and poor sleep.",
      },
      "client-goal": { decision: "approved" },
      "care-preferences": { decision: "withheld" },
    });

    expect(reviewed).toEqual([
      {
        ...proposals[0],
        value: "A move, a breakup, anxiety at work, and poor sleep.",
        decision: "approved",
      },
      { ...proposals[1], decision: "approved" },
      { ...proposals[2], decision: "withheld" },
    ]);
    expect(reviewed[0]?.sourceSpan).toBe(proposals[0]?.sourceSpan);
  });
});

describe("findEligibleTherapists", () => {
  it("returns only vetted eligible therapists and explains every match", () => {
    const reviewed = reviewManifest(compileIntakeManifest(mayaAnswer), {
      "presenting-context": { decision: "approved" },
      "client-goal": { decision: "approved" },
      "care-preferences": { decision: "approved" },
    });
    const directory: readonly TherapistProfile[] = [
      {
        id: "lena-brooks",
        name: "Lena Brooks",
        credentials: "LCSW",
        state: "Illinois",
        gender: "woman",
        vetted: true,
        acceptingClients: true,
        insurances: ["Blue Cross"],
        modes: ["virtual"],
        availability: ["after 5 p.m."],
        specialties: ["anxiety", "major life transitions"],
      },
      {
        id: "devon-lee",
        name: "Devon Lee",
        credentials: "LCPC",
        state: "Illinois",
        gender: "man",
        vetted: true,
        acceptingClients: true,
        insurances: ["Aetna"],
        modes: ["virtual"],
        availability: ["after 5 p.m."],
        specialties: ["anxiety"],
      },
      {
        id: "riley-chen",
        name: "Riley Chen",
        credentials: "LCSW",
        state: "Wisconsin",
        gender: "woman",
        vetted: true,
        acceptingClients: true,
        insurances: ["Blue Cross"],
        modes: ["virtual"],
        availability: ["after 5 p.m."],
        specialties: ["anxiety", "major life transitions"],
      },
    ];

    const matches = findEligibleTherapists(reviewed, directory);

    expect(matches).toEqual([
      {
        therapist: directory[0],
        reasons: [
          "License verified for Illinois",
          "Woman therapist, as requested",
          "In network with Blue Cross",
          "Accepting new clients",
          "Virtual appointments",
          "Availability after 5 p.m.",
          "Experience with anxiety and major life transitions",
        ],
      },
    ]);
  });
});

describe("createTherapistHandoff", () => {
  it("shares only Maya-approved facts with the therapist she selected", () => {
    const reviewed = reviewManifest(compileIntakeManifest(mayaAnswer), {
      "presenting-context": {
        decision: "approved",
        value: "A move, a breakup, anxiety at work, and poor sleep.",
      },
      "client-goal": { decision: "approved" },
      "care-preferences": { decision: "withheld" },
    });
    const therapist = {
      id: "lena-brooks",
      name: "Lena Brooks",
      credentials: "LCSW",
      state: "Illinois",
      gender: "woman" as const,
      vetted: true,
      acceptingClients: true,
      insurances: ["Blue Cross"],
      modes: ["virtual"],
      availability: ["after 5 p.m."],
      specialties: ["anxiety", "major life transitions"],
    };

    const handoff = createTherapistHandoff("Maya", reviewed, therapist);

    expect(handoff).toEqual({
      clientName: "Maya",
      therapist: { id: "lena-brooks", name: "Lena Brooks", credentials: "LCSW" },
      approvedFacts: [
        {
          id: "presenting-context",
          label: "What happened",
          value: "A move, a breakup, anxiety at work, and poor sleep.",
          sourceSpan:
            "Since I moved to Chicago in June, I have been panicking at work and sleeping badly. The breakup made it worse.",
        },
        {
          id: "client-goal",
          label: "What Maya wants",
          value: "Feel steady again.",
          sourceSpan: "I want help feeling steady again.",
        },
      ],
      boundary: "Client-approved intake context. Not a diagnosis or treatment recommendation.",
    });
  });
});
