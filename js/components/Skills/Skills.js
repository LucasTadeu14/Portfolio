import { SkillGroups } from "./SkillsData.js";
import { Icon, ICON_LABELS } from "../../icons.js";
import { revealOnScroll } from "../../reveal.js";

export function Skills({ onCleanup, onMount } = {}) {
  const section = document.createElement("section");
  section.classList.add("skills");

  const heading = document.createElement("h2");
  heading.classList.add("skills_heading");
  heading.textContent = "Tecnologias";

  section.appendChild(heading);

  SkillGroups.forEach(group => {
    const groupEl = document.createElement("div");
    groupEl.classList.add("skill_group");

    const groupHeader = document.createElement("div");
    groupHeader.classList.add("skill_group_header");
    groupHeader.innerHTML = `
      <h3 class="skill_group_title">${group.title}</h3>
      <p class="skill_group_desc">${group.description}</p>
    `;

    const list = document.createElement("ul");
    list.classList.add("skill_list");

    group.skills.forEach(name => {
      const item = document.createElement("li");
      item.classList.add("skill_card");
      item.appendChild(Icon(name, { size: 40 }));

      const label = document.createElement("span");
      label.classList.add("skill_name");
      label.textContent = ICON_LABELS[name] ?? name;
      item.appendChild(label);

      list.appendChild(item);
    });

    groupEl.append(groupHeader, list);
    section.appendChild(groupEl);
  });

  revealOnScroll(section.querySelectorAll(".skill_card"), { onCleanup, onMount });

  return section;
}
