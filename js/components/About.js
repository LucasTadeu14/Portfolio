import { Skills } from "./Skills/Skills.js";
import { revealOnScroll } from "../reveal.js";

/* Timeline curta. Editar aqui é mais fácil que caçar
   no meio do markup. */
const TIMELINE = [
  {
    period: "2026 até hoje",
    title: "Cliniclis, produto próprio",
    text: "Criei e mantenho um SaaS de gestão para clínicas em PHP e Angular, já em operação com clínicas reais. Cuido de tudo: API, banco, front, deploy e suporte direto às clínicas."
  },
  {
    period: "2025 até hoje",
    title: "Desenvolvimento freelance",
    text: "Sites para clientes como a Conde Clínica e a Mirelle Sine, levantando requisito direto com quem contrata e mantendo o site vivo depois da entrega."
  },
  {
    period: "2024 até hoje",
    title: "Ciência da Computação",
    text: "Graduação em andamento, com foco em estrutura de dados, redes e engenharia de software."
  },
  {
    period: "2024",
    title: "Início no front-end",
    text: "Comecei por HTML, CSS e JavaScript puro antes de partir para React, na ordem que me fez entender o que o framework resolve."
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
      Hoje trabalho principalmente com <strong>PHP</strong>, <strong>MySQL</strong>,
      <strong>Angular</strong> e <strong>TypeScript</strong>: é a stack do
      <a href="/projects/cliniclis">Cliniclis</a>, o sistema de gestão para clínicas
      que criei e mantenho em produção. Cuido dele de ponta a ponta, da API e do
      banco ao front, ao deploy e ao suporte direto às clínicas.
    </p>
    <p>
      Também uso <strong>React</strong>, como no PetWalker. Mas comecei pelo
      básico de propósito: HTML, CSS e JavaScript puro antes de qualquer framework. Este portfólio, por exemplo, não usa nenhum: o
      roteamento e as animações são código meu. Isso não é birra com ferramenta,
      é o caminho que me fez entender o que cada abstração está resolvendo.
    </p>
    <p>
      Agora procuro minha primeira vaga num time de desenvolvimento, de preferência
      onde eu possa revisar código com gente mais experiente e crescer rápido.
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
