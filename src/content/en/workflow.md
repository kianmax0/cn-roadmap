---
title: "Self-Study and Reproducible Workflow"
description: "Self-study and reproducible workflow"
order: 9
---

### 8.1 Recommended repository structure

```text
project-name/
├── README.md
├── environment.yml or pyproject.toml
├── CITATION.cff
├── LICENSE
├── configs/
├── data/
│   ├── README.md
│   └── manifest.csv       # files, sources, versions, checksums; raw big data not committed to Git
├── notebooks/             # 01_qc, 02_eda, 03_model, 04_figures
├── src/                   # reusable functions and models
├── tests/
├── results/               # small tables/metrics; large intermediate results ignored
└── reports/
```

Every final figure should be reproducible from fixed inputs via a single command or a clear short pipeline. Exploratory notebooks can be messy, but the released version should be free of implicit state, absolute paths, and manual click-through steps.

### 8.2 Three-pass paper reading method

1. **First pass (15 minutes)**: only look at the abstract, figures, and conclusion; write down the question, the data, the main claim, and one thing you don't believe.
2. **Second pass (45–90 minutes)**: sketch the generative process or causal diagram; mark observations, latent variables, parameters, loss/likelihood, the split unit, and the baseline.
3. **Third pass (in service of reproduction)**: extract data version, preprocessing, hyperparameters, random seed, evaluation, and supplementary materials item by item; list unreported implementation choices.

Answer these on one page for each paper:

- What is the paper's minimal falsifiable claim?
- Is the model descriptive, normative, or mechanistic?
- Which figure most directly supports the claim? Is there a simpler explanation?
- Can the data identify the parameters/mechanism? What new experiment could distinguish competing models?
- If redoing this work, which leakage, confound, or robustness issue would you check first?

### 8.3 Triangulating derivation, simulation, and data

When facing a new model, work through the following in order:

1. Write down the variables, units, equations, boundary/initial conditions, and parameter ranges.
2. Where feasible, work out limiting cases, fixed points, linearizations, or expected values.
3. Verify the analytical results with simulation; check step size, seed, and initial-value sensitivity.
4. Do parameter recovery on synthetic data first, then fit real data.
5. Compare against the simplest baseline and at least one competing model.
6. Turn model predictions into observables, and write down the data pattern that would refute the model.

### 8.4 Common pitfalls

- **Resource hoarding**: bookmarking 20 courses without completing full assignments and projects for any. Fix: one main course per stage.
- **Endlessly deferring math prerequisites**: waiting to finish all the math before touching a neuroscience question. Fix: fill gaps as needed, driven by the project.
- **Library-calling without understanding**: not knowing the assumptions behind an estimator/simulator. Fix: hand-write a minimal version first and test it on synthetic data.
- **Randomly shuffling correlated samples**: leakage across trial, time bin, session, or animal. Fix: split according to the scientific unit of generalization.
- **Treating decoding as mechanism**: predictability doesn't mean the brain uses the same representation or algorithm. Fix: clarify the level of the claim and design interventions.
- **Only looking at training fit**: parameters may be unidentifiable, or the model may be overly flexible. Fix: recovery, held-out evaluation, regularization, competing models.
- **Forgetting the cost of smoothing/filtering**: temporal structure may be an artifact of the pipeline. Fix: report parameters and run a sensitivity analysis.
- **Pseudo-replication**: treating neurons from the same animal as independent biological replicates. Fix: respect the nested hierarchy, using a hierarchical model when necessary.
- **Assuming more complex = more biologically realistic**: more complex models can be harder to falsify. Fix: start from the minimal sufficient model.
- **Ignoring negative results**: only keeping the best seed/parameter run. Fix: predefine metrics, and report the full sweep including failures.

### 8.5 What not to prioritize learning yet

- Systematically learning C++, CUDA, or cluster scheduling just to get started; learn them when a project actually requires them.
- Mastering Brian2, NEST, NEURON, BMTK, and TVB all at once; pick one based on the problem.
- Chasing the latest large deep-learning models before you have a baseline, data QC, and correct splits.
- Reading all of Kandel or every advanced math textbook cover to cover before starting hands-on work.
- Repeating similar intro courses just for certificates; assignments, projects, and the ability to explain matter more.
