# Ad-tech to flourishing: evidence audit

Last reviewed: 2026-08-21

## Purpose

This note tests the factual bridge behind the product thesis:

> Commercial systems already use behavioral data to predict and influence what people do. Could a consent-based system use related sensing and learning methods to help people act on their own goals instead?

Claim-strength labels:

- **Established:** directly supported by a first-party technical document, official policy, regulatory complaint/order, or peer-reviewed primary study.
- **Supported analogy:** demonstrated in research, but not yet evidence for this product, population, or outcome.
- **Plausible, unestablished:** technically possible, but the specific real-world claim lacks public primary-source evidence.
- **Do not claim:** materially stronger than the evidence or contradicted by relevant first-party policies.

## Bottom line

The defensible premise is strong, but narrower than the current pitch.

- **Established:** Meta predicts the probability that a person will take an advertiser's desired action. Its systems can use activity on and off Meta, purchase and conversion events, location-related information, advertiser/customer lists, and online or offline events.
- **Established:** FTC cases show that sensitive health information has entered advertising and analytics pipelines, including disclosures to Facebook/Meta, and that data brokers have sold precise location histories and built advertising segments from visits to sensitive places.
- **Not established:** there is no public primary-source evidence that Meta routinely combines continuous heart-rate streams with individual ad profiles, or that a deployed system can predict exactly what a person will buy, when they will buy it, and where they will go with “near certainty.”
- **Supported analogy:** digital phenotyping and just-in-time adaptive interventions already combine longitudinal phone, wearable, self-report, and context data to estimate a changing state and choose a timely intervention. Trials establish feasibility and some beneficial proximal or clinical effects, but results are mixed and do not validate a general “flourishing engine.”

The strongest honest formulation is therefore: **the targeting machinery is real; the direct heart-rate/Meta fusion and near-certainty language are not demonstrated; the user-aligned inversion is a credible research program, not a finished capability.**

## 1. What commercial ad systems demonstrably do

### Predict actions rather than read minds — **Established**

