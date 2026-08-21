> Status: Working specification
>
> Imported as the founding technical concept on 2026-08-21. Claims and citations remain to be independently verified; imported citation markers are retained as provenance from the source draft.

# Personalized Social Flourishing Model v0.1

## 1. Core decision

The initial model will be a:

> **Coupled hierarchical Bayesian state-space model of social flourishing, informed by an explicit temporal relationship graph and multimodal observations.**

The LLM will perform three jobs:

1. Convert natural conversation into structured observations.
2. Ask targeted questions when the model is uncertain.
3. Explain model outputs in ordinary language.

The LLM will **not** independently estimate the user’s state, choose interventions, or simulate the user’s future.

The initial model will not use:

- end-to-end reinforcement learning;
- a giant mystery embedding called “the user”;
- an unconstrained neural transition model;
- autonomous messages or social actions;
- a Temporal Graph Network;
- one composite “human flourishing score.”

Those can come later if simpler methods fail and additional complexity produces measurable gains.

Deep tech does not mean cramming five neural networks into the architecture. It means making calibrated, prospective predictions about hidden human dynamics, adapting those predictions to an individual, and surviving randomized testing.

---

## 2. Initial scientific claim

The first claim should be deliberately narrow:

> Given a person’s recent conversations, relationship events, self-reports, context, and wearable-derived recovery signals, can a model predict their social state one, seven, and fourteen days into the future better than simple baselines?

The second claim comes later:

> Can the model predict which of several low-risk actions is most likely to improve that person’s subsequent social state?

The first version is therefore not trying to “solve flourishing.” It is trying to model one tractable portion of flourishing:

- felt belonging;
- perceived social support;
- relationship depth;
- social agency;
- social avoidance;
- capacity for social engagement.

That is enough to demonstrate the thesis.

---

## 3. System architecture

```text
Natural conversation
        |
        v
LLM structured-event extractor
        |
        v
Evidence and provenance store
        |
        +----------------------+
        |                      |
        v                      v
Temporal relationship graph   Wearable/context features
        |                      |
        +----------+-----------+
                   |
                   v
Hierarchical Bayesian state-space model
                   |
          posterior over current state
                   |
        +----------+-----------+
        |                      |
        v                      v
future-state forecasting      information-gain engine
        |                      |
        v                      v
candidate action values       next useful question
        |
        v
constrained recommendation policy
        |
        v
LLM explanation and user interface
```

The important architectural boundary is:

\[
\boxed{\text{LLM language reasoning} \neq \text{state estimation}}
\]

The LLM creates evidence. The probabilistic model decides how much that evidence should change its beliefs.

---

## 4. The hidden state

For user \(i\) at time \(t\), define a six-dimensional latent state:

\[
z_{i,t}
=
\begin{bmatrix}
B_{i,t}\\
P_{i,t}\\
A_{i,t}\\
V_{i,t}\\
R_{i,t}\\
D_{i,t}
\end{bmatrix}
\]

### \(B_t\): Belonging

The extent to which the person currently feels included, known, and connected.

This is not the same as interaction count. A person can attend a party and experience low belonging.

### \(P_t\): Perceived support

The extent to which the person believes someone would reliably be available if they needed emotional or practical support.

This distinguishes:

> “I know many people”

from:

> “I have someone I could call.”

### \(A_t\): Social agency

The person’s current confidence and perceived ability to initiate, deepen, repair, or maintain relationships.

This includes social self-efficacy and willingness to act.

### \(V_t\): Avoidance and social threat

The degree to which rejection expectations, interpersonal anxiety, conflict, shame, or avoidance are suppressing social behavior.

A person may have ample social opportunity but be unable or unwilling to act on it.

### \(R_t\): Receptivity and social energy

The person’s immediate capacity and desire for social engagement.

This helps prevent the model from treating exhaustion as loneliness.

### \(D_t\): Distress and recovery load

The broader short-term load imposed by poor sleep, illness, workload, physiological depletion, negative affect, or disruptive events.

Wearables contribute heavily here, but do not determine it by themselves.

Six variables is not arbitrary. Simulation work on personalized psychological networks found that exact temporal structures remain difficult to recover with 75 to 100 observations per person, and recommended reducing the network to approximately six variables at those sample sizes. citeturn335771view1

