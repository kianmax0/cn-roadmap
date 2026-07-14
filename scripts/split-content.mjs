#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const src = fs.readFileSync(
  path.join(root, 'computational-neuroscience-roadmap-zh.md'),
  'utf8'
);

const sections = [
  { slug: 'how-to', match: /^## 0\./, order: 1, title: '如何使用这份路线图' },
  { slug: 'map', match: /^## 1\./, order: 2, title: '先建立正确的学科地图' },
  { slug: 'diagnostics', match: /^## 2\./, order: 3, title: '入门诊断与背景适配' },
  { slug: '64-week', match: /^## 3\./, order: 4, title: '64 周标准路线' },
  { slug: 'tracks', match: /^## 4\./, order: 5, title: '24 周速通与深入版' },
  { slug: 'specializations', match: /^## 5\./, order: 6, title: '专题分支' },
  { slug: 'resources', match: /^## 6\./, order: 7, title: '资源索引' },
  { slug: 'projects', match: /^## 7\./, order: 8, title: '项目阶梯' },
  { slug: 'workflow', match: /^## 8\./, order: 9, title: '自学与可复现工作流' },
  { slug: 'lab-prep', match: /^## 9\./, order: 10, title: '实验室与研究生准备' },
  { slug: 'start', match: /^## 10\./, order: 11, title: '前四周启动清单' },
  { slug: 'maintenance', match: /^## 11\./, order: 12, title: '维护说明与边界' },
];

const lines = src.split(/\r?\n/);
const headingIndexes = [];
for (let i = 0; i < lines.length; i++) {
  if (/^## \d+\./.test(lines[i])) headingIndexes.push(i);
}

const outDir = path.join(root, 'src/content/zh');
fs.mkdirSync(outDir, { recursive: true });

// Home excerpt from preamble
const preamble = lines.slice(0, headingIndexes[0]).join('\n').trim();
const homeBody = preamble
  .replace(/^# .+\n+/, '')
  .replace(/^> /gm, '')
  .trim();

fs.writeFileSync(
  path.join(outDir, 'home.md'),
  `---
title: "计算神经科学自学路线图"
description: "可执行的计算神经科学培养方案：先修依赖、主线课程、项目与完成标准。"
order: 0
---

${homeBody}
`
);

for (let s = 0; s < sections.length; s++) {
  const start = headingIndexes[s];
  const end = s + 1 < headingIndexes.length ? headingIndexes[s + 1] : lines.length;
  let body = lines.slice(start, end).join('\n').trim();
  // Drop the top-level ## heading (page title comes from frontmatter)
  body = body.replace(/^## .+\n+/, '');
  // Soften horizontal rules before next section leftovers
  body = body.replace(/\n---\s*$/, '');

  const { slug, order, title } = sections[s];
  fs.writeFileSync(
    path.join(outDir, `${slug}.md`),
    `---
title: ${title}
description: ${title}
order: ${order}
---

${body.trim()}
`
  );
  console.log('wrote', slug);
}

console.log('done');