Meta says its ad auction uses machine-learning models to calculate an **estimated action rate**: an estimate of how likely a person is to take the advertiser's desired action, such as visiting a site or installing an app. Meta says those models may consider activity on and off Meta, and improve as people view ads, provide feedback, or click through and purchase. This supports “predicts action propensity”; it does not support certainty about an individual's future. ([Meta, “How Facebook ads use machine learning”](https://www.facebook.com/help/447278887528796))

Meta's own engineering account describes ad models learning directly from engagement and conversion-event sequences to infer relevant next ads and purchase intent. Its reported production result was a **2–4% conversion lift in selected segments**—commercially meaningful incremental lift, not clairvoyance. ([Meta Engineering, “Sequence learning: A paradigm shift for personalized ads recommendations,” 2024](https://engineering.fb.com/2024/11/19/data-infrastructure/sequence-learning-personalized-ads-recommendations/))

### Join on-platform behavior with partner and transaction events — **Established**

Meta's privacy policy says it collects product activity, transactions, device signals, location-related information, and information from partners, vendors, and third parties. It says partner-provided activity off Meta can be associated with a person and used to personalize ads. ([Meta Privacy Policy](https://www.facebook.com/privacy/policy/))

Meta's own activity-control documentation says businesses can send interactions through tools such as the Meta Pixel and Facebook Login, including app opens, content views, searches, cart additions, purchases, and donations. ([Meta, “Review your activity off Meta technologies”](https://www.facebook.com/help/fblite/2207256696182627))

The Conversions API connects events from a business's server, site, app, CRM, messaging, and offline activity to Meta's optimization and measurement systems. Meta explicitly describes post-purchase, in-store, and customer-score events as signals that can help show ads to customers more likely to generate value. ([Meta, “About Conversions API”](https://www.facebook.com/business/help/AboutConversionsAPI))

### Monetize prediction and audience access — **Established, wording-sensitive**

Meta says it does not sell users' personal information. The precise claim is that Meta **monetizes predictions, ad delivery, measurement, and access to audiences**, not that it simply hands an advertiser a raw personal dossier. ([Meta Privacy Policy](https://www.facebook.com/privacy/policy/); [Meta, “How Facebook ads use machine learning”](https://www.facebook.com/help/447278887528796))

## 2. Health and location data in advertising pipelines

These are regulator allegations and settlements/orders, so they establish documented practices and enforcement—not that every health or fitness app behaves this way.

### GoodRx: medication and condition data used for targeting — **Established enforcement evidence**

The FTC alleged that GoodRx disclosed medications, health conditions, contact information, and mobile advertising identifiers to Facebook, Google, and others. It also alleged that GoodRx uploaded identifiers for users who bought particular drugs, matched them to Facebook profiles, and targeted those users with medication-specific Facebook and Instagram ads. ([FTC, GoodRx enforcement action, 2023](https://www.ftc.gov/news-events/news/press-releases/2023/02/ftc-enforcement-action-bar-goodrx-sharing-consumers-sensitive-health-info-advertising))

### BetterHelp: mental-health data used for advertising and lookalike targeting — **Established enforcement evidence**

The FTC alleged that BetterHelp revealed email addresses, IP addresses, prior-therapy status, and health-questionnaire information to advertising platforms including Facebook. The complaint says BetterHelp used information about existing users to have Facebook identify similar people and target ads, and allowed third-party use for advertising improvement and research and development. ([FTC, BetterHelp enforcement action, 2023](https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-ban-betterhelp-revealing-consumers-data-including-sensitive-mental-health-information-facebook))

### Flo and Premom: reproductive-health app events reached marketing/analytics systems — **Established enforcement evidence**

The FTC's final Flo order followed allegations that the fertility app disclosed sensitive health information, including pregnancy-related “app events,” from millions of users to Facebook, Google, and other marketing or analytics providers despite privacy promises. ([FTC, Flo final order, 2021](https://www.ftc.gov/news-events/news/press-releases/2021/06/ftc-finalizes-order-flo-health-fertility-tracking-app-shared-sensitive-health-data-facebook-google))

The FTC alleged that Premom disclosed identifiable reproductive-health data through Google and AppsFlyer SDK integrations and shared precise location, device, social-account, and persistent Wi-Fi identifiers through third-party SDKs. Premom could import Apple Health data, but this record does **not** prove that raw Apple Health or heart-rate streams were sent to Meta. ([FTC, Premom enforcement action, 2023](https://www.ftc.gov/news-events/news/press-releases/2023/05/ovulation-tracking-app-premom-will-be-barred-sharing-health-data-advertising-under-proposed-ftc))

### Data brokers: precise movement histories and sensitive-place segments — **Established enforcement evidence**

The FTC alleged that X-Mode/Outlogic obtained precise location data from apps containing its SDK, its own apps, and other brokers; linked raw locations to mobile advertising identifiers; and sold the data for uses including advertising and brand analytics. The data could reveal visits to health clinics and other sensitive places. ([FTC, X-Mode/Outlogic action, 2024](https://www.ftc.gov/news-events/news/press-releases/2024/01/ftc-order-prohibits-data-broker-x-mode-social-outlogic-selling-sensitive-location-data))

The FTC alleged that Mobilewalla collected hundreds of millions of advertising identifiers paired with precise locations, including data acquired from real-time advertising auctions. It sold raw data and created advertising segments; one cited example used visits to pregnancy centers to build segments aimed at pregnant women. ([FTC, Mobilewalla action, 2024](https://www.ftc.gov/news-events/news/press-releases/2024/12/ftc-takes-action-against-mobilewalla-collecting-selling-sensitive-location-data))

This supports “commercial data systems can infer sensitive characteristics and likely destinations or routines from location histories.” It does not establish that Meta receives all such broker data or that location can be predicted with near certainty.

## 3. What the evidence does not establish

### Routine heart-rate + Meta-profile fusion — **Plausible, unestablished; do not present as fact**

Wearables clearly collect heart rate and related health signals, and third-party apps can receive user-authorized health data. But the sources above do not demonstrate a routine commercial pipeline that joins continuous heart-rate telemetry to a Meta ad profile.

There is important contrary policy evidence:

- Apple's rules prohibit using HealthKit-derived data for advertising or marketing and prohibit selling it to ad platforms or data brokers. ([Apple, “Protecting user privacy”](https://developer.apple.com/documentation/healthkit/protecting-user-privacy); [App Review Guidelines §5.1.3](https://developer.apple.com/app-store/review/guidelines/))
- Google states that Fitbit health and wellness data is not used for Google Ads. ([Google Health/Fitbit privacy commitment](https://support.google.com/googlehealth/answer/14236817))
- Meta's Business Tools Terms prohibit partners from sending health and other sensitive information through its tools. Enforcement cases show that prohibited or unauthorized disclosure can happen; they do not make that disclosure Meta's stated standard practice. ([Meta Business Tools Terms](https://www.facebook.com/legal/terms/businesstools/preview))

### “Near certainty” about what, when, and where someone will buy — **Do not claim**

No reviewed primary source reports this combined, individual-level capability. Meta describes probability estimates and incremental conversion lift. Prediction quality varies by person, event frequency, data completeness, distribution shift, target definition, and time horizon. A system can be extremely profitable while remaining wrong often: small improvements applied across enormous traffic can create large revenue gains.

### “Your phone and fitness wearable are working with data brokers” — **Too universal**

Some apps, SDKs, brokers, and advertising systems have transmitted or commercialized sensitive app and location data. That is not evidence that every phone or mainstream wearable provider does so, or that the devices themselves secretly coordinate. Safer wording: **“Parts of the mobile advertising ecosystem have turned app activity, transactions, sensitive health events, and precise location histories into targeting signals—sometimes unlawfully or against platform rules.”**

## 4. The constructive technical analogy

### A recognized scientific architecture exists — **Established**

Just-in-time adaptive interventions (JITAIs) are designed to select the type, timing, or intensity of support using a person's changing internal and contextual state. The accepted architecture includes decision points, intervention options (including doing nothing), time-varying tailoring variables, proximal outcomes, and decision rules. ([Nahum-Shani et al., *Annals of Behavioral Medicine*, 2018](https://academic.oup.com/abm/article/52/6/446/4733473); [Nahum-Shani et al., *Health Psychology*, 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4732268/))

This is the clean technical inversion of ad targeting: **estimate a state and expected response, then choose among actions—but optimize an outcome chosen by and beneficial to the user.**

### Longitudinal multimodal sensing is feasible — **Supported analogy**

A study embedded in two U.S. prospective cohorts followed 2,394 participants for up to a year and collected 11.1 TB of GPS and accelerometer data plus repeated surveys about emotion, stress, enjoyment, activity, environment, diet, sleep, and sitting. It demonstrates that high-resolution longitudinal phone sensing can be combined with self-report at meaningful scale; it does not demonstrate reliable individual-level prediction or intervention benefit. ([Onnela et al., longitudinal digital-phenotyping study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11512133/))

Research guidance from the 2023 NIH-supported workshop describes smartphones and wearables as potentially useful for longitudinal mental-health research while emphasizing limited standards, underpowered studies, generalizability, community alignment, and data-quality problems. ([Mohr et al., “Advancing digital sensing in mental health research,” 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11655837/))

### Context-aware interventions can change proximal behavior — **Supported, bounded evidence**

In the HeartSteps micro-randomized optimization trial, contextually tailored walking suggestions produced an estimated 14% increase in steps during the next 30 minutes—about 35 additional steps on a 253-step average—with a stronger effect early in the study and decay over time. Walking suggestions had a detectable effect; anti-sedentary suggestions did not. The authors explicitly say the trial tested proximal components, not whether the whole system improved overall activity. ([Klasnja et al., *Annals of Behavioral Medicine*, 2019](https://academic.oup.com/abm/article/53/6/573/5091257))

A 2025 randomized trial of a biosensor- and self-report-personalized maternal mental-health program found lower depression and perceived stress at three months postpartum than usual care, but the comparison does not isolate the contribution of sensing, personalization, or just-in-time delivery from the larger intervention. ([Tandon et al., *Archives of Women's Mental Health*, 2025](https://link.springer.com/article/10.1007/s00737-025-01619-5))

A larger 602-person hypertension trial found no benefit on its primary blood-pressure outcome, while the intervention group improved step count and sodium intake relative to control. That mixed result is useful discipline: sensing and personalized prompts can influence behavior without automatically producing the ultimate health outcome. ([Dorsch et al., *npj Digital Medicine*, 2025](https://www.nature.com/articles/s41746-025-01844-3))

## 5. Pitch-safe conclusion

The evidence supports this version:

> Advertising platforms already run large-scale machine-learning systems that estimate when a person is likely to act, using long behavioral histories and events from beyond the platform. FTC cases show that sensitive health events and precise location histories have entered advertising pipelines. We are building the opt-in, user-controlled inverse: learn the moments when a small, evidence-based action is most likely to help someone move toward goals they chose, and optimize for their measured wellbeing rather than an advertiser's conversion.

Then label the remaining thesis as a research question:

> Can longitudinal, multimodal sensing improve the timing and selection of interventions enough to produce durable gains in social connection and flourishing—and can it do so with consent, legibility, reversibility, and minimal data collection?

That formulation is credible to a technical audience because it distinguishes:

1. what the advertising ecosystem has already demonstrated;
2. what adjacent digital-health research has demonstrated;
3. what this project still has to prove.

## Product implications from the evidence

- The first product should predict a **narrow, measurable proximal opportunity** (for example, receptivity to contacting a chosen friend), not “flourishing” directly.
- The first experiment should randomize **intervention versus no intervention** at eligible moments so the team learns causal effect, not merely correlation.
- “Do nothing” must be a first-class action; helpfulness includes avoiding interruption when confidence or expected benefit is low.
- Raw health and location data should be minimized, processed locally where practical, and governed as sensitive health data. An app that combines user-entered information with fitness-tracker data may be a personal-health-record vendor under the FTC's Health Breach Notification Rule. ([FTC compliance guidance](https://www.ftc.gov/business-guidance/resources/complying-ftcs-health-breach-notification-rule-0))
- Success claims should report calibration, uncertainty, missingness, subgroup performance, burden, and actual user outcomes—not only prediction accuracy or engagement.