---

## 5. The social graph is separate from the psychological state

The model also maintains an explicit social graph:

\[
G_{i,t}=(V_{i,t},E_{i,t})
\]

Nodes include:

- people;
- groups;
- recurring activities;
- communities;
- institutions;
- relevant places.

Each relationship edge can contain:

\[
e_{ij,t}
=
[
\text{closeness},
\text{reciprocity},
\text{support},
\text{frequency},
\text{initiative balance},
\text{locality},
\text{momentum},
\text{uncertainty}
]
\]

For example:

```text
Relationship: Sam
Closeness: moderate
Reciprocity: uncertain
Interaction frequency: increasing
Interaction context: almost entirely group-based
Initiation balance: Sam initiates slightly more
Geography: local
Trajectory: promising
Confidence: moderate
```

The graph produces interpretable features such as:

\[
g_{i,t}
=
[
\text{strong-tie coverage},
\text{local embeddedness},
\text{reciprocity},
\text{repeated exposure},
\text{network resilience},
\text{promising weak ties}
]
\]

The graph is not identical to the latent state.

A person may have a structurally healthy network and still feel disconnected. Another may have only three relationships but experience high belonging and support.

In v0, this graph should be an explicit event-sourced graph with simple Bayesian smoothing. Do not use a GNN yet. Temporal Graph Networks are appropriate once there is enough event volume to justify learned dynamic graph representations, but the first model needs to establish that graph history adds predictive value at all. citeturn641591academia3

---

## 6. Inputs

### 6.1 Conversation

The LLM processes only conversations that the participant has explicitly allowed to contribute to the research model.

It converts relevant language into structured evidence:

```json
{
  "event_type": "social_interaction",
  "timestamp": "2026-08-20T18:30:00-05:00",
  "people": ["person_17"],
  "interaction_mode": "in_person",
  "group_size": 5,
  "duration_minutes": 90,
  "initiative": "other",
  "experienced_valence": 0.72,
  "felt_connection": 0.31,
  "perceived_inclusion": 0.44,
  "future_interest": 0.81,
  "evidence_span_id": "span_482",
  "extractor_confidence": 0.76
}
```

The model must retain:

- the source observation;
- the exact evidence span;
- extraction confidence;
- whether the user confirmed or corrected it;
- which model version produced it.

An LLM extraction is not treated as truth. It is treated as a noisy measurement.

### 6.2 Explicit micro-check-ins

Conversation cannot be the only measurement system. Otherwise the model may merely learn ChatGPT’s interpretation of the user.

The participant receives one short adaptive check-in per day, generally containing two or three questions. Questions are rotated rather than asking about all six constructs every day.

Examples:

- “How connected to other people did you feel today?”
- “Was there someone you could have called if you needed support?”
- “How willing did you feel to initiate plans?”
- “How worried were you about being rejected or unwanted?”
- “How much energy did you have for interacting with people?”

A longer weekly anchor survey measures the target constructs more consistently. The model should periodically be validated against established instruments for loneliness, support, and belonging. The UCLA Loneliness Scale Version 3, for example, demonstrated strong internal consistency and test-retest reliability across several populations. citeturn438239search7

### 6.3 Wearable-derived variables

The initial wearable feature set should remain small:

\[
w_{i,t}
=
[
\text{sleep duration deviation},
\text{sleep regularity},
\text{activity load},
\text{resting heart-rate deviation},
\text{HRV deviation},
\text{recent exercise}
]
\]

Every feature should be normalized relative to the individual:

\[
\tilde{x}_{i,t}
=
\frac{x_{i,t}-\mu_i^{baseline}}
{\sigma_i^{baseline}+\epsilon}
\]

The question is not whether someone slept less than the population average. It is whether they slept unusually poorly relative to their own baseline.

Nutrition can be included when actively logged, but it should initially be treated as optional contextual evidence. Self-reported nutrition data are sparse enough that it should not become a central state variable in v0.

### 6.4 Context

Context includes:

- exams;
- major deadlines;
- travel;
- illness;
- moving;
- relationship conflict;
- family events;
- weekends and holidays;
- changes in living arrangements;
- unusually high physical workload.

