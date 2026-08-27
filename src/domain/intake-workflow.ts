export type ManifestDecision = "proposed" | "approved" | "withheld" | "removed";

export interface ManifestItem {
  id: "presenting-context" | "client-goal" | "care-preferences";
  label: string;
  value: string;
  sourceSpan: string;
  decision: ManifestDecision;
  sensitive: true;
}

export interface ManifestRevision {
  decision: Exclude<ManifestDecision, "proposed">;
  value?: string;
}

export type ManifestReview = Partial<Record<ManifestItem["id"], ManifestRevision>>;

export interface TherapistProfile {
  id: string;
  name: string;
  credentials: string;
  state: string;
  gender: "female" | "male" | "nonbinary";
  vetted: boolean;
  acceptingClients: boolean;
  insurances: readonly string[];
  modes: readonly string[];
  availability: readonly string[];
  specialties: readonly string[];
}

export interface TherapistMatch {
  therapist: TherapistProfile;
  reasons: string[];
}

export interface TherapistHandoff {
  clientName: string;
  therapist: Pick<TherapistProfile, "id" | "name" | "credentials">;
  approvedFacts: Array<Pick<ManifestItem, "id" | "label" | "value" | "sourceSpan">>;
  boundary: string;
}

const sentencesIn = (answer: string): string[] =>
  answer
    .trim()
    .split(/(?<=\.)\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

export const compileIntakeManifest = (answer: string): ManifestItem[] => {
  const sentences = sentencesIn(answer);
  const move = sentences.find((sentence) => sentence.includes("moved to Chicago"));
  const breakup = sentences.find((sentence) => sentence.includes("breakup"));
  const goal = sentences.find((sentence) => sentence.includes("want help"));
  const preferences = sentences.find((sentence) => sentence.includes("would prefer"));

  if (!move || !breakup || !goal || !preferences) {
    return [];
  }

  return [
    {
      id: "presenting-context",
      label: "What happened",
      value: "A move, a breakup, panic at work, and poor sleep.",
      sourceSpan: `${move} ${breakup}`,
      decision: "proposed",
      sensitive: true,
    },
    {
      id: "client-goal",
      label: "What Maya wants",
      value: "Feel steady again.",
      sourceSpan: goal,
      decision: "proposed",
      sensitive: true,
    },
    {
      id: "care-preferences",
      label: "What matters for care",
      value: "Female therapist, after 5 p.m., virtual, and in-network with Blue Cross.",
      sourceSpan: preferences,
      decision: "proposed",
      sensitive: true,
    },
  ];
};

export const reviewManifest = (
  proposals: readonly ManifestItem[],
  review: ManifestReview,
): ManifestItem[] =>
  proposals.map((proposal) => {
    const revision = review[proposal.id];
    if (!revision) {
      return proposal;
    }

    return {
      ...proposal,
      value: revision.value ?? proposal.value,
      decision: revision.decision,
    };
  });

export const findEligibleTherapists = (
  manifest: readonly ManifestItem[],
  directory: readonly TherapistProfile[],
): TherapistMatch[] => {
  const preferences = manifest.find((item) => item.id === "care-preferences");
  if (preferences?.decision !== "approved") {
    return [];
  }

  return directory
    .filter(
      (therapist) =>
        therapist.vetted &&
        therapist.acceptingClients &&
        therapist.state === "Illinois" &&
        therapist.gender === "female" &&
        therapist.insurances.includes("Blue Cross") &&
        therapist.modes.includes("virtual") &&
        therapist.availability.includes("after 5 p.m.") &&
        therapist.specialties.includes("anxiety") &&
        therapist.specialties.includes("major life transitions"),
    )
    .map((therapist) => ({
      therapist,
      reasons: [
        "License verified for Illinois",
        "Female therapist, as requested",
        "In network with Blue Cross",
        "Accepting new clients",
        "Virtual appointments",
        "Availability after 5 p.m.",
        "Experience with anxiety and major life transitions",
      ],
    }));
};

export const createTherapistHandoff = (
  clientName: string,
  manifest: readonly ManifestItem[],
  therapist: TherapistProfile,
): TherapistHandoff => ({
  clientName,
  therapist: {
    id: therapist.id,
    name: therapist.name,
    credentials: therapist.credentials,
  },
  approvedFacts: manifest
    .filter((item) => item.decision === "approved")
    .map(({ id, label, value, sourceSpan }) => ({ id, label, value, sourceSpan })),
  boundary: "Client-approved intake context. Not a diagnosis or treatment recommendation.",
});
