# Team MLOps & CI/CD project — my contributions

**Repository:** [LeoLindqvist123/ci-cd-pipeline](https://github.com/LeoLindqvist123/ci-cd-pipeline)  
**Project:** Customer-churn prediction pipeline  
**Context:** Team project completed as part of my MLOps Engineering studies.

This page documents the work represented by five pull requests that I authored and that were merged into the team repository. The team repository itself is intentionally left unchanged by this portfolio update.

## My merged pull requests

### 1. [Add Ruff linting to CI workflow and fix trailing newline in schema.py — PR #1](https://github.com/LeoLindqvist123/ci-cd-pipeline/pull/1)

- Added Ruff linting to the CI test job.
- Fixed the missing trailing newline that caused the W292 linting issue in kontroll/schema.py.

**Engineering focus:** automated code-quality checks and consistent CI feedback.

### 2. [Version only approved models and add metadata lineage test — PR #20](https://github.com/LeoLindqvist123/ci-cd-pipeline/pull/20)

- Changed training to upload a temporary candidate model artifact.
- Changed the evaluation job so the official versioned artifact is published only after the model passes the configured quality evaluation.
- Added test_model_versioning_metadata to verify model metadata, including the source commit, dataset filename, dataset SHA-256, and evaluation metrics.

**Engineering focus:** quality-gated model promotion, artifact traceability, and automated lineage tests.

### 3. [Add Dockerfile, container smoke test, and GHCR package job — PR #36](https://github.com/LeoLindqvist123/ci-cd-pipeline/pull/36)

- Added Docker packaging files for serving the trained churn model with FastAPI.
- Added a container smoke test that checks service readiness through GET /health and validates a prediction through POST /predict.
- Added a CI packaging job that builds and runs the container, executes the smoke test, and publishes tagged images to GitHub Container Registry (GHCR) on qualifying pushes to the main branch.

**Engineering focus:** containerised model delivery and verification of the running service before publishing.

### 4. [Docker optimisation, multi-stage build and layer caching — PR #38](https://github.com/LeoLindqvist123/ci-cd-pipeline/pull/38)

- Reworked the Dockerfile into separate builder and runtime stages.
- Kept build tooling and unnecessary test/cache files out of the runtime image.
- Added Buildx GitHub Actions layer caching.
- Configured the runtime to use a dedicated non-root appuser.
- Added a Docker HEALTHCHECK against the service health endpoint.
- Added CI reporting for image size and build duration.

**Engineering focus:** smaller runtime images, repeatable builds, least-privilege container execution, and operational health checks.

### 5. [Statistical data-drift detection and delivery verification — PR #39](https://github.com/LeoLindqvist123/ci-cd-pipeline/pull/39)

- Added src/churn/drift.py to compare incoming data deliveries with the reference dataset.
- Added a data-volume sanity check that detects drops greater than 50%.
- Added a numeric-feature shift check using a normalised mean-shift threshold of 0.50 standard deviations.
- Added checks for previously unseen categories and changes in the target/churn rate.
- Added automated tests for unchanged baseline data, synthetic feature drift, and volume-drop alerts.
- Integrated the drift check into the CI validation flow.

**Engineering focus:** detecting data-quality problems that static schema validation alone may not catch.

## Team-level project results

The project documentation in PR #38 reports the following comparison:

| Measure | Baseline | Optimised result |
|---|---:|---:|
| Uncompressed Docker image | About 620 MB | About 378 MB |
| Build duration | 16 seconds | 11.3 seconds |
| Reported change | — | About 39% smaller image and 30% faster build |

These are **reported team-project measurements**, based on the documented baseline and run. They should not be interpreted as results produced by my work alone.

## Technical lessons

1. **A trained model should not be promoted automatically.** Training output can remain a candidate until evaluation passes.
2. **Model artifacts need lineage.** Recording the code revision, dataset identity/hash, and metrics makes an artifact easier to trace.
3. **Schema validation and drift detection solve different problems.** Data can satisfy structural rules while its statistical distribution changes.
4. **A successful image build is not enough.** Starting the container and testing its health and prediction endpoints provides a more meaningful delivery check.
5. **Container optimisation includes more than image size.** Build caching, non-root execution, health checks, and runtime-only dependencies also matter.
6. **CI should make quality visible.** Linting, automated tests, evaluation gates, smoke tests, and build summaries make failures easier to detect.

## Scope and attribution

- This was a **shared team repository**.
- The five PRs linked above are the specific merged contributions documented here.
- Team-level measurements are labelled separately from individual contributions.
- This portfolio page is a personal summary only. It does not modify the shared project repository.

## Links

- [Team repository](https://github.com/LeoLindqvist123/ci-cd-pipeline)
- [PR #1 — Ruff in CI](https://github.com/LeoLindqvist123/ci-cd-pipeline/pull/1)
- [PR #20 — Model versioning and lineage](https://github.com/LeoLindqvist123/ci-cd-pipeline/pull/20)
- [PR #36 — Docker packaging and GHCR](https://github.com/LeoLindqvist123/ci-cd-pipeline/pull/36)
- [PR #38 — Docker optimisation](https://github.com/LeoLindqvist123/ci-cd-pipeline/pull/38)
- [PR #39 — Data-drift detection](https://github.com/LeoLindqvist123/ci-cd-pipeline/pull/39)
