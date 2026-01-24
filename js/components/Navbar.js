export function Navbar(navigate){
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", () => navigate("/"));

  const aboutBtn = document.createElement("button");
  aboutBtn.textContent = "Sobre";
  aboutBtn.addEventListener("click", () => navigate("/about"));
  
  const projectsBtn = document.createElement("button");
  projectsBtn.textContent = "Projetos";
  projectsBtn.addEventListener("click", () => navigate("/projects"));
  
  const socialBtn = document.createElement("button");
  socialBtn.textContent = "Contato";
  socialBtn.addEventListener("click", () => navigate("/contact"));
  
  nav.appendChild(homeBtn);
  nav.appendChild(aboutBtn);
  nav.appendChild(projectsBtn);
  nav.appendChild(socialBtn);

  return nav;
}

