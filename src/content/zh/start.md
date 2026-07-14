---
title: "前四周启动清单"
description: "前四周启动清单"
order: 11
---

如果没有明确方向，直接按下面执行；不要再花一周比较课程。

### 第 1 周：诊断与最小模型

- 完成第 2.1 节诊断，给每项标记“会 / 模糊 / 不会”。
- 创建环境与 Git 仓库，完成 LIF 的 Euler 版本和 step-current 图。
- 看 Neuromatch Neuro Video Series，补膜电位、spike、synapse。
- 读 Rosenbaum 开放教材或《Neuronal Dynamics》Ch.1 的相应部分。

### 第 2 周：数值可靠性与可复现

- 增加 `solve_ivp`、不同步长、noisy current 与 f–I curve。
- 写 README、环境文件和一个测试；在新环境重跑。
- 写一页说明：模型目的、变量/单位、假设、失败条件。

### 第 3 周：线代与群体表示

- 完成 Neuromatch 线代 refresher 中投影、eigen/SVD/PCA。
- 在模拟神经群体数据上手写 PCA，与 sklearn 结果比较。
- 用 held-out reconstruction 检查维数，而不只画二维图。

### 第 4 周：ODE、稳定性与小结

- 完成 Neuromatch calculus/ODE refresher 的关键练习。
- 对二维线性系统或 Wilson–Cowan 简化模型找 fixed point、画 phase portrait。
- 发布 P0 v1.0；根据诊断决定第 5 周进入完整先修还是 Neuromatch 主课。

**第 4 周决策**

| 结果 | 下一步 |
|---|---|
| Python/数学/神经三类都能完成，P0 可重跑 | 直接进入 Neuromatch 12 周主线 |
| 只有一类明显薄弱 | 主线照常，每周额外 3 小时定向补弱 |
| 两类以上薄弱，P0 仍无法独立完成 | 按阶段 1 学 8–12 周后再进入主线 |
| 已有类似研究项目 | 跳到开放数据项目，用共同核心作查缺补漏 |
