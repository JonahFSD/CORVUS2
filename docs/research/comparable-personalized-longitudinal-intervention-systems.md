# Comparable personalized longitudinal intervention systems

**Status:** research synthesis, not an architecture decision  
**Question:** How have other groups built and evaluated systems resembling Osanwe's proposed personalized social-flourishing measurement, forecasting, and intervention pipeline?  
**Scope:** primary system papers, original trials, official source repositories, and trial registrations available through 2026-08-26

## Bottom line

People have built nearly every *part* of the proposed pipeline, but this review found no validated system that joins all of them:

- repeated self-report plus passive longitudinal sensing;
- a narrow, uncertainty-aware dynamic state and prospective forecast;
- population-to-person learning with an explicit cold start;
- participant correction, source-level consent, and complete model lineage;
- adaptive measurement under a burden budget;
- randomized learning of safe real-world actions;
- a constrained, auditable policy; and
- an LLM restricted to language mediation rather than treated as the state estimator or policy.

The closest precedents are therefore a **stack of partial precedents**, not a product template. StudentLife and Beiwe show collection; Beiwe anomaly detection and later idiographic mood work show retrospective personalized prediction; HeartSteps shows the sequence from micro-randomization to a bounded online policy; DIAMANTE supplies rare randomized evidence that an adaptive messaging package can improve a repeatedly measured outcome; Oralytics shows the engineering discipline needed to deploy online reinforcement learning; Trialist shows both the promise and the null distal result of app-supported N-of-1 trials; mSavorUs is a particularly close social-connection pilot with a null quantitative result; and recent generative-chatbot trials show that an LLM interface can change self-reported outcomes without validating an explicit state model or personalized action policy.

That history supports Osanwe's staged plan. It does **not** support beginning with a six-state personal model, unrestricted passive surveillance, or an online reinforcement learner.

## Evidence labels used here

| Label | What it establishes |
|---|---|
| **System/feasibility** | The instrumentation or algorithm ran and produced usable data. |
| **Observational association** | Recorded variables covaried; direction and mechanism are not identified. |
| **Retrospective temporal prediction** | A model predicted held-out later records in an already collected dataset. This is weaker than issuing immutable forecasts prospectively. |
| **Simulated policy evidence** | An algorithm behaved acceptably in a constructed test bed; participant benefit is not established. |
| **Randomized proximal evidence** | Randomization identifies the effect of offering an option on a prespecified near-term outcome under the trial protocol. |
| **Randomized distal/system evidence** | Assignment identifies an effect of the assigned intervention package on a later study outcome; it usually does not identify which internal component caused it. |

## Closest precedents

### 1. StudentLife: multimodal sensing plus EMA in an everyday social setting

**What it ingested.** StudentLife followed 48 Dartmouth students for a 10-week academic term. Its Android app inferred activity, mobility, conversation frequency and duration, sleep timing and duration, location, and Bluetooth co-location. It collected 35,295 phone-delivered EMA and photographic-affect responses covering stress, mood, sleep, social encounters, exercise, and activities. Pre/post measures included PHQ-9 depression, perceived stress, loneliness, and an eight-item flourishing scale; academic outcomes were also collected.

**Model/state and adaptation.** Sensor-specific classifiers converted phone streams into behavioral features. Analyses related those features and EMAs to mental-health, flourishing, and academic measures and described cohort-level change across the term. It did not maintain a calibrated latent state, issue an immutable next-day predictive distribution, learn participant-specific parameters online, or choose an intervention.

**Evaluation and evidence.** This was a single-cohort observational field study. It established that continuous phone sensing and repeated EMA could run over a meaningful life transition and that several inferred behaviors were associated with self-report and academic outcomes. It did not establish causal effects, transportability, individual forecast calibration, or benefit from showing an inference to a participant. The sample was one computing class, predominantly male, at one institution.

**Osanwe lesson.** StudentLife is direct precedent for collecting social-context signals and flourishing-related anchors. It is also the clean example of the inferential gap Osanwe must not skip: a correlation between inferred conversation or co-location and a questionnaire is not a measurement model of connection, and measurement is not intervention evidence.

