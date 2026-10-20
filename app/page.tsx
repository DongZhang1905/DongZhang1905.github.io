"use client";

import { useEffect, useState } from "react";

type Language = "en" | "zh";

const copy = {
  en: {
    nav: { about: "About", research: "Research", education: "Education" },
    switchLabel: "切换到中文", switchText: "中文", themeLabel: "Switch color theme", skip: "Skip to content",
    eyebrow: "Physics · Tianjin University", role: "Undergraduate Student in Physics",
    institution: "Department of Physics, Tianjin University", email: "Email", cv: "Curriculum vitae",
    researchTitle: "Research interests", theoryTitle: "High-Energy Theory",
    theoryBody: "Theoretical approaches to fundamental questions in high-energy physics.",
    aiTitle: "AI for Science", aiBody: "Scientific machine learning and computational methods for physics research.",
    educationTitle: "Education", university: "Tianjin University", period: "2023 — Present",
    degree: "B.Sc. candidate in Physics", educationNote: "Department of Physics · Tianjin, China",
    workTitle: "Publications & projects", workNote: "Public entries will be added here when available.",
    publicationsTitle: "Publications", publicationsNote: "No public publications or preprints listed yet.",
    projectsTitle: "Projects", projectsNote: "Selected research and open-source projects will be added here.",
    contactTitle: "Get in touch", contactNote: "You can reach me by email.",
    footer: "Academic homepage", inspired: "Design inspired by al-folio",
  },
  zh: {
    nav: { about: "主页", research: "研究方向", education: "教育经历" },
    switchLabel: "Switch to English", switchText: "EN", themeLabel: "切换明暗主题", skip: "跳转到正文",
    eyebrow: "物理学 · 天津大学", role: "物理系本科生", institution: "天津大学物理系", email: "邮箱", cv: "个人简历",
    researchTitle: "研究方向", theoryTitle: "高能理论", theoryBody: "关注高能物理基础问题及其理论研究方法。",
    aiTitle: "AI for Science", aiBody: "探索科学机器学习与计算方法在物理研究中的应用。",
    educationTitle: "教育经历", university: "天津大学", period: "2023 — 至今",
    degree: "物理学学士在读", educationNote: "物理系 · 中国天津",
    workTitle: "论文与项目", workNote: "公开成果将在此更新。",
    publicationsTitle: "论文", publicationsNote: "暂无已列出的公开论文或预印本。",
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

  return (
    <div className="site-shell" data-theme={dark ? "dark" : "light"}>
      <a className="skip-link" href="#about">{t.skip}</a>
      <header className="masthead">
        <div className="header-inner">
          <a className="wordmark" href="#about" aria-label="Dong Zhang homepage">
            <span className="wordmark-dot" aria-hidden="true" /><strong>Dong</strong> Zhang
          </a>
          <nav className="nav-links" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
            <a href="#about">{t.nav.about}</a><a href="#research">{t.nav.research}</a><a href="#education">{t.nav.education}</a>
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
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="name">Dong <span>Zhang</span><small>张东</small></h1>
            <Typewriter key={language} language={language} />
            <p className="intro-role">{t.role}</p><p className="intro-institution">{t.institution}</p>
            <div className="contact-links">
              <a href="mailto:yanyandreamer@tju.edu.cn"><MailIcon />{t.email}</a>
              <a href="https://github.com/DongZhang1905" target="_blank" rel="noreferrer"><GitHubIcon />GitHub</a>
              <a className="cv-link" href="/zhangdong-cv.pdf" target="_blank" rel="noreferrer">{t.cv}<span className="pdf-label">PDF</span><Arrow /></a>
            </div>
          </div>
          <div className="profile-mark" aria-hidden="true">
            <div className="monogram">dz<span>.</span></div><div className="profile-caption">张东 <span>/</span> PHYSICS</div>
          </div>
        </section>
        <section className="academic-section" id="research" aria-labelledby="research-title">
          <SectionHeading index="01" id="research-title" title={t.researchTitle} />
          <div className="research-list">
            <article className="research-entry">
              <div className="research-symbol" aria-hidden="true">φ</div>
              <div><h3>{t.theoryTitle}</h3><p>{t.theoryBody}</p></div>
              <span className="research-category" aria-hidden="true">THEORY</span>
            </article>
            <article className="research-entry">
              <div className="research-symbol" aria-hidden="true">∇</div>
              <div><h3>{t.aiTitle}</h3><p>{t.aiBody}</p></div>
              <span className="research-category" aria-hidden="true">COMPUTATION</span>
            </article>
          </div>
        </section>
        <section className="academic-section" id="education" aria-labelledby="education-title">
          <SectionHeading index="02" id="education-title" title={t.educationTitle} />
          <article className="education-entry">
            <p className="education-date">{t.period}</p>
            <div className="education-copy"><h3>{t.university}</h3><p className="degree">{t.degree}</p><p className="education-note">{t.educationNote}</p></div>
            <span className="education-mark" aria-hidden="true">TJU</span>
          </article>
        </section>
        <section className="work-section" aria-label={t.workTitle}>
          <details className="work-details">
            <summary>
              <span className="section-index" aria-hidden="true">03</span>
              <span className="work-summary"><span className="work-title">{t.workTitle}</span><span className="work-note">{t.workNote}</span></span>
              <span className="disclosure-mark" aria-hidden="true">+</span>
            </summary>
            <div className="work-entries">
              <div id="publications"><h3>{t.publicationsTitle}</h3><p>{t.publicationsNote}</p></div>
              <div id="projects"><h3>{t.projectsTitle}</h3><p>{t.projectsNote}</p></div>
            </div>
          </details>
        </section>
        <section className="contact-section" aria-labelledby="contact-title">
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
  en: { prefix: "Exploring ", words: ["physics.", "high-energy theory.", "AI for Science."], accessible: "Exploring physics, high-energy theory and AI for Science." },
  zh: { prefix: "我在探索 ", words: ["物理学。", "高能理论。", "AI for Science。"], accessible: "我在探索物理学、高能理论与 AI for Science。" },
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
