---
title: "Entry Diagnostics and Background Adaptation"
description: "Entry diagnostics and background adaptation"
order: 3
---

### 2.1 Diagnostic checklist

You have the corresponding prerequisite only if you can independently complete or clearly explain the tasks below. Not being able to do so doesn't stop you from starting — it only determines how much time Stage 1 will take.

**Programming**

- Simulate a time-evolving state variable using Python functions and NumPy arrays.
- Read/write tabular data or arrays; plot line charts, scatter plots, histograms, and raster/PSTH plots.
- Use virtual environments, Jupyter, and Git; be able to rerun your own project from its README.

**Mathematics**

- Explain the geometric meaning of matrix multiplication, projection, eigenvalues/eigenvectors, and SVD/PCA.
- Solve a first-order linear ODE; solve it numerically with Euler's method or `solve_ivp`, and check step-size error.
- Be comfortable with conditional probability, Bayes' rule, expectation/variance/covariance, and the Gaussian and Poisson distributions.
- Understand likelihood, MLE/MAP, regression, cross-validation, and bootstrap.
- Understand the basic concepts of sampling rate, convolution, the Fourier transform, filtering, and spectral leakage.

**Neuroscience**

- Explain resting potential, action potentials, synaptic transmission, excitation/inhibition, and receptive fields.
- Distinguish what is measured, and at what temporal/spatial scale, by spikes, LFP, EEG/MEG, fMRI, and calcium imaging.
- Know that correlation, decoding accuracy, and causal mechanism are not the same thing.

### 2.2 Adjusting by background

| Existing background | Can compress | Must reinforce | Suggested total duration |
|---|---|---|---:|
| CS / AI / data science | Python, basic linear algebra, basic ML | Cellular neurophysiology, experimental measurement, ODEs/dynamical systems, hierarchical statistics | 9–15 months |
| Math / physics / engineering | Calculus, linear algebra, ODEs | Neurobiology, statistical modeling, real-data QC and experimental constraints | 9–15 months |
| Biology / neuroscience / medicine | Neuroanatomy and physiology | Python, linear algebra, probability and statistics, ODEs, reproducible engineering | 12–20 months |
| Psychology / cognitive science | Behavioral paradigms, some statistics | Python, neurophysiology, dynamical systems, neural data modalities | 12–20 months |
| Complete beginner | None | Full standard path | 18–24 months |

### 2.3 When it's OK to skip a prerequisite

Don't judge by "I took a course" — judge by output. If you can implement an LIF neuron from its equations, sweep parameters, plot results, explain numerical error, and submit a rerunnable repository within 2–3 hours, you can compress the Python/ODE foundations; if you can't, complete the corresponding prerequisite.
