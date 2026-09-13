import { getProjectBySlug, ProjectData } from "./ProjectsData.js";
import { Icon, ICON_LABELS } from "../../icons.js";
import { ErrorPage } from "../ErrorPage.js";

export function ProjectDetail({ params, navigate, onCleanup }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      el: ErrorPage(navigate, {
        code: "404",
        message: "Esse projeto não existe (ou mudou de endereço)."
      }),
      title: "Projeto não encontrado | Lucas Conde",
      description: "O projeto procurado não foi encontrado."
    };
  }

  const article = document.createElement("article");
  article.classList.add("detail");

  /* ── Voltar ────────────────────────────────── */
  const back = document.createElement("a");
  back.classList.add("detail_back");
  back.href = "/projects";
  back.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Todos os projetos`;

  /* ── Cabeçalho ─────────────────────────────── */
  const header = document.createElement("header");
  header.classList.add("detail_header");

  const meta = document.createElement("div");
  meta.classList.add("detail_meta");
  meta.innerHTML = `<span class="detail_badge">${project.type}</span><span class="detail_year">${project.year}</span>`;

  const title = document.createElement("h1");
  title.classList.add("detail_title");
  title.textContent = project.title;

  const tagline = document.createElement("p");
  tagline.classList.add("detail_tagline");
  tagline.textContent = project.tagline;

  const actions = document.createElement("div");
  actions.classList.add("detail_actions");

  if (project.demo) {
    actions.appendChild(
      externalLink(project.demo, "Ver ao vivo", "btn_primary")
    );
  }
  if (project.repo) {
    actions.appendChild(externalLink(project.repo, "Código no GitHub", "btn_ghost"));
  }

  header.append(meta, title, tagline, actions);

  /* ── Vídeo ─────────────────────────────────── */
  const figure = document.createElement("figure");
  figure.classList.add("detail_media");

  /* Projeto sem vídeo cai para a imagem: dá para publicar
     um projeto só com print, sem precisar gravar demo. */
  if (project.video) {
    const video = document.createElement("video");
    video.src = project.video;
    video.poster = project.poster;
    video.controls = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "none";
    video.setAttribute("aria-label", `Demonstração em vídeo do projeto ${project.title}`);
    figure.appendChild(video);

    onCleanup?.(() => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    });
  } else {
    const image = document.createElement("img");
    image.src = project.poster;
    image.alt = `Captura de tela do projeto ${project.title}`;
    image.loading = "lazy";
    image.decoding = "async";
    figure.appendChild(image);
  }

  /* ── Corpo ─────────────────────────────────── */
  const body = document.createElement("div");
  body.classList.add("detail_body");

  body.appendChild(block("O problema", project.problem));
  body.appendChild(block("A solução", project.solution));

  if (project.highlights?.length) {
    const section = document.createElement("section");
    section.classList.add("detail_block");
    const heading = document.createElement("h2");
    heading.textContent = "Destaques técnicos";
    const list = document.createElement("ul");
    list.classList.add("detail_list");
    project.highlights.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    section.append(heading, list);
    body.appendChild(section);
  }

  if (project.learned) {
    body.appendChild(block("O que levei desse projeto", project.learned));
  }

  /* ── Stack ─────────────────────────────────── */
  const stackSection = document.createElement("section");
  stackSection.classList.add("detail_block");
  const stackHeading = document.createElement("h2");
  stackHeading.textContent = "Stack";
  const stackList = document.createElement("ul");
  stackList.classList.add("detail_stack");
  project.stack.forEach(name => {
    const li = document.createElement("li");
    li.appendChild(Icon(name, { size: 32 }));
    const label = document.createElement("span");
    label.textContent = ICON_LABELS[name] ?? name;
    li.appendChild(label);
    stackList.appendChild(li);
  });
  stackSection.append(stackHeading, stackList);
  body.appendChild(stackSection);

  /* ── Próximo projeto ───────────────────────── */
  const index = ProjectData.findIndex(p => p.slug === project.slug);
  const next = ProjectData[(index + 1) % ProjectData.length];

  if (next && next.slug !== project.slug) {
    const nav = document.createElement("nav");
    nav.classList.add("detail_next");
    nav.setAttribute("aria-label", "Próximo projeto");
    nav.innerHTML = `
      <span class="detail_next_label">Próximo projeto</span>
      <a class="detail_next_link" href="/projects/${next.slug}">
        ${next.title}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    `;
    body.appendChild(nav);
  }

  article.append(back, header, figure, body);

  return {
    el: article,
    title: `${project.title} | Lucas Conde`,
    description: project.tagline
  };
}

function block(heading, text) {
  const section = document.createElement("section");
  section.classList.add("detail_block");

  const h2 = document.createElement("h2");
  h2.textContent = heading;

  const p = document.createElement("p");
  p.textContent = text;

  section.append(h2, p);
  return section;
}

function externalLink(href, label, variant) {
  const link = document.createElement("a");
  link.classList.add("btn", variant);
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  return link;
}
