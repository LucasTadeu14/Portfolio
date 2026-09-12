export function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const inner = document.createElement("div");
  inner.classList.add("footer_inner");

  const brand = document.createElement("div");
  brand.classList.add("footer_brand");
  brand.innerHTML = `
    <span class="footer_name">Lucas Conde</span>
    <span class="footer_role">Desenvolvedor FullStack</span>
  `;

  const nav = document.createElement("nav");
  nav.classList.add("footer_nav");
  nav.setAttribute("aria-label", "Links do rodapé");

  [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Projetos", href: "/projects" },
    { label: "Contato", href: "/contact" }
  ].forEach(({ label, href }) => {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    nav.appendChild(link);
  });

  const social = document.createElement("div");
  social.classList.add("footer_social");

  [
    { name: "GitHub", url: "https://github.com/LucasTadeu14/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/lucas-tadeu-4828a3330/" },
    { name: "Instagram", url: "https://www.instagram.com/lucasst14/" }
  ].forEach(({ name, url }) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = name;
    social.appendChild(link);
  });

  const copyright = document.createElement("p");
  copyright.classList.add("footer_copy");
  // Ano dinâmico: o "© 2026" fixo envelhecia sozinho.
  copyright.textContent = `© ${new Date().getFullYear()} Lucas Tadeu · Feito sem frameworks`;

  inner.append(brand, nav, social);
  footer.append(inner, copyright);

  return footer;
}