Context is not inferred solely from physiology. It comes from structured user reports, calendar information where explicitly permitted, and conversation extraction.

---

## 7. Mathematical model

The initial model should use a linear or mildly nonlinear hierarchical Bayesian state-space formulation.

For person \(i\):

\[
z_{i,t+1}
=
\mu_i
+
A(z_{i,t}-\mu_i)
+
\Gamma g_{i,t}
+
\Omega w_{i,t}
+
B a_{i,t}
+
C c_{i,t}
+
\epsilon_{i,t}
\]

where:

- \(z_{i,t}\) is the six-dimensional hidden psychological state;
- \(\mu_i\) is that person’s baseline state;
- \(A\) models state persistence and interactions;
- \(g_{i,t}\) contains social-graph features;
- \(w_{i,t}\) contains wearable-derived features;
- \(a_{i,t}\) represents actions or interventions;
- \(c_{i,t}\) contains contextual events;
- \(\epsilon_{i,t}\) is unexplained process noise.

The process noise is:

\[
\epsilon_{i,t}\sim
\mathcal N(0,Q_i)
\]

The model does not claim that tomorrow is determined by today. It estimates a distribution over possible next states.

### Hierarchical personalization

Every user gets an individual model, but not a separately trained neural network.

Instead:

\[
\mu_i\sim\mathcal N(\mu_{\text{population}},\Sigma_\mu)
\]

and selected personal coefficients are partially pooled:

\[
\beta_{i,a}
\sim
\mathcal N(\beta_{\text{population},a},\sigma_a^2)
\]

This means the new user begins with population-level priors. Their own data then gradually moves the posterior.

Conceptually:

\[
P(\theta_i\mid D_i,D_{\text{population}})
\propto
P(D_i\mid\theta_i)
P(\theta_i\mid D_{\text{population}})
\]

The model should initially personalize only:

- baseline levels;
- state persistence;
- response to major action categories;
- wearable sensitivity;
- observation reliability.

It should not immediately estimate an entirely separate \(6\times6\) transition matrix for every user. There will not be enough data.

### Observation model

The hidden state produces multiple imperfect observations:

\[
y_{i,t,m}
\sim
p_m\left(
\lambda_m^\top z_{i,t},
\sigma_m
\right)
\]

Different observation types use different likelihoods.

For a 1-to-7 self-report item, use an ordinal model:

\[
P(y_{i,t,m}\le k)
=
\Phi\left(
\tau_{m,k}
-
\lambda_m^\top z_{i,t}
\right)
\]

For continuous wearable values, use Gaussian or robust Student-\(t\) likelihoods.

For counts such as social interactions, use Poisson or negative-binomial likelihoods.

For binary events, use Bernoulli likelihoods.

For LLM-extracted construct evidence:

\[
e_{i,t,k}^{text}
\sim
\mathcal N
\left(
\lambda_k^\top z_{i,t},
\frac{\sigma_{text,k}^2}{r_{i,t,k}}
\right)
\]

where \(r_{i,t,k}\) is a separately calibrated reliability estimate. The LLM’s own confidence score must not be blindly trusted.

### Online state estimation

After each new observation, update:

\[
p(z_{i,t}\mid D_{i,1:t})
\]

The output is a posterior distribution:

```text
Belonging:
mean = 0.41
80% interval = [0.27, 0.58]

Perceived support:
mean = 0.77
80% interval = [0.64, 0.87]

Social receptivity:
mean = 0.22
80% interval = [0.08, 0.43]
```

This is much more honest than:

> “You are lonely.”

---

## 8. What the model predicts

The first model should make a small number of prospective predictions.

### Psychological outcomes

\[
p(z_{i,t+h}\mid D_{i,1:t})
\]

for:

\[
h\in\{1,7,14\}\text{ days}
\]

### Observable outcomes

- next-day felt connection;
- next-week belonging;
- next-week perceived support;
- probability of social withdrawal;
- probability that a promising relationship receives another interaction;
- probability that a local tie deepens over the following month;
- probability that the person follows through on a suggested action.

### Relationship trajectories

