# Experimental action and adaptation PRD v0.1

- **Status:** Gated working proposal
- **Maturity:** Specified research-product requirements; not eligible for implementation
- **Date:** 2026-08-26
- **Product stage:** Participant-approved action experiment, followed only conditionally by adaptation
- **Predecessor:** [Social observatory PRD v0.1](social-observatory-prd-v0.1.md)

## 1. Decision and evidence boundary

This PRD specifies how Osanwe may progress from observation to action without confusing prediction, prompting, personalization, and benefit.

It remains locked until the predecessor's instrumentation and safety gates pass. Nothing here authorizes implementation, participant recruitment, notifications, autonomous action, or online reinforcement learning.

The product decision is falsifiable:

> Does offering one participant-approved, low-risk social follow-up at an eligible moment cause a practically meaningful improvement in a prespecified real-world outcome compared with remaining silent, without unacceptable burden, regret, harm, displacement of human contact, or AI dependence?

Only after that effect is established may Osanwe ask:

> Does a constrained adaptive timing policy outperform a fixed generic rule using the same action and opportunity set?

| Material claim | Status | Origin |
|---|---|---|
| A reviewed social follow-up offer improves a proximal social outcome. | hypothesis | new proposal |
| Context changes the effect of that offer. | hypothesis | new proposal |
| A learned timing policy adds value beyond a fixed rule. | hypothesis | new proposal |
| Repeated randomization can identify a proximal offer effect under the registered assumptions. | specified / method-supported | new proposal informed by MRT methodology |
| Adaptive digital interventions sometimes outperform random messaging. | causally supported under reported study conditions | published primary studies |
| Adaptive messaging can also fail to outperform simple or monitoring controls. | observed / causally tested null under reported conditions | published primary studies |
| A whole-policy effect does not validate a latent-state model or prove personal benefit for every participant. | cross-system synthesis | published primary studies |

No action or policy effect is currently observed for Osanwe.

## 2. Why this PRD exists separately

The predecessor can discover that:

- a notebook is useful while ML is not;
- a model forecasts accurately while no action helps;
- a generic action helps while model-selected timing does not; or
- prompting is disruptive even when its content seems valuable.

These outcomes imply different products. Combining them into one PRD would let success in one layer conceal failure in another.

This PRD therefore orders the claims:

1. establish that the outcome can be measured;
2. establish that the action is feasible and acceptable;
3. estimate generic offer versus no-offer effect;
4. test moderators without calling them personalization prematurely;
5. compare a simple context rule with model-selected timing;
6. test the complete product against measurement-only and generic-guidance controls.

## 3. Participant and job to be done

### 3.1 Eligible participant

The first action study inherits the predecessor's target population unless a versioned amendment changes it: consenting adults in the first 12 weeks after moving to a new city who want to establish or strengthen local relationships.

Eligibility for the product does not mean eligibility at every decision point.

### 3.2 Job to be done

> When I already want to develop a human connection, help me test whether a small follow-up at a manageable moment actually helps me—without acting for me, pressuring me, or treating engagement with the app as success.

### 3.3 Product promise

The first action study may promise:

- that all action categories are reviewed and participant-approved;
- that silence is a legitimate outcome;
- that the system will never send the action for the participant;
- that randomized learning will be explained during consent;
- that burden, regret, and human-contact displacement are measured; and
- that the participant can pause action research independently of the notebook.

It may not promise:

- the best action;
- individualized treatment effects;
- relationship improvement;
- knowledge of another person's receptivity;
- continuous optimization; or
- a companion relationship with the AI.

## 4. Product principles

