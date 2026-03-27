export function Home() {
  const section = document.createElement("section");
  section.classList.add("Home_text");

  // ── Decorative background symbols ──────────────────────
  const decoration = document.createElement("div");
  decoration.classList.add("Home_decoration");
  [
    { text: "</>", x: "92%", y: "12%", delay: "0s"   },
    { text: "{}",  x: "94%", y: "60%", delay: "1.2s" },
    { text: "( )", x: "4%",  y: "70%", delay: "2.4s" },
    { text: "=>",  x: "5%",  y: "20%", delay: "0.6s" },
  ].forEach(({ text, x, y, delay }) => {
    const span = document.createElement("span");
    span.classList.add("Home_deco_item");
    span.textContent = text;
    span.style.setProperty("--x", x);
    span.style.setProperty("--y", y);
    span.style.setProperty("--delay", delay);
    decoration.appendChild(span);
  });

  // ── Two-column layout ───────────────────────────────────
  const layout = document.createElement("div");
  layout.classList.add("Home_layout");

  // ── LEFT column ─────────────────────────────────────────
  const left = document.createElement("div");
  left.classList.add("Home_left");

  // Badge
  const badge = document.createElement("div");
  badge.classList.add("Home_badge");
  const dot = document.createElement("span");
  dot.classList.add("Home_badge_dot");
  badge.appendChild(dot);
  badge.appendChild(document.createTextNode("Disponível para oportunidades"));

  // Greeting
  const greeting = document.createElement("p");
  greeting.classList.add("Home_greeting");
  greeting.textContent = "Olá, meu nome é";

  // Name
  const h1 = document.createElement("h1");
  h1.classList.add("Home_name");
  h1.textContent = "Lucas Conde";

  // Role
  const roleWrapper = document.createElement("div");
  roleWrapper.classList.add("Home_role_wrapper");
  roleWrapper.innerHTML = `Sou <span class="Home_role_text">Desenvolvedor FullStack</span>`;

  // Description
  const description = document.createElement("div");
  description.classList.add("Home_desc");
  description.textContent = "Graduando em Ciência da Computação, com foco em React, TypeScript e JavaScript moderno. Construo SPAs performáticas, componentes reutilizáveis e integrações com APIs REST.";

  // Tech pills — só visíveis no mobile via CSS
  const pillsRow = document.createElement("div");
  pillsRow.classList.add("Home_pills");
  ["React", "TypeScript", "Node.js", "JavaScript", "Git"].forEach((tech, i) => {
    const pill = document.createElement("span");
    pill.classList.add("Home_pill");
    pill.textContent = tech;
    pill.style.animationDelay = `${i * 0.08}s`;
    pillsRow.appendChild(pill);
  });

  // CTA Buttons
  const ctaWrapper = document.createElement("div");
  ctaWrapper.classList.add("Home_cta");

  const projectsBtn = document.createElement("a");
  projectsBtn.classList.add("Home_btn", "Home_btn_primary");
  projectsBtn.innerHTML = `Ver Projetos <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  projectsBtn.href = "/projects";
  projectsBtn.addEventListener("click", e => {
    e.preventDefault();
    history.pushState(null, null, "/projects");
    dispatchEvent(new PopStateEvent("popstate"));
  });

  const cvBtn = document.createElement("a");
  cvBtn.classList.add("Home_btn", "Home_btn_secondary");
  cvBtn.innerHTML = `Baixar CV <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`;
  cvBtn.href = "./assets/docs/Curriculo_Lucas_Tadeu.pdf";
  cvBtn.target = "_blank";

  ctaWrapper.appendChild(projectsBtn);
  ctaWrapper.appendChild(cvBtn);

  // Social Links
  const socialWrapper = document.createElement("div");
  socialWrapper.classList.add("Home_social");

  [
    {
      url: "https://github.com/LucasTadeu14/", label: "GitHub",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`
    },
    {
      url: "https://www.linkedin.com/in/lucas-tadeu-4828a3330/", label: "LinkedIn",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    },
    {
      url: "https://www.instagram.com/lucasst14/", label: "Instagram",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`
    },
  ].forEach(({ url, label, icon }) => {
    const a = document.createElement("a");
    a.classList.add("Home_social_link");
    a.href = url;
    a.target = "_blank";
    a.setAttribute("aria-label", label);
    a.innerHTML = icon;
    socialWrapper.appendChild(a);
  });

  // Stats
  const statsRow = document.createElement("div");
  statsRow.classList.add("Home_stats");
  [
    { value: "3+",     label: "Projetos"       },
    { value: "2+",     label: "Anos estudando" },
    { value: "React",  label: "Stack principal"},
  ].forEach(({ value, label }) => {
    const stat = document.createElement("div");
    stat.classList.add("Home_stat");
    stat.innerHTML = `<span class="Home_stat_value">${value}</span><span class="Home_stat_label">${label}</span>`;
    statsRow.appendChild(stat);
  });

  left.appendChild(badge);
  left.appendChild(greeting);
  left.appendChild(h1);
  left.appendChild(roleWrapper);
  left.appendChild(description);
  left.appendChild(pillsRow);
  left.appendChild(ctaWrapper);
  left.appendChild(socialWrapper);
  left.appendChild(statsRow);

  // ── RIGHT column — Terminal ──────────────────────────────
  const right = document.createElement("div");
  right.classList.add("Home_right");
  right.appendChild(_buildTerminal());

  layout.appendChild(left);
  layout.appendChild(right);

  // ── Scroll indicator ────────────────────────────────────
  const scrollIndicator = document.createElement("div");
  scrollIndicator.classList.add("Home_scroll");
  scrollIndicator.innerHTML = `<span class="Home_scroll_text">scroll</span><div class="Home_scroll_line"></div>`;

  section.appendChild(decoration);
  section.appendChild(layout);
  section.appendChild(scrollIndicator);

  _staggerAnimate(left, right);

  return section;
}

// ── Terminal component ─────────────────────────────────────
function _buildTerminal() {
  const terminal = document.createElement("div");
  terminal.classList.add("Home_terminal");

  // Header bar
  const header = document.createElement("div");
  header.classList.add("Home_terminal_header");
  header.innerHTML = `
    <div class="Home_terminal_dots">
      <span class="t_dot t_dot_red"></span>
      <span class="t_dot t_dot_yellow"></span>
      <span class="t_dot t_dot_green"></span>
    </div>
    <span class="Home_terminal_filename">lucas.js</span>
    <div style="flex:1"></div>
  `;

  // Body
  const body = document.createElement("div");
  body.classList.add("Home_terminal_body");

  const pre = document.createElement("pre");
  pre.classList.add("Home_terminal_code");
  body.appendChild(pre);

  terminal.appendChild(header);
  terminal.appendChild(body);

  // Lines with syntax-highlighted HTML
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
    `${cm("// → true ✓")}`,
  ];

  _typeLines(pre, lines, 180);

  return terminal;
}

function _typeLines(pre, lines, delay) {
  let i = 0;
  const cursor = document.createElement("span");
  cursor.classList.add("t_cursor");
  cursor.textContent = "▋";
  pre.appendChild(cursor);

  function nextLine() {
    if (i >= lines.length) return;

    const lineEl = document.createElement("div");
    lineEl.classList.add("t_line");
    lineEl.innerHTML = lines[i] === "" ? "&nbsp;" : lines[i];
    pre.insertBefore(lineEl, cursor);

    i++;
    setTimeout(nextLine, lines[i - 1] === "" ? delay * 0.5 : delay);
  }

  setTimeout(nextLine, 600);
}

// ── Stagger animation ──────────────────────────────────────
function _staggerAnimate(left, right) {
  const leftTargets = [
    ".Home_badge",
    ".Home_greeting",
    ".Home_name",
    ".Home_role_wrapper",
    ".Home_desc",
    ".Home_cta",
    ".Home_social",
    ".Home_stats",
  ];

  leftTargets.forEach((selector, i) => {
    const el = left.querySelector(selector);
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.3s ease, transform 0.3s ease`;
    el.style.transitionDelay = `${i * 0.05}s`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }));
  });

  // Terminal slides in from the right
  right.style.opacity = "0";
  right.style.transform = "translateX(40px)";
  right.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  right.style.transitionDelay = "0.3s";
  requestAnimationFrame(() => requestAnimationFrame(() => {
    right.style.opacity = "1";
    right.style.transform = "translateX(0)";
  }));
}
