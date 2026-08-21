# Personalized Social Flourishing

A research and product program for building technology that measurably improves human flourishing while strengthening—rather than replacing—human relationships.

The first tractable wedge is **social flourishing**: can a personalized model use consented conversation, relationship events, self-reports, context, and wearable-derived recovery signals to forecast a person's near-term social state and, eventually, identify low-risk actions that improve it?

## Status

**Phase 0: specification and scientific de-risking.** There is no validated model, product, or clinical claim yet. The current work is to sharpen the constructs, data contracts, evaluation design, safety boundaries, and kill criteria before committing to an implementation stack.

## Deep-tech thesis

The defensible technology is not the chatbot. It is a calibrated, personalized model of hidden human dynamics that:

- represents uncertainty instead of manufacturing certainty;
- makes prospective predictions that beat simple and LLM-only baselines;
- adapts from population priors to an individual without pretending sparse data are sufficient;
- uses causal evidence before claiming that an intervention helps; and
- treats reduced dependence on the AI as a success condition.

The initial architecture keeps four responsibilities separate:

1. An LLM turns language into provenance-linked, correctable observations.
2. An explicit temporal relationship graph represents social structure and events.
3. A hierarchical Bayesian state-space model estimates and forecasts latent state.
4. A constrained policy may eventually rank participant-approved, low-risk actions.

## First falsifiable claims

1. **Forecasting:** predict social state 1, 7, and 14 days ahead better than last-observation, moving-average, mixed-effects, static-feature, and LLM-only baselines.
2. **Intervention:** after forecasting is validated, predict which eligible low-risk action is most likely to improve a subsequent social outcome.

The project does not get to claim it “understands” or “improves” a person merely because an explanation sounds insightful.

## Start here

- [Founding model v0.1](docs/specs/personalized-social-flourishing-model-v0.1.md) — the imported technical concept and current source material.
- [Specification map](docs/specs/README.md) — how the concept will be decomposed and matured.
- [Product bridge v0.1](docs/specs/product-bridge-v0.1.md) — how the research model becomes a participant-facing product.
- [Open questions](docs/specs/open-questions.md) — the highest-leverage unknowns to resolve next.
- [Technical collaborator pitch v0.1](docs/pitch/technical-collaborator-pitch-v0.1.md) — a defensible version of the founding story and ask.
- [Ad-tech-to-flourishing evidence audit](docs/research/adtech-to-flourishing-evidence-audit.md) — primary-source support and explicit limits for the core analogy.
- [ADR-0001](docs/decisions/0001-probabilistic-core-and-llm-boundary.md) — the first accepted architectural boundary.

## Non-negotiable guardrails

- Explicit, revocable consent for every data source.
- User-visible provenance and correction for meaningful inferences.
- No diagnosis, covert persuasion, autonomous social action, or claims about another person's private intent.
- No uncontrolled online reinforcement learning or engagement-maximizing objective.
- A separate deterministic protocol for high-risk mental-health situations.
- Data minimization, deletion, export, and retention controls are product requirements, not later compliance work.

## Working method

Every substantial claim should carry one of these maturity labels:

- **Hypothesis** — plausible but not yet operationalized.
- **Specified** — construct, data, and acceptance criteria are defined.
- **Simulated** — behavior has been tested on synthetic or replayed data.
- **Observed** — supported prospectively in real participant data.
- **Causally supported** — supported by an appropriate randomized design.

Major architectural or scientific decisions belong in `docs/decisions/`. Versioned model snapshots belong in `docs/specs/`. The imported v0.1 document is a historical baseline; substantive revisions should produce a new version.

## License

No license has been selected. Until one is added, all rights are reserved.
