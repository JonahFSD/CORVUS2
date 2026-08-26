# ADR-0004: Make expedited therapy intake the first product

- **Status:** Accepted
- **Date:** 2026-08-26
- **Maturity:** Specified product direction

## Decision

Build Osanwe first as an expedited, clinician-reviewed therapy intake system for independent outpatient therapists and small practices serving adult clients.

The client completes a secure guided intake using structured fields and natural-language answers. A typed language-model adapter may propose source-linked intake facts, but deterministic validation, client correction, and therapist review control what enters the accepted record. The therapist receives a concise draft, missing-information and contradiction cues, measure results, provenance, and the ability to accept, edit, reject, defer, and export.

The first product does not diagnose, formulate, recommend treatment, provide therapy, or act as a crisis counselor. Its value proposition is workflow compression and better usable context before the first session.

A Kalman filter, personalized state model, wearable input, relationship graph, recommendation policy, and reinforcement-learning system are not part of the intake path. A small longitudinal model may be reconsidered only after the intake product works without it and a repeated-measure decision demonstrates a need.

The existing web application and domain boundaries are implementation inputs, not authorization to process clinical data. Every infrastructure vendor and data flow must be re-evaluated for the intended therapy workflow, protected health information, required agreements, access control, retention, export, deletion, backup, and incident response before real client information is accepted.

## Context

The earlier product direction combined participant reflection, social-state forecasting, wearables, relationship events, and bounded recommendations. That program contains useful research and engineering boundaries, but it does not identify one immediate buyer, one urgent workflow, or one independently valuable outcome.

Therapy intake provides a narrower product mechanism:

```text
client story
  -> source-linked structured proposals
  -> validation and client correction
  -> therapist review
  -> accepted intake record
```

The product remains valuable if the fixed form and deterministic workflow do most of the work. Language-model extraction must earn its place by reducing therapist work or improving usable coverage without increasing unsupported claims, safety failures, privacy regret, or client burden.

A one-time intake does not provide the repeated comparable observations required for a meaningful temporal state estimator. Including a Kalman-style state score in the first product would add complexity without supporting the intake decision.

## Alternatives considered

### Consumer social-flourishing coach

This has a broader vision but a less precise buyer, slower evidence path, and greater risk of optimizing AI engagement or offering advice before its effects are known. The earlier work remains available as deferred research, not the first product.

### Personalized forecasting platform

A forecast can be scientifically interesting but does not by itself solve a therapist's workflow problem. Forecasting is deferred until a specific repeated clinical or client decision requires it and a simple baseline is inadequate.

### AI therapist or treatment recommender

Rejected. It creates unacceptable authority, safety, evidence, and regulatory problems for the current program and conflicts with the requirement that the LLM remain a noisy language interface.

### Fixed digital intake form

Retained as the operational baseline and failure mode. Osanwe must beat this workflow in therapist time or usable information quality. If it does not, the fixed form should remain the product.

## Consequences

- The first user, buyer, workflow, output, and value metric are explicit.
- The initial product can ship useful behavior without claiming personalized ML.
- Narrative extraction, coverage checking, bounded follow-up selection, and draft rendering become the only eligible AI functions in the core workflow.
- Client correction and therapist acceptance are product primitives rather than post-processing conveniences.
- Practice tenancy, clinician roles, secure invitations, auditability, safety routing, record acceptance, and export become immediate engineering requirements.
- Wearables, passive sensing, autonomous recommendations, and a general model of a person are deferred.
- Clinical privacy, security, vendor contracting, and operational review become more demanding than for the prior consumer prototype.
- Existing runtime decisions may be reused only after they pass the new data and operational requirements.

## Evaluation and reversal criteria

The decision should be revisited if partner-therapist workflow evidence shows that:

- intake preparation and documentation are not material problems;
- existing forms or record systems already solve the problem adequately;
- therapists do not reach an accepted intake faster;
- natural-language intake does not add usable information beyond the fixed form;
- client completion or correction burden is unacceptable;
- unsupported claims or safety-routing errors cannot be reduced to an acceptable level;
- required privacy, security, integration, or contracting work makes the product operationally infeasible; or
- the workflow encourages therapists to defer rather than exercise clinical judgment.

The first product comparison is the complete Osanwe workflow against the practice's existing intake process. Extraction accuracy is evaluated separately so that product usefulness cannot conceal an unreliable parser.

## References

- [Current product explanation](../../README.md)
- [ADR-0001: Keep state estimation and policy authority outside the LLM](0001-probabilistic-core-and-llm-boundary.md)
- [Comparable personalized longitudinal intervention systems](../research/comparable-personalized-longitudinal-intervention-systems.md)
- [Measurement and forecasting pipeline](../specs/measurement-and-forecasting-pipeline-v0.2.md)

