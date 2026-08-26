# Repository guidance

## Purpose

This repository develops a scientifically falsifiable, privacy-preserving system intended to improve human flourishing. Social flourishing is the first validation domain.

## Current phase

The project is moving from a completed pitch tracer bullet into a narrow production alpha. Prefer end-to-end, deployable product slices with real authentication, persistence, consent, correction, longitudinal state, bounded actions, and operational safeguards. Scientific evaluation remains an internal quality discipline; it is not the participant-facing product or a reason to postpone a useful conservative release.

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

The initial Next.js tracer bullet and its acceptance criteria are documented and implemented on `feat/two-minute-wayfinder-demo`. New infrastructure must now be tied to the production-alpha acceptance criteria in `docs/specs/wayfinder-production-alpha-prd-v0.1.md`; avoid broad platform work that does not complete a participant-visible longitudinal slice.

## Agent skills

### Issue tracker

Issues and PRDs are tracked in GitHub Issues for this repository. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the default Matt Pocock skills triage vocabulary. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository; read this file, relevant specifications and research, and applicable records in `docs/decisions/`. See `docs/agents/domain.md`.
