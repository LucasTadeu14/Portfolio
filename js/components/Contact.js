import { Icon } from "../icons.js";

const EMAILJS_SDK = "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js";
const PUBLIC_KEY = "He3ZqQJd2TO3_r6Eq";
const SERVICE_ID = "service_h5vb1ni";
const TEMPLATE_ID = "template_qlyyws5";

let sdkPromise = null;

/**
 * Carrega o SDK do EmailJS só quando a página de contato
 * abre. Antes ele vinha no index.html e era baixado em
 * todas as rotas, inclusive na Home.
 */
function loadEmailJs() {
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = EMAILJS_SDK;
    script.async = true;
    script.onload = () => {
      window.emailjs.init(PUBLIC_KEY);
      resolve(window.emailjs);
    };
    script.onerror = () => reject(new Error("Falha ao carregar o EmailJS"));
    document.head.appendChild(script);
  });

  return sdkPromise;
}

export function Contact() {
  const section = document.createElement("section");
  section.classList.add("section", "contact");

  const header = document.createElement("header");
  header.classList.add("section_header");
  header.innerHTML = `
    <p class="section_eyebrow">Contato</p>
    <h1 class="section_title">Vamos conversar</h1>
    <p class="section_lead">
      Aberto a oportunidades, freelances e conversas sobre projetos.
      Respondo em até um dia útil.
    </p>
  `;

  // Pré-carrega em paralelo com o preenchimento do form.
  loadEmailJs().catch(() => {});

  const form = document.createElement("form");
  form.classList.add("contact_form");
  form.noValidate = true;

  const name = field({ id: "nome", label: "Seu nome", type: "text", autocomplete: "name" });
  const email = field({ id: "email", label: "Seu e-mail", type: "email", autocomplete: "email" });
  const message = field({ id: "mensagem", label: "Sua mensagem", textarea: true });

  /* Honeypot: bot preenche, humano não vê. Barra a maior
     parte do spam automatizado sem pedir captcha. */
  const honeypot = document.createElement("div");
  honeypot.classList.add("contact_hp");
  honeypot.setAttribute("aria-hidden", "true");
  honeypot.innerHTML = `<label>Não preencha<input type="text" name="website" tabindex="-1" autocomplete="off"></label>`;

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.classList.add("btn", "btn_primary", "contact_submit");
  submit.textContent = "Enviar mensagem";

  const status = document.createElement("p");
  status.classList.add("contact_status");
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");

  form.append(name.wrapper, email.wrapper, message.wrapper, honeypot, submit, status);

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const fields = [name, email, message];
    const firstInvalid = fields.find(f => !validate(f));
    fields.forEach(validate);

    if (firstInvalid) {
      firstInvalid.input.focus();
      return;
    }

    if (honeypot.querySelector("input").value) return; // bot

    submit.disabled = true;
    submit.textContent = "Enviando...";
    setStatus(status, "", "");

    try {
      const emailjs = await loadEmailJs();
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name.input.value.trim(),
        from_email: email.input.value.trim(),
        message: message.input.value.trim()
      });

      setStatus(status, "Mensagem enviada. Obrigado — respondo em breve!", "success");
      form.reset();
      fields.forEach(clearError);
    } catch (error) {
      console.error(error);
      setStatus(
        status,
        "Não consegui enviar agora. Tente de novo ou me chame no LinkedIn.",
        "error"
      );
    } finally {
      submit.disabled = false;
      submit.textContent = "Enviar mensagem";
    }
  });

  /* ── Redes ─────────────────────────────────── */
  const social = document.createElement("div");
  social.classList.add("contact_social");

  const socialHeading = document.createElement("h2");
  socialHeading.classList.add("skills_heading");
  socialHeading.textContent = "Ou me encontre em";

  const socialList = document.createElement("ul");
  socialList.classList.add("contact_social_list");

  [
    { name: "GitHub", icon: "github", url: "https://github.com/LucasTadeu14/" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/lucas-tadeu-4828a3330/" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/lucasst14/" }
  ].forEach(({ name: label, icon, url }) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("contact_social_link");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.appendChild(Icon(icon, { size: 36 }));
    const text = document.createElement("span");
    text.textContent = label;
    link.appendChild(text);
    item.appendChild(link);
    socialList.appendChild(item);
  });

  social.append(socialHeading, socialList);
  section.append(header, form, social);
  return section;
}

/* ── Helpers ───────────────────────────────────── */

function field({ id, label, type = "text", textarea = false, autocomplete }) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("form_field");

  const labelEl = document.createElement("label");
  labelEl.setAttribute("for", id);
  labelEl.textContent = label;

  const input = document.createElement(textarea ? "textarea" : "input");
  input.id = id;
  input.name = id;
  input.required = true;
  if (!textarea) input.type = type;
  if (textarea) input.rows = 5;
  if (autocomplete) input.autocomplete = autocomplete;

  const error = document.createElement("span");
  error.classList.add("form_error");
  error.id = `${id}-error`;
  input.setAttribute("aria-describedby", error.id);

  wrapper.append(labelEl, input, error);

  const entry = { wrapper, input, error };
  input.addEventListener("blur", () => validate(entry));
  input.addEventListener("input", () => {
    if (wrapper.classList.contains("form_field_invalid")) validate(entry);
  });

  return entry;
}

function validate({ wrapper, input, error }) {
  const value = input.value.trim();
  let problem = "";

  if (!value) {
    problem = "Campo obrigatório.";
  } else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
    problem = "Digite um e-mail válido.";
  } else if (input.tagName === "TEXTAREA" && value.length < 10) {
    problem = "Escreva pelo menos 10 caracteres.";
  }

  wrapper.classList.toggle("form_field_invalid", Boolean(problem));
  input.setAttribute("aria-invalid", String(Boolean(problem)));
  error.textContent = problem;

  return !problem;
}

function clearError({ wrapper, input, error }) {
  wrapper.classList.remove("form_field_invalid");
  input.removeAttribute("aria-invalid");
  error.textContent = "";
}

function setStatus(el, text, variant) {
  el.textContent = text;
  el.classList.remove("contact_status_success", "contact_status_error");
  if (variant) el.classList.add(`contact_status_${variant}`);
}
