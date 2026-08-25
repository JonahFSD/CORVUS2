# ADR-0002: Use a local-first TypeScript runtime for the pitch demo

- **Status:** Accepted for the pitch demo
- **Date:** 2026-08-25
- **Maturity:** Specified

## Decision

Build the two-minute tracer bullet as one Next.js application using strict TypeScript and React. Keep the state estimator and recommendation policy as framework-independent TypeScript modules. Use deterministic synthetic fixtures and browser-local interaction for the first demonstrable release.

Do not add Convex, authentication, wearable OAuth, or an OpenAI API dependency until the credential-free vertical slice is complete.

## Context

The immediate goal is a reliable two-minute pitch-competition demonstration, not a prospective scientific study. The demo still needs to make the product's core technical boundary observable: language creates structured evidence; a separate model updates state; a constrained policy chooses among bounded actions.

External services would add demo risk without proving that boundary. Keeping the domain modules independent allows later use from a Convex function, MCP tool, or evaluation harness.

## Consequences

- The pitch can be rehearsed and judged without network access.
- Synthetic data and fixture extraction must be labeled in the interface.
- The mathematical update and constrained policy are real and unit tested.
- The first deployment can use Vercel without a database.
- Convex remains the preferred persistence candidate once participant accounts or longitudinal records enter scope.
- A future ChatGPT plugin will use an MCP server and optional MCP Apps UI without moving state estimation into the LLM.

## Reversal criteria

Revisit the persistence decision when the demo requires multiple sessions, participant accounts, revocable consent records, or imported wearable history. Revisit the single runtime when empirical model development requires a separately deployable statistical environment.