1. **Establish an action effect before optimizing it.** No learner is justified for an inert action.
2. **Offer, never execute.** The participant writes and sends any human communication.
3. **No action is an active product choice.** Silence is a required comparator and fallback.
4. **Optimize outside-product value.** Clicks, opens, replies to the AI, and accepted suggestions are process measures, not the reward.
5. **Separate availability from effect.** A participant can be ineligible because of quiet hours, burden, safety, or context without that being interpreted psychologically.
6. **Bound exploration.** Any later stochastic policy has fixed probabilities, exclusions, monitoring, and rollback.
7. **Preserve causal provenance.** Eligibility, action probability, assignment, delivery, acceptance, completion, and outcome are separate immutable events.
8. **Dependence is a cost.** Increased AI reliance or displaced human contact can stop the policy even if the proximal target improves.

## 5. Initial action contract

### 5.1 Smallest candidate action

The first experiment should test one generic participant-selected follow-up category rather than a menu optimized by a model.

Candidate:

> Offer the participant a reminder to complete a human follow-up they previously created, such as sending their own message or proposing their own plan to a person or group they selected.

The system may display the participant's own reminder and an option to dismiss it. It does not draft the message in the first causal test unless drafting is itself separately reviewed and randomized.

### 5.2 Required comparator

At an eligible decision point, assignment is initially between:

- `A0`: no offer; and
- `A1`: generic participant-created follow-up reminder.

The interface must not create a compensating notification in `A0`. Measurement needed for the outcome follows the registered schedule and must be equal across arms.

### 5.3 Availability

A decision point is eligible only when:

- action-study consent is active;
- the participant has an unresolved, participant-created follow-up;
- the approved time window is open;
- quiet periods and frequency caps permit an offer;
- required outcome collection is available;
- no unresolved deletion, consent, safety, or technical state exists;
- recent burden remains below the stop rule; and
- the action does not require a claim about another person's private state.

Ineligibility records a technical or participant-defined reason. It does not label the participant avoidant, unreceptive, lonely, or unsafe.

### 5.4 Completion

Offer delivery, opening, acceptance, completion, and participant-reported result are different variables. The system must not infer that opening a prompt caused contact or that dismissal represents a negative social state.

## 6. Outcome contract

### 6.1 Primary proximal outcome

The candidate primary endpoint is:

> Whether the participant reports that the previously desired human follow-up occurred within 48 hours of an eligible decision point.

The exact window, adjudication, competing events, missingness, repeated-opportunity behavior, and interference assumptions must be frozen after feasibility work and before the randomized evaluation.

The first protocol should not create a second decision point for the same follow-up while its primary outcome window remains open. If later designs allow overlapping opportunities, they require an explicit treatment-history estimand rather than treating decisions as independent.

This endpoint measures desired follow-through, not relationship quality or flourishing.

### 6.2 Secondary outcomes

- next-day felt-connection-item response;
- participant-experienced quality of the resulting contact;
- whether the contact was still desired when offered;
- regret or pressure;
- suggestion burden and dismissal;
- spontaneous human contact;
- AI reliance or reassurance seeking;
- privacy regret;
- adverse or uncomfortable interpersonal consequences; and
- seven-day persistence of any effect, if measurement supports it.

### 6.3 Process measures

- eligible decision points;
- assignment probability;
- actual assignment;
- delivery success;
- opening, acceptance, and completion;
- reason for ineligibility;
- source and recency of contextual features; and
- policy, model, message, and outcome versions.

Process measures cannot substitute for the primary outcome.

## 7. Release sequence

### 7.1 Phase A: deterministic feasibility

Before randomization, test whether participants can:

- create, edit, pause, and delete a follow-up;
- understand that the system will not send it;
- choose acceptable reminder windows and frequency caps;
- dismiss without friction or explanation;
- report whether follow-up occurred; and
- report burden, regret, and adverse consequences.

This phase establishes usability and safety only.

### 7.2 Phase B: generic offer versus silence

Use a preregistered micro-randomized design at eligible decision points. Estimate the proximal excursion effect of offering the participant-created reminder versus offering nothing.

The analysis must preserve:

- availability rules;
- known assignment probabilities;
- intention-to-treat assignment;
- repeated observations within participants;
- missing-outcome sensitivity;
- time-varying burden and habituation;
- study-time effect; and
- participant and network interference assumptions.

