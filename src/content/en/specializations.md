---
title: "Specialization Branches"
description: "Specialization branches"
order: 6
---

Each main track defaults to 8–12 weeks. The selection criterion is not "which is trendiest," but the phenomena you want to explain, the data you can get, and the labs you want to join. We recommend adopting **one main vertical track + one methodological horizontal track**.

### 5.1 Cellular, biophysical & multi-compartment modeling

**Suited for**: learners interested in ion channels, dendritic computation, cell types, disease mechanisms, pharmacology, or cellular-level simulation.

**Prerequisites**: *Neuronal Dynamics* Ch. 1–6; circuits, ODEs, basic electrophysiology; Python.

**Main resources**

- Sterratt et al., [*Principles of Computational Modelling in Neuroscience*, 2e](https://www.cambridge.org/highereducation/books/principles-of-computational-modelling-in-neuroscience/17D6BDB0AF15FAD5B9341132B6A706BF) [primary text][book].
- Koch, [*Biophysics of Computation*](https://academic.oup.com/book/40820) [advanced][book].
- [NEURON + Python tutorials](https://neuron.yale.edu/neuron/static/docs/neuronpython/index.html) and [NEURON course exercises](https://neuron.yale.edu/neuron/docs/neuron-course-exercises) [core][open].
- [ModelDB](https://modeldb.science/): find runnable models linked to published papers [core][open].

**Tool choices**

- Single-cell, multi-compartment, morphology, and ion channels: **NEURON**.
- Multiscale NEURON networks and batch experiments: [NetPyNE](https://doc.netpyne.org/tutorial.html).
- HPC/GPU multi-compartment simulation: [Arbor](https://docs.arbor-sim.org/en/latest/) [elective].
- Model exchange/sharing: [NeuroML](https://neuroml.org/gettingstarted), [Open Source Brain](https://www.opensourcebrain.org/) [elective].

**Project ladder**

1. Single-compartment passive membrane → HH.
2. Ball-and-stick model: vary dendrite length/diameter/input location, compare somatic EPSPs.
3. Reproduce one figure from ModelDB, recording the channel parameters and morphology sources.
4. Perform parameter sensitivity and identifiability analysis; propose an experiment that could distinguish two candidate channel mechanisms.

**Completion criteria**: be able to explain discretization, boundary conditions, channel density, temperature correction, and parameter degeneracy; simply getting the NEURON GUI running is not enough.

### 5.2 Circuits, nonlinear dynamical systems & population dynamics

**Suited for**: learners interested in oscillations, E/I balance, attractors, working memory, decision circuits, mean-field theory, or neural manifolds.

**Prerequisites**: linear systems, Jacobian/eigenvalues, phase plane; *Neuronal Dynamics* Ch. 4, 12, 15–18.

**Main resources**

- Izhikevich, [*Dynamical Systems in Neuroscience*](https://www.izhikevich.org/publications/dsn/index.htm): the author provides the full text, code, and data [primary text][open].
- Ermentrout & Terman, [*Mathematical Foundations of Neuroscience*](https://link.springer.com/book/10.1007/978-0-387-87708-2) [advanced][book].
- [EPFL Neuronal Dynamics NX-465](https://edu.epfl.ch/coursebook/en/computational-neurosciences-neuronal-dynamics-NX-465) and the official Python exercises.
- [MIT Dynamical Systems in Neuroscience tutorial](https://ocw.mit.edu/courses/res-9-008-brain-and-cognitive-sciences-computational-tutorials/pages/12-dynamical-systems-in-neuroscience/) [open].

**Tool choices**

- Rate/ODE toy models: use NumPy/SciPy/JAX first; a simulator is usually unnecessary.
- Flexible point-neuron models and teaching networks: [Brian2](https://brian2.readthedocs.io/en/stable/).
- Large-scale point-neuron networks/HPC: [NEST tutorials](https://nest-simulator.readthedocs.io/en/v3.9/get-started_index.html).
- Cross-simulator comparison: [PyNN](https://pynn.readthedocs.io/en/latest/) [elective].

**Project ladder**

1. Morris–Lecar/FitzHugh–Nagumo nullclines, f–I curves, Type I/II excitability.
2. Wilson–Cowan E/I parameter sweep; compare analytical stability against numerical simulation.
3. A balanced spiking network, compared against rate/mean-field predictions.
4. A ring/bump/working-memory attractor; analyze noise, capacity, and instability.
5. PCA/latent-state modeling on real population data, with held-out reconstruction/decoding.

**Completion criteria**: be able to derive qualitative phase transitions from the equations, not just label simulation plots as "oscillatory/chaotic"; must distinguish the model's state space from the dimensionality-reduced data trajectory.

### 5.3 Neural coding, decoding & large-scale electrophysiology

**Suited for**: learners interested in sensory coding, population codes, Neuropixels, BCI, and systems neuroscience data analysis.

**Prerequisites**: probability and statistics, GLM, cross-validation, signal processing; Neuromatch W1 and *Neuronal Dynamics* Ch. 7, 10, 11.

**Main resources**

- Dayan & Abbott, *Theoretical Neuroscience*, Part I.
- Rieke et al., [*Spikes: Exploring the Neural Code*](https://mitpress.mit.edu/9780262181747/spikes/) [classic][book].
- Kass/Eden/Brown and Kramer/Eden's two neural data analysis books.
- [NeMoS GLM tutorials](https://nemos.readthedocs.io/en/latest/tutorials/README.html), [Pynapple user guide](https://pynapple.org/user_guide.html), [Elephant](https://elephant.readthedocs.io/en/latest/) [tool tutorial][open].

**Recommended Neuropixels sequence**

1. Start with already-sorted data from Allen/IBL to learn unit QC, PETH, tuning, and population analysis.
2. Then practice [SpikeInterface](https://spikeinterface.readthedocs.io/en/latest/tutorials/) and [Kilosort](https://kilosort.readthedocs.io/en/stable/) on a short raw-data segment; focus on drift, artifacts, quality metrics, and curation.
3. Acquisition, implantation, and surgery must be done in a lab through formal safety and animal-research training — they're not part of a pure online self-study goal.

**Project ladder**

1. Simulate a Poisson/LNP process and recover the receptive field using STA and a GLM.
2. Compare a ridge decoder, a Poisson GLM, and a Bayesian decoder; report calibration and nulls.
3. On Allen/IBL, do session-blocked stimulus/choice decoding and compare across brain regions.
4. Add a low-dimensional trajectory or state-space model, and test cross-session/animal generalization.

**Completion criteria**: be able to explain how bin size, smoothing, unit QC, trial alignment, data leakage, and the noise ceiling affect conclusions.

### 5.4 Learning, decision-making & computational cognition

**Suited for**: learners interested in perception, choice, reward, dopamine, habits, working memory, or computational psychiatry.

**Prerequisites**: Bayes, likelihood, HMM, optimization; Neuromatch Bayesian Decisions / Hidden Dynamics / RL.

**Main resources**

- Sutton & Barto, [*Reinforcement Learning: An Introduction*, 2e](https://mitpress.mit.edu/9780262039246/reinforcement-learning/); prioritize Ch. 1–6, 9–10, 13 [core][book / author OA].
- Doya, [*Brain Computation: A Hands-on Guidebook*](https://oist.github.io/BrainComputation/BrainComputation.html): Python notebooks connecting ML algorithms to brain implementation [recommended][open].
- [Probabilistic Models of Cognition](https://probmods.org/): probabilistic programs and cognitive models [recommended][open].
- [Computational Cognitive Neuroscience](https://compcogneuro.org/) [supplement][open].
- Neuromatch's DDM/SPRT, HMM/Kalman, and bandit/Q-learning units.

**Project ladder**

1. Fit a drift-diffusion model; do parameter recovery and a posterior predictive check.
2. Analyze strategy switching with an HMM/GLM-HMM; compare numbers of states and check identifiability.
3. Implement bandit, TD, and Q-learning algorithms; compare held-out likelihood between model-free and model-based approaches.
4. Train an RNN on a decision/working-memory task, then analyze its fixed points and trajectories.

**Completion criteria**: good behavioral fit does not by itself justify claims about neural implementation; you must compare competing models, do recovery analysis, and clearly state the bridge between the normative, algorithmic, and mechanistic levels.

### 5.5 Perception, computational vision & NeuroAI

**Suited for**: learners interested in visual/auditory representation, efficient/predictive coding, ANN–brain comparison, and brain-inspired AI.

**Prerequisites**: the common core plus one deep learning course; familiarity with encoding/decoding, RSA, and cross-validation.

**Main resources**

- [CSHL Computational Neuroscience: Vision](https://cshl-comp-neuro-vision.github.io/website/index.html) [course][open materials].
- [MIT Center for Brains, Minds and Machines Learning Hub](https://cbmm.mit.edu/learning-hub/courses) and [Brains, Minds and Machines](https://bmm.mit.edu/).
- [Neuromatch Deep Learning](https://deeplearning.neuromatch.io/) → [Neuromatch NeuroAI](https://neuroai.neuromatch.io/); the official curriculum treats CompNeuro + DL (or equivalent knowledge) as a NeuroAI prerequisite.
- [Brain-Score tutorials](https://www.brain-score.org/tutorials/) and [documentation](https://brain-score.readthedocs.io/en/latest/).
- [NeuroGym](https://neurogym.github.io/): cognitive tasks and RNNs; [CEBRA](https://cebra.ai/docs/): behaviorally aligned representations [elective].

**Project ladder**

1. Gabor/LNP V1 encoding, compared against simple pixel/linear baselines.
2. Use CNN layers to predict activity in different brain regions or perform RSA; use held-out stimuli and a noise ceiling.
3. Train an RNN on NeuroGym; analyze fixed points, trajectories, and task generalization.
4. Compare model families with Brain-Score, and discuss the coverage and limitations of the benchmark.

**Completion criteria**: clarify whether a DNN is a prediction tool, a phenomenological model, or a mechanistic hypothesis; a high decoding/RSA/benchmark score does not equal a biological mechanism. You must include a simple baseline and OOD or cross-subject generalization.

### 5.6 Network neuroscience, connectomics & whole-brain modeling

**Note**: a graph-theoretic structural/functional network is not the same thing as a spiking circuit network.

**Main resources**

- Sporns, [*Networks of the Brain*](https://mitpress.mit.edu/9780262528986/networks-of-the-brain/) [book].
- [Brain Connectivity Toolbox](https://sites.google.com/site/bctnet/home) and its measure list [tool].
- [MICrONS tutorials](https://tutorial.microns-explorer.org/): CAVE, cell types, synaptic connectivity, mesh/skeleton [open].
- [neuPrint Explorer/manual](https://neuprint.janelia.org/help) [open].
- [The Virtual Brain tutorials](https://docs.thevirtualbrain.org/tutorials/Tutorials.html): neural mass models, tractography, EEG/MEG/BOLD simulation [open].
- [Human Connectome Project tutorials](https://www.humanconnectome.org/tutorials) [open materials].

**Project ladder**

1. Build a structural/functional graph; analyze community structure, hubs, and rich clubs.
2. Compare against null networks that preserve degree/geometry, rather than just reporting graph metrics.
3. Compare cell types, functional similarity, and connection probability using MICrONS.
4. Test in TVB how structural connectivity, time delay, and local dynamics change whole-brain signals.

**Completion criteria**: systematically report parcellation, threshold/density, spatial embedding, multiple-comparison correction, and version; functional connectivity is a statistical association, not causal connectivity.

### 5.7 EEG/MEG/iEEG/fMRI & BCI

**Suited for**: human cognitive neuroscience, clinical data, neuroengineering, non-invasive BCI.

**Prerequisites**: Stage 1's signals & systems; statistical modeling, experimental design, and knowledge of data leakage.

**Main tools and tutorials**

- EEG/MEG/iEEG/ECoG: [MNE-Python tutorials](https://mne.tools/stable/auto_tutorials/index.html).
- fMRI: [Nilearn user guide](https://nilearn.github.io/stable/user_guide.html).
- Data organization: [BIDS](https://bids.neuroimaging.io/) and the [BIDS Starter Kit](https://bids-standard.github.io/bids-starter-kit/).
- Data: [OpenNeuro](https://openneuro.org/).
- Whole-brain generative models: TVB.

**Project ladder**

1. EEG: artifact/QC → epoching/ERP → PSD/time-frequency → condition effects.
2. fMRI: design matrix/GLM → contrast → ROI or decoding; clearly state the preprocessing pipeline's origin.
3. BCI: classify/regress under strict session/subject splits, comparing a stationary baseline, calibration, and online feasibility.

**Completion criteria**: be able to explain reference/filter/epoch/rejection choices, multiple comparisons, circular analysis, and subject leakage; clinical/BCI results must discuss privacy, fairness, safety, and deployment drift.

### 5.8 Calcium imaging, behavioral video & multimodal experimental data

**Suited for**: those joining a systems neuroscience lab or analyzing 2-photon/1-photon imaging and animal behavior.

**Tool choices**

- Calcium imaging pipeline: [Suite2p](https://suite2p.readthedocs.io/en/latest/) or [CaImAn](https://caiman.readthedocs.io/en/latest/); pick one first.
- Markerless pose estimation: [DeepLabCut beginner/user guide](https://deeplabcut.github.io/DeepLabCut/docs/UseOverviewGuide.html).
- Unified neural/behavioral analysis: Pynapple; data standard: NWB/DANDI.

**Project ladder**

1. Start from already processed data: ROI QC, ΔF/F, event alignment, trial averaging.
2. Compare the conclusions drawn from deconvolved events versus raw fluorescence.
3. Align pose/behavior features with neural activity; perform encoding/decoding.
4. For a raw movie pipeline, use only a small sample and check sensitivity to registration, ROI selection, neuropil correction, and deconvolution parameters.

**Completion criteria**: don't treat calcium events as precise spike times; you must handle differing device timebases, missing frames, behavioral confounds, and nested observations.
