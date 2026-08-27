# Corvus stage demo

## Outcome

Corvus needs to tell its complete product story on a stage with one click and no operator input. In approximately 30 seconds, the audience should understand the transformation:

> A person has already told an AI what is wrong. Corvus converts that conversation into a source-linked manifest the person controls, finds eligible therapists using explicit constraints, and hands the approved context to the chosen therapist so the first human conversation does not start from zero.

The demo is a deterministic synthetic product walkthrough. It is not a claim that an autonomous clinical system exists, and it must not diagnose, recommend treatment, or imply that therapist chemistry can be guaranteed.

## Stage conditions

- Primary viewport: 16:9 at 1920×1080 or 1280×720.
- The screen may be viewed from the back of a room. Primary copy, state changes, and the current action must be readable at distance.
- The presenter may have only a trackpad and cannot type or babysit the flow.
- Network conditions may be unreliable after the page has loaded. The run must use bundled synthetic data and no runtime network requests.
- A failed rehearsal or accidental early launch must be recoverable with an always-visible restart control.

## Visual language

Use the design language associated with Evil Rabbit's minimal Vercel work and Vercel Ship '24 without copying branded assets:

- an ink-black stage, hard white typography, and one electric signal color;
- oversized geometric headings with very few words;
- a restrained grid of hairline borders, technical labels, and high-density product evidence;
- a field of magnetic particles that visibly moves from unstructured conversation to structured handoff;
- motion that communicates transformation and progress, not decoration;
- no warm editorial paper, therapy stock imagery, glassmorphism, or ornamental gradients.

The page should feel like a product launch instrument: precise, kinetic, premium, and calm under pressure.

## One-click choreography

The launch surface has one dominant control labeled `Run 30-second demo`. Selecting it starts a deterministic run and requires no further input.

| Elapsed time | Product state | Audience takeaway |
| --- | --- | --- |
| 0–4s | Maya's AI disclosure is visible; the signal begins moving | People already tell AI what is wrong |
| 4–12s | Corvus extracts three source-linked manifest items, corrects “panic” to Maya's preferred “anxiety,” and approves each item | The AI proposes; the person controls the record |
| 12–19s | Explicit eligibility constraints resolve to a small verified directory; Lena is selected | Matching is bounded and explainable, not magic chemistry prediction |
| 19–27s | The exact approved context is assembled for Lena with source provenance and the non-clinical boundary | The therapist starts with the context Maya chose to share |
| 27–30s | The human handoff resolves and the final line lands | Maya does not start from zero |

The run must finish between 29 and 31 seconds under normal browser scheduling. A persistent timeline shows the current chapter and seconds remaining. `Restart` resets the synthetic state and immediately begins a fresh run. At completion, `Replay` begins again with one click.

## Interaction model

- Before launch, the demo is inert and stage-ready.
- During an automated run, scripted product controls are visually demonstrated but not required from the presenter.
- Manual exploration remains available as a secondary control for rehearsal and product inspection.
- The autonomous run uses elapsed time as the source of truth so delayed frames do not accumulate timing drift.
- Reduced-motion users receive the same state transitions without particle travel or large animated transforms.

## Product truth preserved

- The original conversation is synthetic and visibly labeled.
- Every manifest fact retains the source span from Maya's words.
- Manifest content begins as a proposal and becomes shareable only through an explicit synthetic approval event.
- The visible correction is recorded before approval.
- Therapist filtering uses deterministic, visible constraints: jurisdiction, vetting, availability, insurance, modality, preference, and relevant experience.
- Corvus does not diagnose, formulate, recommend treatment, or claim to know therapeutic chemistry.
- Only approved facts appear in the handoff.
- A therapist remains responsible for clinical judgment.

## Acceptance criteria

1. From a fresh page, one click on `Run 30-second demo` reaches `Ready for the first conversation` without further input.
2. The automated run visibly passes through disclosure, manifest review, matching, handoff preview, and completion in order.
3. The manifest shown during the run contains Maya's correction from “panic” to “anxiety” and retains source provenance.
4. Lena Brooks is selected from eligible synthetic profiles for visible, deterministic reasons.
5. The handoff contains only approved facts and its non-diagnostic boundary.
6. A countdown/progress indicator and restart control remain visible throughout the run.
7. The completed state appears between 29 and 31 seconds after launch.
8. The stage composition fits without horizontal overflow at 1280×720 and remains usable at 390×844.
9. Existing domain tests, lint, type checking, production build, and the full browser journey pass.

## Non-goals

- Production authentication, persistence, provider directory integrations, or clinical workflow.
- Live LLM extraction or generated therapist recommendations.
- Claims about clinical outcomes, causal impact, or therapist chemistry.
- A generalized animation framework.
