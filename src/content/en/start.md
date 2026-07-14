---
title: "First-Four-Weeks Starter Checklist"
description: "First-four-weeks starter checklist"
order: 11
---

If you don't have a clear direction yet, just follow the plan below — don't spend another week comparing courses.

### Week 1: Diagnostics and a minimal model

- Complete the diagnostic checklist in Section 2.1, marking each item "can do / fuzzy / can't do."
- Set up an environment and Git repository; complete an Euler-method LIF implementation and a step-current plot.
- Watch the Neuromatch Neuro Video Series to fill gaps on membrane potential, spikes, and synapses.
- Read the corresponding part of the Rosenbaum open textbook or Ch. 1 of *Neuronal Dynamics*.

### Week 2: Numerical reliability and reproducibility

- Add `solve_ivp`, different step sizes, noisy current, and an f–I curve.
- Write a README, an environment file, and one test; rerun everything in a fresh environment.
- Write a one-page note: the model's purpose, variables/units, assumptions, and failure conditions.

### Week 3: Linear algebra and population representations

- Complete the projection, eigen/SVD/PCA sections of the Neuromatch linear algebra refresher.
- Hand-implement PCA on simulated neural population data, and compare against scikit-learn's result.
- Check dimensionality using held-out reconstruction, rather than just plotting a 2D projection.

### Week 4: ODEs, stability, and wrap-up

- Complete the key exercises in the Neuromatch calculus/ODE refresher.
- Find fixed points and plot a phase portrait for a 2D linear system or a simplified Wilson–Cowan model.
- Release P0 v1.0; based on your diagnostics, decide whether Week 5 should be full prerequisite work or the Neuromatch main course.

**Week 4 decision**

| Outcome | Next step |
|---|---|
| Python/math/neuroscience are all solid, and P0 reruns cleanly | Go straight into the 12-week Neuromatch main line |
| Only one category is clearly weak | Continue the main line as planned, with 3 extra hours/week targeting the weak area |
| Two or more categories are weak, and P0 still can't be completed independently | Spend 8–12 weeks on Stage 1 before entering the main line |
| Already have a similar research project | Skip to an open-data project, using the common core to fill remaining gaps |
