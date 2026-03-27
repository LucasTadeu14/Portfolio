export function Navbar(navigate) {
  const nav = document.createElement("nav");
  nav.classList.add("nav_bar");

  const hamburger = document.createElement("button");
  hamburger.classList.add("nav_hamburger");
  hamburger.setAttribute("aria-label", "Menu");
  hamburger.innerHTML = `<span></span><span></span><span></span>`;

  const links = document.createElement("div");
  links.classList.add("nav_links");

  const pages = [
    { label: "Home",     path: "/"         },
    { label: "Sobre",    path: "/about"    },
    { label: "Projetos", path: "/projects" },
    { label: "Contato",  path: "/contact"  },
  ];

  pages.forEach(({ label, path }) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.addEventListener("click", () => {
      navigate(path);
      links.classList.remove("nav_links_open");
      hamburger.classList.remove("nav_open");
    });
    links.appendChild(btn);
  });

  hamburger.addEventListener("click", () => {
    links.classList.toggle("nav_links_open");
    hamburger.classList.toggle("nav_open");
  });

  nav.appendChild(hamburger);
  nav.appendChild(links);

  return nav;
}
