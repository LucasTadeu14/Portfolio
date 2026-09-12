import { Skills } from "./Skills/Skills.js";
import { revealOnScroll } from "../reveal.js";

/* Timeline curta. Editar aqui é mais fácil que caçar
   no meio do markup. */
const TIMELINE = [
  {
    period: "2026 — agora",
    title: "Desenvolvimento freelance",
    text: "Primeiros projetos comerciais, levantando requisito direto com o cliente e entregando em prazo combinado."
  },
  {
    period: "2024 — agora",
    title: "Ciência da Computação",
    text: "Graduação em andamento, com foco em estrutura de dados, redes e engenharia de software."
  },
  {
    period: "2024",
    title: "Início no front-end",
    text: "Comecei por HTML, CSS e JavaScript puro antes de partir para React — a ordem que me fez entender o que o framework resolve."
  }
];

export function About({ onCleanup, onMount } = {}) {
  const section = document.createElement("section");
  section.classList.add("section", "about");

  const header = document.createElement("header");
  header.classList.add("section_header");
  header.innerHTML = `
    <p class="section_eyebrow">Sobre mim</p>
    <h1 class="section_title">Olá, eu sou o Lucas</h1>
  `;

  const intro = document.createElement("div");
  intro.classList.add("about_intro");
  intro.innerHTML = `
    <p>
      Sou desenvolvedor FullStack e graduando em Ciência da Computação.
      Trabalho principalmente com <strong>React</strong>, <strong>TypeScript</strong>
      e <strong>Node.js</strong>, construindo interfaces que precisam ser rápidas
      tanto para quem usa quanto para quem dá manutenção.
    </p>
    <p>
      Comecei pelo básico de propósito: HTML, CSS e JavaScript puro antes de
      qualquer framework. Este portfólio, por exemplo, não usa nenhum — o
      roteamento e as animações são código meu. Isso não é birra com ferramenta,
      é o caminho que me fez entender o que cada abstração está resolvendo.
    </p>
    <p>
      Hoje procuro minha primeira oportunidade como desenvolvedor, de preferência
      num time onde eu possa revisar código com gente mais experiente e crescer rápido.
    </p>
  `;

  /* ── Timeline ──────────────────────────────── */
  const timeline = document.createElement("div");
  timeline.classList.add("timeline");

  const timelineHeading = document.createElement("h2");
  timelineHeading.classList.add("skills_heading");
  timelineHeading.textContent = "Trajetória";
  timeline.appendChild(timelineHeading);

  const list = document.createElement("ol");
  list.classList.add("timeline_list");

  TIMELINE.forEach(entry => {
    const item = document.createElement("li");
    item.classList.add("timeline_item");
    item.innerHTML = `
      <span class="timeline_period">${entry.period}</span>
      <h3 class="timeline_title">${entry.title}</h3>
      <p class="timeline_text">${entry.text}</p>
    `;
    list.appendChild(item);
  });

  timeline.appendChild(list);

  /* ── CTA ───────────────────────────────────── */
  const cta = document.createElement("div");
  cta.classList.add("about_cta");
  cta.innerHTML = `
    <a class="btn btn_primary" href="/contact">Vamos conversar</a>
    <a class="btn btn_ghost" href="/assets/docs/Curriculo_Lucas_Tadeu.pdf" target="_blank" rel="noopener" download>Baixar CV</a>
  `;

  section.append(header, intro, timeline, Skills({ onCleanup, onMount }), cta);

  revealOnScroll(list.querySelectorAll(".timeline_item"), { onCleanup, onMount });

  return section;
}