For relationship \(j\):

\[
P(
r_{ij,t+h}
\mid
r_{ij,1:t},
z_{i,t},
x_{i,t}
)
\]

This could answer:

> Is this tie strengthening, stable, dormant, or decaying?

The system must label that as an uncertain trajectory estimate, not a claim about what the other person privately thinks.

---

## 9. Adaptive questioning

This is where the “personalized research program” becomes real.

The model should not ask every user the same survey questions forever. It should select the question with the highest expected information value.

For candidate question \(q\):

\[
q^*
=
\arg\max_q
\left[
I(z_{i,t};Y_q\mid D_{i,1:t})
-
\lambda C(q)
\right]
\]

where:

- \(I\) is expected information gain;
- \(Y_q\) is the possible answer;
- \(C(q)\) is annoyance, sensitivity, or cognitive burden.

Suppose the model is unsure whether a recent decrease in social activity reflects exhaustion or avoidance.

It could ask:

> “Did you want to see people today but feel too depleted, or did interacting with people itself feel aversive?”

That question is not generic therapy dialogue. It is an active measurement selected to distinguish competing latent hypotheses.

The LLM writes the natural-language question. The probabilistic model decides which distinction matters.

---

## 10. The action model

The initial action taxonomy should stay small:

\[
a_t\in
\{
\text{no action},
\text{rest/recover},
\text{contact strong tie},
\text{deepen promising tie},
\text{attend recurring group},
\text{reconnect dormant tie}
\}
\]

V0 records naturally occurring actions and predicts their consequences.

It does not initially optimize them.

Once enough data exist, a micro-randomized trial can repeatedly randomize among several safe and reasonable intervention options at eligible decision points. Micro-randomized trials were specifically developed to estimate how intervention effects change across time and context in just-in-time adaptive interventions. citeturn436079search1turn436079search11

The causal target is:

\[
\tau(a,z)
=
E[Y_{t+h}\mid do(a),z_t=z]
-
E[Y_{t+h}\mid do(a_0),z_t=z]
\]

The key word is `do`.

The system needs to learn the effect of taking an action, not merely observe that socially successful people often take that action.

There should be no reinforcement-learning policy in v0. Eventually, conservative contextual bandits or offline policy learning may be appropriate. But first the system must demonstrate that it can estimate state and short-term treatment effects.

---

## 11. Why the initial transition model should not be a neural network

Dreamer and related world-model systems use learned latent dynamics to imagine possible future trajectories. That is the correct conceptual analogy, and DreamerV3 demonstrates the general power of learning an environment model and improving behavior through imagined futures. citeturn641591search0turn641591search1

But applying that architecture directly to humans in v0 would be premature.

The initial data will be:

- sparse;
- irregular;
- heavily confounded;
- partly self-reported;
- highly person-specific;
- affected by unobserved events;
- nonstationary;
- expensive to collect.

A large neural transition model would have enormous capacity to fit noise while producing impressive-looking latent embeddings.

The initial model should therefore use a sparse, interpretable transition matrix \(A\), with psychologically plausible priors.

Psychological theory provides priors such as:

- distress may reduce receptivity;
- avoidance may reduce social contact;
- reduced contact may lower belonging;
- belonging may increase future agency;
- poor recovery may temporarily lower receptivity.

These are hypotheses, not laws.

Prior work has explored combining clinician and patient case formulations with longitudinal EMA data by incorporating formulation knowledge as informative Bayesian priors. That is close to the philosophy here: theory proposes structure, but observed longitudinal data determine the posterior. citeturn436079search3

### Neural residual, later

After the baseline model is working, introduce a small learned residual:

\[
z_{i,t+1}
=
f_{\text{structured}}
(z_{i,t},g_{i,t},w_{i,t},a_{i,t},c_{i,t})
+
r_\theta(h_{i,t})
+
\epsilon_{i,t}
\]

The residual network \(r_\theta\) captures patterns omitted by the structured model.

It remains only if it improves held-out forecasting, calibration, or intervention-effect prediction.

The neural network has to earn its rent.

---

## 12. How long personalization takes

These are engineering expectations, not validated guarantees.

