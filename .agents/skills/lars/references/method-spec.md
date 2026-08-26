# Corpus-grounded method specification

This document distinguishes patterns directly documented in the verified corpus from a reusable method synthesized across works. It does not describe private cognition or guarantee how Lars Ostervold would approach a new problem.

## Documented patterns

### Start with a tractable proof of concept

The glucose-upgrading research begins with a simple, earth-abundant polycrystalline copper electrode in alkaline solution. The initial goal is feasibility under room-temperature, open-to-atmosphere conditions, not an optimized catalyst architecture.

- **Status:** observed, author-reported.
- **Origin:** published corpus.
- **Support:** 2021 glucose-upgrading article; 2023 dissertation summary.

### Transfer a mechanism, then test whether it survives the new regime

Catalyst and electrolyte choices in the first glucose study are motivated by thermocatalysis. The paper explicitly tests whether mechanistic design knowledge from thermal glucose conversion can transfer to an electrochemical environment.

- **Status:** observed as a documented research rationale.
- **Origin:** published corpus.
- **Support:** 2021 article, Introduction and Results.

### Change interpretable variables before increasing system complexity

The proof-of-concept study varies applied potential, alkalinity, and electrode pre-oxidation. It measures yield, selectivity, product distribution, current behavior, and post-reaction activity. The null result for pre-oxidation is retained rather than hidden.

- **Status:** observed, author-reported.
- **Origin:** published corpus.
- **Support:** 2021 article.

### Pair performance with catalyst-state measurements

Later studies move beyond product yield to the chemical state and local structure of copper under reaction conditions. The corpus combines electrochemistry with XPS, operando Raman, operando XAS, post-reaction characterization, and electronic-structure calculations.

- **Status:** observed as a cross-paper methodological pattern.
- **Origin:** cross-paper synthesis.
- **Support:** 2021, 2023 CuOOH, 2023 cation-incorporation, and 2024 XAS-cell works.

### Use theory as a standard and elimination tool

The CuOOH research compares experimental Raman behavior with DFT-derived theoretical standards. Multiple candidates can match parts of a spectrum; electrochemical constraints help eliminate candidates. The resulting assignment remains model-mediated.

- **Status:** simulated and observed, author-reported.
- **Origin:** published corpus.
- **Support:** 2022 conference records; 2023 CuOOH article summary.

### Treat the catalyst as dynamic

The corpus explicitly investigates oxidation-state changes, soluble copper species, cation incorporation, bulk mixed-oxide formation, persistence during reduction, and electrolyte-dependent suppression of oxidation. Ex situ starting material is not assumed to equal the active state.

- **Status:** observed/model-supported, author-reported.
- **Origin:** cross-paper synthesis.
- **Support:** 2021 glucose article; 2023 CuOOH and cation-incorporation summaries; 2024 XAS-cell summary.

### Build measurement infrastructure when it unlocks the next inference

The operando XAS cell is a reusable instrument designed to reduce engineering overhead while supporting multiple catalyst forms, flow modes, and monitoring options. It is benchmarked and its operational limits are reported.

- **Status:** observed engineering work, author-reported.
- **Origin:** published corpus.
- **Support:** 2024 operando XAS cell summary.

### Preserve alternative explanations and measurement limits

The archive repeatedly distinguishes direct measurements from structural assignments and mechanistic interpretations. Examples include the non-unique meaning of a Raman match, formal oxidation-state caveats, benchmark geometry differences, and unresolved links between structure and catalytic performance.

- **Status:** observed as explicit qualifications in the works.
- **Origin:** cross-paper synthesis.

## Reusable synthesis

The following workflow is a new synthesis of those patterns, not a quotation or documented personal algorithm:

1. Define a measurable outcome and a mechanism whose predictions can fail.
2. Establish a simple baseline under operationally relevant conditions.
3. Perturb a few interpretable variables rather than screening indiscriminately.
4. Measure both outcome and system state over time.
5. Generate candidate mechanisms with theory or prior literature.
6. Use orthogonal observations and controls to eliminate candidates.
7. Record null results, competing explanations, and apparatus limitations.
8. Build new instrumentation only when an inference is blocked by the existing measurement surface.
9. Advance complexity only when a prospective test earns it.

## Preferred experimental design template

For a new question, specify:

- **Outcome:** the primary quantitative endpoint.
- **Baseline:** the simplest system against which changes will be judged.
- **Mechanism candidates:** at least two plausible explanations where possible.
- **Perturbations:** variables expected to produce different predictions across candidates.
- **State measurements:** measurements that reveal the system during operation, not only before or after.
- **Controls:** blanks, negative controls, positive controls, calibration, and instrument checks.
- **Analysis:** preprocessing, uncertainty, exclusions, and comparisons fixed before outcome inspection.
- **Decision rule:** pass, fail, and stop conditions written prospectively.
- **Lineage:** data, instrument, analysis, and model versions needed for reproduction.

## Anti-patterns

- Starting with a complex black-box model when a simple baseline has not been tested.
- Treating one spectrum or one simulation match as unique structural identification.
- Equating an ex situ material label with the active operando state.
- Reporting performance without products, selectivity, uncertainty, or state characterization.
- Hiding null perturbations or apparatus limitations.
- Inferring causality from association or temporal co-occurrence.
- Optimizing a proxy while losing sight of the decision the experiment must inform.
