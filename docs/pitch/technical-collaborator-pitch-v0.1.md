# Technical collaborator pitch v0.1

- **Audience:** ML-trained scientific collaborator
- **Status:** Working draft
- **Date:** 2026-08-21

Primary-source support and claim boundaries are recorded in the [ad-tech-to-flourishing evidence audit](../research/adtech-to-flourishing-evidence-audit.md).

## The factual spine

Use this argument:

1. Large-scale ad systems already perform real-time personalized action prediction using longitudinal behavioral and conversion signals.
2. Sensitive health and location data have entered advertising ecosystems in documented cases.
3. This does **not** establish that consumer platforms are omniscient, that raw wearable heart rate is routinely fused into Meta profiles, or that individual purchases can be predicted with near certainty.
4. It does establish that enormous technical effort has been applied to learning and influencing behavior for commercial objectives.
5. The opportunity is to invert the objective and governance: build a participant-owned model evaluated on verified improvements in life outside the product.

The strongest story is not “they can read your mind.” It is “they do not need to read your mind to move aggregate behavior and generate enormous economic value.”

## Recommended opening

> **Your behavior is already being modeled. The objective just isn't your flourishing.**
>
> The most sophisticated personalized behavior models most people encounter are not built to help them. They are built to predict the next click, conversion, or purchase.
>
> Ad platforms learn from sequences of behavior, estimate the probability of a desired action in real time, and improve across massive numbers of interactions. Regulators have also documented cases where sensitive health and precise-location data entered advertising systems without meaningful consent. That does not mean Meta has a perfect model of your mind, and I do not want to make that claim. It means personalized behavioral prediction already works well enough to support one of the largest industries on Earth.
>
> I want to invert it. What if the person—not the advertiser—were the principal? What if the outcome were stronger relationships, greater agency, and better recovery—not conversion?

## Ninety-second technical pitch

> We are building a participant-owned model of social flourishing.
>
> With explicit consent, it combines short check-ins, relationship events, context, optional wearable recovery signals, and structured evidence extracted from conversation. An LLM handles language, but it does not decide what the person feels or what they should do. Underneath it, a hierarchical Bayesian state-space model maintains an uncertain estimate of six narrow constructs—belonging, support, agency, avoidance, receptivity, and distress—alongside an explicit temporal relationship graph.
>
> The first scientific claim is intentionally small: can we forecast those states one, seven, and fourteen days ahead better than a moving average, mixed-effects models, static graph features, and an LLM looking at the same recent context? If not, we stop.
>
> If forecasting works, the model becomes an active measurement system. It asks the one question most likely to distinguish competing explanations while minimizing burden. Only after that is validated do we micro-randomize among safe, participant-approved actions and learn which action helps, for whom, and when.
>
> The product experience is simple: one short check-in, one correctable explanation of the trajectory, and at most one useful real-world action. The technical problem is not another chatbot. It is longitudinal inference, partial pooling, causal learning, calibrated uncertainty, and privacy under sparse multimodal data.
>
> The north-star result is not engagement with the AI. It is better relationships and less need for the system over time.

## The concrete product moment

> Imagine someone who moved to a new city. Their interaction count is up, but their felt connection is down and their sleep has deteriorated. A generic assistant sees “loneliness” and says to socialize more. Our model distinguishes low belonging from low social capacity. It might learn that another event tonight is counterproductive, while a short one-to-one invitation tomorrow is more likely to help. It shows why, asks permission, and learns from what actually happens.

## Why an ML scientist should believe there is a research program

- **A generative target:** a small, explicit latent state with multimodal observation models.
- **Personalization discipline:** hierarchical priors and partial pooling instead of one underpowered model per person.
- **Prospective falsifiability:** timestamped forecasts evaluated only on future observations.
- **Competitive baselines:** moving averages, mixed-effects models, static features, and LLM-only predictions.
- **Active sensing:** expected information gain under annoyance and sensitivity costs.
- **Causal progression:** observation first, then micro-randomized low-risk interventions.
- **Ablations and kill criteria:** every modality and layer of complexity must add measurable value.
- **A hard architecture boundary:** language generation is separate from state estimation and intervention policy.

## The ask

> I am looking for someone who wants to build the inference and experimental core—not just wrap an LLM. The immediate work is to formalize the generative model, test identifiability and power in simulation, define the event and observation contracts, and design the smallest prospective alpha that can kill or strengthen the thesis.

## Phrases to avoid

| Avoid | Use instead |
|---|---|
| “Your wearable and Meta are working together right now.” | “Behavioral, health, and location signals have all been used in advertising ecosystems, though direct wearable-to-Meta fusion is not established as a routine practice.” |
| “They know your mind better than you do.” | “They predict commercially relevant actions well enough to move conversion rates at extraordinary scale.” |
| “We can predict you with near certainty.” | “We produce calibrated probabilities and explicitly measure when personalization adds predictive value.” |
| “The exact same technology will fix people.” | “We adapt the proven pattern of longitudinal prediction and feedback, with different models, governance, outcomes, and causal standards.” |
| “An AI that tells you what to do.” | “A participant-owned research loop that suggests a safe action, shows its basis, and learns only with permission.” |
| “A human flourishing score.” | “A small set of distinct outcomes whose tradeoffs and uncertainty remain visible.” |

## One-line versions

**Provocative:**

> Ad-tech built a world model to optimize what you buy; we are building a personal model to optimize whether your life gets better.

**Technically precise:**

> We are building a consented, uncertainty-aware, longitudinal model that forecasts social flourishing and eventually learns the causal effect of low-risk actions for an individual.

**Product:**

> It learns what helps you feel connected, catches a worsening trajectory early, and suggests one manageable real-world action at the right time.

## Credibility closer

> The point is not that we already know this will work. The point is that the claim is now testable. We can define the latent variables, issue prospective forecasts, compare them with strong baselines, randomize safe interventions, and kill the idea if it does not improve real outcomes. That is the company I want to build.
