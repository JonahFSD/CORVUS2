# Specification map

This directory turns the founding concept into a testable system specification. The current [v0.1 model](personalized-social-flourishing-model-v0.1.md) is the baseline, not a finished design.

## Proposed specification set

| Area | Core question | Exit condition |
|---|---|---|
| Product thesis | Whose flourishing, in what context, and why this product? | Initial participant and use case are narrow enough to recruit and test. |
| Construct model | What exactly are belonging, support, agency, avoidance, receptivity, and distress? | Each construct has an operational definition, measures, known confounds, and discriminant-validity plan. |
| Observation model | How does each data source become uncertain evidence? | Schemas, provenance, correction, reliability calibration, and missingness behavior are specified. |
| Relationship graph | Which nodes, events, edge states, and derived features are legitimate? | Event semantics and uncertainty rules are testable without inferring private intent. |
| State and forecast model | What is estimated, at what cadence, with which priors? | Generative model, identifiability constraints, posterior checks, and baseline comparisons are specified. |
| Adaptive measurement | Which question is worth asking, and at what burden? | Candidate bank, information-value objective, burden budget, and fallback behavior are specified. |
| Intervention model | Which actions are eligible and when? | Eligibility, contraindications, consent, randomization, outcomes, and stopping rules are specified. |
| Safety and privacy | What must the system never do or retain? | Threat model, data lifecycle, user controls, crisis boundary, and audit trail are specified. |
| Evaluation | What evidence advances or kills the project? | Preregisterable metrics, power simulations, stage gates, and kill criteria are defined. |
| Product contract | What can the interface say and show? | API and UX contracts expose evidence, uncertainty, correctability, and claim type. |

## Definition of ready for implementation

Implementation should begin with a thin measurement-and-forecasting tracer bullet only after:

- one target population and transition context are selected;
- the six constructs and anchor measures have an initial operational definition;
- the event, observation, consent, and provenance schemas are agreed;
- baseline models and prospective evaluation splits are defined;
- a privacy threat model and participant deletion/export flows exist; and
- an alpha protocol has explicit burden and safety limits.

This gate is intended to prevent premature app-building, not to require certainty. Unknowns should be explicit and instrumented.
