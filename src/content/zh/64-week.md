---
title: "64 周标准路线"
description: "64 周标准路线"
order: 4
---

| 阶段 | 周数 | 核心目标 | 阶段产出 |
|---|---:|---|---|
| 0. 工具与定向 | 1–2 | 建立科研计算工作流 | LIF 小仓库 |
| 1. 数学与神经科学桥梁 | 3–14 | 补足线代、ODE、概率、信号、神经生理 | 4 个基础 notebook |
| 2. 计算神经科学全景 | 15–26 | 完成 Neuromatch 核心模块 | 一个模型/数据 mini-project |
| 3. 神经元与网络动力学 | 27–38 | 用《Neuronal Dynamics》建立机制深度 | 单细胞到网络模型报告 |
| 4. 神经数据科学 | 39–50 | 独立完成真实数据分析 | 开放数据项目 v1 |
| 5. 专题主线 | 51–58 | 选择一个研究方向深入 | 专题项目或论文图复现 |
| 6. 研究型 capstone | 59–64 | 完成可复现研究闭环 | 仓库、短论文、演示 |

### 阶段 0：工具与定向（第 1–2 周）

**定位**：把“能运行 notebook”升级为“别人能重现结果”。

**核心资源**

- [Neuromatch Python Workshop 1/2](https://compneuro.neuromatch.io/tutorials/Schedule/schedule_intro.html) [核心][开放]
- [Software Carpentry：Shell、Git、Python](https://swcarpentry.github.io/) [推荐][开放]
- [MIT Missing Semester 2026](https://missing.csail.mit.edu/)：选择 Shell、开发环境、调试、Git、代码质量 [推荐][开放]
- [Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/)：NumPy、pandas、Matplotlib、scikit-learn 查漏 [参考][开放]

**本阶段只需掌握**

- Python：函数、数组广播、随机数、文件 I/O、绘图、简单类。
- 科学栈：NumPy、SciPy、pandas、Matplotlib/Seaborn、Jupyter、scikit-learn。
- 工程：环境文件、Git、README、相对路径、随机种子、基本测试。
- 不必先学 C++、CUDA、复杂软件架构或大规模集群。

**项目 P0：LIF neuron 最小仓库**

1. 从膜电位 ODE 写出 Euler 与 `solve_ivp` 两个版本。
2. 输入 step current 与 noisy current，画膜电位和 spike times。
3. sweep 输入电流，画 f–I curve；比较两个积分器与不同步长。
4. 仓库包含 `README.md`、环境文件、`src/`、`notebooks/`、`tests/`。

**完成标准**

- 在全新环境按 README 可复现全部图。
- 能解释时间常数、阈值、reset、refractory period 各自改变什么。
- 知道数值结果可能依赖步长，且实际检查过。

### 阶段 1：数学与神经科学桥梁（第 3–14 周）

#### 第 3–4 周：线性代数

**必须会**：向量/矩阵、basis、rank、projection/least squares、eigendecomposition、SVD、positive definite matrix、PCA。

- 主修：[Neuromatch Linear Algebra refresher](https://compneuro.neuromatch.io/tutorials/W0D3_LinearAlgebra/student/W0D3_Intro.html) [核心][开放]
- 补弱：[MIT 18.06SC Linear Algebra](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/)；重点看 subspace、projection/least squares、eigen、SVD，不必逐课全刷 [推荐][开放]
- 紧凑书：[Mathematics for Machine Learning](https://mml-book.github.io/) 第 2–4、10 章 [推荐][开放]

**产出**：不用 `sklearn.PCA`，从中心化、SVD 到投影重建实现 PCA；解释每个主成分方差与重建误差。

#### 第 5–7 周：微积分、ODE 与数值方法

**必须会**：导数/积分、Taylor expansion、gradient/Jacobian、线性 ODE、fixed point、局部稳定性、Euler/Runge–Kutta、phase plane。

- 主修：[Neuromatch Calculus refresher](https://compneuro.neuromatch.io/tutorials/W0D4_Calculus/student/W0D4_Intro.html) [核心][开放]
- 补弱：[MIT 18.03SC Differential Equations](https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/)；选择一阶 ODE、线性系统、相图、稳定性 [推荐][开放]
- 深化前置：[MIT Computational Tutorial: Dynamical Systems in Neuroscience](https://ocw.mit.edu/courses/res-9-008-brain-and-cognitive-sciences-computational-tutorials/pages/12-dynamical-systems-in-neuroscience/) [选修][开放]

**产出**：为二维线性系统计算 eigenvalues、画 vector field/trajectory；用解析与数值结果交叉检查。

#### 第 8–10 周：概率与统计

**必须会**：条件概率、Bayes、常见分布、期望/方差/协方差、LLN/CLT、likelihood、MLE/MAP、bootstrap、假设检验与效应量、线性/逻辑/Poisson 回归。

- 主修：[Neuromatch Statistics refresher](https://compneuro.neuromatch.io/tutorials/W0D5_Statistics/student/W0D5_Intro.html) [核心][开放]
- 系统补弱：[Harvard Stat 110](https://stat110.hsites.harvard.edu/)；优先条件概率、Poisson/Gaussian、joint distribution、covariance、LLN/CLT、Markov chain [推荐][开放]
- 书：Blitzstein & Hwang, *Introduction to Probability*，Stat 110 页面提供开放电子版 [推荐]

**产出**：模拟 Poisson spike train，验证均值/方差与计数窗关系；bootstrap firing-rate difference 的置信区间。

#### 第 11 周：信号与系统

**必须会**：采样/aliasing、卷积、线性滤波、Fourier transform、power spectrum、时频分析，以及滤波边界效应。

- 主修：[Neuromatch 总日程中的 Signal Processing 单元](https://compneuro.neuromatch.io/tutorials/Schedule/schedule_intro.html) [核心][开放]。课程书会随版本调整单元路径，因此从总日程进入最稳妥。

**产出**：构造含两个频率和噪声的信号，演示采样、滤波、FFT 与 spectrogram；解释参数选择造成的偏差。

#### 第 12 周：优化与信息论

**必须会**：gradient descent、loss 与 likelihood、regularization、entropy、mutual information、KL divergence 的意义。

- 快速入口：Neuromatch model fitting/GLM 的相关前置。
- 深化：[David MacKay, *Information Theory, Inference, and Learning Algorithms*](https://www.inference.org.uk/itprnn/book.pdf) 选读第 1–4、8–10 章 [选修][开放阅读]
- 课程：[MIT 6.050J Information and Entropy](https://ocw.mit.edu/courses/6-050j-information-and-entropy-spring-2008/) [选修][开放]

**产出**：从 likelihood 推导 Gaussian linear regression 或 Poisson GLM 的目标函数；数值验证正则化的 bias–variance trade-off。

#### 第 3–14 周并行：基础神经科学，每周 2 小时

**推荐二选一，不要全部完成：**

- 路线 A（直观、交互）：[HarvardX Fundamentals of Neuroscience](https://www.edx.org/learn/neuroscience/harvard-university-fundamentals-of-neuroscience-part-1-the-electrical-properties-of-the-neuron) Part 1–3 [推荐][平台制]；若部分单元已归档，则用下面的 UTHealth 开放教材补齐。
- 路线 B（开放教材）：[UTHealth Neuroscience Online](https://nba.uth.tmc.edu/neuroscience/m/index.htm)；重点 Section 1、感觉系统、运动、学习记忆 [推荐][开放]。
- 极简复习：[Neuromatch Neuro Video Series](https://compneuro.neuromatch.io/tutorials/W0D0_NeuroVideoSeries/student/W0D0_Intro.html) [核心][开放]。
- 更严谨但更重：[Duke Medical Neuroscience](https://www.coursera.org/learn/medical-neuroscience) [选修][平台制]。
- 课程式材料：[MIT 9.01 Introduction to Neuroscience](https://ocw.mit.edu/courses/9-01-introduction-to-neuroscience-fall-2007/) [选修][开放]。

**必须掌握的生物主题**

- 膜、电容、电导、Nernst/reversal potential、动作电位。
- chemical/electrical synapse，EPSP/IPSP，短时与长时可塑性。
- 感觉与运动通路、receptive field、population coding。
- spikes/LFP/EEG/MEG/fMRI/calcium imaging 各自的测量对象、分辨率和主要混杂。

**阶段 1 总过关标准**

- 能从 RC circuit 推出 LIF 方程并解释参数单位。
- 能判断二维系统固定点的局部稳定性。
- 能解释为什么 spike count 常用 Poisson/overdispersed 模型、为什么神经数据不能随意打乱 trial/animal 做交叉验证。
- 能给非专业同学解释任意一种神经测量技术“实际测到了什么”。

### 阶段 2：计算神经科学全景（第 15–26 周）

**主修唯一选择**：[Neuromatch Academy Computational Neuroscience 课程书](https://compneuro.neuromatch.io/) [核心][开放]。

直播课程把内容压缩在约三周；自学建议展开成 12 周：

| 周 | 模块 | 必做内容 | 小产出 |
|---:|---|---|---|
| 15 | Model Types / Modeling Practice | what/how/why 模型；把问题转成可证伪预测 | 一页 modeling proposal |
| 16 | Model Fitting | MSE、MLE、bootstrap、bias–variance、cross-validation | 拟合与不确定性 notebook |
| 17 | GLM | encoding、classification、regularization | Poisson GLM 编码模型 |
| 18 | Dimensionality Reduction | PCA、重建、非线性降维 | 群体轨迹与重建误差 |
| 19 | Deep Learning | decoding、CNN、normative encoding | 线性基线 vs 小型 NN |
| 20 | Signal Processing | sampling、FFT、filter、time-frequency | LFP/EEG 风格信号分析 |
| 21 | Linear Systems | LDS、Markov、AR、确定性+随机性 | 稳定性与轨迹 |
| 22 | Biological Neuron Models | LIF、相关输入、动态突触、STDP | 单元模型比较 |
| 23 | Dynamical Systems | rate model、Wilson–Cowan | E/I 相图与参数扫掠 |
| 24 | Bayesian Decisions | 离散/连续隐变量、utility | Bayesian observer |
| 25 | Hidden Dynamics | SPRT、HMM、Kalman、EM | 隐状态恢复 |
| 26 | RL + Network Causality | TD/bandit/Q-learning；干预、工具变量 | RL 或因果 mini-project |

**学习方法**

- 每个 tutorial 先自己预测图形和结果，再运行代码。
- 隐藏参考答案或从空 notebook 重写核心函数；至少保留一个简单 baseline。
- 每周写一页：科学问题、模型假设、参数、观测、评价、可能失败方式。

**项目 P1：Neuromatch mini-project**

可从课程的 [Datasets and Project Templates](https://compneuro.neuromatch.io/projects/docs/project_guidance.html) 选择 neurons、fMRI、ECoG 或 behavior/theory 数据，也可完成下面任一题：

- 用 GLM 预测 spike count，并与均值模型、ridge/Poisson 基线比较。
- 用 Wilson–Cowan 模型预测参数改变引起的稳态/振荡转变。
- 用 HMM 恢复行为策略切换，检查 parameter recovery。
- 用 Bayesian observer 或 RL 模型拟合行为，并做 posterior predictive check。

**完成标准**

- 明确 train/validation/test 或 cross-validation unit。
- 有 uncertainty、null/baseline、失败结果与限制，不只报告最好分数。
- 能把模型写成“输入—隐变量—参数—观测—预测”的生成过程。

### 阶段 3：神经元与网络动力学（第 27–38 周）

**主教材**：[Gerstner et al., *Neuronal Dynamics*](https://neuronaldynamics.epfl.ch/online/) [核心][开放在线阅读]。官网同时提供 [Python exercises](https://neuronaldynamics-exercises.readthedocs.io/en/latest/) 和 [15 周教学材料/视频入口](https://neuronaldynamics.epfl.ch/lectures.html)。

| 周 | 章节 | 重点 | 建议实现 |
|---:|---|---|---|
| 27 | Ch.1 | LIF、filter 视角、模型限制 | LIF、脉冲/周期/噪声输入 |
| 28 | Ch.2 | Nernst、HH、离子通道 | HH 与 f–I curve |
| 29 | Ch.3 | 突触、cable、compartment | passive cable 或 ball-and-stick |
| 30 | Ch.4 | 降维、nullcline、稳定性、bifurcation | 2D phase plane |
| 31 | Ch.5–6 | EIF/QIF/AdEx、adaptation、firing patterns | 三种简化模型比较 |
| 32 | Ch.7 | spike variability、PSTH、CV、renewal、neural code | spike-train statistics |
| 33 | Ch.8–11 | noise、likelihood、GLM、encoding/decoding | LNP/GLM 与 goodness-of-fit |
| 34 | Ch.12 | population、connectivity、balanced E/I | 随机 E/I 网络 |
| 35 | Ch.15 | rate model、网络响应 | rate vs spiking 比较 |
| 36 | Ch.16 | competition、decision、DDM | decision circuit |
| 37 | Ch.17–18 | Hopfield、working memory、neural field/bump | attractor network |
| 38 | Ch.19–20 | Hebb/STDP/reward learning、plastic network | STDP 或 reward-modulated rule |

**按方向裁剪**

- 数据/编码方向：精读 7、9–11；1–6 只做基本模型，13–15 可后置。
- 生物物理方向：精读 1–6，另学 NEURON；7–11 与 12 必须保留。
- 网络/动力学方向：精读 4、12–20；13–14 属进阶数学，可第二遍再学。
- 认知/决策方向：保留 7、10–12、15–20，并配合行为模型。

**项目 P2：从单细胞到网络**

至少完成四项中的三项：

1. LIF、EIF/AdEx、HH 在准确性、参数量和计算成本上的比较。
2. Wilson–Cowan 或 conductance-based E/I 网络的解析稳定性与数值模拟一致性。
3. Hopfield、ring/bump 或 decision attractor 的容量/鲁棒性/噪声分析。
4. 复现《Neuronal Dynamics》一张图，并做一个原文没有的参数扰动。

**完成标准**

- 不只会画轨迹：能从方程找 fixed point、计算 Jacobian/eigenvalues，并解释局部稳定性。
- 报告模型层次、单位、积分器、步长、初值、随机种子和参数来源。
- 解释“更生物真实”为什么不自动意味着“更好的科学模型”。

### 阶段 4：神经数据科学（第 39–50 周）

**主线资料**

- Neuromatch 的 Model Fitting、GLM、Dimensionality Reduction、Signal Processing、Hidden Dynamics [核心][开放]。
- Kramer & Eden, [*Case Studies in Neural Data Analysis*](https://mitpress.mit.edu/9780262529372/case-studies-in-neural-data-analysis/)；官网链接数据与代码 [推荐][图书]。
- Kass, Eden & Brown, [*Analysis of Neural Data*](https://link.springer.com/book/10.1007/978-1-4614-9602-1)，[作者代码/数据站](https://www.stat.cmu.edu/~kass/KEB/) [进阶][图书]。
- 《Neuronal Dynamics》Ch.7、9–11 [核心]。

| 周 | 主题 | 必做检查 |
|---:|---|---|
| 39 | 实验设计与数据模态 | unit of analysis、trial/session/animal 层级、混杂 |
| 40 | QC、EDA 与不确定性 | 缺失、artifact、effect size、bootstrap/hierarchical CI |
| 41 | spikes 与 point process | raster、PSTH、ISI/CV/Fano、Poisson/renewal |
| 42 | tuning/receptive field/encoding | STA/LNP/GLM、regularization、goodness-of-fit |
| 43 | decoding | leakage-free split、calibration、null、跨 session 泛化 |
| 44 | population analysis | PCA、trajectory、latent/state-space、稳定性 |
| 45 | LFP/EEG/连续信号 | filter、PSD、time-frequency、event alignment |
| 46 | 数据标准 | NWB/BIDS、metadata、provenance、license/citation |
| 47 | 开放数据访问 | 先取 1 session/subject，建立 data manifest |
| 48 | 研究问题与 baseline | 预先写评价、失败标准和 sanity checks |
| 49 | 主分析与 robustness | 多切分、参数敏感性、negative control |
| 50 | 报告与复现 | clean environment 重跑，2–4 页短报告 |

**推荐数据项目，四选一**

1. **Allen Neuropixels**：从官方 [quick start/tutorials](https://allensdk.readthedocs.io/en/stable/visual_coding_neuropixels.html) 开始，做 unit QC、PETH/tuning、刺激或行为 decoding、PCA trajectory。
2. **IBL Brain-Wide Map**：从 [数据页与 ONE 教程](https://www.internationalbrainlab.com/data) 开始，比较不同脑区的 choice/stimulus/feedback encoding。
3. **DANDI/NWB**：用 [2026 Quick Start](https://docs.dandiarchive.org/example-notebooks/tutorials/open_data_quick_start_2026/Get-to-know-a-Dandiset/) 选择小型 ephys/ophys 数据，学习 streaming、metadata 与分析。
4. **OpenNeuro**：选一个小型 BIDS EEG/fMRI 数据集；EEG 用 MNE，fMRI 用 Nilearn。不要把预处理和神经解释混为一谈。

**项目 P3 的最低分析闭环**

```text
数据来源/许可 → 质量控制 → 时间/事件对齐 → 预先定义特征
→ 简单基线 → 主模型 → held-out 评价 → uncertainty/null
→ robustness/敏感性 → 神经科学解释与限制
```

**完成标准**

- 数据切分匹配研究问题：至少考虑 trial、session、animal，不能把相关样本随机打散造成泄漏。
- 明示 QC threshold，并做阈值敏感性分析。
- 报告简单基线、null distribution、uncertainty；适用时报告 noise ceiling。
- 分清 prediction、association 与 causality。

### 阶段 5：专题主线（第 51–58 周）

只选择文档第 5 节中的 **一条主纵线**，再选一条支撑横线。例如：

- 偏理论：动力系统主线 + 编码/数据横线。
- 偏神经数据：大规模数据分析主线 + encoding/modeling 横线。
- 偏认知：学习/决策主线 + dynamics/RNN 横线。
- 偏 NeuroAI：NeuroAI 主线 + 感知/population analysis 横线。
- 偏生物物理：NEURON/细胞建模主线 + 动力系统横线。

八周内完成专题核心资料、一个小型复现和一个原创扰动/扩展。不要在这一阶段同时学习多个 simulator 或所有数据模态。

### 阶段 6：研究型 capstone（第 59–64 周）

| 周 | 工作 | 可验证产出 |
|---:|---|---|
| 59 | 选论文/问题，写 scope、预测、评价和失败标准 | 1–2 页 proposal |
| 60 | 获取数据/代码，复现环境与最简单 baseline | data manifest + baseline |
| 61 | 复现一张关键图或一个核心数值 | reproduction figure |
| 62 | robustness、ablation、parameter recovery 或跨数据泛化 | sensitivity/null results |
| 63 | 整理代码、测试、方法和局限 | release candidate |
| 64 | clean-room 重跑、短论文、10 分钟演示 | v1.0 release |

**统一交付物**

1. README：科学问题、数据/模型来源、运行命令、预期耗时。
2. 锁定环境；数据用 acquisition script 或 manifest，不把 TB 级原始数据塞进 Git。
3. 核心函数放 `src/` 并有少量测试；notebook 主要用于探索与展示。
4. 一项公开结果/图的复现，以及一项参数扰动、ablation 或新假设。
5. held-out evaluation、uncertainty、null/baseline；适用时 noise ceiling。
6. 2–4 页短报告：question、method、result、limitations、next experiment。

**研究准备通关 rubric**

- 能明确模型是 descriptive、normative 还是 mechanistic。
- 能从零推导并实现一个简单 baseline。
- 能进行无泄漏切分并量化 uncertainty。
- 能区分预测、相关和因果。
- 能在干净环境中复现结果。
- 能说明 identifiability、failure mode，以及什么实验可以区分竞争模型。
