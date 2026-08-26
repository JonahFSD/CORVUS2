# Domain documentation

This repository uses a single domain context.

## Before exploring

Read:

1. `AGENTS.md` for the project purpose, phase, evidence language, safety boundaries, and implementation gate;
2. the relevant working specifications in `docs/specs/`;
3. applicable durable decisions in `docs/decisions/`; and
4. relevant evidence syntheses in `docs/research/` before making scientific claims.

If a root `CONTEXT.md` is added later, read it as the domain glossary. Its absence is not a blocker.

## Vocabulary

Use the terms already defined in the governing specification. Preserve these distinctions:

- observation versus model-defined state;
- inference versus parameter learning;
- description versus prediction versus causal effect;
- participant-owned event versus inferred relationship property;
- forecast policy versus action policy;
- hypothesis, specified, simulated, observed, and causally supported;
- product engagement versus human flourishing; and
- generic action effect versus adaptive-policy value.

Do not invent synonyms that blur those boundaries. If the governing documents conflict, surface the conflict explicitly.

## Decision records

System-wide decisions live in `docs/decisions/`, not `docs/adr/`. Read records that touch the work before writing a spec or implementation plan.

Do not rewrite an accepted record. Add a new sequential record that supersedes it. Proposed records constrain work only when the governing spec explicitly adopts them or the user accepts them.

## Current implementation boundary

The repository is in specification and scientific de-risking. A task is not implementation-ready merely because it has a PRD. Respect the readiness and scientific gates in the applicable specification, including the prohibition on selecting an application framework, model-serving stack, database, or wearable integration before the scoped tracer bullet is accepted.
