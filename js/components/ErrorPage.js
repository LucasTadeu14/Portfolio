export function ErrorPage(navigate){
  const section = document.createElement("section");
  section.classList.add("error");

  const title = document.createElement("h1");
  title.innerText = "404";

  const text = document.createElement("p");
  text.innerText = "Página não encontrada.";

  const button = document.createElement("button");
  button.innerText = "Voltar para Home";
  button.onclick = () => navigate("/");

  section.append(title, text, button);

  return section;
}