import { ProjectData } from "./Projects/ProjectsData.js";
import { ProjectCard } from "./Projects/ProjectCard.js";
import { revealOnScroll } from "../reveal.js";

const DECORATIONS = [
  { text: "</>", x: "92%", y: "12%", delay: "0s"   },
  { text: "{}",  x: "94%", y: "60%", delay: "1.2s" },
  { text: "( )", x: "4%",  y: "70%", delay: "2.4s" },
  { text: "=>",  x: "5%",  y: "20%", delay: "0.6s" }
];

const SOCIAL = [
  {
    url: "https://github.com/LucasTadeu14/", label: "GitHub",
    icon: `<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>`
  },
  {
    url: "https://www.linkedin.com/in/lucas-tadeu-4828a3330/", label: "LinkedIn",
    icon: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`
  },
  {
    url: "https://www.instagram.com/lucasst14/", label: "Instagram",
    icon: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>`
  }
];

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Home({ onCleanup, onMount } = {}) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("Home");

  const section = document.createElement("section");
  section.classList.add("Home_text");

  /* ── Símbolos decorativos ──────────────────── */
  const decoration = document.createElement("div");
  decoration.classList.add("Home_decoration");
  decoration.setAttribute("aria-hidden", "true");

  DECORATIONS.forEach(({ text, x, y, delay }) => {
    const span = document.createElement("span");
    span.classList.add("Home_deco_item");
    span.textContent = text;
    span.style.setProperty("--x", x);
    span.style.setProperty("--y", y);
    span.style.setProperty("--delay", delay);
    decoration.appendChild(span);
  });

  const layout = document.createElement("div");
  layout.classList.add("Home_layout");

  /* ── Coluna esquerda ───────────────────────── */
  const left = document.createElement("div");
  left.classList.add("Home_left");

  const badge = document.createElement("p");
  badge.classList.add("Home_badge");
  badge.innerHTML = `<span class="Home_badge_dot" aria-hidden="true"></span>Disponível para oportunidades`;

  const greeting = document.createElement("p");
  greeting.classList.add("Home_greeting");
  greeting.textContent = "Olá, meu nome é";

  const h1 = document.createElement("h1");
  h1.classList.add("Home_name");
  h1.textContent = "Lucas Conde";

  const roleWrapper = document.createElement("p");
  roleWrapper.classList.add("Home_role_wrapper");
  roleWrapper.innerHTML = `Sou <span class="Home_role_text">Desenvolvedor FullStack</span>`;

  const description = document.createElement("p");
  description.classList.add("Home_desc");
  description.textContent =
    "Graduando em Ciência da Computação, com foco em React, TypeScript e JavaScript moderno. Construo SPAs performáticas, componentes reutilizáveis e integrações com APIs REST.";

  const pillsRow = document.createElement("ul");
  pillsRow.classList.add("Home_pills");
  ["React", "TypeScript", "Node.js", "JavaScript", "Git"].forEach((tech, i) => {
    const pill = document.createElement("li");
    pill.classList.add("Home_pill");
    pill.textContent = tech;
    pill.style.animationDelay = `${i * 0.08}s`;
    pillsRow.appendChild(pill);
  });

  /* ── CTA ───────────────────────────────────── */
  const ctaWrapper = document.createElement("div");
  ctaWrapper.classList.add("Home_cta");

  const projectsBtn = document.createElement("a");
  projectsBtn.classList.add("btn", "btn_primary");
  projectsBtn.href = "/projects";
  projectsBtn.innerHTML = `Ver Projetos <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

  const cvBtn = document.createElement("a");
  cvBtn.classList.add("btn", "btn_ghost");
  cvBtn.href = "/assets/docs/Curriculo_Lucas_Tadeu.pdf";
  cvBtn.target = "_blank";
  cvBtn.rel = "noopener";
  cvBtn.setAttribute("download", "");
  cvBtn.innerHTML = `Baixar CV <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`;

  ctaWrapper.append(projectsBtn, cvBtn);

  /* ── Redes ─────────────────────────────────── */
  const socialWrapper = document.createElement("div");
  socialWrapper.classList.add("Home_social");

  SOCIAL.forEach(({ url, label, icon }) => {
    const link = document.createElement("a");
    link.classList.add("Home_social_link");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", label);
    link.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${icon}</svg>`;
    socialWrapper.appendChild(link);
  });

  /* ── Stats ─────────────────────────────────── */
  const statsRow = document.createElement("div");
  statsRow.classList.add("Home_stats");

  [
    // Deriva da lista real: adicionar um projeto atualiza o número sozinho.
    { value: `${ProjectData.length}`, label: ProjectData.length === 1 ? "Projeto" : "Projetos" },
    { value: "2+", label: "Anos estudando" },
    { value: "React", label: "Stack principal" }
  ].forEach(({ value, label }) => {
    const stat = document.createElement("div");
    stat.classList.add("Home_stat");
    stat.innerHTML = `<span class="Home_stat_value">${value}</span><span class="Home_stat_label">${label}</span>`;
    statsRow.appendChild(stat);
  });

  left.append(badge, greeting, h1, roleWrapper, description, pillsRow, ctaWrapper, socialWrapper, statsRow);

  /* ── Coluna direita: terminal ──────────────── */
  const right = document.createElement("div");
  right.classList.add("Home_right");
  right.appendChild(buildTerminal(onCleanup));

  layout.append(left, right);

  const scrollIndicator = document.createElement("div");
  scrollIndicator.classList.add("Home_scroll");
  scrollIndicator.setAttribute("aria-hidden", "true");
  scrollIndicator.innerHTML = `<span class="Home_scroll_text">scroll</span><div class="Home_scroll_line"></div>`;

  section.append(decoration, layout, scrollIndicator);

  staggerAnimate(left, right);

  wrapper.append(section, FeaturedProjects({ onCleanup, onMount }));

  return wrapper;
}

