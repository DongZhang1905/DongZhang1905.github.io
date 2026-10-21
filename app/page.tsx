"use client";

import { useEffect, useState } from "react";

type Language = "en" | "zh";

const copy = {
  en: {
    nav: { about: "About", research: "Research", education: "Education", contact: "Contact" },
    switchLabel: "切换到中文", switchText: "中文", themeLabel: "Switch color theme", skip: "Skip to content",
    role: "Undergraduate Student in Physics",
    institution: "Department of Physics, Tianjin University", email: "Email",
    illustrationAlt: "A curious robot reading beside books, a classical bust, and a window onto the stars.",
    illustrationCaption: "A little curiosity, across disciplines.",
    researchTitle: "Research interests", theoryTitle: "High-Energy Theory",
    theoryBody: "Theoretical approaches to fundamental questions in high-energy physics.",
    aiTitle: "AI for Science", aiBody: "Scientific machine learning and computational methods for physics research.",
    learningTitle: "Learning Theory", learningBody: "Understanding how learning works: generalization, optimization, and the principles behind intelligent systems.",
    embodiedTitle: "Embodied Intelligence", embodiedBody: "Exploring the connection between perception, action, and learning through interaction with the physical world.",
    educationTitle: "Education", university: "Tianjin University", period: "2023 — Present",
    degree: "B.Sc. candidate in Physics", educationNote: "Department of Physics · Tianjin, China",
    workNote: "Public entries will be added here when available.",
    publicationsTitle: "Publications", preprint: "Preprint",
    paperSummary: "A Mathematica package for tree-level cosmological correlators, based on recursive reduction and dlog-form differential equations.",
    projectsTitle: "Projects", projectsNote: "Selected research and open-source projects will be added here.",
    contactTitle: "Get in touch", contactNote: "You can reach me by email.",
    footer: "Academic homepage", inspired: "Design inspired by al-folio",
  },
  zh: {
    nav: { about: "主页", research: "研究方向", education: "教育经历", contact: "联系" },
    switchLabel: "Switch to English", switchText: "EN", themeLabel: "切换明暗主题", skip: "跳转到正文",
    role: "物理系本科生", institution: "天津大学物理系", email: "邮箱",
    illustrationAlt: "一位好奇的机器人在书本、古典雕像和星空窗景旁阅读。",
    illustrationCaption: "带着好奇心，走过学科之间。",
    researchTitle: "研究方向", theoryTitle: "高能理论", theoryBody: "关注高能物理基础问题及其理论研究方法。",
    aiTitle: "AI for Science", aiBody: "探索科学机器学习与计算方法在物理研究中的应用。",
    learningTitle: "学习理论", learningBody: "关注泛化、优化与学习的基本原理，理解智能系统如何从经验中学习。",
    embodiedTitle: "具身智能", embodiedBody: "探索感知、行动与学习之间的联系，以及智能如何在与物理世界的交互中形成。",
    educationTitle: "教育经历", university: "天津大学", period: "2023 — 至今",
    degree: "物理学学士在读", educationNote: "物理系 · 中国天津",
    workNote: "公开成果将在此更新。",
    publicationsTitle: "论文", preprint: "预印本",
    paperSummary: "基于递归约化与 dlog 形式微分方程，自动计算树级 de Sitter 宇宙学关联函数的 Mathematica 工具包。",
    projectsTitle: "项目", projectsNote: "研究项目与开源项目将在整理后更新于此。",
    contactTitle: "联系我", contactNote: "欢迎通过邮件联系。", footer: "学术主页", inspired: "设计参考 al-folio",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [dark, setDark] = useState(false);
  const t = copy[language];

  useEffect(() => { document.documentElement.lang = language === "zh" ? "zh-CN" : "en"; }, [language]);
  useEffect(() => { setDark(window.matchMedia("(prefers-color-scheme: dark)").matches); }, []);
  useEffect(() => {
    // Keep browser scroll restoration after the framework initializes.
    window.history.scrollRestoration = "auto";
  }, []);

  return (
    <div className="site-shell" data-theme={dark ? "dark" : "light"}>
      <a className="skip-link" href="#about">{t.skip}</a>
      <header className="masthead">
        <div className="header-inner">
          <a className="wordmark" href="#about" aria-label="Dong Zhang homepage">
            <span className="wordmark-dot" aria-hidden="true" /><strong>Dong</strong> Zhang
          </a>
          <nav className="nav-links" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
            <a href="#about">{t.nav.about}</a><a href="#research">{t.nav.research}</a><a href="#education">{t.nav.education}</a><a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="header-controls">
            <button className="language-switch" type="button" aria-label={t.switchLabel}
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}>{t.switchText}</button>
            <button className="theme-switch" type="button" aria-label={t.themeLabel} aria-pressed={dark}
              onClick={() => setDark(!dark)}><ThemeIcon dark={dark} /></button>
          </div>
        </div>
      </header>
      <main className="page-content">
        <section className="intro" id="about" aria-labelledby="name">
          <div className="intro-copy">
            <h1 id="name">Dong <span>Zhang</span><small>张东</small></h1>
            <Typewriter key={language} language={language} />
            <p className="intro-role">{t.role}</p><p className="intro-institution">{t.institution}</p>
            <div className="contact-links">
              <a href="mailto:yanyandreamer@tju.edu.cn"><MailIcon />{t.email}</a>
              <a href="https://github.com/DongZhang1905" target="_blank" rel="noreferrer"><GitHubIcon />GitHub</a>
            </div>
          </div>
          <figure className="intro-art">
            {/* Static assets are served directly by GitHub Pages. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/curiosity-studio.png" width="1254" height="1254" alt={t.illustrationAlt} fetchPriority="high" />
            <figcaption>{t.illustrationCaption}</figcaption>
          </figure>
        </section>
        <section className="academic-section" id="research" aria-labelledby="research-title">
          <SectionHeading index="01" id="research-title" title={t.researchTitle} />
          <div className="research-list">
            <article className="research-entry research-theory">
              <ResearchDrawing kind="theory" />
              <div><h3>{t.theoryTitle}</h3><p>{t.theoryBody}</p></div>
            </article>
            <article className="research-entry research-ai">
              <ResearchDrawing kind="ai" />
              <div><h3>{t.aiTitle}</h3><p>{t.aiBody}</p></div>
            </article>
            <article className="research-entry research-learning">
              <ResearchDrawing kind="learning" />
              <div><h3>{t.learningTitle}</h3><p>{t.learningBody}</p></div>
            </article>
            <article className="research-entry research-embodied">
              <ResearchDrawing kind="embodied" />
              <div><h3>{t.embodiedTitle}</h3><p>{t.embodiedBody}</p></div>
            </article>
          </div>
        </section>
        <section className="academic-section" id="education" aria-labelledby="education-title">
          <SectionHeading index="02" id="education-title" title={t.educationTitle} />
          <article className="education-entry">
            <p className="education-date">{t.period}</p>
            <div className="education-copy"><h3>{t.university}</h3><p className="degree">{t.degree}</p><p className="education-note">{t.educationNote}</p></div>
            <a className="education-emblem" href="https://www.tju.edu.cn/" target="_blank" rel="noreferrer"
              aria-label={language === "zh" ? "天津大学官网" : "Tianjin University website"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/tju-emblem.jpg" width="372" height="350" alt={language === "zh" ? "天津大学校徽" : "Tianjin University emblem"} loading="lazy" />
            </a>
          </article>
        </section>
        <section className="academic-section" id="publications" aria-labelledby="publications-title">
          <SectionHeading index="03" id="publications-title" title={t.publicationsTitle} />
          <article className="publication-entry">
            <div className="publication-meta">
              <time dateTime="2026-10-20">2026</time>
              <span className="publication-status">{t.preprint}</span>
            </div>
            <div className="publication-copy">
              <h3><a href="https://arxiv.org/abs/2610.28526" target="_blank" rel="noreferrer">MadStree: automated evaluation of tree-level de Sitter correlators</a></h3>
              <p className="publication-authors">Jiaqi Chen, Yi-Xiao Tao, Xinyi Wang, <strong>Dong Zhang</strong></p>
              <p className="publication-abstract">{t.paperSummary}</p>
              <div className="publication-links">
                <a href="https://arxiv.org/abs/2610.28526" target="_blank" rel="noreferrer">arXiv:2610.28526<Arrow /></a>
                <a href="https://arxiv.org/pdf/2610.28526" target="_blank" rel="noreferrer">PDF<Arrow /></a>
              </div>
            </div>
          </article>
        </section>
        <section className="work-section" aria-label={t.projectsTitle}>
          <details className="work-details">
            <summary>
              <span className="section-index" aria-hidden="true">04</span>
              <span className="work-summary"><span className="work-title">{t.projectsTitle}</span><span className="work-note">{t.workNote}</span></span>
              <span className="disclosure-mark" aria-hidden="true">+</span>
            </summary>
            <div className="work-entries">
              <div id="projects"><p>{t.projectsNote}</p></div>
            </div>
          </details>
        </section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div><h2 id="contact-title">{t.contactTitle}<span aria-hidden="true">.</span></h2><p>{t.contactNote}</p></div>
          <a className="email-link" href="mailto:yanyandreamer@tju.edu.cn">yanyandreamer@tju.edu.cn<Arrow /></a>
        </section>
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Dong Zhang <span className="footer-dot">·</span> {t.footer}</span>
        <a href="https://github.com/alshedivat/al-folio" target="_blank" rel="noreferrer">{t.inspired}<Arrow /></a>
      </footer>
    </div>
  );
}

const introductions = {
  en: { prefix: "Exploring ", words: ["philosophy.", "embodied intelligence.", "learning theory.", "high-energy theory.", "AI for Science."], accessible: "Exploring philosophy, embodied intelligence, learning theory, high-energy theory and AI for Science." },
  zh: { prefix: "我在探索 ", words: ["哲学。", "具身智能。", "学习理论。", "高能理论。", "AI for Science。"], accessible: "我在探索哲学、具身智能、学习理论、高能理论与 AI for Science。" },
};

function Typewriter({ language }: { language: Language }) {
  const { prefix, words, accessible } = introductions[language];
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 0;
    let length = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      length += deleting ? -1 : 1;
      setText(words[index].slice(0, length));
      let delay = deleting ? 45 : 85;
      if (deleting && length === 0) {
        index = (index + 1) % words.length;
        deleting = false;
        delay = 320;
      } else if (!deleting && length === words[index].length) {
        deleting = true;
        delay = 1800;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 1800);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <p className="typewriter">
      <span className="sr-only">{accessible}</span>
      <span aria-hidden="true"><span className="typewriter-prefix">{prefix}</span><span className="typewriter-text">{text}</span><span className="typewriter-cursor">|</span></span>
    </p>
  );
}

function SectionHeading({ index, id, title }: { index: string; id: string; title: string }) {
  return <div className="section-heading"><span className="section-index" aria-hidden="true">{index}</span><h2 id={id}>{title}</h2></div>;
}
function ResearchDrawing({ kind }: { kind: "theory" | "ai" | "learning" | "embodied" }) {
  return (
    <svg className="research-drawing" viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "theory" && <>
        <circle cx="80" cy="50" r="35" opacity=".18" />
        <ellipse cx="80" cy="50" rx="51" ry="18" transform="rotate(-30 80 50)" />
        <ellipse cx="80" cy="50" rx="51" ry="18" transform="rotate(30 80 50)" />
        <ellipse cx="80" cy="50" rx="18" ry="42" />
        <circle cx="80" cy="50" r="5" fill="currentColor" />
        <circle cx="121" cy="25" r="4" fill="currentColor" />
        <path d="M24 21v8m-4-4h8M131 75v8m-4-4h8" opacity=".6" />
      </>}
      {kind === "ai" && <>
        <path d="m37 25 43-10 43 10v50L80 87 37 75Zm0 0 43 30 43-30M80 55v32M37 75l43-60 43 60M37 25l86 50M123 25 37 75" opacity=".55" />
        {[[37,25],[80,15],[123,25],[37,75],[80,55],[123,75],[80,87]].map(([cx,cy],i) =>
          <circle key={i} cx={cx} cy={cy} r={i === 4 ? 7 : 4} fill="currentColor" stroke="none" />)}
      </>}
      {kind === "learning" && <>
        <path d="M25 15v68h113" opacity=".45" />
        <path d="M33 69c18 0 20-33 40-33s25-15 57-15" strokeWidth="2.5" />
        <path d="M33 80c18 0 20-33 40-33s25-15 57-15V12c-32 0-37 15-57 15S51 60 33 60Z" fill="currentColor" opacity=".08" stroke="none" />
        {[[42,65],[57,47],[76,39],[90,27],[112,23],[127,15]].map(([cx,cy],i) =>
          <circle key={i} cx={cx} cy={cy} r="3" fill="currentColor" stroke="none" />)}
        <path d="m117 61 6 6 11-14" strokeWidth="2" />
      </>}
      {kind === "embodied" && <>
        <rect x="53" y="24" width="54" height="37" rx="12" />
        <path d="M80 24V13m-13 48-7 22m33-22 7 22M53 47 36 61l-9-10m80-4 17 14 9-10M68 72h24" />
        <circle cx="80" cy="11" r="3" fill="currentColor" />
        <circle cx="69" cy="40" r="3" fill="currentColor" />
        <circle cx="91" cy="40" r="3" fill="currentColor" />
        <path d="M72 50q8 6 16 0M53 84h14m26 0h14M19 78h19m87 0h18" />
        <circle cx="25" cy="30" r="7" opacity=".35" />
        <path d="m129 15 7 12-14 0Z" opacity=".35" />
      </>}
    </svg>
  );
}
function Arrow() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}
function MailIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg>;
}
function GitHubIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-1.4-.5-2 3-.3 6-1.5 6-6a4.7 4.7 0 0 0-1.2-3.3A4.3 4.3 0 0 0 19.2 3S18 2.7 15 4a13 13 0 0 0-6 0C6 2.7 4.8 3 4.8 3a4.3 4.3 0 0 0-.1 3.7A4.7 4.7 0 0 0 3.5 10c0 4.5 3 5.7 6 6-.6.6-.6 1.2-.5 2v4" /></svg>;
}
function ThemeIcon({ dark }: { dark: boolean }) {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">{dark ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></> : <path d="M20.8 13.2A8.7 8.7 0 0 1 10.8 3.2a8.8 8.8 0 1 0 10 10Z" />}</svg>;
}
