# Wayfinder production alpha PRD v0.1

- **Status:** Accepted implementation target
- **Maturity:** Specified
- **Date:** 2026-08-26

## Product outcome

Ship an authenticated, persistent Wayfinder web application that a real person can use across days. The product accepts participant-authored reflections, short check-ins, relationship events, and one optional wearable connection; turns those inputs into correctable structured observations; maintains a versioned personal state; offers at most one bounded next step; and learns from the participant's corrections and outcomes.

This is a production product, not a participant-facing science experiment. Evaluation and model comparison are internal quality controls. They must not dominate the experience or delay shipping a useful conservative product.

The initial user promise is:

> Help me notice what affects my capacity for connection, remember the people I want to invest in, and follow through with one manageable next step.

## Existing starting point

The `feat/two-minute-wayfinder-demo` branch already contains a production-building Next.js application, a real typed state-update module, a bounded recommendation policy, and a complete synthetic user journey. It is the product seed.

The demo is not yet a longitudinal application:

- all participant data are synthetic fixtures;
- state is reset on refresh;
- observation reliabilities and model parameters are fixed;
- recommendation selection is three deterministic branches;
- there is no authentication, consent ledger, data connection, background processing, export, deletion, monitoring, or model-history store; and
- no outcome is persisted to affect future behavior.

## Production scope

### Participant surfaces

1. **Onboarding and consent**
   - Create an account.
   - Choose the product goal and notification window.
   - Grant or decline each data source independently.
   - Establish an initial self-report baseline.

2. **Today**
   - Show one short check-in or clarification when needed.
   - Show current capacity and trajectory using ordinary language.
   - Show at most one participant-approved next step.
   - Allow accept, decline, snooze, or “this does not fit.”

3. **Conversation and reflection**
   - Accept a participant-authored reflection.
   - Use an LLM adapter to propose structured observations.
   - Never treat the proposal as canonical until it passes validation and the participant can inspect or correct it.

4. **Evidence inbox**
   - Confirm, edit, or reject meaningful extracted observations.
   - Show the source, excerpt, time, confidence, and model version.
   - Apply corrections prospectively without rewriting historical outputs.

5. **People and recurring contexts**
   - Let the participant create pseudonymous people and group records.
   - Record interaction and follow-up events without importing a contact book in v0.1.
   - Never infer another person's private beliefs, intentions, reciprocity, or worth.

6. **Weekly review**
   - Summarize what changed, which evidence mattered, which suggestions were completed, and what the participant found helpful or burdensome.
   - Invite corrections and preference changes.
   - Do not optimize time spent in Wayfinder.

7. **Data controls**
   - View and revoke source permissions.
   - Export participant-authored records, observations, corrections, state history, and recommendations.
   - Delete individual records, a connected source, or the entire account.

## Runtime architecture

The production system has six explicit boundaries:

1. **Product application** — the existing Next.js application owns authenticated web UI and request handling.
2. **Consent and event ledger** — an append-only persistent record owns participant inputs, permissions, ingestion metadata, corrections, and deletions.
3. **Observation adapter** — deterministic adapters and an LLM structured-output adapter propose typed observations with provenance. The adapter does not own state.
4. **State engine** — a framework-independent domain module consumes the prior state plus eligible observations and writes an immutable, versioned state snapshot.
5. **Action policy** — deterministic eligibility and safety filters produce bounded candidates; a ranker selects at most one candidate and may abstain.
6. **Job runtime** — durable background jobs handle wearable synchronization, reprocessing, notification delivery, export, deletion propagation, and offline model calibration.

The request path is:

```text
participant input or wearable event
  -> append raw event with consent and provenance
  -> normalize and validate
  -> propose structured observations
  -> participant correction where material
  -> resolve eligible canonical observations
  -> update and persist versioned personal state
  -> generate and filter action candidates
  -> persist one recommendation or abstention
  -> render Today
  -> record acceptance, completion, helpfulness, burden, or harm
```

## Data contracts

The persistence layer must represent these durable entities:

