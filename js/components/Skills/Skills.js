import { SkillCards } from "./SkillCards.js";
import { SkillsData } from "./SkillsData.js";
import { initSkillsAnimation } from "./SkillsAnimation.js";

export function Skills() {
  const section = document.createElement("section");
  section.classList.add("images");

  SkillsData.forEach(skill => {
    section.appendChild(SkillCards(skill));
  });

  setTimeout(initSkillsAnimation, 0);

  return section;
}