Moderators are exploratory unless the design is powered and registered for them.

### 7.3 Phase C: simple timing comparison

Only after a practically useful generic effect replicates, compare:

- `P0`: a fixed participant-selected reminder time;
- `P1`: a simple preregistered context rule; and
- `P2`: a constrained stochastic model-selected time.

All policies use the same action category, availability contract, frequency cap, and outcome definition. This isolates timing value from content and dose where possible.

### 7.4 Phase D: whole-product evaluation

The eligible complete product is compared prospectively with:

- measurement-only observatory;
- generic fixed guidance or reminder; and
- adaptive policy.

The primary outcome is participant-defined and outside the product. Product value is not established by forecast score, message acceptance, perceived AI alliance, or time in the app.

## 8. Adaptation boundary

### 8.1 What may adapt first

The first eligible policy may adapt only whether to offer the one approved reminder at one of a small number of approved windows.

Candidate contextual variables are limited to preregistered, observable fields such as:

- time window;
- participant-selected availability;
- recent prompt dosage;
- whether the follow-up is approaching its participant-selected expiry; and
- recent completion of other participant-created follow-ups.

No latent psychological state is required for the first policy comparison.

### 8.2 What may not adapt initially

- message wording generated without review;
- relationship or person ranking;
- inferred receptivity of another person;
- action category;
- quiet periods or safety rules;
- primary outcome definition;
- exploration bounds;
- clinical or crisis handling; or
- frequency caps beyond participant-approved limits.

### 8.3 Learning cadence

Runtime belief updates and policy training are separate. A later policy may use fixed parameters during deployment while candidate parameters are fitted offline against versioned randomized data. Promotion requires replay, simulation, locked evaluation, independent review, and rollback readiness.

There is no invisible per-message self-retraining.

### 8.4 Personalization claim

Osanwe may say timing is personalized only if a prespecified audit shows that:

- participant or context differences changed assignment probabilities for substantive reasons;
- those differences were not merely random policy variation;
- the adaptive policy improved future outcomes over the simpler rule; and
- the gain was not produced by greater prompt dosage alone.

## 9. LLM boundary

An LLM may eventually:

- help the participant phrase their own follow-up after they request it;
- render a reviewed reminder in the participant's preferred tone;
- explain why a decision was eligible or why the system abstained; and
- summarize structured experimental evidence with uncertainty.

LLM drafting is a separate intervention component. It must be held fixed or randomized if included in an effect study.

The LLM may not:

- send a message;
- impersonate the participant;
- infer the recipient's intent or likely response;
- determine action value directly from conversation;
- choose outside the reviewed action set;
- rewrite the reward or safety constraints; or
- sustain conversation to improve engagement.

## 10. Product requirements

| ID | Requirement | Acceptance evidence |
|---|---|---|
| `ACT-01` | The participant explicitly opts into action research separately from observation. | Consent-flow test. |
| `ACT-02` | The participant creates or approves every eligible follow-up. | Event and UI audit. |
| `ACT-03` | The system never contacts a third party or sends on the participant's behalf. | Permission and integration test. |
| `ACT-04` | Every decision records eligibility before assignment. | Replay test. |
| `ACT-05` | Assignment probability and policy version are persisted immutably. | Randomization audit. |
| `ACT-06` | No-offer produces no compensating intervention. | Arm-fidelity test. |
| `ACT-07` | Delivery, opening, acceptance, completion, and outcome are distinct events. | Contract test. |
| `ACT-08` | Quiet periods, frequency caps, and pause act before policy choice. | Boundary test. |
| `ACT-09` | Unsupported or unresolved state falls back to no offer. | Failure-injection test. |
| `ACT-10` | The policy cannot optimize app engagement as reward. | Reward-registry audit. |
| `ACT-11` | Burden, regret, displacement, dependence, and adverse outcomes are scored with the primary endpoint. | Analysis-plan audit. |
| `ACT-12` | Model and generic comparators receive the same eligible instances and action set. | Evaluation audit. |
| `ACT-13` | An emergency stop disables offers without disabling export, correction, or deletion. | Operational drill. |
| `ACT-14` | Policy rollback is deterministic and logged. | Rollback drill. |
| `ACT-15` | Participant withdrawal invalidates future decision eligibility immediately. | Revocation test. |