| Time/data | What the system can plausibly know |
|---|---|
| First conversation | Explicit facts and hypotheses extracted from language. No personalized dynamics yet. |
| 7 to 14 days | Rough sleep, activity, interaction, and self-report baselines. Basic anomaly detection. |
| 4 to 8 weeks | Early estimates of state persistence and short-horizon associations. Confidence remains limited. |
| 8 to 12 weeks | More credible one-day and one-week forecasting, assuming frequent observations. |
| 3 to 6 months | Repeated within-person patterns and early estimates of differential responses to common actions. |
| Longer-term cohort data | Better population priors, transition-specific models, and limited causal personalization. |

Accuracy is question-specific.

After three months, the model might know:

> Poor sleep reliably lowers this person’s social receptivity the following day.

while knowing almost nothing about:

> What would help this person after a breakup?

There should be no single “87% understands you” score.

Every output should show:

- relevant observation count;
- recency of evidence;
- population versus individual contribution;
- posterior uncertainty;
- whether the estimate is predictive, correlational, or causal.

---

## 13. How we determine whether it knows anything

The model does not know something because its explanation sounds insightful.

It knows something only when its internal state gives it prospective leverage over unseen reality.

### Baselines

Every model must be compared with:

1. Last observation carried forward.
2. Seven-day moving average.
3. Linear mixed-effects regression.
4. Static questionnaire scores.
5. Static graph features.
6. LLM-only prediction from recent conversation.
7. Human-authored generic best-practice rules.

The LLM-only baseline is crucial.

If ChatGPT can make equally accurate forecasts from the prompt alone, the latent model is not differentiating anything.

### Prospective evaluation

At time \(t\), freeze the model.

Generate:

\[
p(Y_{t+1},Y_{t+7},Y_{t+14}\mid D_{1:t})
\]

Then wait for those outcomes.

No future-context leakage. No retroactive story construction.

### Metrics

For continuous outcomes:

- mean absolute error;
- negative log likelihood;
- continuous ranked probability score;
- posterior interval coverage.

For binary outcomes:

- Brier score;
- log loss;
- calibration error;
- area under the precision-recall curve.

For relationship trajectories:

- edge-event prediction;
- relationship-strength error;
- survival or time-to-next-interaction prediction.

### Calibration

When the model says:

> 70% probability,

the event should occur approximately 70% of the time across comparable predictions.

Calibration is more important than dramatic confidence.

### Ablation studies

Compare:

\[
M_1=\text{EMA only}
\]

\[
M_2=M_1+\text{conversation}
\]

\[
M_3=M_2+\text{social graph}
\]

\[
M_4=M_3+\text{wearable}
\]

\[
M_5=M_4+\text{personalized dynamics}
\]

This tells us which modalities actually contribute.

Wearables may add almost nothing beyond sleep. Conversation may contain most of the useful signal. The graph may dominate. The experiment should decide.

### Causal proof

The strongest eventual test is:

\[
V(\pi_{\text{model}})
>
V(\pi_{\text{generic}})
\]

in a prospective randomized study.

That means participants receiving model-selected interventions improve more than participants receiving:

- generic best practice;
- random eligible interventions;
- measurement only.

That is when the system can credibly claim to improve social flourishing.

---

## 14. Initial study design

### Population

Start with people undergoing a predictable social transition:

- first-year college students;
- people who recently moved;
- newly remote workers;
- recent graduates.

College transition is particularly useful because social graphs change rapidly and repeatedly.

### Cohort

A reasonable initial target is:

- 100 to 200 participants;
- 12 weeks;
- one adaptive micro-check-in per day;
- one weekly anchor survey;
- optional conversation ingestion;
- optional wearable integration;
- explicit social-event correction interface.

The exact sample should be finalized through simulation-based power analysis using the intended hierarchical model.

A smaller 10-to-20-person alpha can validate engineering, burden, extraction quality, and data schemas. It cannot validate the scientific claim.

### Study stages

**Stage 1: Measurement**

Validate whether LLM-extracted evidence agrees with participant corrections and explicit measurements.

**Stage 2: Forecasting**

Evaluate whether the latent state model beats simple and LLM-only baselines.

**Stage 3: Adaptive measurement**

