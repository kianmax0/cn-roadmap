---
title: "The 64-Week Standard Path"
description: "The 64-week standard path"
order: 4
---

| Stage | Weeks | Core goal | Stage output |
|---|---:|---|---|
| 0. Tools & orientation | 1–2 | Establish a research computing workflow | LIF mini-repository |
| 1. Math & neuroscience bridge | 3–14 | Fill gaps in linear algebra, ODEs, probability, signals, neurophysiology | 4 foundational notebooks |
| 2. Computational neuroscience overview | 15–26 | Complete the Neuromatch core modules | A model/data mini-project |
| 3. Neuron & network dynamics | 27–38 | Build mechanistic depth using *Neuronal Dynamics* | Single-cell-to-network model report |
| 4. Neural data science | 39–50 | Independently complete a real-data analysis | Open-data project v1 |
| 5. Specialization track | 51–58 | Go deep on one research direction | Specialization project or paper-figure reproduction |
| 6. Research capstone | 59–64 | Complete a reproducible research loop | Repository, short paper, presentation |

### Stage 0: Tools & Orientation (Weeks 1–2)

**Goal**: upgrade from "the notebook runs" to "someone else can reproduce the results."

**Core resources**

- [Neuromatch Python Workshop 1/2](https://compneuro.neuromatch.io/tutorials/Schedule/schedule_intro.html) [core][open]
- [Software Carpentry: Shell, Git, Python](https://swcarpentry.github.io/) [recommended][open]
- [MIT Missing Semester 2026](https://missing.csail.mit.edu/): pick Shell, dev environments, debugging, Git, code quality [recommended][open]
- [Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/): fill gaps in NumPy, pandas, Matplotlib, scikit-learn [reference][open]

**All you need to master at this stage**

- Python: functions, array broadcasting, random numbers, file I/O, plotting, simple classes.
- Scientific stack: NumPy, SciPy, pandas, Matplotlib/Seaborn, Jupyter, scikit-learn.
- Engineering: environment files, Git, README, relative paths, random seeds, basic tests.
- No need to learn C++, CUDA, complex software architecture, or large-scale clusters yet.

**Project P0: minimal LIF neuron repository**

1. Write both an Euler and a `solve_ivp` version from the membrane-potential ODE.
2. Feed in step current and noisy current; plot membrane potential and spike times.
3. Sweep the input current and plot an f–I curve; compare the two integrators at different step sizes.
4. The repository should contain `README.md`, an environment file, `src/`, `notebooks/`, and `tests/`.

**Completion criteria**

- All figures reproduce from the README in a fresh environment.
- You can explain what each of time constant, threshold, reset, and refractory period changes.
- You know numerical results can depend on step size, and you have actually checked this.

### Stage 1: Math & Neuroscience Bridge (Weeks 3–14)

#### Weeks 3–4: Linear algebra

**Must know**: vectors/matrices, basis, rank, projection/least squares, eigendecomposition, SVD, positive definite matrices, PCA.

- Main: [Neuromatch Linear Algebra refresher](https://compneuro.neuromatch.io/tutorials/W0D3_LinearAlgebra/student/W0D3_Intro.html) [core][open]
- To fill gaps: [MIT 18.06SC Linear Algebra](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/); focus on subspaces, projection/least squares, eigen, SVD — no need to work through every lecture [recommended][open]
- Compact book: [Mathematics for Machine Learning](https://mml-book.github.io/), Ch. 2–4 and 10 [recommended][open]

**Output**: implement PCA from scratch (centering, SVD, projection/reconstruction) without `sklearn.PCA`; explain the variance and reconstruction error attributable to each principal component.

#### Weeks 5–7: Calculus, ODEs & numerical methods

**Must know**: derivatives/integrals, Taylor expansion, gradient/Jacobian, linear ODEs, fixed points, local stability, Euler/Runge–Kutta, phase plane.

- Main: [Neuromatch Calculus refresher](https://compneuro.neuromatch.io/tutorials/W0D4_Calculus/student/W0D4_Intro.html) [core][open]
- To fill gaps: [MIT 18.03SC Differential Equations](https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/); pick first-order ODEs, linear systems, phase portraits, stability [recommended][open]
- Deeper prerequisite: [MIT Computational Tutorial: Dynamical Systems in Neuroscience](https://ocw.mit.edu/courses/res-9-008-brain-and-cognitive-sciences-computational-tutorials/pages/12-dynamical-systems-in-neuroscience/) [elective][open]

**Output**: compute eigenvalues for a 2D linear system and plot its vector field/trajectory; cross-check analytical and numerical results.

#### Weeks 8–10: Probability & statistics

**Must know**: conditional probability, Bayes' rule, common distributions, expectation/variance/covariance, LLN/CLT, likelihood, MLE/MAP, bootstrap, hypothesis testing and effect size, linear/logistic/Poisson regression.

- Main: [Neuromatch Statistics refresher](https://compneuro.neuromatch.io/tutorials/W0D5_Statistics/student/W0D5_Intro.html) [core][open]
- Systematic gap-filling: [Harvard Stat 110](https://stat110.hsites.harvard.edu/); prioritize conditional probability, Poisson/Gaussian, joint distributions, covariance, LLN/CLT, Markov chains [recommended][open]
- Book: Blitzstein & Hwang, *Introduction to Probability* — the Stat 110 page provides an open e-book version [recommended]

**Output**: simulate a Poisson spike train and verify the mean/variance relationship with counting-window size; bootstrap a confidence interval for a firing-rate difference.

#### Week 11: Signals and systems

**Must know**: sampling/aliasing, convolution, linear filtering, the Fourier transform, power spectra, time-frequency analysis, and boundary effects of filtering.

- Main: the [Signal Processing unit in Neuromatch's overall schedule](https://compneuro.neuromatch.io/tutorials/Schedule/schedule_intro.html) [core][open]. The course book's unit paths shift across versions, so entering via the overall schedule is safest.

**Output**: construct a signal containing two frequencies plus noise, and demonstrate sampling, filtering, FFT, and spectrograms on it; explain the biases introduced by parameter choices.

#### Week 12: Optimization and information theory

**Must know**: gradient descent, loss vs. likelihood, regularization, the meaning of entropy, mutual information, and KL divergence.

- Quick entry: the relevant prerequisites for Neuromatch model fitting/GLM.
- Deeper: [David MacKay, *Information Theory, Inference, and Learning Algorithms*](https://www.inference.org.uk/itprnn/book.pdf), selected reading from Ch. 1–4 and 8–10 [elective][open access]
- Course: [MIT 6.050J Information and Entropy](https://ocw.mit.edu/courses/6-050j-information-and-entropy-spring-2008/) [elective][open]

**Output**: derive the objective function for Gaussian linear regression or a Poisson GLM from a likelihood; numerically verify the bias–variance trade-off of regularization.

#### Weeks 3–14, in parallel: foundational neuroscience, 2 hours/week

**Choose one of the following two — don't complete both:**

- Route A (intuitive, interactive): [HarvardX Fundamentals of Neuroscience](https://www.edx.org/learn/neuroscience/harvard-university-fundamentals-of-neuroscience-part-1-the-electrical-properties-of-the-neuron) Parts 1–3 [recommended][platform]; if some units have been archived, supplement with the UTHealth open textbook below.
- Route B (open textbook): [UTHealth Neuroscience Online](https://nba.uth.tmc.edu/neuroscience/m/index.htm); focus on Section 1, sensory systems, motor systems, and learning & memory [recommended][open].
- Minimal review: [Neuromatch Neuro Video Series](https://compneuro.neuromatch.io/tutorials/W0D0_NeuroVideoSeries/student/W0D0_Intro.html) [core][open].
- More rigorous but heavier: [Duke Medical Neuroscience](https://www.coursera.org/learn/medical-neuroscience) [elective][platform].
- Course-style materials: [MIT 9.01 Introduction to Neuroscience](https://ocw.mit.edu/courses/9-01-introduction-to-neuroscience-fall-2007/) [elective][open].

**Biology topics you must master**

- Membranes, capacitance, conductance, the Nernst/reversal potential, action potentials.
- Chemical/electrical synapses, EPSPs/IPSPs, short- and long-term plasticity.
- Sensory and motor pathways, receptive fields, population coding.
- What spikes/LFP/EEG/MEG/fMRI/calcium imaging each measure, their resolution, and their major confounds.

**Stage 1 overall completion criteria**

- Can derive the LIF equation from an RC circuit and explain the units of each parameter.
- Can determine the local stability of fixed points in a 2D system.
- Can explain why spike counts are commonly modeled as Poisson/overdispersed, and why neural data cannot be cross-validated by shuffling trials/animals arbitrarily.
- Can explain to a non-specialist what any given neural measurement technique actually measures.

### Stage 2: Computational Neuroscience Overview (Weeks 15–26)

**Sole main resource**: [Neuromatch Academy Computational Neuroscience course book](https://compneuro.neuromatch.io/) [core][open].

The live course compresses this content into about three weeks; for self-study, expand it into 12 weeks:

| Week | Module | Required content | Small output |
|---:|---|---|---|
| 15 | Model Types / Modeling Practice | what/how/why models; turning a question into a falsifiable prediction | A one-page modeling proposal |
| 16 | Model Fitting | MSE, MLE, bootstrap, bias–variance, cross-validation | A fitting-and-uncertainty notebook |
| 17 | GLM | Encoding, classification, regularization | A Poisson GLM encoding model |
| 18 | Dimensionality Reduction | PCA, reconstruction, nonlinear dimensionality reduction | Population trajectory and reconstruction error |
| 19 | Deep Learning | Decoding, CNNs, normative encoding | Linear baseline vs. a small NN |
| 20 | Signal Processing | Sampling, FFT, filtering, time-frequency | LFP/EEG-style signal analysis |
| 21 | Linear Systems | LDS, Markov chains, AR, deterministic + stochastic | Stability and trajectories |
| 22 | Biological Neuron Models | LIF, correlated inputs, dynamic synapses, STDP | Comparison of unit models |
| 23 | Dynamical Systems | Rate models, Wilson–Cowan | E/I phase portrait and parameter sweep |
| 24 | Bayesian Decisions | Discrete/continuous latent variables, utility | Bayesian observer |
| 25 | Hidden Dynamics | SPRT, HMM, Kalman filter, EM | Recovering hidden states |
| 26 | RL + Network Causality | TD/bandit/Q-learning; intervention, instrumental variables | RL or causality mini-project |

**Study method**

- For each tutorial, predict the figures and results yourself before running the code.
- Hide the reference solutions or rewrite core functions from an empty notebook; always keep at least one simple baseline.
- Write one page per week: the scientific question, model assumptions, parameters, observations, evaluation, and possible failure modes.

**Project P1: Neuromatch mini-project**

You may choose neurons, fMRI, ECoG, or behavior/theory data from the course's [Datasets and Project Templates](https://compneuro.neuromatch.io/projects/docs/project_guidance.html), or complete any one of the following:

- Predict spike counts with a GLM, and compare against a mean model and ridge/Poisson baselines.
- Predict steady-state/oscillatory transitions caused by parameter changes using a Wilson–Cowan model.
- Recover behavioral strategy switches with an HMM, and check parameter recovery.
- Fit behavior with a Bayesian observer or RL model, and do a posterior predictive check.

**Completion criteria**

- Clearly define the train/validation/test or cross-validation unit.
- Report uncertainty, a null/baseline, failure results, and limitations — not just the best score.
- Be able to write the model as a generative process: "input → latent variable → parameters → observation → prediction."

### Stage 3: Neuron & Network Dynamics (Weeks 27–38)

**Primary text**: [Gerstner et al., *Neuronal Dynamics*](https://neuronaldynamics.epfl.ch/online/) [core][open online]. The official site also provides [Python exercises](https://neuronaldynamics-exercises.readthedocs.io/en/latest/) and a [15-week teaching-material/video entry point](https://neuronaldynamics.epfl.ch/lectures.html).

| Week | Chapter | Focus | Suggested implementation |
|---:|---|---|---|
| 27 | Ch. 1 | LIF, the filter perspective, model limitations | LIF with spiking/periodic/noisy input |
| 28 | Ch. 2 | Nernst potential, HH, ion channels | HH and an f–I curve |
| 29 | Ch. 3 | Synapses, cable theory, compartments | Passive cable or ball-and-stick model |
| 30 | Ch. 4 | Dimensionality reduction, nullclines, stability, bifurcation | 2D phase plane |
| 31 | Ch. 5–6 | EIF/QIF/AdEx, adaptation, firing patterns | Comparison of three simplified models |
| 32 | Ch. 7 | Spike variability, PSTH, CV, renewal processes, neural code | Spike-train statistics |
| 33 | Ch. 8–11 | Noise, likelihood, GLM, encoding/decoding | LNP/GLM and goodness-of-fit |
| 34 | Ch. 12 | Population activity, connectivity, balanced E/I | Random E/I network |
| 35 | Ch. 15 | Rate models, network response | Rate vs. spiking comparison |
| 36 | Ch. 16 | Competition, decision-making, DDM | Decision circuit |
| 37 | Ch. 17–18 | Hopfield networks, working memory, neural field/bump | Attractor network |
| 38 | Ch. 19–20 | Hebbian/STDP/reward learning, plastic networks | STDP or reward-modulated rule |

**Trimming by track**

- Data/encoding track: read Ch. 7, 9–11 carefully; treat 1–6 as basic models only, and Ch. 13–15 can wait.
- Biophysics track: read Ch. 1–6 carefully and also learn NEURON; Ch. 7–11 and 12 must be kept.
- Networks/dynamics track: read Ch. 4, 12–20 carefully; Ch. 13–14 are more advanced math and can wait for a second pass.
- Cognition/decision-making track: keep Ch. 7, 10–12, 15–20, and pair them with behavioral models.

**Project P2: from single cell to network**

Complete at least three of the following four:

1. Compare LIF, EIF/AdEx, and HH in terms of accuracy, parameter count, and computational cost.
2. Check consistency between analytical stability and numerical simulation for a Wilson–Cowan or conductance-based E/I network.
3. Analyze capacity/robustness/noise for a Hopfield, ring/bump, or decision attractor network.
4. Reproduce one figure from *Neuronal Dynamics*, and add a parameter perturbation not in the original text.

**Completion criteria**

- Go beyond plotting trajectories: find fixed points from the equations, compute the Jacobian/eigenvalues, and explain local stability.
- Report model level, units, integrator, step size, initial conditions, random seed, and parameter sources.
- Explain why "more biologically realistic" doesn't automatically mean "a better scientific model."

### Stage 4: Neural Data Science (Weeks 39–50)

**Main-line materials**

- Neuromatch's Model Fitting, GLM, Dimensionality Reduction, Signal Processing, and Hidden Dynamics [core][open].
- Kramer & Eden, [*Case Studies in Neural Data Analysis*](https://mitpress.mit.edu/9780262529372/case-studies-in-neural-data-analysis/); the official site links to data and code [recommended][book].
- Kass, Eden & Brown, [*Analysis of Neural Data*](https://link.springer.com/book/10.1007/978-1-4614-9602-1), with the [authors' code/data site](https://www.stat.cmu.edu/~kass/KEB/) [advanced][book].
- *Neuronal Dynamics* Ch. 7, 9–11 [core].

| Week | Topic | Required check |
|---:|---|---|
| 39 | Experimental design and data modalities | Unit of analysis, trial/session/animal hierarchy, confounds |
| 40 | QC, EDA & uncertainty | Missingness, artifacts, effect size, bootstrap/hierarchical CI |
| 41 | Spikes and point processes | Raster, PSTH, ISI/CV/Fano, Poisson/renewal |
| 42 | Tuning/receptive fields/encoding | STA/LNP/GLM, regularization, goodness-of-fit |
| 43 | Decoding | Leakage-free splits, calibration, nulls, cross-session generalization |
| 44 | Population analysis | PCA, trajectories, latent/state-space models, stability |
| 45 | LFP/EEG/continuous signals | Filtering, PSD, time-frequency, event alignment |
| 46 | Data standards | NWB/BIDS, metadata, provenance, license/citation |
| 47 | Open-data access | Start with 1 session/subject, build a data manifest |
| 48 | Research question and baselines | Pre-register evaluation, failure criteria, sanity checks |
| 49 | Main analysis and robustness | Multiple splits, parameter sensitivity, negative controls |
| 50 | Reporting and reproduction | Rerun in a clean environment, write a 2–4-page short report |

**Recommended data project — choose one of four**

1. **Allen Neuropixels**: start from the official [quick start/tutorials](https://allensdk.readthedocs.io/en/stable/visual_coding_neuropixels.html); do unit QC, PETH/tuning, stimulus or behavior decoding, and PCA trajectories.
2. **IBL Brain-Wide Map**: start from the [data page and ONE tutorial](https://www.internationalbrainlab.com/data); compare choice/stimulus/feedback encoding across brain regions.
3. **DANDI/NWB**: use the [2026 Quick Start](https://docs.dandiarchive.org/example-notebooks/tutorials/open_data_quick_start_2026/Get-to-know-a-Dandiset/) to pick a small ephys/ophys dataset, and learn streaming, metadata, and analysis.
4. **OpenNeuro**: pick a small BIDS EEG/fMRI dataset; use MNE for EEG and Nilearn for fMRI. Don't conflate preprocessing with neural interpretation.

**Minimal analysis loop for Project P3**

```text
Data source/license → quality control → time/event alignment → predefined features
→ simple baseline → main model → held-out evaluation → uncertainty/null
→ robustness/sensitivity → neuroscientific interpretation and limitations
```

**Completion criteria**

- The data split matches the research question: consider trial, session, and animal at minimum, and don't shuffle correlated samples randomly and cause leakage.
- State QC thresholds explicitly, and run a threshold-sensitivity analysis.
- Report a simple baseline, a null distribution, and uncertainty; report a noise ceiling where applicable.
- Distinguish prediction, association, and causality.

### Stage 5: Specialization Track (Weeks 51–58)

Choose only **one main vertical track** from Section 5 of the specializations document, plus one supporting horizontal track. For example:

- Theory-leaning: dynamical systems main track + encoding/data horizontal track.
- Neural-data-leaning: large-scale data analysis main track + encoding/modeling horizontal track.
- Cognition-leaning: learning/decision-making main track + dynamics/RNN horizontal track.
- NeuroAI-leaning: NeuroAI main track + perception/population-analysis horizontal track.
- Biophysics-leaning: NEURON/cellular-modeling main track + dynamical systems horizontal track.

Within eight weeks, complete the specialization's core material, one small reproduction, and one original perturbation/extension. Don't learn multiple simulators or all data modalities simultaneously at this stage.

### Stage 6: Research Capstone (Weeks 59–64)

| Week | Work | Verifiable output |
|---:|---|---|
| 59 | Choose a paper/question; write scope, predictions, evaluation, and failure criteria | 1–2 page proposal |
| 60 | Acquire data/code; set up the reproduction environment and the simplest baseline | Data manifest + baseline |
| 61 | Reproduce one key figure or one core numerical result | Reproduction figure |
| 62 | Robustness, ablation, parameter recovery, or cross-dataset generalization | Sensitivity/null results |
| 63 | Clean up code, tests, methods, and limitations | Release candidate |
| 64 | Clean-room rerun, short paper, 10-minute presentation | v1.0 release |

**Unified deliverables**

1. A README: the scientific question, data/model sources, run commands, expected runtime.
2. A locked environment; data via an acquisition script or manifest, not terabyte-scale raw data checked into Git.
3. Core functions in `src/` with a small test suite; notebooks used mainly for exploration and presentation.
4. Reproduction of one public result/figure, plus one parameter perturbation, ablation, or new hypothesis.
5. Held-out evaluation, uncertainty, null/baseline; noise ceiling where applicable.
6. A 2–4 page short report: question, method, result, limitations, next experiment.

**Research-readiness rubric**

- Can clearly state whether a model is descriptive, normative, or mechanistic.
- Can derive and implement a simple baseline from scratch.
- Can perform leakage-free splits and quantify uncertainty.
- Can distinguish prediction, correlation, and causality.
- Can reproduce results in a clean environment.
- Can explain identifiability, failure modes, and what experiment could distinguish competing models.
