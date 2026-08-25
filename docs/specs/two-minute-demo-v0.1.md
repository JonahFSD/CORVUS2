# Two-minute demo v0.1

- **Status:** Accepted implementation target
- **Maturity:** Specified
- **Date:** 2026-08-25

## Pitch outcome

In under two minutes, a presenter can show that a consented journal observation and wearable snapshot update a transparent personal state model and produce one bounded, user-controlled real-world suggestion.

The demo proves a product interaction and an architectural boundary. It does not claim clinical validity, diagnostic ability, or measured intervention efficacy.

## Audience takeaway

> Advertising systems use personal signals to predict what benefits an advertiser. Wayfinder uses signals a participant chooses to share to maintain a correctable model that works for the participant.

## The tracer bullet

The public seam is the demo page at `/`.

The presenter starts with a participant who recently moved to a new city. The page shows:

1. an explicitly connected wearable snapshot;
2. a short participant-authored reflection;
3. the model's prior state and uncertainty;
4. an update action;
5. the resulting state changes, their evidence, and uncertainty; and
6. one low-risk suggestion that the participant can accept, decline, or correct.

The demo uses a deterministic synthetic scenario so it is reliable without credentials or network access. The state update is real application logic. Language extraction is a clearly labeled fixture behind the same observation contract a future LLM adapter will implement.

## Two-minute storyboard

### 0:00–0:25 — The inversion

Show the connected-signal and journal cards.

Say:

> Your behavior is already modeled. The objective just is not your flourishing. This is a model you own, built from signals you choose to share.

### 0:25–0:55 — Evidence becomes state

Read the reflection and select **Update my model**.

Say:

> The language model only turns language into evidence. A separate mathematical model decides how much the evidence and wearable changes should move its beliefs.

### 0:55–1:25 — Inspectability

Show the changed state dimensions, uncertainty, and evidence provenance.

Say:

> It does not label you. It shows a revisable hypothesis: connection is holding, but recovery load is up and social capacity is temporarily down.

### 1:25–1:50 — One useful action

Show the recommendation.

Say:

> A generic assistant might say “socialize more.” This model recommends recovery tonight and one low-pressure follow-up tomorrow because that fits this person's current capacity.

### 1:50–2:00 — Learning loop

Accept the suggestion.

Say:

> What happened next becomes new evidence. The goal is not more time with AI. It is a better decision in real life.

## Acceptance criteria

- The page works at phone and desktop widths.
- The entire story is operable without an API key, login, wearable account, or network request.
- Before the update, the page distinguishes prior state from incoming evidence.
- Updating runs through one typed state-estimation function rather than UI-only hard-coded outputs.
- The result shows direction, uncertainty, evidence source, and personal-baseline context.
- The recommendation is selected by a deterministic constrained policy outside the language layer.
- The user can inspect the evidence and mark the suggestion accepted or declined.
- The interface visibly states that the demo is non-diagnostic and uses synthetic data.
- Unit tests prove the state update and recommendation behavior for recovery-load and receptivity changes.
- Type checking, linting, tests, and a production build pass.

## Explicit exclusions

- No diagnosis, crisis assessment, treatment recommendation, or therapeutic claim.
- No live participant data or external wearable integration.
- No production authentication, persistence, notifications, or messaging.
- No claim that the language fixture is a live LLM extraction.
- No learned population parameters or scientific validation claim.
- No autonomous action on the participant's behalf.

## Follow-on seams

After the pitch demo works, later tickets may replace fixtures with:

1. a schema-constrained LLM observation adapter;
2. a vendor-neutral WHOOP/Garmin ingestion adapter;
3. participant-owned persistence and consent records; and
4. a ChatGPT MCP server whose structured result is complete without its optional UI.
