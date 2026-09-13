const PAGES = [
  { label: "Home",     path: "/"         },
  { label: "Sobre",    path: "/about"    },
  { label: "Projetos", path: "/projects" },
  { label: "Contato",  path: "/contact"  }
];

export function Navbar() {
  const nav = document.createElement("nav");
  nav.classList.add("nav_bar");
  nav.setAttribute("aria-label", "Navegação principal");

  /* A barra ocupa a largura toda (fundo e borda), mas o
     conteúdo vive num container da mesma largura máxima do
     resto do site, senão a marca fica desalinhada do título
     da página logo abaixo. */
  const inner = document.createElement("div");
  inner.classList.add("nav_inner");

  const brand = document.createElement("a");
  brand.classList.add("nav_brand");
  brand.href = "/";
  brand.innerHTML = `<span class="nav_brand_mark">&lt;/&gt;</span> Lucas Conde`;

  const hamburger = document.createElement("button");
  hamburger.classList.add("nav_hamburger");
  hamburger.type = "button";
  hamburger.setAttribute("aria-label", "Abrir menu");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-controls", "nav-links");
  hamburger.innerHTML = `<span></span><span></span><span></span>`;

  const links = document.createElement("div");
  links.classList.add("nav_links");
  links.id = "nav-links";

  /* Links de verdade (<a href>), não <button>: permitem
     abrir em nova aba, são anunciados como links por
     leitores de tela e funcionam sem JS. */
  PAGES.forEach(({ label, path }) => {
    const link = document.createElement("a");
    link.textContent = label;
    link.href = path;
    link.dataset.path = path;
    link.addEventListener("click", () => closeMenu());
    links.appendChild(link);
  });

  function closeMenu() {
    links.classList.remove("nav_links_open");
    hamburger.classList.remove("nav_open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Abrir menu");
  }

  hamburger.addEventListener("click", () => {
    const isOpen = links.classList.toggle("nav_links_open");
    hamburger.classList.toggle("nav_open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  inner.append(brand, hamburger, links);
  nav.appendChild(inner);
  return nav;
}

/**
 * Marca o link da página atual. "/projects/petwalker"
 * também acende "Projetos".
 */
export function setActiveLink(nav, path) {
  nav.querySelectorAll(".nav_links a").forEach(link => {
    const linkPath = link.dataset.path;
    const isActive =
      linkPath === "/" ? path === "/" : path.startsWith(linkPath);

    link.classList.toggle("nav_link_active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}
