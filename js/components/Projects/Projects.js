import { ProjectData } from "./ProjectsData.js";
import { ProjectCard } from "./ProjectCard.js";

export function Projects() {
  const hero = document.createElement("section");
  hero.classList.add("hero");

  const titleProjects = document.createElement("h1");
  titleProjects.textContent = "Projetos";

  const cardsSection = document.createElement("section");
  cardsSection.classList.add("cards");

  hero.appendChild(titleProjects);
  hero.appendChild(cardsSection);

  ProjectData.forEach(project => {
    cardsSection.appendChild(ProjectCard(project));
  });

  return hero;
}