/* Projetos em destaque logo abaixo do hero: dá ao visitante
   o conteúdo principal sem exigir mais um clique — e faz o
   indicador de scroll apontar para algo de verdade. */
function FeaturedProjects({ onCleanup, onMount }) {
  const featured = ProjectData.filter(project => project.featured);
  const section = document.createElement("section");
  section.classList.add("section", "featured");

  const header = document.createElement("header");
  header.classList.add("featured_header");
  header.innerHTML = `
    <div>
      <p class="section_eyebrow">Trabalhos recentes</p>
      <h2 class="featured_title">Projetos em destaque</h2>
    </div>
    <a class="featured_all" href="/projects">
      Ver todos
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  `;

  const grid = document.createElement("div");
  grid.classList.add("cards");
  featured.forEach(project => grid.appendChild(ProjectCard(project, { onCleanup })));

  section.append(header, grid);
  revealOnScroll(grid.querySelectorAll(".card"), { onCleanup, onMount });

  return section;
}

/* ── Terminal ──────────────────────────────────── */
function buildTerminal(onCleanup) {
  const terminal = document.createElement("div");
  terminal.classList.add("Home_terminal");

  const header = document.createElement("div");
  header.classList.add("Home_terminal_header");
  header.innerHTML = `
    <div class="Home_terminal_dots" aria-hidden="true">
      <span class="t_dot t_dot_red"></span>
      <span class="t_dot t_dot_yellow"></span>
      <span class="t_dot t_dot_green"></span>
    </div>
    <span class="Home_terminal_filename">lucas.js</span>
  `;

  const body = document.createElement("div");
  body.classList.add("Home_terminal_body");

  const pre = document.createElement("pre");
  pre.classList.add("Home_terminal_code");
  body.appendChild(pre);

  terminal.append(header, body);

  const kw  = t => `<span class="t_kw">${t}</span>`;
  const str = t => `<span class="t_str">"${t}"</span>`;
  const prp = t => `<span class="t_prp">${t}</span>`;
  const fn  = t => `<span class="t_fn">${t}</span>`;
  const bl  = t => `<span class="t_bl">${t}</span>`;
  const cm  = t => `<span class="t_cm">${t}</span>`;
  const op  = t => `<span class="t_op">${t}</span>`;

  const lines = [
    `${kw("const")} lucas ${op("=")} {`,
    `  ${prp("nome")}${op(":")}      ${str("Lucas Conde")},`,
    `  ${prp("role")}${op(":")}      ${str("FullStack Dev")},`,
    `  ${prp("stack")}${op(":")}     [`,
    `    ${str("React")}, ${str("TypeScript")},`,
    `    ${str("Node.js")}, ${str("JavaScript")},`,
    `  ],`,
    `  ${prp("formacao")}${op(":")}  ${str("C. Computação")},`,
    `  ${prp("disponivel")}${op(":")} ${bl("true")},`,
    `};`,
    ``,
    `${kw("console")}.${fn("log")}(lucas.${prp("disponivel")});`,
    `${cm("// → true ✓")}`
  ];

  typeLines(pre, lines, 180, onCleanup);

  return terminal;
}

/**
 * Digita linha a linha. O timer é registrado no cleanup da
 * rota — antes, sair da Home no meio da animação deixava
 * setTimeout escrevendo num <pre> já descartado.
 */
function typeLines(pre, lines, delay, onCleanup) {
  const cursor = document.createElement("span");
  cursor.classList.add("t_cursor");
  cursor.textContent = "▋";
  cursor.setAttribute("aria-hidden", "true");

  const appendLine = text => {
    const lineEl = document.createElement("div");
    lineEl.classList.add("t_line");
    lineEl.innerHTML = text === "" ? "&nbsp;" : text;
    pre.insertBefore(lineEl, cursor);
  };

  // Sem animação: entrega o bloco pronto.
  if (prefersReducedMotion()) {
    pre.appendChild(cursor);
    lines.forEach(appendLine);
    return;
  }

  pre.appendChild(cursor);

  let index = 0;
  let timer = null;

  const nextLine = () => {
    if (index >= lines.length) return;
    appendLine(lines[index]);
    index++;
    timer = setTimeout(nextLine, lines[index - 1] === "" ? delay * 0.5 : delay);
  };

  timer = setTimeout(nextLine, 600);
  onCleanup?.(() => clearTimeout(timer));
}

/* ── Entrada escalonada ────────────────────────── */
function staggerAnimate(left, right) {
  if (prefersReducedMotion()) return;

  const targets = [
    ".Home_badge",
    ".Home_greeting",
    ".Home_name",
    ".Home_role_wrapper",
    ".Home_desc",
    ".Home_cta",
    ".Home_social",
    ".Home_stats"
  ];

  targets.forEach((selector, i) => {
    const el = left.querySelector(selector);
    if (!el) return;
    el.classList.add("Home_enter");
    el.style.setProperty("--enter-delay", `${i * 0.05}s`);
  });

  right.classList.add("Home_enter_right");

  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      left.querySelectorAll(".Home_enter").forEach(el => el.classList.add("Home_entered"));
      right.classList.add("Home_entered");
    })
  );
}
