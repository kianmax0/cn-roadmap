export type Locale = 'zh' | 'en';

export type NavItem = {
  slug: string;
  href: string;
  label: { zh: string; en: string };
};

export const NAV: NavItem[] = [
  { slug: 'home', href: '', label: { zh: '首页', en: 'Home' } },
  { slug: 'how-to', href: 'how-to/', label: { zh: '0. 如何使用', en: '0. How to use' } },
  { slug: 'map', href: 'map/', label: { zh: '1. 学科地图', en: '1. Field map' } },
  { slug: 'diagnostics', href: 'diagnostics/', label: { zh: '2. 入门诊断', en: '2. Diagnostics' } },
  { slug: '64-week', href: '64-week/', label: { zh: '3. 64 周路线', en: '3. 64-week path' } },
  { slug: 'tracks', href: 'tracks/', label: { zh: '4. 速通与深入', en: '4. Tracks' } },
  { slug: 'specializations', href: 'specializations/', label: { zh: '5. 专题分支', en: '5. Specializations' } },
  { slug: 'resources', href: 'resources/', label: { zh: '6. 资源索引', en: '6. Resources' } },
  { slug: 'projects', href: 'projects/', label: { zh: '7. 项目阶梯', en: '7. Projects' } },
  { slug: 'workflow', href: 'workflow/', label: { zh: '8. 自学工作流', en: '8. Workflow' } },
  { slug: 'lab-prep', href: 'lab-prep/', label: { zh: '9. 实验室准备', en: '9. Lab prep' } },
  { slug: 'start', href: 'start/', label: { zh: '10. 前四周启动', en: '10. First 4 weeks' } },
  { slug: 'maintenance', href: 'maintenance/', label: { zh: '11. 维护说明', en: '11. Maintenance' } },
];

export const UI = {
  brand: 'CN Roadmap',
  tagline: {
    zh: '计算神经科学自学路线图',
    en: 'A self-study roadmap for computational neuroscience',
  },
  subtitle: {
    zh: '可执行的培养方案：先修依赖、主线课程、项目与完成标准。',
    en: 'An actionable curriculum: prerequisites, core courses, projects, and exit criteria.',
  },
  startCta: { zh: '开始路线', en: 'Start here' },
  weeksCta: { zh: '前四周清单', en: 'First 4 weeks' },
  toc: { zh: '本页目录', en: 'On this page' },
  nav: { zh: '目录', en: 'Contents' },
  themeLight: { zh: '浅色', en: 'Light' },
  themeDark: { zh: '深色', en: 'Dark' },
  menu: { zh: '菜单', en: 'Menu' },
  version: 'v0.1',
  verified: {
    zh: '链接核验：2026-07-14',
    en: 'Links verified: 2026-07-14',
  },
} as const;

export function pagePath(locale: Locale, slug: string): string {
  const item = NAV.find((n) => n.slug === slug);
  const suffix = item?.href ?? (slug === 'home' ? '' : `${slug}/`);
  return `/${locale}/${suffix}`;
}

export function siblingLocalePath(locale: Locale, slug: string): string {
  const other: Locale = locale === 'zh' ? 'en' : 'zh';
  return pagePath(other, slug);
}