Primary source: Wang R, Chen F, Chen Z, et al. [StudentLife: Assessing Mental Health, Academic Performance and Behavioral Trends of College Students Using Smartphones](https://doi.org/10.1145/2632048.2632054). *Proceedings of UbiComp 2014*. 2014:3-14.

### 2. Beiwe and personalized anomaly detection: reproducible collection separated from inference

**What it ingested.** Beiwe was designed as a configurable research platform for active surveys and raw passive phone streams, including GPS, accelerometry, screen and power state, call/SMS metadata where the operating system permits, nearby devices, and optional audio samples. Study-specific collection settings, participant IDs, encrypted store-and-forward upload, and raw data retention were explicit parts of the system.

**Model/state and adaptation.** The foundational platform paper intentionally separated collection from server-side analysis and preserved the study configuration and analysis-version history. It also deliberately gave minimal feedback so measurement would not silently become an intervention. In a later schizophrenia pilot, Barnett and colleagues formed participant-specific daily behavioral profiles from mobility and social/phone-use measures, then used anomaly detection to ask whether a person's current behavior departed from their own historical pattern. This was a personal baseline/anomaly score, not a named psychological latent state.

**Evaluation and evidence.** Beiwe's initial evidence was architectural and feasibility evidence. In the relapse pilot, 17 participants enrolled, 15 contributed analyzable active/passive data for up to three months, five relapsed, and only three relapsing participants had sufficient data for the anomaly analysis. The rate of detected anomalies was reported as 71% higher in the two weeks before relapse than in other periods. This was retrospective observational evidence from extremely few events, not a prospectively validated alert or an intervention trial.

**Limitations and Osanwe lesson.** Beiwe's raw-data and configuration lineage is strong precedent for reproducibility, and its minimal-feedback stance supports Osanwe's shadow-mode forecast phase. But encryption and pseudonymous IDs do not by themselves create participant ownership, field-level consent, correction, revocation, or data minimization. Raw location and communication metadata are especially sensitive. The anomaly study also shows why personal baselines are attractive but easy to overclaim when the number of consequential outcomes is tiny.

Primary sources:

- Torous J, Kiang MV, Lorme J, Onnela J-P. [New Tools for New Research in Psychiatry: A Scalable and Customizable Platform to Empower Data Driven Smartphone Research](https://doi.org/10.2196/mental.5165). *JMIR Mental Health*. 2016;3(2):e16.
- Barnett I, Torous J, Staples P, Sandoval L, Keshavan M, Onnela J-P. [Relapse Prediction in Schizophrenia Through Digital Phenotyping: A Pilot Study](https://doi.org/10.1038/s41386-018-0030-z). *Neuropsychopharmacology*. 2018;43(8):1660-1666.

### 3. STAND/AWARE personalized mood prediction: long records and separate person models

**What it ingested.** Balliu and colleagues paired computerized-adaptive depression assessments with AWARE smartphone sensing for up to 40 weeks. Among the 183 participants retained for prediction, the study included 3,005 assessment-days and 29,254 sensor-days. Location, screen behavior, calls, and texts were transformed into 1,325 raw and rolling-window features covering activity, social interaction, sleep/circadian behavior, and device use.

**Model/state and adaptation.** The assessment adapted questions using item-response methods. Sparse CAT-DI scores were represented using last-observation-carried-forward or smoothed cubic-spline trajectories. Separate elastic-net models were fit for each participant and compared with pooled models and pooled models with personal intercepts. The personal model was trained on the first 70% of that person's trajectory and tested on the last 30%.

**Evaluation and evidence.** This is strong **retrospective temporal prediction** evidence that sufficiently long personal records can outperform a one-size-fits-all model for some people. For the 143 participants with enough test assessments, an idiographic model significantly predicted at least one constructed trait for 113 (79%); median \(R^2\) among significantly predicted people was 47%. Results varied substantially by participant, and performance was worse for more variable trajectories.

**What it did not establish.** The system did not issue frozen day-by-day forecasts in deployment, report a fully calibrated predictive distribution, test a decision made from the forecast, or randomize an intervention. Test-period phone features were used to predict test-period mood records, so its “weeks ahead” analysis is not equivalent to Osanwe's fixed-cutoff prequential forecast. Daily target trajectories were partly interpolated from sparse assessments, and the analysis retained only people with enough assessments, sensor coverage, and outcome variation. Separate per-person models also have no credible cold start.

**Osanwe lesson.** This is the best direct evidence here for learning person-specific observation-to-outcome mappings and for adaptive-question burden reduction. Osanwe should still begin with partial pooling and direct next-day targets, compare against personal-intercept and last-value baselines, and refuse to call smoothed retrospective reconstruction a prospective forecast.

Primary source: Balliu B, Douglas C, Seok D, et al. [Personalized Mood Prediction From Patterns of Behavior Collected With Smartphones](https://doi.org/10.1038/s41746-024-01035-6). *npj Digital Medicine*. 2024;7:49. [Analysis code](https://github.com/BrunildaBalliu/stand_mood_prediction).

### 4. HeartSteps: micro-randomize first, then deploy bounded online learning

#### HeartSteps V1

**What it ingested.** Participants wore a Jawbone activity tracker and carried an app that recorded steps and decision context, including time, location, weather, recent activity, and availability. At five participant-specific times per day for 42 days, available participants were randomized among no message, a context-tailored walking suggestion, and an anti-sedentary suggestion; daily planning had its own randomization.

**Model/state and adaptation.** V1 used prespecified randomization rather than an online optimizing policy. The important “state” was a small vector of observable tailoring variables and availability, not a general latent model of the participant.

**Evaluation and evidence.** Forty-four sedentary adults enrolled; the principal analyses used 37 after exclusions. Walking suggestions increased steps in the following 30 minutes by an estimated 24%, approximately 59 steps (\(P=.02\)); the broader contrast of any suggestion versus none was approximately 14% or 35 steps and did not meet the conventional significance threshold (\(P=.06\)). The effect declined over study time; anti-sedentary suggestions did not show the intended effect. This is randomized evidence for a modest average **proximal excursion effect**, not proof of a durable increase in activity or an individually optimal policy.

#### HeartSteps V2

**What adapted.** V2 used a low-dimensional Bayesian Thompson-sampling algorithm at five daily decision points over 90 days. For each participant, a linear action-centered reward model estimated the advantage of sending a suggestion for log-transformed steps in the next 30 minutes. The policy used observable context and recent history, an informative prior and simulator built from V1, nightly posterior updates, a dosage proxy for delayed burden/habituation, availability checks, and randomization probabilities bounded away from zero and one.

**Evaluation and evidence.** The design paper reported simulation tests and an initial eight-person deployment, demonstrating that the algorithm could run—not that it improved a distal health outcome. Later exploratory resampling of trial traces found evidence consistent with differential learning for recent activity variation and location, but not for the prespecified engagement feature. That audit is important: stochastic policy variation can look like personalization even when it is noise.

**Osanwe lesson.** HeartSteps is the closest architectural precedent for Osanwe's later action loop. Its sequence matters more than its algorithm: define availability/action/reward, collect MRT evidence, build a simulator and prior from randomized data, keep the advantage model low-dimensional, bound exploration, log propensities, model dosage, and audit whether “personalization” actually occurred. Osanwe's social actions have slower, relational, and potentially interfering outcomes, making this bar harder—not easier—to meet.

Primary sources:

- Klasnja P, Smith S, Seewald NJ, et al. [Efficacy of Contextually Tailored Suggestions for Physical Activity: A Micro-randomized Optimization Trial of HeartSteps](https://doi.org/10.1093/abm/kay067). *Annals of Behavioral Medicine*. 2019;53(6):573-582.
- Liao P, Greenewald K, Klasnja P, Murphy SA. [Personalized HeartSteps: A Reinforcement Learning Algorithm for Optimizing Physical Activity](https://doi.org/10.1145/3381007). *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies*. 2020;4(1):18.
- Ghosh S, Kim R, Chhabria P, et al. [Did We Personalize? Assessing Personalization by an Online Reinforcement Learning Algorithm Using Resampling](https://doi.org/10.1007/s10994-024-06526-x). *Machine Learning*. 2024;113(7):3961-3997.

### 5. DIAMANTE: a randomized comparison of adaptive, random, and minimal messaging

**What it ingested.** DIAMANTE enrolled English- and Spanish-speaking adults with diabetes and elevated depression symptoms. A smartphone app measured daily steps. The adaptive algorithm used demographics, baseline clinical variables, prior message context, and ongoing step responses.

**Model/state and adaptation.** A contextual multi-armed bandit began with random selection and learned which feedback category, motivational category, and one of four daily time windows had higher expected next-day step reward. It adapted message content and timing, not a multidimensional psychological state.

**Evaluation and evidence.** The 24-week, three-arm randomized trial compared adaptive messaging, randomly selected daily messaging, and a control receiving weekly mood monitoring. Of 168 analyzed participants, the adaptive arm's fitted daily step trajectory increased by 3.61 steps per study day (95% CI 2.45-4.78), while its slopes were significantly more positive than the random and control arms. The authors estimated a 606-step increase from day 1 to day 168 in the adaptive arm.

This is rare **randomized system-level evidence** that the adaptive package outperformed random messaging and minimal monitoring on the repeated step outcome. The published primary analysis required sufficient step data rather than preserving a strict all-randomized intention-to-treat comparison; heterogeneous phones and differential missingness remain relevant. The learned policy also included a no-message option, so a difference in delivered dose may be part of the package effect. The trial does not show that the algorithm inferred an underlying psychological state, that every participant was personally helped, or which combination of content selection, timing, dosage, engagement, and modeling produced the difference. Steps were both the learning reward and primary study outcome, a much denser and less ambiguous target than felt connection or relationship depth.

**Osanwe lesson.** DIAMANTE is the strongest justification here for eventually comparing an adaptive policy with both a generic/random policy and measurement-only control. It also shows the value of a direct machine-readable outcome. Osanwe should not assume a sparse self-reported social outcome can support the same learning rate or identifiability.

Primary sources:

- Aguilera A, Arévalo Avalos M, Xu J, et al. [Effectiveness of a Digital Health Intervention Leveraging Reinforcement Learning: Results From the DIAMANTE Randomized Clinical Trial](https://doi.org/10.2196/60834). *Journal of Medical Internet Research*. 2024;26:e60834.
- [DIAMANTE trial registration NCT03490253](https://clinicaltrials.gov/study/NCT03490253).

### 6. Oralytics: deployable online RL, with the health-effect claim still separate

**What it ingested.** Oralytics combined a sensor-equipped electric toothbrush, a mobile app, self-reported normal brushing times, brushing history/quality, and app-engagement history. It made two daily decisions about whether to send an engagement prompt before expected brushing.

**Model/state and adaptation.** A Bayesian linear Thompson-sampling model used a compact observable context. Its reward combined proximal brushing quality—brushing duration minus overpressure—with an explicit penalty intended to represent future message burden. Randomization probabilities were clipped, the posterior was updated weekly using accumulated data across participants, and algorithm candidates were stress-tested in simulation before deployment.

**Evaluation and evidence.** The first deployed trial enrolled 79 participants for 70 days; an engineering error made seven participants' records unusable, leaving 72 for the deployment analysis. The published deployment paper established end-to-end operation and used resampling to show that the algorithm learned action advantages in some contexts. It explicitly left the prespecified health-science analysis outside its scope. The accompanying MRT protocol randomizes prompt versus no prompt twice daily and defines the sensor-derived brushing outcome; the registered later randomized comparison is the appropriate source for a whole-system benefit claim when reported.

**Osanwe lesson.** Oralytics is useful precisely because its authors separate four claims: the software ran, the learner updated, the stochastic policy learned something detectable, and the intervention improved health behavior. Those are not interchangeable. Its prespecified fallback schedules and 0.5 randomization when services or data failed are useful safe-degradation precedents. It also demonstrates why immutable event capture, monitoring, replay, and fallback policy are scientific infrastructure: one data-saving defect removed nearly 9% of enrolled participants from the deployment analysis.

Primary sources:

- Nahum-Shani I, Greer ZM, Trella AL, et al. [Optimizing an Adaptive Digital Oral Health Intervention for Promoting Oral Self-care Behaviors: Micro-randomized Trial Protocol](https://doi.org/10.1016/j.cct.2024.107464). *Contemporary Clinical Trials*. 2024;139:107464. [Trial NCT05624489](https://clinicaltrials.gov/study/NCT05624489).
- Trella AL, Zhang KW, Jajal H, et al. [A Deployed Online Reinforcement Learning Algorithm in an Oral Health Clinical Trial](https://doi.org/10.1609/aaai.v39i28.35143). *Proceedings of AAAI*. 2025;39(28):28792-28800. [Official simulation code](https://github.com/StatisticalReinforcementLearningLab/oralytics_algorithm_design).

### 7. Trialist and StudyU: N-of-1 learning is a designed experiment, not passive personalization

**What they ingested.** Trialist let a participant and clinician choose two chronic-pain regimens and trial parameters, reminded the participant which regimen to use on assigned days, and collected daily pain and adverse-effect reports. StudyU later generalized the infrastructure into an open-source designer and participant app supporting digital study definition, electronic consent, scheduled intervention periods and measures, automated analysis, and participant-facing results.

**Model/state and adaptation.** Trialist used repeated assigned crossover periods and a Bayesian model of the difference between regimen-specific symptom ratings, returning point estimates and 95% credible intervals. It did not continuously change the action policy. StudyU is configurable study infrastructure, not evidence that an automatically selected treatment works.

**Evaluation and evidence.** In PREEMPT, 215 chronic musculoskeletal-pain patients were randomized to an app-supported N-of-1 trial or usual care. Pain interference improved in both arms but did not significantly differ at six months (between-group difference -1.36 points, 95% CI -2.91 to 0.19; \(P=.09\)). The N-of-1 arm reported better medication-related shared decision-making; 88% of responding intervention participants said the app could help people like them manage pain. This establishes feasibility and one decision-process benefit, plus a null primary distal result. It does not mean that each embedded personal comparison was invalid; it means access to the N-of-1 process did not improve the study's primary population-level outcome.

**Osanwe lesson.** A personal experiment requires predeclared alternatives, randomized or otherwise defensible sequencing, repeated outcomes, carryover assumptions, adherence data, and an analysis—not simply “I suggested this and you felt better.” N-of-1 designs fit repeatable, reversible actions such as timing or format of a check-in better than relationship-changing actions with long carryover. The Trialist null result is also a warning that better personal evidence or shared decisions need not improve the distal outcome.

Primary sources:

- Kravitz RL, Schmid CH, Marois M, et al. [Effect of Mobile Device-Supported Single-Patient Multi-crossover Trials on Treatment of Chronic Musculoskeletal Pain: A Randomized Clinical Trial](https://doi.org/10.1001/jamainternmed.2018.3981). *JAMA Internal Medicine*. 2018;178(10):1368-1377. [Trial NCT02116621](https://clinicaltrials.gov/study/NCT02116621).
- Konigorski S, Wernicke S, Slosarek T, et al. [StudyU: A Platform for Designing and Conducting Innovative Digital N-of-1 Trials](https://doi.org/10.2196/35884). *Journal of Medical Internet Research*. 2022;24(7):e35884. [Official source repository](https://github.com/hpi-studyu/studyu).

### 8. mSavorUs: a close social-connection analogue with a null pilot result

**What it ingested and delivered.** mSavorUs combined repeated self-reports of momentary loneliness and connectedness with an Oura ring, a Samsung smartwatch, AWARE phone sensing, and a smartphone-delivered relational-savoring exercise. The sensing stack included sleep, physiology, physical activity, phone use, and behavioral context. When the system detected a possible period of elevated loneliness, it could prompt a participant to recall and elaborate a positive relational memory.

**Evaluation and evidence.** The 2025 mixed-methods randomized pilot enrolled 29 college students. Participants often described the content as rewarding or useful, but the timing of prompts was commonly experienced as disruptive. The quantitative analyses found no significant reduction in loneliness or increase in connectedness. This was a small feasibility pilot, so the null result is imprecise; it neither proves the intervention ineffective nor supports an efficacy claim.

**Osanwe lesson.** This is the closest literal precedent in this review for the proposed combination of wearable context, phone sensing, repeated connection measures, inferred vulnerability, and a just-in-time relational intervention. It shows why acceptable content, feasible sensing, and a plausible trigger do not add up to value. Osanwe should initially randomize prompt versus no prompt and compare simple timing rules before training a timing policy; prompt disruption and displacement of spontaneous human contact belong in the outcome set.

Primary source: Nguyen B, Lai J, Qureshi H, et al. [Feasibility, Acceptability, and Preliminary Outcomes of a Mobile Adaptation of a Relational Savoring Intervention to Prevent Loneliness in College Students: Mixed Methods Pilot Study](https://doi.org/10.2196/70528). *JMIR Formative Research*. 2025;9:e70528.

### 9. Generative conversational systems: evidence for an interface/package, not for Osanwe's core

Two primary randomized trials now make it unreasonable to claim there is *no* outcome evidence for generative conversational support. They still do not validate the architecture Osanwe proposes.

**Therabot.** An expert-fine-tuned generative chatbot delivered four weeks of conversational mental-health treatment to 106 participants while 104 were assigned to a waitlist. Self-reported depression, anxiety, and eating-disorder-risk outcomes improved more in the Therabot arm at four and eight weeks. The trial established an effect of access to the complete chatbot package relative to no app access over a short window. It did not use an active conversational control, isolate personalization, validate an external state estimator, or show that longer AI engagement is desirable. The study used human monitoring and contacted participants after inappropriate responses.

**Kai.AI.** A 2026 three-arm trial randomized 995 distressed university students to 12 weeks of a conversational platform, face-to-face group therapy, or waitlist. The platform combined LLMs with adaptive memory and a user profile. It improved self-reported well-being relative to both comparators and depression relative to waitlist, but not PTSD; follow-up attrition was about 35%, outcomes were self-reported, and company ties were disclosed. The relational interface and all content, memory, prompting, and safety procedures were randomized as one package. Engagement and perceived alliance were associated with outcome change, but that within-arm association is not a randomized mediation result.

**AI companions and momentary loneliness.** De Freitas and colleagues ran a sequence of observational and randomized online studies of AI companions. Brief randomized conversations reduced immediate self-reported loneliness more than several nonhuman comparison activities, and a seven-day study found repeated momentary relief after use. The work did not establish accumulated improvement without an active conversation, better human relationships, or protection against substitution and dependence. It is evidence for short-lived subjective relief from the conversational exposure, not a state estimator or a social-flourishing policy.

**Osanwe lesson.** These trials support testing an LLM-mediated interface as a versioned component. They do not support letting conversational fluency become state truth, treating remembered narrative as a validated personal model, or optimizing time with the AI. For Osanwe, the critical comparator is an LLM-only system given the same permitted evidence at the same cutoff. Human contact, AI dependence, unsafe responses, correction rate, and privacy regret must remain outcomes or counter-metrics.

Primary sources:

- Heinz MV, Mackin DM, Trudeau BM, et al. [Randomized Trial of a Generative AI Chatbot for Mental Health Treatment](https://doi.org/10.1056/AIoa2400802). *NEJM AI*. 2025;2(4). [Trial NCT06013137](https://clinicaltrials.gov/study/NCT06013137).
- Shoshani A, Gurfinkel B, Kor A, et al. [Efficacy of a Conversational AI Agent for Psychiatric Symptoms and Digital Therapeutic Alliance: A Randomized Clinical Trial](https://doi.org/10.1001/jamanetworkopen.2026.6713). *JAMA Network Open*. 2026;9(4):e266713. [Trial ISRCTN61075527](https://www.isrctn.com/ISRCTN61075527).
- De Freitas J, Oğuz-Uğuralp Z, Uğuralp AK, Puntoni S. [AI Companions Reduce Loneliness](https://doi.org/10.1093/jcr/ucaf040). *Journal of Consumer Research*. 2026;52(6):1126-1148. [Open materials](https://osf.io/hf9xe/).

## Explicit comparison with Osanwe

### Components with real precedent

| Osanwe component | Closest precedent | Evidence available | Boundary to preserve |
|---|---|---|---|
| Active plus passive longitudinal observation | StudentLife; Beiwe; STAND/AWARE | Field feasibility and observational/retrospective prediction | Sensors provide fallible proxies, not psychological truth. |
| Versioned acquisition configuration and raw-data lineage | Beiwe | Implemented research architecture | Add participant-visible correction, purpose-specific consent, deletion, and minimization. |
| Personal baselines | Beiwe anomaly detection | Small retrospective event study | An anomaly is not a named state or a validated alert. |
| Person-specific prediction | STAND/AWARE | Later-window retrospective prediction | Require cold-start baselines, partial pooling, prequential forecasts, and calibration. |
| Adaptive questions | CAT-DI in STAND | Efficient item selection for a validated assessment | This adapts test precision, not necessarily decision-relevant daily information under burden. |
| JITAI decision schema | HeartSteps; Oralytics | Repeated real-world deployments | Define availability, no-action, action set, proximal outcome, burden, and stopping rules first. |
| Proximal causal action learning | HeartSteps V1; Oralytics MRT design | Randomized proximal effect in HeartSteps; Oralytics protocol/deployment | An MRT effect is usually pooled and short-term, not a personal or durable effect. |
| Bounded online policy | HeartSteps V2; Oralytics | Simulated and deployed policy behavior | Keep models small, exploration bounded, propensities logged, fallback deterministic, rollback available. |
| Randomized adaptive-package benefit | DIAMANTE | 24-week step-count outcome versus random and minimal messaging | A whole-policy effect does not validate an internal latent state or every user. |
| Personal randomized experiments | Trialist; StudyU | Feasible; null Trialist primary distal outcome | Use only for repeatable/reversible actions with defensible carryover. |
| Wearable-triggered social intervention | mSavorUs | Small randomized feasibility pilot; no significant loneliness or connectedness benefit | Test prompting and timing against no-prompt/simple rules before learning a policy. |
| LLM conversational mediation | Therabot; Kai.AI | Short-term randomized self-report outcomes | Treat as interface/package evidence, not evidence for extraction accuracy, state estimation, or social benefit. |

### The integration that remains missing

This review found no primary evidence for the full Osanwe conjunction:

1. a participant-owned and correctable relationship/event ledger;
2. a prospectively calibrated dynamic forecast of a narrowly defined social outcome;
3. hierarchical cold-start personalization that exposes population-versus-person contribution;
4. adaptive measurement chosen for downstream decision value;
5. participant-approved social actions tested first by micro-randomization;
6. a later constrained policy optimizing social outcomes while penalizing burden and AI dependence; and
7. an LLM whose extracted narrative is calibrated like any other noisy source and cannot write directly to state or action value.

The evidence for each seam must therefore be earned separately. A successful whole-app trial would not retrospectively validate every seam, and a good forecast would not establish an action effect.

## Anti-patterns revealed by the precedents

1. **Call a sensor-derived feature the state.** Conversation detection, co-location, phone use, sleep proxies, and step counts can be useful observations. None directly measures belonging, another person's reciprocity, or receptivity.
2. **Call retrospective reconstruction a prospective forecast.** A chronological holdout is useful development evidence, but Osanwe's claim requires a frozen evidence cutoff, immutable predictive distribution, later outcome, and proper score.
3. **Fit an independent rich model for every new person.** Long-record idiographic models can work for selected participants, but they have a severe cold start and unstable estimates. Start with population and personal-intercept baselines, then allow only prespecified partially pooled deviations.
4. **Collect every available raw stream.** Beiwe's collection power is scientifically useful and privacy-intensive. Collect only modalities tied to a declared test; measure incremental value; delete a modality that does not earn its privacy cost.
5. **Move from association directly to recommendations.** People are more likely to act when already doing well. HeartSteps' MRT, not passive prediction, is the relevant precedent for action-effect claims.
6. **Equate stochastic variation with personalization.** HeartSteps' later audit was necessary because a randomizing learner can appear to tailor. Define an auditable personalization estimand and test it.
7. **Optimize an easy proximal reward without distal and burden checks.** HeartSteps observed effect decay; Oralytics explicitly penalized dosage. Felt connection, suggestion fatigue, privacy regret, displacement of human contact, and AI dependence cannot be replaced by clicks or accepted suggestions.
8. **Use a whole-system RCT to validate every internal claim.** DIAMANTE supports its assigned adaptive package on step trajectories; it does not prove a latent-state representation. LLM trials likewise do not validate model memory as a faithful person model.
9. **Treat engagement with a relational AI as an unqualified success.** In Osanwe, more AI time may be harm. Human contact and reduced reliance on the system are explicit outcomes.
10. **Hide data and algorithm failures after deployment.** Oralytics' unusable records and the operating-system differences in Beiwe show that collection defects, source coverage, model versions, and fallback decisions belong in the estimand and immutable ledger.

## Recommended reference architecture

```text
Versioned, source-specific consent
        ↓
Append-only evidence + expected-observation ledger
        ↓
Validated, correctable observation view at a fixed cutoff
        ↓
Versioned features with missingness and device/extractor lineage
        ↓
┌──────────────────────┬──────────────────────────┐
│ simple forecast base │ bounded state candidate  │
│ lines                │ with predictive uncertainty│
└──────────────────────┴──────────────────────────┘
        ↓
Immutable shadow forecast → later direct outcome → criticism/ablation
        ↓ only after measurement and forecast gates
Reviewed question selector with ask-nothing and burden budget
        ↓ only after question experiment
Deterministic participant-approved action menu
        ↓ only after safety/feasibility
Micro-randomized offer/no-offer or action comparison
        ↓ only after replicable proximal benefit
Constrained stochastic policy with logged propensity and rollback
```

The LLM belongs beside this pipeline as a versioned adapter: it may propose structured evidence with source spans, render approved questions, and explain a structured result. It should not own the evidence ledger, state transition, forecast record, or action value.

## Recommended evidence sequence

| Gate | Study | Claim earned if it passes | Kill or simplify condition |
|---|---|---|---|
| 0. Instrument | Small prospective feasibility cohort; fixed check-in and participant-recorded social events | Required records can be collected, corrected, consent-filtered, and retained with acceptable burden | Missingness, correction load, privacy regret, or construct-response problems make the target unusable. |
| 1. Forecast | Shadow-mode, fixed-cutoff next-day forecasts; locked future windows and replication cohort | Candidate adds calibrated prospective information beyond last value, moving average, personal mean/intercept, context-only, and LLM-only baselines | No predeclared practical lift; poor coverage; lift disappears after leakage/missingness controls. |
| 2. Personalization | Population-only versus limited hierarchical personal deviations on later windows | A specific personal parameter improves future forecasts for a defined subset without subgroup harm | Parameters are unrecoverable, mostly prior-driven, or do not improve decision-relevant score. |
| 3. Adaptive measurement | Randomize fixed question, information-selected question, and ask-nothing under equal burden rules | Fewer or selected questions preserve outcome measurement or improve downstream forecast/decision value | No benefit over a fixed low-burden item or burden/sensitivity outweighs information. |
| 4. Action MRT | Repeatedly randomize among a tiny reviewed action set and no-action at eligible times | Offering an action changes a prespecified proximal outcome under the protocol; moderators are exploratory unless powered | Null effect, effect decay, heterogeneous harm, spillover, unmeasurable outcome, or unacceptable burden. |
| 5. Policy | Offline/simulation stress tests, then bounded randomized online learner versus fixed/random policy | Policy is operationally safe and improves the declared reward while retaining exploration and auditability | Policy instability, propensity violations, reward hacking, dependence increase, or no gain over fixed policy. |
| 6. Whole product | Prospective randomized comparison with measurement-only and generic-guidance controls | The complete product improves participant-defined real-world social outcomes net of burden and harm | Only AI engagement improves; human contact is displaced; benefit is not durable or does not replicate. |

## Conclusion

The honest answer to “how have other people done this?” is: **modularly, with narrower targets, and usually with less evidence than the product language suggests**. The successful programs did not begin with a general model of a person. They chose a direct repeated outcome, made a small number of decisions, randomized often enough to learn something, and treated deployment failures and effect decay as scientific results.

Osanwe's distinctive opportunity is not inventing passive sensing, personal models, JITAIs, bandits, N-of-1 trials, or an LLM companion. It is joining those ideas under stricter participant control and a clearer separation of observation, uncertain state, prospective forecast, causal action evidence, and language interface. That integration is still a hypothesis. The reference architecture above makes each part independently falsifiable before it can inherit trust from the next.
