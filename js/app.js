import { Navbar } from "./components/Navbar.js";
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { Projects } from "./components/Projects/Projects.js";
import { Skills } from "./components/Skills/Skills.js";
import { initProjectsAnimation } from "./components/Projects/ProjectsAnimation.js";
import { ErrorPage } from "./components/ErrorPage.js"
import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";

const app = document.getElementById("app");
app.classList.add("main");

const state = {
  page: window.location.pathname
};

function navigate(path) {
  history.pushState({}, "", path);
  state.page = path;
  render();
}

window.addEventListener("popstate", () => {
  state.page = window.location.pathname;
  render();
});

function render() {
  app.innerHTML = "";

  app.appendChild(Navbar(navigate));

  let rendered = false;
  const pageContainer = document.createElement("div");
  pageContainer.classList.add("page");

  if (state.page === "/") {
    pageContainer.appendChild(Home());
    rendered = true;
  } else if (state.page === "/about") {
    pageContainer.appendChild(About());
    pageContainer.appendChild(Skills());
    rendered = true;
  } else if (state.page === "/projects") {
    const projectsSection = Projects();
    pageContainer.appendChild(projectsSection);
    initProjectsAnimation(projectsSection);
    rendered = true;
  } else if (state.page === "/contact") {
    pageContainer.appendChild(Contact());
    rendered = true;
  }

  if (!rendered) {
    pageContainer.appendChild(ErrorPage(navigate));
  }

  app.appendChild(pageContainer);
  app.appendChild(Footer(navigate)); 
}


render();
