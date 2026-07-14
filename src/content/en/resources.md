---
title: "Resource Index"
description: "Resource index"
order: 7
---

This section is a "lookup table." While working through the main track, return to Section 3 — don't add every resource in this index to your to-do list.

### 6.1 Prerequisites: programming, math, statistics & neuroscience

| Area | Full course (weak foundation) | Quick review (existing college background) | Suggested hours |
|---|---|---|---:|
| Python from scratch | [CS50P](https://cs50.harvard.edu/python/) + problem sets/final project | [Official Python tutorial](https://docs.python.org/3/tutorial/) or Software Carpentry Python | 70–100h / 10–20h |
| Shell/Git | [Software Carpentry Shell](https://swcarpentry.github.io/shell-novice/) + [Git](https://swcarpentry.github.io/git-novice/) | Corresponding MIT Missing Semester lecture | 8–15h |
| Single-variable calculus | [MIT 18.01SC](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/) | Neuromatch W0D4 | 70–100h / 4–10h |
| Multivariable calculus | [MIT 18.02SC](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/), selected gradient/Jacobian material | Corresponding MML chapters | 40–70h / 6–12h |
| Linear algebra | [MIT 18.06SC](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) + problem sets | Neuromatch W0D3 | 60–90h / 4–10h |
| Probability & statistics | [MIT 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) or Harvard Stat 110 | Neuromatch W0D5 | 70–100h / 5–12h |
| ODEs/dynamical systems | [MIT 18.03SC](https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/) | Neuromatch numerical methods | 60–90h / 5–12h |
| Signals & systems | [MIT 6.003](https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/) | Neuromatch Signal Processing | 50–80h / 6–12h |
| Data science | [Berkeley Data 100](https://ds100.org/) + [Learning Data Science](https://learningds.org/intro.html) | NMA model fitting/GLM/PCA | 60–120h / 12–25h |
| Neuroscience | Pick one of HarvardX Parts 1–3, UTHealth, or MIT 9.01 | Neuromatch Neuro Video Series | 45–120h / 4–8h |

If your foundation is weak, don't work through every "full course" in the table above sequentially. Prioritize the two or three items you failed in the diagnostic; use Neuromatch refreshers for the rest, filling in gaps as you hit difficulties.

### 6.2 Core courses

| Resource | Positioning | Prerequisites | Assignments/practice | Self-study time |
|---|---|---|---|---:|
| [UW Computational Neuroscience](https://www.coursera.org/learn/computational-neuroscience) | Shortest full-overview intro; 8 modules covering coding, decoding, HH, networks, learning | Better with basic math/neuroscience | Platform quizzes/assignments; MATLAB/Octave/Python demos | 20–40h |
| [Rosenbaum 2024 open textbook](https://mitpress.mit.edu/9780262548083/modeling-neural-circuits-made-simple-with-python/) | Modern Python-first intro: units, noise/encoding, networks/mean field, plasticity, ANNs | Python + high-school/early college math | [Official notebooks/Colab](https://github.com/RobertRosenbaum/ModelingNeuralCircuits) | 6–8 weeks |
| [Neuromatch CompNeuro](https://compneuro.neuromatch.io/) | Modern comprehensive core course; code-first, covers ML, dynamics, stochastic processes, causality | Python, linear algebra, probability, ODEs, basic neuroscience | Extensive TODO notebooks + project templates | 12–16 weeks |
| [EPFL Neuronal Dynamics](https://neuronaldynamics.epfl.ch/) | Theory/mechanism-focused core course, from single cells to networks and cognition | ODEs, probability, linear algebra | End-of-chapter problems, videos, slides, 12 sets of Python exercises | 12–16 weeks |
| [MIT 9.40 Neural Computation](https://ocw.mit.edu/courses/9-40-introduction-to-neural-computation-spring-2018/) | Complete undergraduate course; balances signals, data, PCA, and models | Physics/computing/basic neuroscience | 20 videos, 7 problem sets, data, exam review | 12–16 weeks |
| [MIT 9.29J Computational Neuroscience](https://ocw.mit.edu/courses/9-29j-introduction-to-computational-neuroscience-spring-2004/) | Classic coding + dynamics mathematical route | ODEs, linear algebra, probability, MATLAB/Python | 8 problem sets, real `.mat` data, project requirements | 8–12 weeks |
| [MIT Neuroblox 2025](https://ocw.mit.edu/courses/res-9-009-introduction-to-computational-neuroscience-with-neuroblox-january-iap-2025/) | Julia-based modular, multiscale circuits and parameter fitting | After completing the common core | Hands-on exercises/open challenges | 2–6 weeks |
| [INCF TrainingSpace](https://training.incf.org/) | Aggregated free courses, lectures, tools, and neuroinformatics tutorials | Depends on topic | Filterable by computational neuroscience, NWB, EEG, etc. | Fill gaps as needed |

**Combination suggestions**

- First exposure, want to quickly gauge interest: pick either UW **or** Rosenbaum.
- Formal common core: Neuromatch.
- Theoretical depth: Neuronal Dynamics.
- Problem sets: MIT 9.40 + selected 9.29 — no need to rewatch all the videos.
- Multiscale/engineering-oriented: Neuroblox after the common core.

### 6.3 How to choose textbooks

| Book | Best use | Suggested reading approach | Access |
|---|---|---|---|
| Rosenbaum, *Modeling Neural Circuits Made Simple with Python* (2024) | The first modern Python textbook friendly to both science and engineering backgrounds | 6–8 week main line + notebooks | [Official OA](https://mitpress.mit.edu/9780262548083/modeling-neural-circuits-made-simple-with-python/) |
| Gerstner et al., *Neuronal Dynamics* | The primary mechanistic text after the common core | Read closely per Stage 3, do the Python exercises | [Full text online](https://neuronaldynamics.epfl.ch/online/) |
| Dayan & Abbott, *Theoretical Neuroscience* | Classic theory reference; encoding, networks, learning | Read topically on a second pass, do analytical + computational exercises per chapter | [Publisher](https://mitpress.mit.edu/9780262541855/theoretical-neuroscience/); [exercises/code](https://www.gatsby.ucl.ac.uk/~dayan/book/exercises.html) |
| Trappenberg, *Fundamentals of Computational Neuroscience*, 3e | Broad-spectrum intro alternative | Choose either this or Rosenbaum — no need to read both cover to cover | [OUP](https://academic.oup.com/book/45368) |
| Miller, *An Introductory Course in Computational Neuroscience* | For life-science backgrounds needing step-by-step MATLAB tutorials | 10–14 weeks; assignments can be ported to Python | [MIT Press](https://mitpress.mit.edu/9780262038256/an-introductory-course-in-computational-neuroscience/) |
| Izhikevich, *Dynamical Systems in Neuroscience* | Deep dive on excitability/bifurcation | Selected reading after completing ND Ch. 1–4 | [Author's full text/code/data](https://www.izhikevich.org/publications/dsn/index.htm) |
| Ermentrout & Terman, *Mathematical Foundations of Neuroscience* | Graduate-level mathematical neuroscience | Use as an index by problem/paper | [Springer](https://link.springer.com/book/10.1007/978-0-387-87708-2) |
| Sterratt et al., *Principles of Computational Modelling*, 2e | Cells, dendrites, channels, and modeling methods | Look up chapters alongside NEURON projects | [CUP](https://www.cambridge.org/highereducation/books/principles-of-computational-modelling-in-neuroscience/17D6BDB0AF15FAD5B9341132B6A706BF) |
| Koch, *Biophysics of Computation* | Deep reference on single-cell/dendritic computation | Not a first introduction | [OUP](https://academic.oup.com/book/40820) |
| Kramer & Eden, *Case Studies in Neural Data Analysis* | Practice-oriented neural data analysis | Choose cases by modality; run the data/code | [MIT Press](https://mitpress.mit.edu/9780262529372/case-studies-in-neural-data-analysis/) |
| Kass, Eden & Brown, *Analysis of Neural Data* | Statistical rigor, point processes/state-space models | Close reading for graduate-level data tracks | [Springer](https://link.springer.com/book/10.1007/978-1-4614-9602-1); [code/data](https://www.stat.cmu.edu/~kass/KEB/) |
| Rieke et al., *Spikes* | Classic problems in the neural code | Selected reading for the encoding track; doesn't replace a modern statistics textbook | [MIT Press](https://mitpress.mit.edu/9780262181747/spikes/) |
| Doya, *Brain Computation* | Bridge between ML/RL algorithms and brain mechanisms | Run the chapter notebooks | [Open Jupyter Book](https://oist.github.io/BrainComputation/BrainComputation.html) |

**Foundational neuroscience print books**: Bear, Connors & Paradiso's *Neuroscience: Exploring the Brain* is a good first book; Purves's *Neuroscience* suits a systematic course; Kandel et al.'s *Principles of Neural Science* is better used as a reference dictionary, and is not recommended for cover-to-cover reading by computational-track beginners.

### 6.4 Choosing software, simulators, and data tools

Choose a tool based on your scientific question first, not the other way around. At any given stage, you usually only need to learn one main tool.

| Task | First entry point | When to upgrade | Caveats/not applicable |
|---|---|---|---|
| Small ODEs, rate models, toy networks | NumPy + SciPy `solve_ivp` | Switch to JAX/PyTorch when you need autodiff/GPU | Don't reach for a large simulator for a few dozen state variables |
| Teaching and flexible point-neuron networks | [Brian2 tutorials/docs](https://brian2.readthedocs.io/en/stable/) | Move to NEST for large-scale parallelism | The unit system helps, but you still must check the integration and parameters yourself |
| Large-scale spiking networks | [NEST Getting Started](https://nest-simulator.readthedocs.io/en/v3.9/get-started_index.html) | When you need HPC or an existing model ecosystem | Not suited to fine-grained dendrites/morphology |
| Multi-compartment cells, dendrites, ion channels | [NEURON Python tutorials](https://neuron.yale.edu/neuron/static/docs/neuronpython/index.html) | Use NetPyNE for network workflows; consider Arbor for HPC | Many parameters — sensitivity analysis and provenance tracking are essential |
| NEURON multiscale networks | [NetPyNE tutorials](https://doc.netpyne.org/tutorial.html) | Large, standardized network models | Understand underlying NEURON first — don't just configure JSON |
| Cross-simulator description | [PyNN](https://pynn.readthedocs.io/en/latest/) | When you need to compare NEST/NEURON/Brian | The abstraction layer may hide backend differences |
| Allen-style multiscale brain networks | [BMTK tutorials](https://alleninstitute.github.io/bmtk/tutorials.html) | Reproducing the Allen model ecosystem | Not a general-purpose requirement for beginners |
| Already-sorted spikes/behavioral time series | [Pynapple user guide](https://pynapple.org/user_guide.html) | Pair with Elephant/NeMoS for point-process statistics | Still need to understand data hierarchy and time alignment |
| Spike-train statistics | [Elephant](https://elephant.readthedocs.io/en/latest/) | Use statsmodels/PyMC/JAX for custom statistical models | Doesn't replace understanding an estimator's assumptions |
| GLM encoding | [NeMoS tutorials](https://nemos.readthedocs.io/en/latest/tutorials/README.html) | Write your own or use PyMC for more complex hierarchical models | Start with constant, linear, and ridge baselines |
| Raw extracellular sorting/QC | [SpikeInterface tutorials](https://spikeinterface.readthedocs.io/en/latest/tutorials/) | Connect to Kilosort or other sorters for a lab pipeline | Beginner projects should prefer already-sorted open data |
| EEG/MEG/iEEG | [MNE-Python tutorials](https://mne.tools/stable/auto_tutorials/index.html) | Go deeper into source modeling/clinical pipelines later | Reference, filtering, and artifacts can materially change conclusions |
| fMRI | [Nilearn user guide](https://nilearn.github.io/stable/user_guide.html) | Use lab-standard tools for full preprocessing | Nilearn is mainly for analysis, not a full preprocessing pipeline |
| Calcium imaging | [Suite2p](https://suite2p.readthedocs.io/en/latest/) or [CaImAn](https://caiman.readthedocs.io/en/latest/) | Go deeper for raw-movie projects | Pick one; must check registration/ROI/neuropil |
| Behavioral pose | [DeepLabCut guide](https://deeplabcut.github.io/DeepLabCut/docs/UseOverviewGuide.html) | Extend for multi-animal/3D | Label quality and domain shift usually matter more than model architecture |
| Whole-brain generative models | [The Virtual Brain tutorials](https://docs.thevirtualbrain.org/tutorials/Tutorials.html) | Patient-specific/large research projects | Neural-mass states cannot be directly interpreted as single-neuron firing |
| NeuroAI benchmarks | [Brain-Score tutorials](https://www.brain-score.org/tutorials/) | Custom benchmarks/data integration | Rankings reflect performance under a specific dataset and metric, not proof of mechanism |
| Model lookup/reproduction | [ModelDB](https://modeldb.science/) | Use NeuroML/OSB for sharing standardized models | Check code, dependencies, paper version, and license first |

**Simple decision tree**

```text
Are you "fitting data" or "simulating mechanism"?
├─ Fitting data
│  ├─ Spikes/behavior → NumPy/Statsmodels → Pynapple/NeMoS/Elephant
│  ├─ Raw extracellular → SpikeInterface (start with a small sample)
│  ├─ EEG/MEG/iEEG → MNE
│  ├─ fMRI → BIDS + Nilearn
│  └─ Calcium/behavior video → Suite2p or CaImAn + DeepLabCut
└─ Simulating mechanism
   ├─ Rate/low-dimensional ODE → SciPy/JAX
   ├─ Point-neuron teaching/small-to-medium networks → Brian2
   ├─ Large-scale point-neuron → NEST
   ├─ Morphology/dendrites/ion channels → NEURON
   └─ Whole-brain neural mass → TVB
```

### 6.5 Open datasets and data standards

When choosing your first dataset, prioritize: a complete official tutorial, streamable access, a single session being enough to form a question, and clear metadata. Don't start by downloading an entire multi-terabyte dataset.

| Resource | Modality/scale | Best first question | Entry point and caveats |
|---|---|---|---|
| [Allen Visual Coding Neuropixels](https://allensdk.readthedocs.io/en/stable/visual_coding_neuropixels.html) | Multi-region mouse Neuropixels, visual stimuli/behavior | Unit QC, PETH/tuning, stimulus decoding, population trajectories | Mature AllenSDK tutorials; pick 1 session first and record the SDK/manifest version |
| [IBL open data](https://www.internationalbrainlab.com/data) | Standardized mouse decision-making behavior and brain-wide electrophysiology | Stimulus/choice/feedback encoding across brain regions | Use the ONE interface; splits must respect session/animal |
| [DANDI Archive](https://docs.dandiarchive.org/) | Mostly NWB-based ephys/ophys datasets | Learning streaming access, metadata, cross-session analysis | Start from the [Quick Start](https://docs.dandiarchive.org/example-notebooks/tutorials/open_data_quick_start_2026/Get-to-know-a-Dandiset/); pin the Dandiset/version |
| [NWB Training Materials](https://nwb.org/training-materials/) | Neurophysiology data standards and PyNWB | Convert your own simulated/small data into compliant NWB and validate metadata | NWB is a data standard, not an analysis method; preserve original provenance |
| [CRCNS](https://crcns.org/) | Classic spikes, LFP, behavior, etc. | Reproduce figures from classic encoding/rhythm papers | Data era, format, and license vary — check each one individually |
| [OpenNeuro](https://openneuro.org/) + [docs](https://docs.openneuro.org/) | BIDS fMRI, EEG, MEG, iEEG, etc. | ERP/time-frequency, fMRI GLM/ROI/decoding | Choose small datasets with an associated paper; confirm derivatives and preprocessing |
| [MICrONS Explorer tutorials](https://tutorial.microns-explorer.org/) | Functional imaging + EM connectomics | Cell type/functional similarity and connection probability | Query cost is high — follow the tutorial for small-scale CAVE queries first |
| [neuPrint](https://neuprint.janelia.org/help) | Connectomes such as *Drosophila* | Cell type, motifs, pathways, and network statistics | Query results depend on dataset version; graph metrics need spatial/degree nulls |
| [Human Connectome Project](https://www.humanconnectome.org/data/) | Human MRI, behavior, and connectomics | Functional/structural connectivity, individual differences | Access terms and data volume are heavier — not recommended as a first project |

**Data-project selection checklist**

- Has a clear license, citation format, version number, and original paper.
- Can complete the full pipeline on 1 subject/session on your own machine first.
- Main variables, event clocks, QC metrics, and missing values are documented.
- The question allows for a simple baseline and clear held-out evaluation.
- The compute/storage budget matches your available equipment; otherwise, downsample or use preprocessed data first.

### 6.6 Summer schools, workshops, conferences & community

These resources are best used after completing the common core and at least one project. Application years, dates, fees, and funding change every year — the links below are for tracking official announcements.

| Opportunity | Positioning | Suitable stage | Preparation advice |
|---|---|---|---|
| [Neuromatch Courses](https://neuromatch.io/courses/) | Online cohort-based CompNeuro, Deep Learning, NeuroAI | After completing the W0 prerequisites | Do the prereqs in advance; even without joining live, the course book can be fully self-studied |
| [MBL Methods in Computational Neuroscience](https://new-www.mbl.edu/education/advanced-research-training-courses/course-offerings/methods-computational-neuroscience) | Intensive theory, experiments, and project-based summer school | Graduate students/strong undergraduates, ideally with an existing project | Explain your fit via a research question, math/programming preparation, and a verifiable project |
| [Allen Summer Workshop on the Dynamic Brain](https://alleninstitute.org/events/summer-workshop-on-the-dynamic-brain-2026) | Allen data, visual system, dynamics, and projects | Those already able to analyze data independently | Complete a small AllenSDK project first; the yearly page will update |
| [IBRO-Simons Computational Neuroscience Imbizo](https://imbizo.africa/) | Intensive computational neuroscience training, with a focus on global diversity | After completing basic math/programming | Watch for that year's eligibility, location, and funding |
| [COSYNE Tutorials](https://www.cosyne.org/tutorials) | Half-day/full-day tutorials on cutting-edge methods | Already have the common core | Pick one or two topics directly relevant to your current project |
| [OCNS / CNS](https://www.cnsorg.org/) | Computational neuroscience conference, tutorials, and community | All stages | Early on, follow tutorials/posters; submit once you have results |
| [Brainhack School](https://school-brainhack.github.io/) | Open neuroscience, collaboration, and reproducible projects | After completing the tool foundations | Bring a small-scope, shareable project — that works best |
| [INCF TrainingSpace](https://training.incf.org/) | Index of neuroinformatics training resources | All stages, for filling gaps | Search by specific tool/standard rather than browsing aimlessly |

As of this roadmap's verification date (2026-07-14), this year's application cycles for the 2026 MBL MCN and Allen SWDB have already closed; adding the pages to next year's tracking list is more practical than scrambling to apply at the last minute.
