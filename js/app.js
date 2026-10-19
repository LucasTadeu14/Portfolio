import { matchRoute, normalizePath } from "./router.js";
import { loadSprite } from "./icons.js";
import { Navbar, setActiveLink } from "./components/Navbar.js";
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { Projects } from "./components/Projects/Projects.js";
import { ProjectDetail } from "./components/Projects/ProjectDetail.js";
import { ErrorPage } from "./components/ErrorPage.js";
import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";

const SITE_NAME = "Lucas Conde";

const routes = [
  {
    path: "/",
    view: Home,
    title: "Lucas Conde | Desenvolvedor FullStack",
    description: "Desenvolvedor FullStack em PHP, Angular e TypeScript. Criador do Cliniclis, sistema de gestão para clínicas em produção."
  },
  {
    path: "/about",
    view: About,
    title: `Sobre | ${SITE_NAME}`,
    description: "Quem sou, como trabalho e as tecnologias que uso no dia a dia."
  },
  {
    path: "/projects",
    view: Projects,
    title: `Projetos | ${SITE_NAME}`,
    description: "Projetos full-stack e front-end: PHP, Angular, React e JavaScript puro."
  },
  {
    path: "/projects/:slug",
    view: ProjectDetail,
    title: `Projeto | ${SITE_NAME}`,
    description: "Detalhes técnicos do projeto: problema, decisões e stack."
  },
  {
    path: "/contact",
    view: Contact,
    title: `Contato | ${SITE_NAME}`,
    description: "Fale comigo por e-mail, LinkedIn ou GitHub."
  }
];

const app = document.getElementById("app");
app.classList.add("main");

/* Cleanups registrados pela view atual (timers, observers,
   listeners). Rodam antes de trocar de página. Sem isso a
   animação do terminal continua escrevendo num nó já descartado. */
let cleanups = [];

/* Callbacks que precisam do elemento já dentro do
   documento (IntersectionObserver não observa nó
   desanexado de forma confiável). */
let mounts = [];

function registerCleanup(fn) {
  cleanups.push(fn);
}

function registerMount(fn) {
  mounts.push(fn);
}

function runMounts() {
  mounts.forEach(fn => {
    try {
      fn();
    } catch (err) {
      console.error("Erro no mount da view:", err);
    }
  });
  mounts = [];
}

function runCleanups() {
  cleanups.forEach(fn => {
    try {
      fn();
    } catch (err) {
      console.error("Erro no cleanup da view:", err);
    }
  });
  cleanups = [];
}

/* ── Shell persistente ────────────────────────────
   Navbar e Footer são criados uma vez. Só o miolo
   é trocado a cada navegação. */
const navbar = Navbar(navigate);
const pageContainer = document.createElement("main");
pageContainer.classList.add("page");
pageContainer.id = "conteudo";
pageContainer.setAttribute("tabindex", "-1");
const footer = Footer(navigate);

app.append(navbar, pageContainer, footer);

export function navigate(path, { replace = false } = {}) {
  const target = normalizePath(path);
  if (target === normalizePath(location.pathname)) return;

  history[replace ? "replaceState" : "pushState"]({}, "", target);
  loadSprite();
render();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function updateMeta({ title, description }) {
  document.title = title;

  const set = (selector, attr, value) => {
    const el = document.head.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };

  set('meta[name="description"]', "content", description);
  set('meta[property="og:title"]', "content", title);
  set('meta[property="og:description"]', "content", description);
  set('meta[property="og:url"]', "content", location.origin + location.pathname);
  set('meta[name="twitter:title"]', "content", title);
  set('meta[name="twitter:description"]', "content", description);
  set('link[rel="canonical"]', "href", location.origin + location.pathname);
}

function render() {
  runCleanups();
  mounts = [];
  pageContainer.replaceChildren();

  const path = normalizePath(location.pathname);
  const match = matchRoute(routes, path);

  setActiveLink(navbar, path);

  if (!match) {
    updateMeta({
      title: `Página não encontrada | ${SITE_NAME}`,
      description: "A página que você procurou não existe."
    });
    pageContainer.appendChild(ErrorPage(navigate));
    return;
  }

  const { route, params } = match;
  const context = {
    params,
    navigate,
    onCleanup: registerCleanup,
    onMount: registerMount
  };

  const result = route.view(context);

  /* Uma view pode devolver só o elemento, ou
     { el, title, description } quando o conteúdo define o
     próprio título (ex.: nome do projeto).
     O teste de Node vem primeiro de propósito: todo
     HTMLElement já tem uma propriedade `title` nativa (""),
     que passaria batido por `??` e zeraria document.title. */
  const isNode = result instanceof Node;
  const el = isNode ? result : result.el;

  updateMeta({
    title: (isNode ? null : result.title) ?? route.title,
    description: (isNode ? null : result.description) ?? route.description
  });

  pageContainer.appendChild(el);
  runMounts();
}

window.addEventListener("popstate", render);

/* Intercepta cliques em links internos: mantém a SPA
   sem obrigar cada componente a chamar navigate(). */
document.addEventListener("click", event => {
  const link = event.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href || !href.startsWith("/")) return;
  if (link.target === "_blank" || link.hasAttribute("download")) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;

  event.preventDefault();
  navigate(href);
});

loadSprite();
render();
