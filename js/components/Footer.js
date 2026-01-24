export function Footer() {
  const foot = document.createElement("footer");
  foot.classList.add("footer");

  const text = document.createElement("p");
  text.textContent = "© 2026 Project By: Lucas Tadeu";
  foot.appendChild(text);

  const links = document.createElement("div");
  links.classList.add("footer-links");

  const social = [
    { name: "Instagram", url: "https://www.instagram.com/lucasst14/" },
    { name: "GitHub", url: "https://github.com/LucasTadeu14/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/lucas-tadeu-4828a3330/" }
  ];

  social.forEach(item => {
    const a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";
    a.textContent = item.name;
    links.appendChild(a);
  });

  foot.appendChild(links);

  return foot;
}
