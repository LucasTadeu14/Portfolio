import { ProjectData } from "./ProjectsData.js";

export function ProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");

  const skillsContainer = document.createElement("div");
  skillsContainer.classList.add("project-skills-list");

  project.skills.forEach(skill => {
    const img = document.createElement("img");
    img.src = skill;
    img.classList.add("projectSkills");
    skillsContainer.appendChild(img);
  });

  const h2 = document.createElement("h2");
  h2.textContent = project.title;

  const p = document.createElement("p");
  p.textContent = project.description;

  const projectBtn = document.createElement("button");
  projectBtn.textContent = "Ver Projeto";
  projectBtn.onclick = () => window.open(project.link, "_blank");

  if (project.video) {
    const video = document.createElement("video");
    video.src = project.video;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.disablePictureInPicture = true;
    video.disableRemotePlayback = true;

    card.appendChild(video);

    card.addEventListener("mouseenter", () => video.play());
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  }

  card.appendChild(h2);
  card.appendChild(skillsContainer);
  card.appendChild(p);
  card.appendChild(projectBtn);

  return card;
}
