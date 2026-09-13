/* ══════════════════════════════════════════════
   ÍCONES
   Um sprite SVG local injetado uma vez, em vez de
   ~31 <img> apontando para skillicons.dev. Menos
   requests, sem dependência de terceiro no caminho
   crítico e funciona offline.
   ══════════════════════════════════════════════ */

const SPRITE_URL = "/assets/icons/sprite.svg";

/** Nome legível por leitor de tela para cada ícone. */
export const ICON_LABELS = {
  js: "JavaScript",
  html: "HTML5",
  css: "CSS3",
  ts: "TypeScript",
  tailwind: "Tailwind CSS",
  git: "Git",
  firebase: "Firebase",
  nodejs: "Node.js",
  react: "React",
  angular: "Angular",
  next: "Next.js",
  nestjs: "NestJS",
  java: "Java",
  github: "GitHub",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  vercel: "Vercel"
};

let spritePromise = null;

/**
 * Injeta o sprite no documento. Idempotente: chamadas
 * seguintes reaproveitam a mesma promise.
 */
export function loadSprite() {
  if (spritePromise) return spritePromise;

  spritePromise = fetch(SPRITE_URL)
    .then(res => {
      if (!res.ok) throw new Error(`sprite: HTTP ${res.status}`);
      return res.text();
    })
    .then(svg => {
      const holder = document.createElement("div");
      holder.setAttribute("aria-hidden", "true");
      /* Escondido por dimensão, não com display:none.
         Gradientes dentro de <symbol> não resolvem quando o
         container está display:none (o ícone do Tailwind
         sumia por isso). */
      holder.style.cssText =
        "position:absolute;width:0;height:0;overflow:hidden";
      holder.innerHTML = svg;
      document.body.prepend(holder);
    })
    .catch(err => {
      // Sem sprite os ícones somem, mas o texto ao lado
      // continua legível. Não derruba a página.
      console.error("Não foi possível carregar o sprite de ícones:", err);
    });

  return spritePromise;
}

/**
 * @param {string} name  chave do sprite (ex.: "react")
 * @param {object} [options]
 * @param {number} [options.size=48]
 * @param {string} [options.label]  texto acessível; omitido = decorativo
 */
export function Icon(name, { size = 48, label } = {}) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.setAttribute("viewBox", "0 0 256 256");
  svg.classList.add("icon");

  const accessibleName = label ?? ICON_LABELS[name];
  if (label) {
    svg.setAttribute("role", "img");
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = accessibleName;
    svg.appendChild(title);
  } else {
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
  }

  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", `#i-${name}`);
  svg.appendChild(use);

  return svg;
}
