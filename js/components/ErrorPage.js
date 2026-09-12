export function ErrorPage(navigate, { code = "404", message = "Página não encontrada." } = {}) {
  const section = document.createElement("section");
  section.classList.add("error");

  const title = document.createElement("p");
  title.classList.add("error_code");
  title.textContent = code;

  const heading = document.createElement("h1");
  heading.classList.add("error_message");
  heading.textContent = message;

  const hint = document.createElement("p");
  hint.classList.add("error_hint");
  hint.textContent = "Talvez o link esteja desatualizado. Dá uma olhada nos projetos ou volte para o início.";

  const actions = document.createElement("div");
  actions.classList.add("error_actions");

  const home = document.createElement("a");
  home.classList.add("btn", "btn_primary");
  home.href = "/";
  home.textContent = "Voltar para a Home";

  const projects = document.createElement("a");
  projects.classList.add("btn", "btn_ghost");
  projects.href = "/projects";
  projects.textContent = "Ver projetos";

  actions.append(home, projects);
  section.append(title, heading, hint, actions);

  return section;
}
