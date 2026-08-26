# Architecture and research decisions

Decision records capture choices that constrain later work. Use sequential filenames such as `0002-event-sourcing.md`.

Each record should include:

- status and date;
- decision and scope;
- context and alternatives;
- consequences and risks;
- evidence that could reverse the decision; and
- links to affected specifications.

Accepted does not mean permanent. Supersede a decision with a new record rather than rewriting its history.

## Records

| Record | Status | Decision |
|---|---|---|
| [ADR-0001](0001-probabilistic-core-and-llm-boundary.md) | Accepted for v0 | Keep state estimation and policy authority outside the LLM. |
| [ADR-0002](0002-separate-observatory-and-causal-action-gates.md) | Proposed | After measurement, evaluate shadow forecasting and generic causal action in independently governed lanes; keep adaptive policy gated. |
| [ADR-0003](0003-production-alpha-runtime.md) | Accepted for production alpha | Build from the existing Next.js app using Vercel, Convex, Clerk, and a typed OpenAI observation adapter. |
| [ADR-0004](0004-expedited-therapy-intake-product.md) | Accepted | Make expedited, clinician-reviewed therapy intake the first product; defer longitudinal ML until intake works without it. |
