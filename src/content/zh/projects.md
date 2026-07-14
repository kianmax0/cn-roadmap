---
title: "项目阶梯"
description: "项目阶梯"
order: 8
---

### 7.1 六级项目序列

| 级别 | 建议用时 | 项目 | 核心能力 | 最低交付 |
|---|---:|---|---|---|
| P0 | 1–2 周 | LIF/HH 等最小模拟 | ODE、数值法、Git、可复现 | 仓库 + 3 张图 + README |
| P1 | 2–3 周 | Neuromatch mini-project | 模型拟合、baseline、CV | notebook + 2 页报告 |
| P2 | 3–5 周 | 单细胞到网络机制模型 | stability、parameter sweep、机制解释 | 解析推导 + 模拟 + 敏感性 |
| P3 | 4–6 周 | Allen/IBL/DANDI/OpenNeuro 数据项目 | QC、数据层级、held-out 评价 | data manifest + pipeline + 报告 |
| P4 | 4–8 周 | 论文关键图复现 | 读方法、重建环境、核对数值 | 原图对照 + 差异解释 |
| P5 | 6–12 周 | 原创 capstone | 问题定义、竞争模型、robustness | v1.0 仓库 + 短论文 + 演示 |

### 7.2 可直接采用的项目题库

**入门模型**

1. LIF、EIF/AdEx、HH 的 f–I、适应性、成本与拟合能力比较。
2. Wilson–Cowan 网络的稳定区、振荡区和 bifurcation 近似；验证积分步长与初值影响。
3. ring attractor 在连接宽度、噪声和神经元数量变化下的记忆漂移。

**编码与群体数据**

4. Allen 视觉刺激的 Poisson GLM：常数/调谐曲线/时序 covariates 逐级比较。
5. IBL 不同脑区的 choice decoding：trial 内随机切分 vs session/animal 泛化差异。
6. 对同一群体活动比较 PCA、FA/latent model 和线性 decoder；用 held-out reconstruction 而非只看漂亮轨迹。

**学习与行为**

7. bandit 数据上比较 Rescorla–Wagner、Q-learning、带 perseveration 模型；做 parameter recovery。
8. 用 HMM/GLM-HMM 找策略状态；比较状态数、初始化和跨 session 稳定性。

**连接组、成像与 NeuroAI**

9. MICrONS 中检验功能相似性是否预测连接；加入距离、cell type 与 degree 控制。
10. OpenNeuro EEG 做 ERP + time-frequency + session-blocked decoding，量化预处理选择敏感性。
11. CNN layer 对神经响应的 encoding/RSA；比较 Gabor、随机网络和简单线性特征。
12. TVB 中结构连接、delay 与 local model 如何改变 BOLD/EEG 风格动态。

### 7.3 论文复现怎么选

优先选择同时满足以下条件的论文：公开数据或小型可运行模型、方法足够明确、关键结果能在 2–6 周内重现、依赖不陈旧、图中数值可核对。第一次复现只承诺“一张核心图或一个关键表”，不承诺整篇论文。

复现记录至少包括：

```text
论文/代码 commit → 环境与硬件 → 数据版本与许可 → 原始参数
→ 作者未说明而你补充的假设 → 复现指标 → 原图/你的图差异
→ 失败尝试 → 一个 robustness/ablation 扩展
```

### 7.4 项目评分表（100 分）

| 维度 | 分值 | 满分表现 |
|---|---:|---|
| 科学问题与可证伪预测 | 20 | 问题具体，竞争解释清楚，事先写出成功/失败标准 |
| 方法与统计有效性 | 25 | split unit 正确，有 baseline/null、uncertainty、robustness |
| 神经科学解释 | 20 | 测量与模型层次匹配，区分 prediction/association/causality |
| 可复现工程 | 20 | clean install 可运行，环境/种子/版本/数据 manifest 完整 |
| 表达与诚实性 | 15 | 图表自洽，负结果和限制明确，下一实验合理 |

达到 70 分可视为合格自学项目；达到 85 分且能经他人 clean-room 重跑，才适合放入申请材料或作品集。
