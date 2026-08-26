# ADR-0002: Separate observatory and causal-action gates

- **Status:** Proposed
- **Date:** 2026-08-26
- **Maturity:** Specified; untested

## Decision

After the measurement and safety gate, treat forecasting research and generic action-effect research as two independently governed lanes:

```text
Participant-owned observations
        │
        ├── Forecast lane
        │     simple baselines versus bounded candidate model
        │     → shadow forecasts and prospective criticism
        │
        └── Value lane
              one reviewed participant-approved offer versus no offer
              → randomized proximal effect and harm evaluation
```

A generic, participant-approved action may enter a preregistered causal test after measurement, outcome, consent, safety, and governance gates pass even if a latent forecasting model has not beaten simple baselines.

A model-selected action or timing policy remains locked until:

1. the generic action has a practically useful replicated causal effect;
2. the decision context and candidate model are prospectively adequate for the declared use;
3. the model-selected policy can be compared fairly with a fixed or simple context rule; and
4. propensity logging, bounded exploration, fallback, rollback, harm, burden, and AI-dependence controls pass.

Forecast accuracy never establishes action efficacy. Generic action efficacy never validates a latent-state model.

## Scope

This decision governs the relationship between:

- the [social observatory PRD](../specs/social-observatory-prd-v0.1.md);
- the [experimental action and adaptation PRD](../specs/experimental-action-and-adaptation-prd-v0.1.md); and
- the sequencing in the [measurement and forecasting pipeline v0.2](../specs/measurement-and-forecasting-pipeline-v0.2.md).

It does not authorize either study or weaken any readiness, privacy, safety, consent, outcome-quality, or governance requirement.

## Context

The earlier product bridge and pipeline use a mostly serial sequence: establish forecasting, then begin causal action research. That sequence correctly prevents an accurate forecast from being treated as an effective recommendation. It also creates a different risk: a failed or unnecessary latent model could block testing a simple, independently reviewable product action.

Comparable systems show that these are separable claims:

- HeartSteps first estimated the proximal effect of randomized suggestions before deploying a bounded learned policy.
- DIAMANTE found a whole adaptive messaging package could improve a dense behavioral outcome without validating a latent psychological state.
- StayWell found no overall outcome advantage for reinforcement-learned messaging over simpler arms.
- mSavorUs combined rich sensing with relational prompts but reported disruptive timing and no significant loneliness or connectedness improvement in its small pilot.
- PREEMPT showed that a personal experimental process can improve some decision outcomes without improving the primary distal outcome.

See the [comparable-systems review](../research/comparable-personalized-longitudinal-intervention-systems.md) for primary sources and limitations.

The domain-transferred Lars research heuristic also favors perturbing one interpretable variable and measuring both outcome and system state before adding a complex optimizer. Applying that method here is a new Osanwe proposal, not a claim about Lars Ostervold's personal view.

## Alternatives considered

### Require forecast superiority before any action study

**Benefit:** maximally conservative sequencing and a cleaner narrative from inference to action.

**Problem:** assumes a predictive latent model is necessary for a generic action to help and could cause the project to optimize the wrong dependency.

### Begin recommendations and learn opportunistically

**Benefit:** faster participant-facing functionality.

**Problem:** confounds selection, readiness, prompting, action completion, and outcome; cannot support a causal claim; exposes participants before safety and measurement are adequate.

### Run forecasting and unrestricted adaptive action in parallel

**Benefit:** faster algorithm development.

**Problem:** unsafe and scientifically uninterpretable under sparse data; creates reward, propensity, and policy-shift failures before a useful action effect exists.

### Chosen: independent bounded lanes

This preserves the distinction between prediction and intervention while allowing the simplest causal product hypothesis to fail without waiting for unnecessary model complexity.

## Consequences

- The observatory must remain coherent and useful if every learned model loses to a simple baseline.
- The first causal test uses observable eligibility and one reviewed action; it does not require a latent state.
- The action study requires its own estimand, consent, safety review, outcome, randomization, monitoring, and stop rules.
- Model-selected timing must beat a generic or simple context rule using the same action space and eligible instances.
- The project may discover a notebook-only, generic-reminder, simple-rule, or adaptive product; none is preselected as the desired result.
- Product and research claims must identify which lane generated the evidence.
- Pipeline v0.2 remains historical context until a later version incorporates or rejects this proposed decision.

## Risks

- A generic prompt could contaminate ongoing measurement. Mitigation: separate studies or randomized display with a fixed measurement schedule.
- Teams could use the parallel lane to bypass forecast-model criticism. Mitigation: no action evidence may validate a forecast or state claim.
- Network interference and carryover may make a social-action MRT difficult to interpret. Mitigation: use a tiny reversible action set, explicit windows, interference assumptions, and sensitivity analyses.
- A generic action could create benefit while the mechanism remains unknown. Mitigation: limit the claim to the randomized offer under the study conditions.

## Reversal criteria

Revisit or reject this decision if:

- reliable proximal social outcomes cannot be measured without a validated state model;
- generic action eligibility cannot be defined without unsafe or unvalidated inference;
- carryover or network interference makes the proposed causal estimand uninterpretable;
- independent review concludes that action research before forecast validation creates unacceptable risk; or
- prospective evidence shows that the split produces conflicting measurement or governance that cannot be isolated.

## Evidence labels

| Claim | Status | Origin |
|---|---|---|
| Measurement, forecasting, and intervention are distinct estimands. | specified / methodological synthesis | new proposal grounded in primary methods literature |
| A generic action can be safely and validly tested before forecast superiority. | hypothesis / proposed decision | new proposal |
| Adaptive timing should be tested only after generic action efficacy. | specified | new proposal informed by comparable systems |
| The two-lane architecture will accelerate learning without increasing harm. | hypothesis | new proposal |