Test whether information-gain-selected questions preserve accuracy while reducing survey burden.

**Stage 4: Low-risk micro-randomization**

Randomize among safe, participant-approved intervention categories and estimate proximal effects.

**Stage 5: Policy evaluation**

Compare model-selected recommendations with generic recommendations.

---

## 15. Model output contract

The backend should return something structurally similar to:

```json
{
  "state_timestamp": "2026-08-20T21:00:00-05:00",
  "latent_state": {
    "belonging": {
      "mean": 0.43,
      "interval_80": [0.29, 0.57]
    },
    "perceived_support": {
      "mean": 0.78,
      "interval_80": [0.66, 0.88]
    },
    "social_agency": {
      "mean": 0.61,
      "interval_80": [0.46, 0.74]
    },
    "avoidance_threat": {
      "mean": 0.28,
      "interval_80": [0.14, 0.47]
    },
    "social_receptivity": {
      "mean": 0.24,
      "interval_80": [0.09, 0.41]
    },
    "distress_load": {
      "mean": 0.73,
      "interval_80": [0.58, 0.84]
    }
  },
  "dominant_hypotheses": [
    {
      "hypothesis": "temporary physiological depletion",
      "probability": 0.66
    },
    {
      "hypothesis": "relationship-depth bottleneck",
      "probability": 0.48
    }
  ],
  "forecast": {
    "seven_day_belonging_decline_probability": 0.31
  },
  "highest_value_question": {
    "construct": "receptivity_vs_avoidance",
    "expected_information_gain": 0.19
  },
  "confidence_basis": {
    "personal_observations": 43,
    "population_weight": 0.61,
    "individual_weight": 0.39
  }
}
```

The LLM receives this structured output and says something like:

> “You seem to have decent social support, but you are unusually depleted this week. I would not interpret wanting less social contact tonight as evidence that your relationships are failing. One thing I am less sure about is whether you are tired generally or avoiding one specific interaction.”

That answer is grounded in a model state, evidence, and uncertainty.

---

## 16. Safety and epistemic constraints

The initial model must never:

- diagnose a mental disorder;
- claim to know another person’s intentions;
- autonomously message someone;
- recommend ending a relationship;
- manipulate the user into continued engagement;
- hide the provenance of an inference;
- treat LLM extraction as ground truth;
- run uncontrolled online reinforcement learning;
- optimize time spent with the AI.

Every inference must be correctable.

Every meaningful intervention requires user approval.

High-risk mental-health situations should use a separate deterministic safety system and human escalation protocol. They should not be handled by the learned flourishing policy.

The system’s dependency penalty is explicit:

\[
R
=
F_{\text{human relationships}}
-
\lambda D_{\text{AI dependence}}
-
\mu C_{\text{burden}}
\]

A successful system becomes less necessary.

---

## 17. Kill criteria

The project should be considered scientifically unsuccessful in its current form if:

- the model does not beat a moving average and LLM-only baseline;
- posterior intervals are badly calibrated;
- conversation extraction cannot be reliably corrected or validated;
- wearable features provide no incremental value and are retained anyway;
- personalized coefficients remain indistinguishable from population averages;
- the adaptive questionnaire does not reduce burden;
- model-selected interventions fail to outperform generic recommendations;
- users become more dependent on the AI without improving human relationships.

Those are useful negative findings. They prevent the project from turning into an ornate chatbot justified by unfalsifiable language.

---

## 18. The pitch

We are not asking an LLM to intuit someone’s life.

We use conversation as a qualitative sensor, wearables as quantitative sensors, and relationship history as an evolving social graph. Underneath the interface, a hierarchical Bayesian state-space model maintains a continuously updated probability distribution over the person’s latent social state.

It does not merely ask, “How are you feeling?”

It asks:

\[
\text{What hidden state most likely produced these observations?}
\]

\[
\text{How is that state changing?}
\]

\[
\text{What evidence would reduce our uncertainty?}
\]

\[
\text{What action is most likely to improve the trajectory?}
\]

Only then does an LLM translate the result into a human conversation.

The chatbot is not the intelligence.

**The chatbot is the instrument panel for a personalized computational research program running underneath it.**
