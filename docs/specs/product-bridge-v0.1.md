# Product bridge v0.1

- **Status:** Working proposal
- **Maturity:** Hypothesis
- **Date:** 2026-08-21

## Product in one sentence

A participant-owned system that learns when and why a person's social life is likely to improve or deteriorate, then helps them take one safe, approved action at a moment when it is likely to help.

The first product is not a general model of the mind. It is a narrow feedback loop for social flourishing.

## The inversion

Commercial recommendation systems answer questions such as:

> Given this person's recent behavior and context, which item should we show now to maximize the probability of a commercial action?

This product asks:

> Given this participant's consented observations, relationship history, context, and uncertainty, what measurement or low-risk action is most likely to improve a participant-defined real-world outcome?

The commercial system has an advertiser as its customer and treats the person as inventory. This system has one principal: the participant.

That is an inversion of the objective, data rights, and evaluation criteria—not permission to copy the surveillance-advertising stack.

## The initial user promise

> Help me understand what actually affects my sense of connection, notice a worsening trajectory early, and take a manageable action that fits my current capacity.

The product should not promise to know the participant better than they know themselves. It should promise to run a careful, correctable learning process on their behalf.

## Recommended first wedge

**Candidate, not yet an accepted decision:** adults in the first 12 weeks after moving to a new city or entering a graduate program.

Their job to be done is concrete:

> Help me turn a field of new acquaintances into a small, reliable support network without exhausting myself or letting promising connections disappear.

This wedge is attractive because it has:

- a defined beginning and study window;
- frequent social events and rapidly changing relationship edges;
- plausible short-horizon outcomes;
- low-risk actions such as following up, recurring attendance, one-to-one invitations, and recovery;
- natural comparison between interaction volume and relationship depth; and
- recruitable adult cohorts near a university while avoiding a claim to treat illness.

The first useful product moment is not “improve my flourishing.” It is:

> Help me follow up on the connections I want to develop, when I am receptive enough to do it, and learn whether doing so helps over time.

## The product loop

### 1. Consent

The participant chooses each data source independently. Refusing wearable, calendar, location, contact, or conversation access must not make consent to other sources meaningless.

### 2. Observe

The first useful evidence stream is deliberately small:

- one adaptive micro-check-in per day;
- participant-recorded social interactions and relationship updates;
- optional calendar context;
- optional wearable-derived sleep, recovery, and activity deviations; and
- optional conversation excerpts explicitly approved for extraction.

Purchased broker profiles and advertiser-owned targeting data are not v0 inputs. The ad-tech analogy motivates the objective inversion; it is not the product's data acquisition strategy.

### 3. Infer

The model maintains uncertain estimates of belonging, perceived support, social agency, avoidance/threat, receptivity/energy, and distress/recovery. It also tracks an explicit, correctable relationship graph.

Outputs include evidence recency, uncertainty, and population-versus-individual contribution. They are never presented as diagnoses or hidden truths.

### 4. Clarify

When competing explanations would lead to different actions, the system asks one high-information, low-burden question.

Example:

> Did you want contact today but feel too depleted, or did contact itself feel aversive?

### 5. Act

After the intervention stage is scientifically eligible, the product offers one participant-approved action such as rest, contact a strong tie, deepen a promising tie, attend a recurring group, or reconnect with a dormant tie.

The participant chooses whether to act. The system never sends a message or contacts another person automatically.

### 6. Learn

The system records whether the suggestion was offered, eligible, accepted, completed, helpful, burdensome, or harmful. Forecasts are frozen before outcomes arrive. Later micro-randomized trials distinguish an action's causal effect from the fact that people already doing well are more likely to take it.

## What the participant experiences

The product surface can remain small:

1. **Daily check-in:** one to three questions taking less than a minute.
2. **Correction inbox:** a place to confirm, edit, or reject extracted evidence.
3. **Trajectory:** an uncertainty-aware explanation of what may be changing and why.
4. **Next step:** at most one context-appropriate, approved action.
5. **Review:** whether the action happened and what followed.

The model is the product; conversation is one interface to it.

For the recommended wedge, onboarding asks the participant to identify current people, recurring groups, desired relationship depth, practical constraints, and data permissions. The weekly review then shows which ties are becoming repeated and reciprocal, where the model is uncertain, and whether prior actions appeared helpful. It never ranks people by worth or claims to know how another person privately feels.

## Concrete scenario

A participant has slept unusually poorly for four days, attended two group events, and reported little felt connection. The model is uncertain whether the problem is depletion or rejection-driven avoidance.

Instead of declaring that the participant is lonely, it asks a short distinguishing question. If depletion is more likely, it may recommend recovery now and defer a social action. If receptivity is intact and a promising relationship has stalled, it may suggest a brief participant-written invitation at a historically workable time.

The participant sees the evidence, uncertainty, and reason for the suggestion; approves or declines it; and later reports the outcome. That result updates the model.

## Release sequence

### Phase 0: Instrument

- Check-ins, corrections, relationship events, and optional passive inputs.
- No optimized recommendations.
- Validate schemas, burden, consent, extraction, and construct measurement.

### Phase 1: Forecaster

- Issue immutable 1-, 7-, and 14-day predictions.
- Compare against moving-average, mixed-effects, static-feature, and LLM-only baselines.
- Show uncertainty and evidence, not a composite flourishing score.

### Phase 2: Adaptive measurement

- Select questions by expected information value under a burden budget.
- Test whether fewer questions preserve or improve forecast quality.

### Phase 3: Intervention learner

- Micro-randomize among safe, approved actions and no-action controls at eligible moments.
- Estimate proximal effects, moderators, burden, and adverse outcomes.

### Phase 4: Validated companion

- Rank actions only where the evidence supports doing so.
- Compare the policy prospectively with generic guidance and measurement-only controls.

## Product scorecard

The product succeeds only if it improves outcomes outside the product.

Primary candidates:

- felt belonging and perceived support;
- meaningful contact and relationship depth;
- social agency and follow-through;
- calibrated forecasts and useful uncertainty reduction; and
- participant-reported value net of burden.

Counter-metrics:

- time spent with the AI;
- compulsive checking or reassurance seeking;
- suggestion burden and notification dismissal;
- incorrect or uncorrected inferences;
- privacy regret; and
- displacement of human contact by AI interaction.

## Why this is technically hard

The defensible work is in longitudinal inference under sparse, noisy, nonstationary, multimodal data; partial pooling without false personalization; graph/event semantics; missingness; active measurement; treatment-effect heterogeneity; calibrated uncertainty; causal evaluation; and privacy-preserving user control.

If a generic LLM prompt performs equally well, the project has not built the claimed technology.

## Immediate decisions required

1. Select one transition population and one recurrent high-value situation.
2. Operationalize the six constructs and choose anchor measures.
3. Define the minimum consented event and observation schemas.
4. Specify the alpha's prospective forecast protocol and baseline suite.
5. Decide the privacy boundary before collecting participant data.