## 11. Literature-grounded challenge

| Precedent | Observed lesson under reported conditions | Constraint for this PRD |
|---|---|---|
| HeartSteps V1 | A walking suggestion produced a modest proximal step effect, while the broader contrast was weaker and effects declined over time. | Estimate offer effect before policy optimization; model study-time decay and burden. |
| Personalized HeartSteps | Low-dimensional bounded Thompson sampling was deployable, but deployment did not itself prove distal benefit or personalization. | Keep context small, probabilities bounded, and claims separate. |
| DIAMANTE | An adaptive messaging package improved step trajectories versus random and minimal messaging, but dose and personalization were not fully isolated. | Compare equal action spaces and record dose; a package effect does not validate internal state. |
| StayWell | Reinforcement-learned mental-health messaging did not significantly outperform random messages or mood monitoring overall. | Adaptation earns no presumption of value; simple active controls are mandatory. |
| mSavorUs | Wearable-triggered relational prompts were sometimes experienced as disruptive and produced no significant loneliness or connectedness improvement in a small pilot. | Prompt timing, disruption, and no-offer controls are primary design concerns. |
| Oralytics | Online RL required clipped probabilities, fallbacks, monitoring, replay, and separation of deployment from outcome claims. | Treat randomization, fallback, and lineage as product infrastructure. |
| Trialist/PREEMPT | Personal randomized experiments improved some decision-process outcomes but not the primary distal pain outcome. | Better personal evidence need not improve the target outcome; repeatable, reversible actions only. |
| Generative conversational trials | Whole chatbot packages can change short-term self-report without validating a state model or protecting against dependence. | Evaluate LLM drafting as a versioned component and retain human-contact counter-metrics. |

These primary studies are summarized with limitations in the [comparable-systems review](../research/comparable-personalized-longitudinal-intervention-systems.md).

## 12. Success, simplification, and kill criteria

Numeric thresholds must be determined prospectively through outcome-value analysis, participant input, simulation, and the exact study design.

### 12.1 Action gate

Advance from generic offer to timing comparison only if:

- the intention-to-treat proximal effect exceeds the preregistered practical threshold;
- the effect survives missingness and availability sensitivity analyses;
- burden, regret, harm, and displacement stay below upper bounds;
- effect decay remains within the declared useful window;
- the result replicates; and
- the action remains participant-approved and safely repeatable.

If generic offer versus silence is null or harmful, stop developing an optimizer for that action. A post hoc subgroup does not reopen the gate without a new prospective study.

### 12.2 Adaptive-policy gate

Promote a model-selected policy only if:

- it beats the fixed rule on the locked primary outcome by the practical threshold;
- assignment probabilities remain valid and auditable;
- the gain is not explained by prompt dose, measurement differences, or attrition;
- no subgroup crosses its harm or calibration bound;
- burden and dependence do not increase beyond tolerance;
- safe fallback and rollback pass; and
- a personalization audit shows real decision differentiation rather than stochastic noise.

If a fixed time or simple rule matches the model, use the simple rule.

### 12.3 Whole-product gate

Claim product value only if the adaptive or fixed eligible product beats measurement-only and generic-guidance controls on a participant-defined real-world outcome, net of:

- burden;
- privacy regret;
- inequity;
- adverse interpersonal consequences;
- displaced human contact; and
- AI dependence.

If only app engagement, model confidence, or forecast accuracy improves, the product-value claim fails.

## 13. Safety and governance

