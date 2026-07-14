---
title: "专题分支"
description: "专题分支"
order: 6
---

每条主线默认 8–12 周。选择标准不是“哪个最热门”，而是你想解释的现象、可获得的数据和想进入的实验室。建议采用 **1 条主纵线 + 1 条方法横线**。

### 5.1 细胞、生物物理与多室模型

**适合**：关注离子通道、树突计算、细胞类型、疾病机制、药理或细胞级仿真的学习者。

**先修**：《Neuronal Dynamics》Ch.1–6；电路、ODE、基础电生理；Python。

**主资源**

- Sterratt et al., [*Principles of Computational Modelling in Neuroscience*, 2e](https://www.cambridge.org/highereducation/books/principles-of-computational-modelling-in-neuroscience/17D6BDB0AF15FAD5B9341132B6A706BF) [主教材][图书]。
- Koch, [*Biophysics of Computation*](https://academic.oup.com/book/40820) [进阶参考][图书]。
- [NEURON + Python tutorials](https://neuron.yale.edu/neuron/static/docs/neuronpython/index.html) 与 [NEURON course exercises](https://neuron.yale.edu/neuron/docs/neuron-course-exercises) [核心][开放]。
- [ModelDB](https://modeldb.science/)：查找与论文关联的可运行模型 [核心][开放]。

**工具选择**

- 单细胞、多室、形态和 ion channel：**NEURON**。
- 多尺度 NEURON 网络与批量实验： [NetPyNE](https://doc.netpyne.org/tutorial.html)。
- HPC/GPU 多室仿真： [Arbor](https://docs.arbor-sim.org/en/latest/) [选修]。
- 模型交换/共享： [NeuroML](https://neuroml.org/gettingstarted)、[Open Source Brain](https://www.opensourcebrain.org/) [选修]。

**项目阶梯**

1. single compartment passive membrane → HH。
2. ball-and-stick：改变树突长度/直径/输入位置，比较 somatic EPSP。
3. 从 ModelDB 复现一张图，记录通道参数与形态来源。
4. 做参数敏感性与 identifiability；提出能区分两个通道机制的实验预测。

**通关标准**：能解释 discretization、boundary condition、channel density、temperature correction 和参数退化；不能只把 NEURON GUI 跑通。

### 5.2 回路、非线性动力系统与群体动力学

**适合**：关注振荡、E/I balance、attractor、working memory、decision circuit、mean-field、neural manifold 的学习者。

**先修**：线性系统、Jacobian/eigenvalue、phase plane；《Neuronal Dynamics》Ch.4、12、15–18。

**主资源**

- Izhikevich, [*Dynamical Systems in Neuroscience*](https://www.izhikevich.org/publications/dsn/index.htm)：作者提供全文、代码和数据 [主教材][开放]。
- Ermentrout & Terman, [*Mathematical Foundations of Neuroscience*](https://link.springer.com/book/10.1007/978-0-387-87708-2) [进阶][图书]。
- [EPFL Neuronal Dynamics NX-465](https://edu.epfl.ch/coursebook/en/computational-neurosciences-neuronal-dynamics-NX-465) 与官方 Python exercises。
- [MIT Dynamical Systems in Neuroscience tutorial](https://ocw.mit.edu/courses/res-9-008-brain-and-cognitive-sciences-computational-tutorials/pages/12-dynamical-systems-in-neuroscience/) [开放]。

**工具选择**

- rate/ODE toy model：先用 NumPy/SciPy/JAX，通常不需要 simulator。
- 灵活的点神经元与教学网络： [Brian2](https://brian2.readthedocs.io/en/stable/)。
- 大规模 point-neuron network/HPC： [NEST tutorials](https://nest-simulator.readthedocs.io/en/v3.9/get-started_index.html)。
- 跨 simulator 对照： [PyNN](https://pynn.readthedocs.io/en/latest/) [选修]。

**项目阶梯**

1. Morris–Lecar/FitzHugh–Nagumo 的 nullcline、f–I、Type I/II excitability。
2. Wilson–Cowan E/I 参数扫掠；解析稳定性与数值模拟对照。
3. balanced spiking network，并与 rate/mean-field 预测比较。
4. ring/bump/working-memory attractor；分析噪声、容量和失稳。
5. 真实群体数据上做 PCA/latent state model，并进行 held-out reconstruction/decoding。

**通关标准**：能从方程推导定性相变，不能只靠模拟图命名“振荡/混沌”；必须区分模型状态空间与降维后数据轨迹。

### 5.3 神经编码、解码与大规模电生理

**适合**：关注 sensory coding、population code、Neuropixels、BCI、系统神经科学数据分析。

**先修**：概率统计、GLM、cross-validation、信号处理；Neuromatch W1 与《Neuronal Dynamics》Ch.7、10、11。

**主资源**

- Dayan & Abbott, *Theoretical Neuroscience* Part I。
- Rieke et al., [*Spikes: Exploring the Neural Code*](https://mitpress.mit.edu/9780262181747/spikes/) [经典][图书]。
- Kass/Eden/Brown 与 Kramer/Eden 两本神经数据分析书。
- [NeMoS GLM tutorials](https://nemos.readthedocs.io/en/latest/tutorials/README.html)、[Pynapple user guide](https://pynapple.org/user_guide.html)、[Elephant](https://elephant.readthedocs.io/en/latest/) [工具教程][开放]。

**Neuropixels 推荐顺序**

1. 先使用 Allen/IBL 已排序数据，学习 unit QC、PETH、tuning、population analysis。
2. 再在一小段 raw data 上练 [SpikeInterface](https://spikeinterface.readthedocs.io/en/latest/tutorials/) 与 [Kilosort](https://kilosort.readthedocs.io/en/stable/)；重点是 drift、artifact、quality metrics 与 curation。
3. acquisition、植入和手术必须在实验室完成正式安全与动物实验培训，不属于纯在线自学目标。

**项目阶梯**

1. 模拟 Poisson/LNP，利用 STA 与 GLM 恢复 receptive field。
2. 比较 ridge decoder、Poisson GLM、Bayesian decoder；报告 calibration 和 null。
3. Allen/IBL 上做 session-blocked stimulus/choice decoding 与跨脑区比较。
4. 加入低维轨迹或 state-space model，并检验跨 session/animal 泛化。

**通关标准**：能说明 bin size、smoothing、unit QC、trial alignment、data leakage 和 noise ceiling 对结论的影响。

### 5.4 学习、决策与计算认知

**适合**：关注 perception、choice、reward、dopamine、habit、working memory、computational psychiatry 的学习者。

**先修**：Bayes、likelihood、HMM、优化；Neuromatch Bayesian Decisions / Hidden Dynamics / RL。

**主资源**

- Sutton & Barto, [*Reinforcement Learning: An Introduction*, 2e](https://mitpress.mit.edu/9780262039246/reinforcement-learning/)；优先 Ch.1–6、9–10、13 [核心][图书/作者开放版]。
- Doya, [*Brain Computation: A Hands-on Guidebook*](https://oist.github.io/BrainComputation/BrainComputation.html)：Python notebooks，连接 ML 算法与脑实现 [推荐][开放]。
- [Probabilistic Models of Cognition](https://probmods.org/)：概率程序与认知模型 [推荐][开放]。
- [Computational Cognitive Neuroscience](https://compcogneuro.org/) [补充][开放]。
- Neuromatch 的 DDM/SPRT、HMM/Kalman、bandit/Q-learning 单元。

**项目阶梯**

1. 拟合 drift-diffusion model；做 parameter recovery 与 posterior predictive check。
2. 用 HMM/GLM-HMM 分析策略切换，比较状态数并检查 identifiability。
3. 实现 bandit、TD、Q-learning，比较 model-free/model-based 的 held-out likelihood。
4. 训练 RNN 完成 decision/working-memory task，再分析 fixed points 与 trajectories。

**通关标准**：行为拟合好不能直接声称神经实现；必须比较竞争模型、做 recovery，并明确 normative、algorithmic、mechanistic 三层之间的桥梁。

### 5.5 感知、计算视觉与 NeuroAI

**适合**：关注视觉/听觉表征、efficient/predictive coding、ANN–brain comparison、brain-inspired AI。

**先修**：共同核心 + 一门深度学习课程；熟悉 encoding/decoding、RSA、cross-validation。

**主资源**

- [CSHL Computational Neuroscience: Vision](https://cshl-comp-neuro-vision.github.io/website/index.html) [专题课程][开放材料]。
- [MIT Center for Brains, Minds and Machines Learning Hub](https://cbmm.mit.edu/learning-hub/courses) 与 [Brains, Minds and Machines](https://bmm.mit.edu/)。
- [Neuromatch Deep Learning](https://deeplearning.neuromatch.io/) → [Neuromatch NeuroAI](https://neuroai.neuromatch.io/)；官方把 CompNeuro + DL 或等价知识作为 NeuroAI 先修。
- [Brain-Score tutorials](https://www.brain-score.org/tutorials/) 与 [documentation](https://brain-score.readthedocs.io/en/latest/)。
- [NeuroGym](https://neurogym.github.io/)：认知任务与 RNN；[CEBRA](https://cebra.ai/docs/)：行为对齐表征 [选修]。

**项目阶梯**

1. Gabor/LNP V1 encoding，并和简单像素/线性基线比较。
2. CNN 各层预测不同脑区或做 RSA；使用 held-out stimuli 与 noise ceiling。
3. NeuroGym 上训练 RNN，分析 fixed point、trajectory 与 task generalization。
4. Brain-Score 比较模型族，并讨论 benchmark 的覆盖范围与限制。

**通关标准**：明确 DNN 是预测工具、现象模型还是机制假说；高 decoding/RSA/benchmark 分数不等于生物机制。必须有简单基线、OOD 或跨个体泛化。

### 5.6 网络神经科学、连接组与全脑模型

**注意**：图论意义的 structural/functional network 与 spiking circuit network 不是同一件事。

**主资源**

- Sporns, [*Networks of the Brain*](https://mitpress.mit.edu/9780262528986/networks-of-the-brain/) [图书]。
- [Brain Connectivity Toolbox](https://sites.google.com/site/bctnet/home) 与 measure list [工具]。
- [MICrONS tutorials](https://tutorial.microns-explorer.org/)：CAVE、细胞类型、突触连接、mesh/skeleton [开放]。
- [neuPrint Explorer/manual](https://neuprint.janelia.org/help) [开放]。
- [The Virtual Brain tutorials](https://docs.thevirtualbrain.org/tutorials/Tutorials.html)：neural mass、tractography、EEG/MEG/BOLD 仿真 [开放]。
- [Human Connectome Project tutorials](https://www.humanconnectome.org/tutorials) [开放材料]。

**项目阶梯**

1. 构建 structural/functional graph；分析 community、hub、rich club。
2. 与保留 degree/geometry 的 null networks 比较，而不是只报告 graph metric。
3. MICrONS 上比较细胞类型、功能相似性与连接概率。
4. 在 TVB 中测试结构连接、time delay 和 local dynamics 如何改变全脑信号。

**通关标准**：系统报告 parcellation、threshold/density、空间嵌入、多重比较和版本；functional connectivity 是统计关联，不等于因果连接。

### 5.7 EEG/MEG/iEEG/fMRI 与 BCI

**适合**：人类认知神经科学、临床数据、神经工程、非侵入式 BCI。

**先修**：阶段 1 的 signals & systems；统计建模、实验设计和数据泄漏知识。

**主工具与教程**

- EEG/MEG/iEEG/ECoG： [MNE-Python tutorials](https://mne.tools/stable/auto_tutorials/index.html)。
- fMRI： [Nilearn user guide](https://nilearn.github.io/stable/user_guide.html)。
- 数据组织： [BIDS](https://bids.neuroimaging.io/) 与 [BIDS Starter Kit](https://bids-standard.github.io/bids-starter-kit/)。
- 数据： [OpenNeuro](https://openneuro.org/)。
- 全脑生成模型：TVB。

**项目阶梯**

1. EEG：artifact/QC → epoch/ERP → PSD/time-frequency → condition effect。
2. fMRI：design matrix/GLM → contrast → ROI 或 decoding；明确预处理来源。
3. BCI：在严格 session/subject split 下做分类/回归，比较 stationary baseline、校准与在线可行性。

**通关标准**：能解释 reference/filter/epoch/rejection、multiple comparison、circular analysis 和 subject leakage；临床/BCI 结果必须讨论隐私、公平性、安全与部署漂移。

### 5.8 钙成像、行为视频与多模态实验数据

**适合**：加入系统神经科学实验室、分析 2-photon/1-photon 与动物行为的人。

**工具选择**

- 钙成像 pipeline： [Suite2p](https://suite2p.readthedocs.io/en/latest/) 或 [CaImAn](https://caiman.readthedocs.io/en/latest/)；先二选一。
- markerless pose： [DeepLabCut beginner/user guide](https://deeplabcut.github.io/DeepLabCut/docs/UseOverviewGuide.html)。
- 神经/行为统一分析：Pynapple；数据标准：NWB/DANDI。

**项目阶梯**

1. 现成 processed data：ROI QC、ΔF/F、event alignment、trial average。
2. 比较 deconvolved event 与原始 fluorescence 的结论差异。
3. pose/behavior feature 与 neural activity 对齐；做 encoding/decoding。
4. 原始 movie pipeline 只取小样本，检查 registration、ROI、neuropil 与 deconvolution 参数敏感性。

**通关标准**：不要把 calcium event 当作精确 spike time；必须处理不同设备 timebase、missing frame、行为 confound 和 nested observations。
