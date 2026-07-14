---
title: "Project Ladder"
description: "Project ladder"
order: 8
---

### 7.1 Six-level project sequence

| Level | Suggested duration | Project | Core skill | Minimum deliverable |
|---|---:|---|---|---|
| P0 | 1–2 weeks | Minimal LIF/HH-style simulation | ODEs, numerical methods, Git, reproducibility | Repository + 3 figures + README |
| P1 | 2–3 weeks | Neuromatch mini-project | Model fitting, baselines, CV | Notebook + 2-page report |
| P2 | 3–5 weeks | Single-cell-to-network mechanistic model | Stability, parameter sweeps, mechanistic interpretation | Analytical derivation + simulation + sensitivity analysis |
| P3 | 4–6 weeks | Allen/IBL/DANDI/OpenNeuro data project | QC, data hierarchy, held-out evaluation | Data manifest + pipeline + report |
| P4 | 4–8 weeks | Reproduction of a paper's key figure | Reading methods, rebuilding the environment, checking values | Original-figure comparison + explanation of discrepancies |
| P5 | 6–12 weeks | Original capstone | Problem definition, competing models, robustness | v1.0 repository + short paper + presentation |

### 7.2 Ready-to-use project ideas

**Entry-level models**

1. Compare LIF, EIF/AdEx, and HH on f–I curves, adaptation, cost, and fitting ability.
2. Approximate the stable, oscillatory, and bifurcation regions of a Wilson–Cowan network; verify the effect of integration step size and initial conditions.
3. Memory drift in a ring attractor as connection width, noise, and neuron count vary.

**Encoding and population data**

4. Poisson GLM on Allen visual stimuli: progressively compare constant, tuning-curve, and temporal covariates.
5. Choice decoding across IBL brain regions: within-trial random splits vs. session/animal generalization gaps.
6. Compare PCA, factor analysis/latent models, and a linear decoder on the same population activity; use held-out reconstruction rather than just admiring nice trajectories.

**Learning and behavior**

7. Compare Rescorla–Wagner, Q-learning, and a model with perseveration on bandit data; do parameter recovery.
8. Use an HMM/GLM-HMM to find strategy states; compare numbers of states, initializations, and cross-session stability.

**Connectomics, imaging, and NeuroAI**

9. Test in MICrONS whether functional similarity predicts connectivity; control for distance, cell type, and degree.
10. ERP + time-frequency + session-blocked decoding on OpenNeuro EEG data; quantify sensitivity to preprocessing choices.
11. Encoding/RSA of neural responses via CNN layers; compare against Gabor filters, random networks, and simple linear features.
12. How structural connectivity, delay, and local dynamics change BOLD/EEG-style dynamics in TVB.

### 7.3 Choosing a paper to reproduce

Prioritize papers that satisfy all of the following: public data or a small runnable model, sufficiently clear methods, a key result reproducible within 2–6 weeks, non-obsolete dependencies, and figure values that can be checked. For your first reproduction, commit only to "one core figure or one key table" — not the entire paper.

Your reproduction log should include at least:

```text
Paper/code commit → environment & hardware → data version & license → original parameters
→ assumptions you added that the authors didn't state → reproduction metrics → differences between the original and your figure
→ failed attempts → one robustness/ablation extension
```

### 7.4 Project grading rubric (100 points)

| Dimension | Points | Full-marks performance |
|---|---:|---|
| Scientific question & falsifiable prediction | 20 | Specific question, clear competing explanations, success/failure criteria written in advance |
| Methodological & statistical validity | 25 | Correct split unit, has baseline/null, uncertainty, robustness |
| Neuroscientific interpretation | 20 | Measurement and model levels are matched; distinguishes prediction/association/causality |
| Reproducible engineering | 20 | Runs on a clean install; environment/seed/version/data manifest are complete |
| Presentation & honesty | 15 | Self-consistent figures, clearly stated negative results and limitations, sensible next experiment |

70 points is a passing self-study project; 85 points plus a successful clean-room rerun by someone else is what's suitable for application materials or a portfolio.
