---
title: "资源索引"
description: "资源索引"
order: 7
---

本节是“查找表”。主线学习时请回到第 3 节，不要把索引中的资源全部加入待办。

### 6.1 编程、数学、统计与神经科学先修

| 领域 | 完整主课（基础薄弱者） | 快速复习（已有大学基础） | 建议学时 |
|---|---|---|---:|
| Python 零基础 | [CS50P](https://cs50.harvard.edu/python/) + problem sets/final project | [Python 官方教程](https://docs.python.org/3/tutorial/) 或 Software Carpentry Python | 70–100h / 10–20h |
| Shell/Git | [Software Carpentry Shell](https://swcarpentry.github.io/shell-novice/) + [Git](https://swcarpentry.github.io/git-novice/) | MIT Missing Semester 对应课 | 8–15h |
| 单变量微积分 | [MIT 18.01SC](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/) | Neuromatch W0D4 | 70–100h / 4–10h |
| 多变量微积分 | [MIT 18.02SC](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/) 精选 gradient/Jacobian | MML 对应章节 | 40–70h / 6–12h |
| 线性代数 | [MIT 18.06SC](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) + problem sets | Neuromatch W0D3 | 60–90h / 4–10h |
| 概率统计 | [MIT 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/) 或 Harvard Stat 110 | Neuromatch W0D5 | 70–100h / 5–12h |
| ODE/动力系统 | [MIT 18.03SC](https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/) | Neuromatch numerical methods | 60–90h / 5–12h |
| 信号与系统 | [MIT 6.003](https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/) | Neuromatch Signal Processing | 50–80h / 6–12h |
| 数据科学 | [Berkeley Data 100](https://ds100.org/) + [Learning Data Science](https://learningds.org/intro.html) | NMA model fitting/GLM/PCA | 60–120h / 12–25h |
| 神经科学 | HarvardX Part 1–3、UTHealth 或 MIT 9.01 三选一 | Neuromatch Neuro Video Series | 45–120h / 4–8h |

基础薄弱者不要把上表所有“完整主课”串行完成。优先修补诊断中没通过的两三项；其余用 Neuromatch refresher，在遇到困难时回补。

### 6.2 核心课程

| 资源 | 定位 | 先修 | 作业/实践 | 自学时长 |
|---|---|---|---|---:|
| [UW Computational Neuroscience](https://www.coursera.org/learn/computational-neuroscience) | 最短全景导论；8 模块覆盖编码、解码、HH、网络、学习 | 基础数学/神经科学更佳 | 平台 quiz/assignment；MATLAB/Octave/Python 演示 | 20–40h |
| [Rosenbaum 2024 开放教材](https://mitpress.mit.edu/9780262548083/modeling-neural-circuits-made-simple-with-python/) | 现代 Python 入门：单元、噪声/编码、网络/均场、塑性、ANN | Python + 高中/大学初等数学 | [官方 notebooks/Colab](https://github.com/RobertRosenbaum/ModelingNeuralCircuits) | 6–8 周 |
| [Neuromatch CompNeuro](https://compneuro.neuromatch.io/) | 现代综合主课；代码优先，覆盖 ML、动力、随机、因果 | Python、线代、概率、ODE、基础神经 | 大量 TODO notebooks + project templates | 12–16 周 |
| [EPFL Neuronal Dynamics](https://neuronaldynamics.epfl.ch/) | 理论/机制主课，单细胞到网络和认知 | ODE、概率、线代 | 章末题、视频、slides、12 组 Python exercises | 12–16 周 |
| [MIT 9.40 Neural Computation](https://ocw.mit.edu/courses/9-40-introduction-to-neural-computation-spring-2018/) | 完整本科课堂；信号、数据、PCA 与模型兼顾 | 物理/计算/基础神经 | 20 个视频、7 个 problem sets、数据、考试复习 | 12–16 周 |
| [MIT 9.29J Computational Neuroscience](https://ocw.mit.edu/courses/9-29j-introduction-to-computational-neuroscience-spring-2004/) | 经典 coding + dynamics 数学路线 | ODE、线代、概率、MATLAB/Python | 8 套题、真实 `.mat` 数据、项目要求 | 8–12 周 |
| [MIT Neuroblox 2025](https://ocw.mit.edu/courses/res-9-009-introduction-to-computational-neuroscience-with-neuroblox-january-iap-2025/) | Julia 模块化、多尺度回路与参数拟合 | 完成共同核心后 | hands-on exercise/open challenge | 2–6 周 |
| [INCF TrainingSpace](https://training.incf.org/) | 免费课程、讲座、工具与神经信息学教程聚合 | 依主题 | 可按 computational neuroscience、NWB、EEG 等筛选 | 查缺补漏 |

**组合建议**

- 第一次接触且想快速判断兴趣：UW **或** Rosenbaum，二选一。
- 正式共同核心：Neuromatch。
- 理论深度：Neuronal Dynamics。
- 题库：MIT 9.40 + 9.29 精选，不必把视频全部重听。
- 多尺度/工程化：共同核心后再学 Neuroblox。

### 6.3 教材怎么选

| 书 | 最适合的用途 | 建议读法 | 访问 |
|---|---|---|---|
| Rosenbaum, *Modeling Neural Circuits Made Simple with Python* (2024) | 第一本文理工友好的现代 Python 教材 | 6–8 周主干 + notebooks | [官方 OA](https://mitpress.mit.edu/9780262548083/modeling-neural-circuits-made-simple-with-python/) |
| Gerstner et al., *Neuronal Dynamics* | 共同核心后的机制主教材 | 按第 3 阶段精读、做 Python 题 | [全文在线](https://neuronaldynamics.epfl.ch/online/) |
| Dayan & Abbott, *Theoretical Neuroscience* | 经典理论字典；编码、网络、学习 | 第二遍按主题读，每章做解析+计算题 | [出版社](https://mitpress.mit.edu/9780262541855/theoretical-neuroscience/)；[习题/代码](https://www.gatsby.ucl.ac.uk/~dayan/book/exercises.html) |
| Trappenberg, *Fundamentals of Computational Neuroscience*, 3e | 广谱入门替代教材 | 与 Rosenbaum 二选一，不必都通读 | [OUP](https://academic.oup.com/book/45368) |
| Miller, *An Introductory Course in Computational Neuroscience* | 生命科学背景、需要逐步 MATLAB tutorial | 10–14 周；可把作业移植到 Python | [MIT Press](https://mitpress.mit.edu/9780262038256/an-introductory-course-in-computational-neuroscience/) |
| Izhikevich, *Dynamical Systems in Neuroscience* | excitability/bifurcation 专修 | 完成 ND Ch.1–4 后选读 | [作者全文/代码/数据](https://www.izhikevich.org/publications/dsn/index.htm) |
| Ermentrout & Terman, *Mathematical Foundations of Neuroscience* | 研究生数学神经科学 | 以问题/论文为索引查读 | [Springer](https://link.springer.com/book/10.1007/978-0-387-87708-2) |
| Sterratt et al., *Principles of Computational Modelling*, 2e | 细胞、树突、通道和建模方法 | 配合 NEURON 项目查章 | [CUP](https://www.cambridge.org/highereducation/books/principles-of-computational-modelling-in-neuroscience/17D6BDB0AF15FAD5B9341132B6A706BF) |
| Koch, *Biophysics of Computation* | 单细胞/树突计算深入参考 | 不作为第一次入门 | [OUP](https://academic.oup.com/book/40820) |
| Kramer & Eden, *Case Studies in Neural Data Analysis* | 实践型神经数据分析 | 按模态选 case，运行数据/代码 | [MIT Press](https://mitpress.mit.edu/9780262529372/case-studies-in-neural-data-analysis/) |
| Kass, Eden & Brown, *Analysis of Neural Data* | 统计严谨性、point process/state-space | 研究生数据方向精读 | [Springer](https://link.springer.com/book/10.1007/978-1-4614-9602-1)；[代码/数据](https://www.stat.cmu.edu/~kass/KEB/) |
| Rieke et al., *Spikes* | neural code 经典问题 | 编码方向选读，不替代现代统计教材 | [MIT Press](https://mitpress.mit.edu/9780262181747/spikes/) |
| Doya, *Brain Computation* | ML/RL 算法与脑机制的桥梁 | 运行章节 notebooks | [开放 Jupyter Book](https://oist.github.io/BrainComputation/BrainComputation.html) |

**基础神经科学纸书**：Bear, Connors & Paradiso 的 *Neuroscience: Exploring the Brain* 适合第一本；Purves 的 *Neuroscience* 适合系统课程；Kandel et al. 的 *Principles of Neural Science* 更适合作为参考字典，不建议计算方向初学者从头通读。

### 6.4 软件、模拟器与数据工具选择表

先按科学问题选工具，不要反过来让工具决定问题。同一阶段通常只需学一套主工具。

| 任务 | 首选入口 | 何时升级 | 不适用/注意 |
|---|---|---|---|
| 小型 ODE、rate model、toy network | NumPy + SciPy `solve_ivp` | 需要 autodiff/GPU 时用 JAX/PyTorch | 不要为几十个状态变量先上大型 simulator |
| 教学与灵活 point-neuron 网络 | [Brian2 tutorials/docs](https://brian2.readthedocs.io/en/stable/) | 大规模并行转 NEST | 单位系统很有帮助，但仍要自己检查积分与参数 |
| 大规模脉冲网络 | [NEST Getting Started](https://nest-simulator.readthedocs.io/en/v3.9/get-started_index.html) | HPC 或既有模型生态需要时 | 不适合精细树突/形态 |
| 多室细胞、树突、离子通道 | [NEURON Python tutorials](https://neuron.yale.edu/neuron/static/docs/neuronpython/index.html) | 网络工作流用 NetPyNE；HPC 可看 Arbor | 参数很多，必须做敏感性与来源记录 |
| NEURON 多尺度网络 | [NetPyNE tutorials](https://doc.netpyne.org/tutorial.html) | 大型标准化网络模型 | 先理解底层 NEURON，不要只会配置 JSON |
| 跨 simulator 描述 | [PyNN](https://pynn.readthedocs.io/en/latest/) | 需要比较 NEST/NEURON/Brian 时 | 抽象层可能隐藏后端差异 |
| Allen 风格多尺度脑网络 | [BMTK tutorials](https://alleninstitute.github.io/bmtk/tutorials.html) | 复现 Allen 模型生态 | 不是一般入门必修 |
| 已排序 spikes/行为时序 | [Pynapple user guide](https://pynapple.org/user_guide.html) | 需要 point-process 统计时配 Elephant/NeMoS | 仍需理解数据层级与时间对齐 |
| spike-train statistics | [Elephant](https://elephant.readthedocs.io/en/latest/) | 自定义统计模型用 statsmodels/PyMC/JAX | 不替代对 estimator 假设的理解 |
| GLM encoding | [NeMoS tutorials](https://nemos.readthedocs.io/en/latest/tutorials/README.html) | 更复杂层级模型再自写/PyMC | 先做常数、线性、ridge 等基线 |
| raw extracellular sorting/QC | [SpikeInterface tutorials](https://spikeinterface.readthedocs.io/en/latest/tutorials/) | 实验室 pipeline 再接 Kilosort 等 sorter | 初学项目优先用已排序开放数据 |
| EEG/MEG/iEEG | [MNE-Python tutorials](https://mne.tools/stable/auto_tutorials/index.html) | source modeling/临床流程再深入 | reference、filter 与 artifact 会实质改变结论 |
| fMRI | [Nilearn user guide](https://nilearn.github.io/stable/user_guide.html) | 完整预处理用实验室规范工具 | Nilearn 主要面向分析，不等于完整预处理流水线 |
| calcium imaging | [Suite2p](https://suite2p.readthedocs.io/en/latest/) 或 [CaImAn](https://caiman.readthedocs.io/en/latest/) | 原始 movie 项目再深入 | 二选一；必须检查 registration/ROI/neuropil |
| 行为姿态 | [DeepLabCut guide](https://deeplabcut.github.io/DeepLabCut/docs/UseOverviewGuide.html) | 多动物/3D 再扩展 | 标签质量与 domain shift 往往比模型结构更关键 |
| 全脑生成模型 | [The Virtual Brain tutorials](https://docs.thevirtualbrain.org/tutorials/Tutorials.html) | patient-specific/大型研究项目 | neural mass 的状态不能直接解释为单神经元放电 |
| NeuroAI benchmark | [Brain-Score tutorials](https://www.brain-score.org/tutorials/) | 自定义 benchmark/数据接入 | 排名是特定数据与 metric 下的表现，不是机制证明 |
| 模型查找/复现 | [ModelDB](https://modeldb.science/) | 共享标准化模型用 NeuroML/OSB | 先核对代码、依赖、论文版本与许可 |

**简单决策树**

```text
你是在“拟合数据”还是“模拟机制”？
├─ 拟合数据
│  ├─ spikes/行为 → NumPy/Statsmodels → Pynapple/NeMoS/Elephant
│  ├─ raw extracellular → SpikeInterface（先从小样本开始）
│  ├─ EEG/MEG/iEEG → MNE
│  ├─ fMRI → BIDS + Nilearn
│  └─ calcium/behavior video → Suite2p 或 CaImAn + DeepLabCut
└─ 模拟机制
   ├─ rate/低维 ODE → SciPy/JAX
   ├─ 点神经元教学/中小网络 → Brian2
   ├─ 大规模 point-neuron → NEST
   ├─ 形态/树突/离子通道 → NEURON
   └─ 全脑 neural-mass → TVB
```

### 6.5 开放数据集与数据标准

选择第一个数据集时，优先考虑：官方 tutorial 完整、可流式读取、单 session 足以形成问题、元数据清晰。不要一开始下载整套多 TB 数据。

| 资源 | 模态/尺度 | 最适合的第一个问题 | 入口与注意 |
|---|---|---|---|
| [Allen Visual Coding Neuropixels](https://allensdk.readthedocs.io/en/stable/visual_coding_neuropixels.html) | 小鼠多脑区 Neuropixels、视觉刺激/行为 | unit QC、PETH/tuning、刺激 decoding、群体轨迹 | AllenSDK 教程成熟；先选 1 session，记录 SDK/manifest 版本 |
| [IBL 开放数据](https://www.internationalbrainlab.com/data) | 标准化小鼠决策行为与全脑电生理 | 不同脑区的 stimulus/choice/feedback encoding | 用 ONE 接口；切分必须尊重 session/animal |
| [DANDI Archive](https://docs.dandiarchive.org/) | NWB 为主的 ephys/ophys 多数据集 | 学习流式访问、metadata、跨 session 分析 | 从 [Quick Start](https://docs.dandiarchive.org/example-notebooks/tutorials/open_data_quick_start_2026/Get-to-know-a-Dandiset/) 开始，固定 Dandiset/version |
| [NWB Training Materials](https://nwb.org/training-materials/) | 神经生理数据标准与 PyNWB | 把自己的模拟/小数据写成规范 NWB，验证 metadata | NWB 是数据标准，不是分析方法；保留原始 provenance |
| [CRCNS](https://crcns.org/) | 经典 spikes、LFP、行为等 | 复现经典编码/节律论文图 | 数据年代、格式和许可各异，逐项核对 |
| [OpenNeuro](https://openneuro.org/) + [文档](https://docs.openneuro.org/) | BIDS fMRI、EEG、MEG、iEEG 等 | ERP/time-frequency、fMRI GLM/ROI/decoding | 选择小型且有配套论文的数据；确认 derivatives 与预处理 |
| [MICrONS Explorer tutorials](https://tutorial.microns-explorer.org/) | 功能成像 + EM 连接组 | 细胞类型/功能相似性与连接概率 | 查询成本高，先跟 tutorial 做小范围 CAVE 查询 |
| [neuPrint](https://neuprint.janelia.org/help) | 果蝇等 connectome | cell type、motif、pathway 和 network statistics | 查询结果依赖 dataset version；图指标需 spatial/degree null |
| [Human Connectome Project](https://www.humanconnectome.org/data/) | 人类 MRI、行为与连接组 | functional/structural connectivity、个体差异 | 访问条款与数据体量更重，不建议作为第一个项目 |

**数据项目选择检查**

- 有明确许可、引用方式、版本号和原始论文。
- 能先用 1 个 subject/session 在本机完成全流程。
- 主要变量、事件时钟、QC 指标和缺失值有文档。
- 问题允许简单 baseline 和清楚的 held-out 评价。
- 计算/存储预算与现有设备相符；否则先做下采样或预处理数据。

### 6.6 暑校、工作坊、会议与社区

这些资源适合在完成共同核心和至少一个项目后使用。申请年份、日期、费用和资助每年都会变化，以下链接用于跟踪官方公告。

| 机会 | 定位 | 适合阶段 | 准备建议 |
|---|---|---|---|
| [Neuromatch Courses](https://neuromatch.io/courses/) | 在线 cohort 式 CompNeuro、Deep Learning、NeuroAI | 完成 W0 先修后 | 提前做 prereq；即使不参加直播，课程书也可完整自学 |
| [MBL Methods in Computational Neuroscience](https://new-www.mbl.edu/education/advanced-research-training-courses/course-offerings/methods-computational-neuroscience) | 高强度理论、实验和项目型暑校 | 研究生/强本科生，已有项目更佳 | 用研究问题、数学/编程准备和可验证项目说明匹配度 |
| [Allen Summer Workshop on the Dynamic Brain](https://alleninstitute.org/events/summer-workshop-on-the-dynamic-brain-2026) | Allen 数据、视觉系统、动力学与项目 | 已能独立分析数据者 | 先完成 AllenSDK 小项目；年份页面会更新 |
| [IBRO-Simons Computational Neuroscience Imbizo](https://imbizo.africa/) | 计算神经科学密集训练，重视全球多样性 | 完成基础数学/编程后 | 关注当年资格、地点与资助 |
| [COSYNE Tutorials](https://www.cosyne.org/tutorials) | 前沿方法半天/一天 tutorial | 已具共同核心 | 选与当前项目直接相关的一两个主题 |
| [OCNS / CNS](https://www.cnsorg.org/) | 计算神经科学会议、教程与社区 | 各阶段 | 初期可跟 tutorial/海报；有结果后再投稿 |
| [Brainhack School](https://school-brainhack.github.io/) | 开放神经科学、协作和可复现项目 | 完成工具基础后 | 带一个范围小、能公开的项目最有效 |
| [INCF TrainingSpace](https://training.incf.org/) | 神经信息学训练资源索引 | 全阶段查缺补漏 | 按具体工具/标准检索，不要无目的刷课 |

截至本路线图核验日（2026-07-14），2026 年 MBL MCN 与 Allen SWDB 的本届申请均已结束；把页面加入下一年度跟踪列表比临时赶申请更实际。
