export function About(){
  const section = document.createElement("section");
  
  const h1 = document.createElement("h1");
  h1.textContent = "Habilidades";

  section.appendChild(h1);
  return section;
}