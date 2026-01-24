export function SkillCards(Skill) {
  const card = document.createElement("div");
  card.classList.add("skill-card");

  const img = document.createElement("img");
  img.src = Skill.link;
  img.alt = Skill.title;

  const bar = document.createElement("div");
  bar.classList.add("skill-bar");

  const fill = document.createElement("div");
  fill.classList.add("skill-bar-fill");

  fill.style.width = `${Skill.level * 10}%`;

  bar.appendChild(fill);

  const levelText = document.createElement("span");
  levelText.classList.add("skill-level");
  levelText.innerText = `${Skill.level}/10`;

  card.appendChild(img);
  card.appendChild(bar);
  card.appendChild(levelText);

  return card;
}