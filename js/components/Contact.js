export function Contact() {
  const section = document.createElement("section");
  section.classList.add("contact");

  const title = document.createElement("h1");
  title.textContent = "Fale Comigo :)";

  const form = document.createElement("form");
  form.classList.add("contact-form");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Seu nome";
  nameInput.required = true;

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Seu email";
  emailInput.required = true;

  const messageInput = document.createElement("textarea");
  messageInput.placeholder = "Sua mensagem";
  messageInput.required = true;
  messageInput.rows = 5;

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Enviar";

  form.append(nameInput, emailInput, messageInput, submitBtn);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nameInput.value,
      from_email: emailInput.value,
      message: messageInput.value
    };

    emailjs.send("service_h5vb1ni", "template_qlyyws5", templateParams)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      })
      .catch((error) => {
        alert("Erro ao enviar mensagem. Tente novamente.");
        console.error(error);
      });
  });

  const redesSection = document.createElement("section");
  redesSection.classList.add("social-links");

  const or = document.createElement("h1");
  or.textContent = "Ou acesse minhas redes";

  const redes = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/lucasst14/",
      img: "https://skillicons.dev/icons?i=instagram"
    },
    {
      name: "GitHub",
      link: "https://github.com/LucasTadeu14/",
      img: "https://skillicons.dev/icons?i=github"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/lucas-tadeu-4828a3330/",
      img: "https://skillicons.dev/icons?i=linkedin"
    }
  ];

  redes.forEach(rede => {
    const a = document.createElement("a");
    a.href = rede.link;
    a.target = "_blank";
    a.title = rede.name;

    const img = document.createElement("img");
    img.src = rede.img;
    img.alt = rede.name;
    img.classList.add("social-icon");

    a.appendChild(img);
    redesSection.appendChild(a);
  });

  section.append(title, form, or, redesSection);
  return section;
}
