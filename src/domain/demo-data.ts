import type { TherapistProfile } from "./intake-workflow";

export const mayaAnswer =
  "Since I moved to Chicago in June, I have been panicking at work and sleeping badly. The breakup made it worse. I want help feeling steady again. I would prefer a female therapist, after 5 p.m., virtual, and in-network with Blue Cross.";

export const therapistDirectory: readonly TherapistProfile[] = [
  {
    id: "lena-brooks",
    name: "Lena Brooks",
    credentials: "LCSW",
    state: "Illinois",
    gender: "female",
    vetted: true,
    acceptingClients: true,
    insurances: ["Blue Cross"],
    modes: ["virtual"],
    availability: ["after 5 p.m."],
    specialties: ["anxiety", "major life transitions"],
  },
  {
    id: "amina-patel",
    name: "Amina Patel",
    credentials: "LCPC",
    state: "Illinois",
    gender: "female",
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
    gender: "male",
    vetted: true,
    acceptingClients: true,
    insurances: ["Aetna"],
    modes: ["virtual"],
    availability: ["after 5 p.m."],
    specialties: ["anxiety"],
  },
];