- `Participant`
- `ConsentGrant` and `ConsentRevocation`
- `DataConnection`
- `RawEvent`
- `ObservationProposal`
- `ObservationRevision`
- `PersonAlias` and `SocialContext`
- `RelationshipEvent`
- `ModelArtifact`
- `PersonalParameterSet`
- `StateSnapshot`
- `ActionCandidate`
- `Recommendation`
- `RecommendationOutcome`
- `NotificationDelivery`
- `DeletionRequest`
- `AuditEvent`

Every observation and derived output must include participant, event time, ingestion time, source, source record, consent scope, schema version, model version, and correction lineage. Repeated ingestion must be idempotent.

## How personalization works

Machine learning does not rewrite itself after every chat. Production personalization occurs on three cadences:

### Immediate state update

Each eligible observation updates a participant's current uncertain state. Recent evidence, elapsed time, source reliability, and prior uncertainty determine how far the state moves. This is online inference under a fixed model version and happens after a confirmed check-in, reflection, relationship event, or wearable sync.

### Per-person calibration

After enough observations exist, a background job updates bounded participant parameters such as:

- personal wearable baselines and normal ranges;
- typical reporting level and within-person variability;
- reliability of each source for each state dimension;
- time-of-day and day-of-week patterns;
- which context features are useful for that participant; and
- observed fit, completion, helpfulness, and burden for eligible action types.

Each parameter set is versioned and reversible. Sparse users remain close to conservative population defaults. The runtime never performs uncontrolled online reinforcement learning.

### Population model release

Aggregate, de-identified training data may produce a new population model offline. A new artifact is evaluated against the shipped baseline, versioned, deployed gradually, monitored, and rolled back if it degrades calibration, correction rate, or participant outcomes.

## Scorecard versus adaptive model

The production alpha deliberately starts with transparent rules and a simple temporal state updater. That is acceptable; complexity is not the product.

A fixed scorecard uses the same weights for every person, has little memory beyond manually engineered windows, and normally emits a point score. Wayfinder adds:

- participant-specific baselines;
- state that evolves with elapsed time;
- explicit uncertainty and abstention;
- source-specific reliability;
- provenance and correction lineage;
- immutable model and state versions;
- feedback about recommendation fit, completion, helpfulness, and burden; and
- offline parameter updates with safe rollback.

If those adaptive features do not improve product behavior over the transparent baseline, the baseline remains the production model. A neural model, graph neural network, contextual bandit, or end-to-end learned representation is not justified in v0.1.

## Recommendation behavior

The policy uses two stages:

1. **Hard filters** remove actions that are not consented, do not fit the participant's stated capacity or preferences, repeat too frequently, require autonomous contact, or cross a safety boundary.
2. **Ranking** chooses among the remaining actions using current state, uncertainty, relationship-event recency, participant preferences, and prior action outcomes.

The product may offer recovery, a short self-authored follow-up, a recurring-group reminder, a small one-to-one invitation, a clarification question, or no action. It never sends a social message on the participant's behalf.

## Production platform requirements

The pitch demo's local-only decision is superseded for the production alpha. The implementation must add:

- production authentication and session management;
- a managed persistent datastore with tenant isolation;
- encrypted secrets and encrypted transport;
- durable asynchronous jobs with retry and idempotency;
- one real structured-output LLM adapter behind the typed observation contract;
- one real wearable integration or an explicit no-wearable launch mode;
- environment-separated development, staging, and production deployments;
- schema migration, backup, restore, and rollback procedures;
- rate limiting and abuse protection;
- structured logs, error monitoring, job monitoring, and audit logs;
- notification preference, quiet-hour, and unsubscribe controls;
- participant export, source revocation, and account deletion; and
- privacy policy, terms, support contact, and bounded product copy before public access.

Keep the state engine and action policy independent from the web framework. A separate statistical service is not required until model fitting needs libraries or compute that cannot be supported safely in the TypeScript job runtime.

For v0.1, use the platform selected in ADR-0003: the existing Next.js app on Vercel, Convex for persistence and durable work, Clerk for authentication, and an OpenAI structured-output adapter. Convex functions must enforce participant ownership on every protected operation. The product must continue to support manual input when the LLM adapter or an external integration is unavailable.

