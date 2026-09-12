import { ProjectData } from "./ProjectsData.js";
import { ProjectCard } from "./ProjectCard.js";
import { revealOnScroll } from "../../reveal.js";

export function Projects({ onCleanup, onMount } = {}) {
  const section = document.createElement("section");
  section.classList.add("section", "projects");

  const header = document.createElement("header");
  header.classList.add("section_header");
  header.innerHTML = `
    <p class="section_eyebrow">Portfólio</p>
    <h1 class="section_title">Projetos</h1>
    <p class="section_lead">
      Cada projeto abaixo tem uma página com o problema que resolvi,
      as decisões técnicas e o que aprendi no caminho.
    </p>
  `;

  const grid = document.createElement("div");
  grid.classList.add("cards");

  ProjectData.forEach(project => {
    grid.appendChild(ProjectCard(project, { onCleanup }));
  });

  section.append(header, grid);

  revealOnScroll(grid.querySelectorAll(".card"), { onCleanup, onMount });

  return section;
}
