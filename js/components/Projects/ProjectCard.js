import { Icon, ICON_LABELS } from "../../icons.js";

export function ProjectCard(project, { onCleanup } = {}) {
  const card = document.createElement("article");
  card.classList.add("card");

  /* ── Mídia ─────────────────────────────────────
     O poster aparece de imediato; o vídeo só começa
     a baixar no hover (preload="none"). Antes os três
     vídeos puxavam metadata no load da página e o card
     ficava preto até passar o mouse. */
  const media = document.createElement("a");
  media.classList.add("card_media");
  media.href = `/projects/${project.slug}`;
  media.setAttribute("aria-label", `Ver detalhes de ${project.title}`);

  const poster = document.createElement("img");
  poster.classList.add("card_poster");
  poster.src = project.poster;
  poster.alt = `Prévia do projeto ${project.title}`;
  poster.width = 900;
  poster.height = 506;
  poster.loading = "lazy";
  poster.decoding = "async";
  media.appendChild(poster);

  if (project.video) {
    const video = document.createElement("video");
    video.classList.add("card_video");
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "none";
    video.disablePictureInPicture = true;
    video.disableRemotePlayback = true;
    video.setAttribute("aria-hidden", "true");
    video.tabIndex = -1;
    media.appendChild(video);

    let loaded = false;

    const start = () => {
      // src só é definido no primeiro hover: sem isso o
      // navegador baixaria os três vídeos sem necessidade.
      if (!loaded) {
        video.src = project.video;
        loaded = true;
      }
      video.play().catch(() => {
        /* autoplay bloqueado: o poster continua visível */
      });
      card.classList.add("card_playing");
    };

    const stop = () => {
      video.pause();
      video.currentTime = 0;
      card.classList.remove("card_playing");
    };

    card.addEventListener("mouseenter", start);
    card.addEventListener("mouseleave", stop);
    card.addEventListener("focusin", start);
    card.addEventListener("focusout", stop);

    onCleanup?.(() => {
      stop();
      video.removeAttribute("src");
      video.load();
    });
  }

  /* ── Cabeçalho ─────────────────────────────── */
  const body = document.createElement("div");
  body.classList.add("card_body");

  const meta = document.createElement("div");
  meta.classList.add("card_meta");
  meta.innerHTML = `<span class="card_type">${project.type}</span><span class="card_year">${project.year}</span>`;

  const heading = document.createElement("h2");
  heading.classList.add("card_title");
  const headingLink = document.createElement("a");
  headingLink.href = `/projects/${project.slug}`;
  headingLink.textContent = project.title;
  heading.appendChild(headingLink);

  const tagline = document.createElement("p");
  tagline.classList.add("card_tagline");
  tagline.textContent = project.tagline;

  /* ── Stack ─────────────────────────────────── */
  const stack = document.createElement("ul");
  stack.classList.add("card_stack");
  stack.setAttribute("aria-label", "Tecnologias usadas");

  project.stack.forEach(name => {
    const item = document.createElement("li");
    item.classList.add("card_stack_item");
    item.appendChild(Icon(name, { size: 28 }));

    const tooltip = document.createElement("span");
    tooltip.classList.add("card_stack_name");
    tooltip.textContent = ICON_LABELS[name] ?? name;
    item.appendChild(tooltip);

    stack.appendChild(item);
  });

  /* ── Ações ─────────────────────────────────── */
  const actions = document.createElement("div");
  actions.classList.add("card_actions");

  const detailBtn = document.createElement("a");
  detailBtn.classList.add("btn", "btn_primary");
  detailBtn.href = `/projects/${project.slug}`;
  detailBtn.innerHTML = `Ver detalhes ${arrowIcon()}`;
  actions.appendChild(detailBtn);

  if (project.demo) {
    const demoBtn = document.createElement("a");
    demoBtn.classList.add("btn", "btn_ghost");
    demoBtn.href = project.demo;
    demoBtn.target = "_blank";
    demoBtn.rel = "noopener noreferrer";
    demoBtn.textContent = "Demo ao vivo";
    actions.appendChild(demoBtn);
  }

  const repoBtn = document.createElement("a");
  repoBtn.classList.add("btn", "btn_ghost");
  repoBtn.href = project.repo;
  repoBtn.target = "_blank";
  repoBtn.rel = "noopener noreferrer";
  repoBtn.textContent = "Código";
  actions.appendChild(repoBtn);

  body.append(meta, heading, tagline, stack, actions);
  card.append(media, body);

  return card;
}

function arrowIcon() {
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
}
