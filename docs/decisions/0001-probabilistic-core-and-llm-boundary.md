# ADR-0001: Keep state estimation outside the LLM

- **Status:** Accepted for v0
- **Date:** 2026-08-21
- **Maturity:** Hypothesis

## Decision

Use a coupled hierarchical Bayesian state-space model, informed by an explicit temporal relationship graph and multimodal observations, as the initial state-estimation and forecasting core.

The LLM is limited to:

1. extracting structured, provenance-linked observations from consented language;
2. expressing a model-selected information need as a natural question; and
3. translating structured model output into bounded, ordinary-language explanations.

The LLM does not independently estimate latent state, choose interventions, infer another person's private intent, or simulate the participant's future.

## Context

Early data will be sparse, irregular, confounded, multimodal, and highly person-specific. An end-to-end learned representation could fit noise while hiding failure behind plausible language. The system needs interpretable uncertainty, partial pooling, explicit provenance, prospective evaluation, and the ability to remove modalities that do not add value.

## Consequences

- Observation schemas and reliability calibration become first-class interfaces.
- The model must expose posterior uncertainty and population-versus-individual contribution.
- The LLM-only approach remains an evaluation baseline.
- A neural residual, graph neural network, bandit, or learned world model may be added only after a simpler baseline works and the addition improves held-out forecasting, calibration, or intervention-effect prediction.
- Explanations must be downstream of structured state and evidence, never a substitute for them.

## Reversal criteria

Revisit this decision if prospective evidence shows that the structured core cannot represent the necessary dynamics and a more flexible model produces material, replicated gains without degrading calibration, auditability, correctability, or safety.

## Source

[Personalized Social Flourishing Model v0.1](../specs/personalized-social-flourishing-model-v0.1.md)
