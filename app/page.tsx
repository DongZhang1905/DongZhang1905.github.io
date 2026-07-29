"use client";

import { useState } from "react";

type Language = "en" | "zh";

const copy = {
  en: {
    siteLabel: "Academic Homepage",
    nav: {
      about: "About",
      research: "Research",
      education: "Education",
      publications: "Publications",
      projects: "Projects",
    },
    switchLabel: "切换到中文",
    switchText: "中文",
    profileRole: "Undergraduate Student in Physics",
    university: "Tianjin University",
    location: "Tianjin, China",
    email: "Email",
    github: "GitHub",
    cv: "Download CV",
    eyebrow: "Physics · High-Energy Theory · AI for Science",
    heroRole: "Undergraduate Student in Physics",
    heroInstitution: "Department of Physics, Tianjin University",
    researchTitle: "Research Directions",
    researchKicker: "Interests",
    theoryTitle: "High-Energy Theory",
    theoryBody:
      "Theoretical approaches to fundamental questions in high-energy physics.",
    aiTitle: "AI for Science",
    aiBody:
      "Scientific machine learning and computational methods for physics research.",
    educationTitle: "Education",
    educationKicker: "Background",
    degree: "Undergraduate Student in Physics",
    period: "2023 — Present",
    educationNote: "B.Sc. candidate · Tianjin, China",
    publicationsTitle: "Publications",
    publicationsKicker: "Research Output",
    publicationsEmpty: "No public entries yet.",
    publicationsNote:
      "Publications and preprints will be added here when available.",
    projectsTitle: "Projects",
    projectsKicker: "Selected Work",
    projectsEmpty: "To be updated.",
    projectsNote:
      "Selected research and open-source projects will appear here.",
    cvTitle: "Curriculum Vitae",
    cvBody:
      "A detailed English CV is available as a PDF, including education, research experience, and technical skills.",
    cvAction: "View CV",
    footer: "Academic homepage of Dong Zhang.",
    inspired: "Layout inspired by WowPage.",
  },
  zh: {
    siteLabel: "学术主页",
    nav: {
      about: "主页",
      research: "研究方向",
      education: "教育经历",
      publications: "论文",
      projects: "项目",
    },
    switchLabel: "Switch to English",
    switchText: "EN",
    profileRole: "物理系本科生",
    university: "天津大学",
    location: "中国 · 天津",
    email: "邮箱",
    github: "GitHub",
    cv: "下载简历",
    eyebrow: "物理学 · 高能理论 · AI for Science",
    heroRole: "物理系本科生",
    heroInstitution: "天津大学物理系",
    researchTitle: "研究方向",
    researchKicker: "研究兴趣",
    theoryTitle: "高能理论",
    theoryBody: "关注高能物理基础问题及其理论研究方法。",
    aiTitle: "AI for Science",
    aiBody: "探索科学机器学习与计算方法在物理研究中的应用。",
    educationTitle: "教育经历",
    educationKicker: "教育背景",
    degree: "物理学本科生",
    period: "2023 — 现在",
    educationNote: "学士学位在读 · 中国天津",
    publicationsTitle: "论文",
    publicationsKicker: "研究成果",
    publicationsEmpty: "暂无公开条目",
    publicationsNote: "论文与预印本将在公开后更新于此。",
    projectsTitle: "项目",
    projectsKicker: "代表工作",
    projectsEmpty: "待更新",
    projectsNote: "研究项目与开源项目将在整理后更新于此。",
    cvTitle: "个人简历",
    cvBody: "英文 PDF 简历包含教育经历、研究经历与技术技能等详细信息。",
    cvAction: "查看简历",
    footer: "张东的学术主页。",
    inspired: "版式灵感来自 WowPage。",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];

  return (
    <div className="site-shell" lang={language === "zh" ? "zh-CN" : "en"}>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Dong Zhang homepage">
          <span className="wordmark-mark" aria-hidden="true">
            DZ
          </span>
          <span>
            <strong>Dong Zhang</strong>
            <small>{t.siteLabel}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">{t.nav.about}</a>
          <a href="#research">{t.nav.research}</a>
          <a href="#education">{t.nav.education}</a>
          <a href="#publications">{t.nav.publications}</a>
          <a href="#projects">{t.nav.projects}</a>
        </nav>

        <button
          className="language-switch"
          type="button"
          aria-label={t.switchLabel}
          onClick={() => setLanguage(language === "en" ? "zh" : "en")}
        >
          {t.switchText}
        </button>
      </header>

      <main className="page-grid" id="top">
        <aside className="profile-card" aria-label="Profile">
          <div className="avatar-shell" aria-label="Dong Zhang avatar">
            <div className="avatar-monogram" aria-hidden="true">
              <span>D</span>
              <span>Z</span>
            </div>
          </div>

          <div className="profile-heading">
            <p className="profile-name">Dong Zhang</p>
            <p className="profile-name-zh">张东</p>
            <p className="profile-role">{t.profileRole}</p>
          </div>

          <div className="profile-rule" />

          <dl className="profile-details">
            <div>
              <dt>{t.university}</dt>
              <dd>{t.location}</dd>
            </div>
          </dl>

          <div className="profile-links">
            <a href="mailto:yanyandreamer@tju.edu.cn">
              <span>{t.email}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/DongZhang1905"
              target="_blank"
              rel="noreferrer"
            >
              <span>{t.github}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="profile-cv"
              href="/zhangdong-cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>{t.cv}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </aside>

        <div className="content-column">
          <section className="hero-section" id="about">
            <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              <span>Dong Zhang</span>
              <span className="hero-name-zh">张东</span>
            </h1>
            <p className="hero-role">{t.heroRole}</p>
            <p className="hero-institution">{t.heroInstitution}</p>

            <div className="research-tags" aria-label="Research interests">
              <span>High-Energy Theory</span>
              <span>AI for Science</span>
            </div>
          </section>

          <section className="section-block" id="research">
            <SectionHeading kicker={t.researchKicker} title={t.researchTitle} />
            <div className="interest-grid">
              <article className="interest-card">
                <span className="interest-index">01</span>
                <h3>{t.theoryTitle}</h3>
                <p>{t.theoryBody}</p>
                <div className="interest-line" aria-hidden="true" />
              </article>
              <article className="interest-card">
                <span className="interest-index">02</span>
                <h3>{t.aiTitle}</h3>
                <p>{t.aiBody}</p>
                <div className="interest-nodes" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            </div>
          </section>

          <section className="section-block" id="education">
            <SectionHeading
              kicker={t.educationKicker}
              title={t.educationTitle}
            />
            <article className="education-card">
              <div className="education-year">{t.period}</div>
              <div>
                <h3>{t.university}</h3>
                <p className="education-degree">{t.degree}</p>
                <p className="education-note">{t.educationNote}</p>
              </div>
              <div className="education-seal" aria-hidden="true">
                TJU
              </div>
            </article>
          </section>

          <div className="empty-grid">
            <section className="section-block compact-section" id="publications">
              <SectionHeading
                kicker={t.publicationsKicker}
                title={t.publicationsTitle}
              />
              <div className="empty-state">
                <span className="empty-number">00</span>
                <div>
                  <h3>{t.publicationsEmpty}</h3>
                  <p>{t.publicationsNote}</p>
                </div>
              </div>
            </section>

            <section className="section-block compact-section" id="projects">
              <SectionHeading
                kicker={t.projectsKicker}
                title={t.projectsTitle}
              />
              <div className="empty-state">
                <span className="empty-number">—</span>
                <div>
                  <h3>{t.projectsEmpty}</h3>
                  <p>{t.projectsNote}</p>
                </div>
              </div>
            </section>
          </div>

          <section className="cv-banner" aria-label={t.cvTitle}>
            <div>
              <p className="section-kicker">{t.cvTitle}</p>
              <h2>Dong Zhang · CV</h2>
              <p>{t.cvBody}</p>
            </div>
            <a href="/zhangdong-cv.pdf" target="_blank" rel="noreferrer">
              {t.cvAction}
              <span aria-hidden="true">↗</span>
            </a>
          </section>
        </div>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Dong Zhang · {t.footer}</span>
        <a
          href="https://github.com/WD7ang/WowPage"
          target="_blank"
          rel="noreferrer"
        >
          {t.inspired}
        </a>
      </footer>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
    </div>
  );
}