- No autonomous communication or social execution
- No intervention involving another person without the participant selecting the target and action
- No private-intent inference
- No crisis prediction or clinical action by the generative model
- Separate deterministic high-risk protocol if one is ever offered
- Independent review of action categories, adverse events, and stop rules
- Participant-controlled quiet periods and immediate pause
- Frequency caps that the policy cannot override
- Named governance owner for incident response and policy promotion
- Immutable assignment and rollback logs

A threshold crossing pauses the relevant action or study even if the primary outcome improves.

## 14. Explicit non-goals

- A general social recommendation engine
- Autonomous message generation and sending
- Relationship optimization or ranking
- Inferring whom the participant should trust
- Clinical treatment or crisis response
- A learned policy before a generic causal effect
- Individual treatment-effect claims from sparse personal histories
- Unlimited action menus
- Unbounded online reinforcement learning
- Engagement, retention, or conversation-length optimization
- Using forecast accuracy as proof that an action works

## 15. Dependencies

Before any implementation, this PRD requires:

1. predecessor instrument gate passed;
2. action-study consent and withdrawal contract;
3. accepted primary endpoint and missingness rules;
4. reviewed action and no-offer comparator;
5. eligibility, frequency, quiet-period, and interference specification;
6. power simulation for the exact repeated-randomization design;
7. preregisterable estimand and analysis plan;
8. adverse-event and stop governance;
9. immutable randomization, propensity, and policy lineage contracts; and
10. deterministic fallback and rollback plan.

## 16. Unresolved decisions

1. Whether the first action is a participant-created reminder or another reversible option
2. Exact proximal outcome and follow-up window
3. Definition of an eligible unresolved follow-up
4. Frequency cap and quiet-period defaults
5. Network interference and repeated-opportunity assumptions
6. Whether generic reminders alter measurement independently of action
7. Practical effect threshold for offer and policy promotion
8. Minimum replication design
9. Human review and incident-response ownership
10. When, if ever, LLM drafting becomes an experimental component
11. Whether action research can begin before forecast superiority, using observable context only
12. Full-product primary outcome and duration

## 17. Source trail

- [Social observatory PRD v0.1](social-observatory-prd-v0.1.md)
- [Measurement and forecasting pipeline v0.2](measurement-and-forecasting-pipeline-v0.2.md)
- [Comparable personalized longitudinal intervention systems](../research/comparable-personalized-longitudinal-intervention-systems.md)
- [Foundational modeling and criticism](../research/foundational-modeling-and-criticism.md)
- [ADR-0001: probabilistic core and LLM boundary](../decisions/0001-probabilistic-core-and-llm-boundary.md)
- Klasnja P, Smith S, Seewald NJ, et al. [HeartSteps micro-randomized trial](https://doi.org/10.1093/abm/kay067). *Annals of Behavioral Medicine*. 2019.
- Liao P, Greenewald K, Klasnja P, Murphy SA. [Personalized HeartSteps](https://doi.org/10.1145/3381007). *PACM IMWUT*. 2020.
- Aguilera A, Arévalo Avalos M, Xu J, et al. [DIAMANTE randomized trial](https://doi.org/10.2196/60834). *JMIR*. 2024.
- Mejia A, Arevalo M, Juarez R, et al. [StayWell reinforcement-learning trial](https://doi.org/10.1038/s44184-025-00173-3). *npj Mental Health Research*. 2025.
- Nguyen B, Lai J, Qureshi H, et al. [mSavorUs pilot](https://doi.org/10.2196/70528). *JMIR Formative Research*. 2025.
- Trella AL, Zhang KW, Jajal H, et al. [Deployed Oralytics algorithm](https://doi.org/10.1609/aaai.v39i28.35143). *AAAI*. 2025.
- Kravitz RL, Schmid CH, Marois M, et al. [Mobile N-of-1 trial](https://doi.org/10.1001/jamainternmed.2018.3981). *JAMA Internal Medicine*. 2018.