## Production sequence

### Slice 1 — Persistent product backbone

- Merge or build from the existing Wayfinder demo branch.
- Add authentication, participant tenancy, onboarding, and consent records.
- Persist participant-authored reflections, check-ins, relationship events, and corrections.
- Persist versioned state snapshots and recommendation outcomes across sessions.
- Replace synthetic demo state with a real seeded first-session flow.

### Slice 2 — Live observation loop

- Add the typed LLM observation adapter with validation, provenance, retry, and failure handling.
- Add the evidence inbox and correction workflow.
- Recompute current state from eligible observations without changing historical recommendations.
- Add structured tracing from raw event to rendered explanation.

### Slice 3 — Longitudinal adaptation

- Add elapsed-time state transitions and personal baselines.
- Add bounded per-person calibration jobs and parameter lineage.
- Add weekly review and recommendation-outcome capture.
- Run the existing transparent policy as the fallback for every unsupported or uncertain case.

### Slice 4 — Integration and operations

- Add one wearable integration with revocation and historical backfill controls.
- Add scheduled check-ins and quiet-hour-aware notifications.
- Add export and deletion propagation.
- Complete staging, deployment, monitoring, backup/restore, security, and rollback exercises.

## Acceptance criteria

The production alpha is ready for invited users when:

- a new user can create an account, complete onboarding, and independently grant or decline each source;
- the same user can return on another device or day and recover the correct longitudinal state;
- a reflection produces validated observation proposals with inspectable provenance;
- a user correction changes future state computation and never rewrites an already issued recommendation;
- duplicate, late, revoked, malformed, or unsupported events do not corrupt state;
- the state engine stores model version, parameter version, evidence IDs, timestamp, estimates, and uncertainty;
- the policy offers at most one eligible action or a structured abstention;
- accept, decline, completion, helpfulness, burden, and harm feedback are persisted;
- no system path autonomously contacts another person or infers that person's private mental state;
- consent revocation stops future use of a source and deletion propagates through the declared data lifecycle;
- users can export their meaningful data and delete their account;
- authentication, tenant isolation, rate limits, migrations, backups, job retries, monitoring, alerts, and rollback are exercised in staging;
- automated tests cover domain logic, authorization boundaries, ingestion idempotency, correction semantics, and the primary end-to-end journey;
- the production build, type check, lint, and test suite pass; and
- user-facing copy describes reflection and guidance, not diagnosis, treatment, proven causality, or certainty.

## Product value and model value

Shipping does not require a randomized study. Production telemetry should answer two separate questions:

1. **Is the product useful?** Track onboarding completion, first useful moment, weekly return, correction burden, recommendation acceptance and completion, participant-reported helpfulness and burden, export/deletion friction, and self-reported real-world follow-through. Do not use time spent with the AI as the success objective.
2. **Does adaptation add value?** In shadow evaluation, compare the shipped adaptive state and ranker with the fixed transparent baseline on forecast accuracy, calibration, correction rate, abstention quality, recommendation fit, and participant feedback. If the adaptive version does not win materially, keep or restore the simpler baseline.

The public claim at launch is that Wayfinder provides participant-controlled longitudinal reflection and bounded personalized guidance. A claim that it improves flourishing requires evidence beyond production readiness and remains outside this PRD.

## Out of scope for production alpha

- Clinical diagnosis, treatment, crisis counseling, or medical-device claims
- Autonomous messages, invitations, purchases, or calendar actions
- Contact-book scraping, message-history ingestion, passive location, or broker data
- Claims about another person's intent, reciprocity, attachment, or worth
- Open-ended agent autonomy
- Engagement optimization
- Uncontrolled online retraining or reinforcement learning
- General-purpose mental-state modeling
- More than one wearable integration
- Native iOS or Android applications unless separately specified
- Neural residuals, graph neural networks, contextual bandits, or large end-to-end learned models
- A participant-facing experiment dashboard or research workflow
