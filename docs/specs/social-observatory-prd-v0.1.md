# Social observatory PRD v0.1

- **Status:** Working proposal
- **Maturity:** Specified product and feasibility requirements; not implemented or validated
- **Date:** 2026-08-26
- **Product stage:** Instrument-only alpha with shadow forecasting
- **First participant:** Consenting adults in the first 12 weeks after moving to a new city
- **Implementation spec:** [GitHub issue #7](https://github.com/JonahFSD/Osanwe/issues/7)
- **Successor:** [Experimental action and adaptation PRD v0.1](experimental-action-and-adaptation-prd-v0.1.md)

## 1. Decision and evidence boundary

This PRD specifies the first participant-facing form of Osanwe: a small, participant-owned social field instrument. It records a narrow set of social experiences, lets the participant correct the record, provides a descriptive weekly review, and supports hidden prospective model evaluation.

It does not specify an AI companion, a recommender, a wearable platform, a diagnosis, or a general model of a person.

The first product decision is falsifiable:

> Can Osanwe collect a correctable, low-burden longitudinal record of felt connection and social context that remains useful as a field notebook and is adequate for prospectively comparing simple forecasts with one narrowly defined dynamic model?

| Material claim | Status | Origin |
|---|---|---|
| Recent movers are an appropriate first transition population. | hypothesis / specified pilot choice | new proposal |
| A sub-60-second field notebook will be useful enough to retain participants. | hypothesis | new proposal |
| Daily felt connection can be measured with acceptable burden and reactivity. | hypothesis | new proposal |
| Personal social history improves next-day prediction beyond simple baselines. | hypothesis | new proposal |
| A one-state dynamic model adds value beyond a scorecard or autoregression. | hypothesis | new proposal |
| Consent, provenance, correction, deletion, and model lineage are mandatory product behavior. | specified | project constraint |
| Comparable systems establish collection feasibility, not validity for this product. | observed, author-reported / cross-system synthesis | published primary studies |

No item above is causally supported for Osanwe.

## 2. Why this PRD exists separately

Measurement, forecasting, and intervention are different claims:

1. **Measurement:** the system can obtain an interpretable record without unacceptable burden or reactivity.
2. **Forecasting:** a model can predict a later named response better than simpler alternatives.
3. **Intervention:** offering an action causes a better outcome than not offering it.

This PRD covers the first claim and prepares a test of the second. The successor PRD covers the third only after this PRD passes its release gate.

The separation prevents two invalid shortcuts:

- a pleasant reflection experience being cited as evidence that the model is accurate; and
- an accurate forecast being cited as evidence that a recommendation will help.

## 3. First participant and job to be done

### 3.1 Target participant

The first participant is an adult who:

- moved to a new city within the previous 12 weeks;
- wants to establish or strengthen local human relationships;
- can provide informed consent independently;
- owns a compatible phone for the required check-in surface; and
- agrees to the instrument-only study boundary.

Initial exclusions and handling rules must be reviewed before recruitment. The product is not offered or described as treatment, crisis support, or a substitute for professional or community services.

### 3.2 Job to be done

> Help me keep a trustworthy record of whether I am becoming more connected, notice patterns worth reflecting on, and preserve promising follow-ups without turning my social life into a score or replacing my judgment.

### 3.3 Initial promise

The alpha may promise:

- a record the participant controls;
- a low-burden daily check-in;
- a weekly description of what was reported;
- explicit missingness and uncertainty; and
- correction, deletion, and export.

It may not promise:

- to understand the participant better than they understand themselves;
- to know how another person feels;
- to predict loneliness, depression, relationship success, or flourishing broadly;
- to recommend the right social action; or
- to improve connection.

## 4. Product principles

1. **The participant is the principal.** Data and explanations serve the participant, not an advertiser, researcher engagement target, or model-training objective.
2. **Observations are not hidden states.** A check-in or event is a fallible record; a latent variable is a versioned model construct.
3. **ML is a candidate, not the product premise.** The observatory must remain coherent if a personal mean or scorecard wins.
4. **Missing is unknown.** Nonresponse is not loneliness, avoidance, neutrality, or evidence of no interaction.
5. **Correction is normal operation.** A correction creates new lineage without erasing the historical fact that an earlier record was used.
6. **Quietness is a feature.** No streaks, infinite feeds, engagement rewards, or pressure to disclose more.
7. **Optional means optional.** Declining narrative or future sensor permissions cannot disable the core notebook.
8. **No interpersonal mind reading.** The system records the participant's experience and observable events, not another person's intentions or reciprocity.

## 5. V0 participant experience

### 5.1 Onboarding

The participant:

1. Reads the instrument-only purpose and non-clinical boundary.
2. Selects a daily prompt window and time zone.
3. Reviews source-specific consent; v0 requires only direct check-ins and optional participant-entered events.
4. Chooses pseudonyms for people or groups only if they want event continuity.
5. Reviews correction, export, revocation, retention, and deletion behavior.
6. Completes the initial anchor protocol defined by the measurement plan.

Onboarding must not request contacts, location history, calendar access, wearables, or raw conversations.

### 5.2 Daily check-in

The required daily path targets a median completion time at or below 60 seconds.

Required primary item:

> How connected to other people did you feel today?

Response: fixed 1–7 anchors, with wording and anchors frozen by the evaluation plan.

Candidate secondary item, pending response-process review:

> How much capacity did you have for social contact today?

The participant may also select:

- meaningful interaction occurred;
- wanted contact but did not have it;
- intentionally chose solitude and felt okay with that;
- none of these; or
- skip.

The exact secondary schema remains a measurement decision, not settled construct truth.

### 5.3 Optional event record

The participant may record:

- event time or approximate window;
- pseudonymous person or group, or no identity;
- interaction mode from a reviewed list;
- whether the interaction was desired;
- participant-experienced connection afterward;
- whether follow-up is desired; and
- a private note, subject to the raw-text policy.

The record must not ask whether another person likes, trusts, values, or intends to support the participant.

### 5.4 Correction inbox

The participant can:

- confirm a proposed record;
- edit fields;
- reject it;
- mark identity resolution as wrong;
- revoke the source permission;
- request deletion; and
- inspect which derived artifacts used the record.

Unconfirmed machine-extracted narrative is research-only and excluded from the canonical v0 observation view.

### 5.5 Weekly review

The weekly review shows only participant-reported descriptions:

- daily felt-connection responses;
- participant-entered interaction events;
- desired follow-ups;
- missing days;
- corrected records; and
- plain-language limitations.

It does not create reminders or offer actions. It also does not show a latent-state label, risk score, causal explanation, relationship ranking, or model-selected action.

Because displaying a summary can itself alter behavior and reporting, the evaluation plan must either hold this review constant across participants or randomize its display as an intervention.

### 5.6 Withdrawal and end of study

The participant can export an understandable record and request deletion. The product must explain what is removed, which derived artifacts are invalidated, and what minimal audit tombstone, if any, must remain.

## 6. The ML boundary

### 6.1 What the model does

The model tests small competing predictive structures against future observations:

| Candidate | Question |
|---|---|
| `M0: participant distribution` | Is the participant's usual response sufficient? |
| `M1: persistence` | Is the last response or recent average sufficient? |
| `M2: scorecard` | Do transparent hand-specified inputs improve the forecast? |
| `M3: ordinal autoregression` | Does learned persistence and declared context improve it? |
| `M4: one-state dynamic candidate` | Does separating a changing signal from declared source noise add prospective value? |
| `M5: context candidate` | Do participant-entered events add information beyond response history? |

These models predict the next-day response to the named item. They do not identify a brain state, diagnose loneliness, prove a mechanism, or model the whole person.

### 6.2 What adapts

With a fixed parameter artifact, new accepted observations may update the current predictive belief. That is inference.

Parameter learning happens offline against a versioned dataset. Initially eligible personal differences are limited to:

- baseline response level;
- short-term variability;
- persistence; and
- declared source reliability.

Every parameter promotion creates a versioned artifact and must pass the locked evaluation. The runtime does not silently retrain after a conversation or check-in.

### 6.3 Shadow mode

Forecasts are hidden until the target outcome is recorded and the study permits disclosure. Each forecast stores:

- eligible evidence and fixed cutoff;
- feature, model, and parameter versions;
- candidate predictive distribution;
- uncertainty and abstention status; and
- later outcome and score when available.

The issued forecast remains immutable after corrections. A corrected record may generate a separate counterfactual replay, not rewrite history.

### 6.4 LLM role

An LLM may:

- propose a structured event from participant-entered language;
- cite the source span used for each proposed field;
- render approved questions; and
- explain a structured descriptive record.

An LLM may not:

- determine canonical evidence without the declared confirmation rule;
- directly update latent state or action value;
- infer another person's private beliefs or intentions;
- generate unrestricted questions;
- diagnose, triage, or make causal claims; or
- optimize continued conversation.

## 7. V0 data boundary

### 7.1 Required

- source-specific consent event;
- daily primary item;
- prompt delivery and response metadata;
- correction, revocation, deletion, and export events;
- model and schema lineage; and
- weekly anchor records required by the accepted measurement protocol.

### 7.2 Optional

- participant-entered social event;
- participant-created pseudonymous relationship identifier;
- participant-authored note under the approved retention policy; and
- candidate secondary capacity item.

### 7.3 Prohibited in v0

- passive location;
- contact or message metadata scraping;
- calendar ingestion;
- wearable integration;
- raw conversation ingestion;
- purchased or brokered data;
- autonomous third-party communication; and
- model-derived interpersonal intent.

An optional modality moves into scope only through a versioned amendment with a declared decision, validation protocol, privacy cost, and removal criterion.

## 8. Product requirements

| ID | Requirement | Acceptance evidence |
|---|---|---|
| `OBS-01` | The participant can complete the required daily item and deliberately skip any optional field. | Usability test and event replay. |
| `OBS-02` | Every accepted record carries event time, ingestion time, source, consent scope, schema version, and provenance. | Contract test. |
| `OBS-03` | Evidence received after a forecast cutoff cannot affect that forecast. | Leakage test. |
| `OBS-04` | Missing observations remain explicitly missing. | Known-answer replay. |
| `OBS-05` | Correction produces new lineage and an updated current view without mutating issued forecasts. | Correction test. |
| `OBS-06` | Revocation removes a source from all future views and triggers the declared derived-artifact policy. | Revocation and deletion test. |
| `OBS-07` | The participant can export a human-readable record and provenance summary. | Export fixture. |
| `OBS-08` | Weekly review contains descriptions only and clearly labels missing evidence. | Content audit. |
| `OBS-09` | Unconfirmed extracted narrative cannot enter the canonical observation view. | Permission test. |
| `OBS-10` | Fixed inputs, artifacts, and seed reproduce derived outputs. | Deterministic replay. |
| `OBS-11` | Baselines and candidates receive identical eligible evidence and tuning budgets. | Evaluation audit. |
| `OBS-12` | Unsupported versions, unresolved consent, or out-of-support inputs cause abstention. | Adversarial test suite. |
| `OBS-13` | Product telemetry does not define engagement as a success objective. | Metric registry audit. |
| `OBS-14` | No product copy upgrades description or prediction into causal or clinical language. | Claim-language review. |
| `OBS-15` | The study tests whether participants understand and value the notebook independently of any model output. | Prespecified comprehension, retention-reason, and exit-interview analysis. |

## 9. Feasibility and measurement study

### 9.1 Purpose

A four-to-six-week study with approximately 10–20 consented participants tests instrumentation and response processes. It is not powered or presented as evidence of model efficacy, construct validity, population forecasting, or product benefit.

### 9.2 Freeze before recruitment

- inclusion and exclusion criteria;
- primary and secondary item wording;
- response anchors, timing, lateness, and missingness;
- weekly anchor protocol;
- event schema and pseudonym rules;
- display policy;
- data retention and deletion graph;
- burden, privacy-regret, and safety thresholds;
- baseline models and same-information rules; and
- development versus future locked evaluation windows.

### 9.3 Operando-style measurements

Measure the product while it is being used:

- completion and response latency;
- median and upper-tail burden;
- prompt delivery failure versus participant nonresponse;
- correction and rejection rates;
- privacy regret and disclosure pressure;
- missingness following prior responses and burden;
- changes associated with prompt timing;
- weekly anchor behavior;
- forecast coverage and residual diagnostics, explicitly exploratory; and
- participant understanding of descriptive versus predictive claims.

### 9.4 Negative controls

- time-shuffled history;
- randomized participant identifiers when testing personalization;
- irrelevant or time-shifted event records;
- delivery-failure records separated from nonresponse;
- impossible timestamps and consent-invalid events; and
- adversarial examples in which a predictor improves forecasts without representing a separable latent state.

## 10. Success, simplification, and kill criteria

Numeric tolerances must be accepted before the associated evaluation set is opened. The median daily burden ceiling is provisionally 60 seconds; all other thresholds require participant input, decision analysis, and simulation rather than post hoc selection.

### 10.1 Instrument gate

Advance only if:

- consent, correction, revocation, deletion, export, and replay pass without unresolved exceptions;
- the primary item is observable at a cadence sufficient for the planned forecast study;
- median and upper-tail burden remain within accepted limits;
- prompt reactivity, disclosure pressure, and privacy regret remain below stop boundaries; and
- participants understand the instrument-only claim.
- the preregistered participant-value criterion for the notebook is met without exposing model outputs.

Hold, revise, or stop if:

- the outcome is too ambiguous or missing for prospective evaluation;
- weekly review materially contaminates the primary measurement without an evaluable display policy;
- correction or deletion cannot be honored;
- the product creates pressure to disclose sensitive third-party information; or
- subgroup burden or error crosses the prespecified boundary.

### 10.2 Forecast gate

The feasibility alpha cannot pass this gate. A later, simulation-sized prospective study advances the one-state model only if:

- its participant-weighted proper-score improvement over the strongest same-information baseline exceeds the preregistered practical threshold;
- predictive intervals remain calibrated within tolerance;
- conclusions survive missingness and prior-sensitivity analyses;
- the gain replicates on a future window; and
- the improvement could change a declared downstream decision.

If a participant mean, last value, scorecard, or autoregression matches the candidate, retain the simpler object and stop claiming a latent personalized model.

### 10.3 Modality gate

No additional modality is presumed necessary. Each future modality must demonstrate incremental decision-relevant value under an on/off, matched-instance evaluation and justify its privacy, burden, version-drift, and correction costs. Otherwise it is removed.

## 11. Literature-grounded challenge

| Precedent | Observed lesson under reported conditions | Constraint for this PRD |
|---|---|---|
| StudentLife | Intensive phone sensing and EMA produced observational associations in a small student cohort, not causal benefit or validated personal state. | Start with direct participant reports; do not equate sensor richness with construct validity. |
| Beiwe | Configurable, versioned longitudinal collection is feasible, but collection infrastructure does not supply one valid state model. | Preserve configuration and provenance while collecting far less data in v0. |
| STAND/AWARE | Long personal records supported retrospective person-specific mood prediction for selected participants, with substantial heterogeneity and no credible cold start. | Use partial pooling, future-window evaluation, and simple personal baselines; the feasibility alpha cannot validate personalization. |
| PREEMPT | A personal-experiment process improved some decision measures without improving the primary distal pain outcome. | Evaluate notebook value separately from distal social benefit. |
| Generative conversational trials | Short-term self-report can improve after conversation without validating a state model or better human relationships. | Do not use an AI-companion surface as the observatory's retention mechanism. |
| mSavorUs | A much richer loneliness-sensing stack plus relational prompts did not show significant loneliness or connectedness improvement in a small pilot, and timing was disruptive. | Do not add wearables or prompting to rescue weak measurement; study reactivity and timing directly. |

These primary studies are summarized with limitations in the [comparable-systems review](../research/comparable-personalized-longitudinal-intervention-systems.md).

## 12. Risks and mitigations

| Risk | Initial mitigation |
|---|---|
| Measurement changes the participant's behavior or answers. | Freeze display policy; measure prompt timing and reactivity; randomize display if needed. |
| The item measures response style rather than connection. | Multiple nonidentical anchors, response-process work, and external criteria before broader construct claims. |
| The notebook feels extractive because it offers no recommendation. | Set the instrument-only promise explicitly; provide participant-controlled descriptive review and export. |
| Relationship records expose third parties. | Pseudonyms, minimal event fields, no contact scraping, no private-intent fields, deletion controls. |
| ML explanations sound more certain than evidence. | Structured claim types, visible uncertainty, language audit, abstention. |
| Missingness is interpreted psychologically. | Preserve expected-observation records and report technical versus participant missingness separately. |
| The participant substitutes AI reflection for human contact. | No open-ended companion surface; track displacement and dependence as adverse outcomes. |
| Recent movers are too heterogeneous. | Narrow inclusion criteria and record transition context; do not claim transport beyond the study. |

## 13. Explicit non-goals

- Improving flourishing in the feasibility alpha
- Diagnosing loneliness or mental-health conditions
- Predicting crisis or providing crisis care
- Modeling six latent dimensions
- Ranking relationships or people
- Inferring reciprocity or another person's mental state
- Passive sensing or wearable collection
- Personalized intervention selection
- Online reinforcement learning
- Engagement optimization
- Selecting an application framework or model-serving stack

## 14. Release gate to the action PRD

The [experimental action and adaptation PRD](experimental-action-and-adaptation-prd-v0.1.md) remains locked until:

1. the instrument gate passes;
2. a reliable proximal outcome outside the product is defined;
3. a tiny participant-approved action set and no-action comparator pass independent safety review;
4. availability, quiet periods, contraindications, and adverse-event handling are specified;
5. an estimand and randomization protocol are preregisterable; and
6. governance can pause the study and roll back the policy.

Forecast superiority is not itself required to test a generic reviewed action. If action research begins without a validated forecast model, it must not use or claim model-selected timing. Conversely, forecast superiority does not waive any causal-action gate.

## 15. Unresolved decisions

1. Final inclusion and exclusion criteria for recent movers
2. Exact primary item response anchors and response-process evidence
3. Whether the capacity item is daily, sampled, or removed
4. Weekly external anchor and construct-claim boundary
5. Event identity and pseudonym lifecycle
6. Raw optional-note retention and local-versus-server processing
7. Numeric burden, completion, privacy-regret, reactivity, and subgroup stop thresholds
8. Whether weekly descriptive review is held constant or randomized
9. Research consent versus later product consent
10. Governance owner for safety, deletion, and model promotion

## 16. Source trail

- [Measurement and forecasting pipeline v0.2](measurement-and-forecasting-pipeline-v0.2.md)
- [Product bridge v0.1](product-bridge-v0.1.md)
- [ADR-0001: probabilistic core and LLM boundary](../decisions/0001-probabilistic-core-and-llm-boundary.md)
- [Comparable personalized longitudinal intervention systems](../research/comparable-personalized-longitudinal-intervention-systems.md)
- [Foundational modeling and criticism](../research/foundational-modeling-and-criticism.md)
- [Personalized longitudinal state estimation](../research/personalized-longitudinal-state-estimation.md)
- Wang R, Chen F, Chen Z, et al. [StudentLife](https://doi.org/10.1145/2632048.2632054). *UbiComp*. 2014.
- Torous J, Kiang MV, Lorme J, Onnela J-P. [Beiwe research platform](https://doi.org/10.2196/mental.5165). *JMIR Mental Health*. 2016.
- Balliu B, Douglas C, Seok D, et al. [Personalized Mood Prediction From Patterns of Behavior Collected With Smartphones](https://doi.org/10.1038/s41746-024-01035-6). *npj Digital Medicine*. 2024.
