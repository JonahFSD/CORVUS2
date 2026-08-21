# Open questions

These are ordered by how much they change the scientific claim or system design. Resolve them before polishing implementation details.

## 1. Who is the first participant?

The source draft lists college students, recent movers, newly remote workers, and recent graduates. Choose one transition and define inclusion/exclusion criteria. Different choices change the event model, outcome cadence, safety posture, recruitment, and acceptable interventions.

## 2. What counts as flourishing?

Social flourishing is the first wedge, but the relationship between the six latent variables and broader flourishing is still a hypothesis. Define the north-star outcome, proximal outcomes, adverse outcomes, and time horizons without collapsing them into one opaque score.

## 3. Are the six latent dimensions identifiable?

Belonging, perceived support, social agency, avoidance/threat, receptivity/energy, and distress/recovery may overlap in sparse longitudinal data. Specify discriminant-validity tests, anchor items, prior structure, and what happens if dimensions collapse empirically.

## 4. What is the minimum viable evidence stream?

Test conversation, check-ins, graph history, and wearables as separate additions. Decide which inputs are required, optional, or research-only. The product should remain useful if a participant declines conversation or wearable access.

## 5. What is an event?

Define canonical schemas for observations, social interactions, corrections, context, relationship changes, and interventions. Specify event time versus ingestion time, identity resolution, uncertainty, provenance, retractions, and model-version lineage.

## 6. What may the system infer about relationships?

Set a hard boundary between evidence about the participant's experience and claims about another person. Decide which edge attributes are self-reports, observed interaction properties, posterior estimates, or prohibited inferences.

## 7. What is the alpha's prospective protocol?

Define check-in cadence, weekly anchors, forecast issue times, frozen prediction records, missing-data handling, participant burden budget, correction UI, retention, and withdrawal. A 10–20 person alpha is for feasibility and measurement—not efficacy.

## 8. What advances or kills each modality?

Predefine the minimum incremental gain required for conversation, graph, and wearable features to remain. Complexity that does not improve held-out calibration or decision quality should be removed.

## 9. When can intervention research begin?

Specify the forecasting and measurement thresholds required before micro-randomization. Define participant-approved action categories, eligibility windows, contraindications, quiet periods, stopping rules, and adverse-event review.

## 10. What is the privacy architecture?

Decide local versus server-side processing, raw-text retention, evidence-span storage, encryption boundaries, graph identity handling, model deletion, export, research consent separation, and access auditability before collecting sensitive data.

## 11. How will LLM extraction be calibrated?

Model extractor errors independently of self-reported confidence. Create a human-corrected evaluation set, define abstention behavior, measure error by construct and subgroup, and prevent extractor-version changes from silently shifting the observation model.

## 12. What is the product's honest language?

Define which statements are descriptive, predictive, correlational, causal, or unknown. The interface needs standard ways to show uncertainty, evidence recency, personal-versus-population contribution, and the user's ability to correct an inference.

## Suggested next decision

Write a one-page **target participant and use-case spec**. It will constrain nearly every question above and expose whether the first product is primarily a research instrument, a consumer product, or both.
