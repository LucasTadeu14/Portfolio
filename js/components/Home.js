export function Home(){
  const section = document.createElement("section");
  section.classList.add("Home_text");

  const h1 = document.createElement("h1");
  h1.textContent = "Desenvolvedor FullStack";

  const h2 = document.createElement("h2")
  h2.textContent = ("Ola, meu nome é Lucas Conde")

  const h3 = document.createElement("h3");
  h3.textContent = "Sou desenvolvedor Front-end em formação, graduando em Ciência da Computação, com foco em React, TypeScript e JavaScript moderno. Experiência no desenvolvimento de SPAs, componentes reutilizáveis e integração com APIs REST.";

  const homeBtn = document.createElement("a");
  homeBtn.classList = ("Home_text_button_cv")
  homeBtn.textContent = "Acessar meu CV";
  homeBtn.href = "./assets/docs/Curriculo_Lucas_Tadeu.pdf";
  homeBtn.removeAttribute("download");
  homeBtn.target = "_blank";


  section.appendChild(h1);
  section.appendChild(h2);
  section.appendChild(h3);
  section.appendChild(homeBtn);

  return section;
}