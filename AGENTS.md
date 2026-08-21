# Repository guidance

## Purpose

This repository develops a scientifically falsifiable, privacy-preserving system intended to improve human flourishing. Social flourishing is the first validation domain.

## Current phase

The project is in specification and scientific de-risking. Prefer clarifying constructs, contracts, experiments, safety boundaries, and kill criteria over selecting frameworks or building broad product surfaces.

## Working rules

- Treat the LLM as a noisy language interface, not the source of truth for state estimation or policy.
- Preserve provenance, uncertainty, user correction, consent, and model-version lineage in every proposed data flow.
- Label claims as hypothesis, specified, simulated, observed, or causally supported.
- Do not use clinical or causal language without corresponding evidence.
- Do not infer another person's private beliefs or intentions.
- Do not optimize AI engagement. Human relationships and reduced AI dependence are explicit outcomes.
- Prefer simple baselines and prospective tests. Additional model complexity must earn its place through measurable gains.
- Record durable decisions in `docs/decisions/`; add new records rather than rewriting accepted history.
- Create a new versioned model spec for substantive changes to the founding v0.1 snapshot.
- Use primary sources for scientific claims. Add stable links and enough bibliographic detail to verify them; imported citation placeholders are not evidence.

## Before implementation

Do not introduce an application framework, model-serving stack, database, or wearable integration until a scoped tracer bullet and its acceptance criteria are documented.
