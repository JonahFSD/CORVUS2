# ADR-0003: Use the existing Next.js app with Convex and Clerk for the production alpha

- **Status:** Accepted for production alpha
- **Date:** 2026-08-26
- **Maturity:** Specified

## Decision

Build the Wayfinder production alpha from the existing Next.js application on `feat/two-minute-wayfinder-demo`.

Use:

- **Vercel** for the Next.js web deployment;
- **Convex** for the production-alpha database, reactive application queries, durable functions, scheduled work, and environment-separated backend deployments;
- **Clerk** for authentication and account sessions, integrated with Convex identity validation;
- **OpenAI Responses API structured output** behind the existing typed observation boundary for live reflection extraction; and
- the existing framework-independent TypeScript state engine and action policy for synchronous inference, with Convex jobs for bounded personal calibration.

Do not add a separate Python model service in the production alpha. Introduce one only when an accepted model requires statistical libraries, training jobs, or compute that the TypeScript/Convex runtime cannot support safely.

Launch the first persistent slice with participant-authored input. Treat a live wearable connection as the fourth production slice, not a prerequisite for authentication, persistence, state history, correction, and feedback.

## Context

The pitch-demo decision intentionally prohibited external services until the credential-free vertical slice existed. That condition is now satisfied: the demo has a working Next.js UI, typed observation contract, state updater, recommendation policy, unit tests, and a successful production build.

The production alpha now needs accounts, longitudinal records, source-level consent, background work, model-version history, recommendation outcomes, and deletion propagation. The earlier decision already named Convex as the preferred persistence candidate when those needs entered scope.

Convex Auth remains beta and its Next.js server support is described as under active development. For this release, use the documented Convex and Clerk integration rather than making beta authentication infrastructure a product risk.

## Consequences

- The application remains one deployable product with a small number of managed dependencies.
- The same typed domain modules remain runnable in tests without network access.
- Convex functions must enforce participant ownership on every read and write; client-side route protection is not an authorization boundary.
- Authentication, Convex, Vercel, and OpenAI require separate development, preview, and production configuration.
- External credentials are required to complete live staging and production exercises.
- The product must tolerate observation-adapter failure and remain usable for manual check-ins and corrections.
- The product can ship its core longitudinal loop before selecting a wearable provider.
- Vendor-specific storage code must stay behind domain-oriented functions so a later migration does not change observation, state, recommendation, export, or deletion contracts.

## Reversal criteria

Revisit Convex if production requirements cannot be met for data isolation, regional processing, deletion, backup/restore, analytical export, or required workloads. Revisit Clerk if identity requirements, pricing, account portability, or deployment constraints change materially. Revisit the single TypeScript model runtime when an accepted statistical model cannot be fitted, versioned, monitored, or replayed within it.

## References

- [Wayfinder production alpha PRD v0.1](../specs/wayfinder-production-alpha-prd-v0.1.md)
- [Pitch-demo runtime decision on `feat/two-minute-wayfinder-demo`](https://github.com/JonahFSD/Osanwe/blob/feat/two-minute-wayfinder-demo/docs/decisions/0002-pitch-demo-runtime.md)
- [Convex and Clerk integration](https://docs.convex.dev/auth/clerk)
- [Convex production configuration](https://docs.convex.dev/production/project-configuration)
- [Convex Auth status](https://docs.convex.dev/auth/convex-auth)
