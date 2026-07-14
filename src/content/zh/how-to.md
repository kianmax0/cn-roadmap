---
title: "如何使用这份路线图"
description: "如何使用这份路线图"
order: 1
---

这份整理借鉴 [CS 自学指南](https://csdiy.wiki/) 的组织逻辑：不只罗列课程，而是给出先修依赖、主线课程、配套教材、作业/项目、完成标准、进阶分支和自学建议。它是一份可执行的“培养方案”，不是资源百科。

### 0.1 标签

- **[核心]**：以科研入门为目标时应完成。
- **[推荐]**：强烈建议，但可按背景替换或压缩。
- **[选修]**：只在对应研究方向需要时学习。
- **[开放]**：主要教学材料可免费在线访问；直播班、证书或纸书可能收费。
- **[平台制]**：Coursera/edX 等平台的旁听、作业和证书政策会变化，以页面当日说明为准。
- **[图书]**：通常需购买或通过图书馆访问，除非另行注明有作者公开版。

### 0.2 最重要的使用原则

1. 每个阶段只选 **1 个主课程 + 1 本参考书 + 1 个项目**。不要同时“刷”所有资源。
2. 学习时间至少一半用于推导、编程、作业和解释结果；视频不是学习成果。
3. 始终把问题分成三类：**描述/预测（what）**、**机制（how）**、**规范性解释（why）**。预测准确不等于找到了生物机制。
4. 所有模型都要有基线、训练/测试隔离、不确定性、失效条件和生物学解释。
5. 每 8–12 周产出一个公开、可复现的小项目，而不是等“全部学完”才开始研究。

### 0.3 如果只想知道最简主线

按顺序完成下面四件事，已经是一条质量很高的入门路线：

1. [Neuromatch 先修材料](https://compneuro.neuromatch.io/prereqs/ComputationalNeuroscience.html)：补 Python、线代、微积分/ODE、统计和基础神经科学。
2. [Neuromatch Computational Neuroscience 课程书](https://compneuro.neuromatch.io/)：建立模型拟合、GLM、降维、动力系统、Bayes、隐状态、强化学习和因果的全景。
3. [EPFL《Neuronal Dynamics》](https://neuronaldynamics.epfl.ch/online/)：把单神经元、脉冲统计、网络与认知动力学学深，并完成配套 Python 练习。
4. 用 [Allen Visual Coding Neuropixels](https://allensdk.readthedocs.io/en/stable/visual_coding_neuropixels.html)、[IBL](https://www.internationalbrainlab.com/data) 或 [DANDI](https://docs.dandiarchive.org/) 做一个开放数据项目，再复现一篇论文中的一张关键图。
