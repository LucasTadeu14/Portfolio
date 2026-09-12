/* ══════════════════════════════════════════════
   DADOS DOS PROJETOS
   `slug` alimenta a rota /projects/:slug.
   `stack` usa chaves do sprite (js/icons.js).
   ══════════════════════════════════════════════ */

export const ProjectData = [
  {
    slug: "conde-clinica",
    title: "Conde Clínica",
    tagline: "Primeiro projeto comercial — site institucional para clínica de estética",
    year: "2025",
    type: "Freelance",
    featured: true,
    description:
      "Site institucional desenvolvido como freelance para a Conde Estética Avançada, clínica de medicina estética. Apresenta os serviços, resultados e integra com WhatsApp para agendamentos.",
    problem:
      "A clínica dependia exclusivamente do Instagram para captar pacientes, sem nenhum canal próprio. Não havia como apresentar procedimentos em detalhe nem transformar visitante em agendamento sem uma conversa manual no direct.",
    solution:
      "Construí um site institucional com catálogo de procedimentos, galeria de resultados e um fluxo direto para o WhatsApp com mensagem pré-preenchida por serviço — o visitante chega na conversa já dizendo o que quer.",
    highlights: [
      "Integração com WhatsApp levando o contexto do procedimento escolhido",
      "Layout mobile-first: a maior parte do tráfego vem do Instagram",
      "Componentes Angular reaproveitados entre as seções de serviço"
    ],
    learned:
      "Foi meu primeiro contato com cliente real: levantar requisito com quem não é técnico, lidar com mudança de escopo e entregar em prazo combinado.",
    video: "/assets/videos/condeClinicaPreview.mp4",
    poster: "/assets/posters/conde-clinica.jpg",
    repo: "https://github.com/LucasTadeu14/Conde_clinica",
    demo: null,
    stack: ["angular", "ts", "html", "css", "git"]
  },
  {
    slug: "petwalker",
    title: "PetWalker",
    tagline: "SPA em React simulando um fluxo de compra completo",
    year: "2025",
    type: "Projeto pessoal",
    featured: true,
    description:
      "Aplicação em React com foco na simulação de um fluxo real de usuário: navegação entre páginas, gerenciamento de itens e carrinho de compras interativo.",
    problem:
      "Eu queria sair dos projetos de tela única e exercitar o que realmente aparece numa aplicação de produção: estado que sobrevive à navegação, dados vindos de fora e um fluxo com mais de um passo.",
    solution:
      "Montei um e-commerce de serviços para pets com catálogo, carrinho persistente e autenticação via Firebase, organizando a aplicação em componentes reutilizáveis e tipando as fronteiras com TypeScript.",
    highlights: [
      "Carrinho com estado compartilhado entre rotas",
      "Autenticação e persistência com Firebase",
      "Tipagem em TypeScript nas fronteiras de dados",
      "Estilização com Tailwind e componentes reaproveitáveis"
    ],
    learned:
      "Gerenciar estado entre rotas sem transformar tudo em estado global, e onde a tipagem realmente compensa numa base pequena.",
    video: "/assets/videos/PetWalker_preview.mp4",
    poster: "/assets/posters/petwalker.jpg",
    repo: "https://github.com/LucasTadeu14/PetWalker",
    demo: null,
    stack: ["react", "ts", "tailwind", "firebase", "nodejs", "html", "git"]
  },
  {
    slug: "portfolio",
    title: "Portfólio (sem framework)",
    tagline: "Este site — SPA, router e animações escritos do zero",
    year: "2026",
    type: "Projeto pessoal",
    featured: false,
    description:
      "Meu portfólio, feito sem nenhum framework. Roteamento, renderização e animações são código próprio, sem build step e sem dependências em runtime.",
    problem:
      "É fácil montar um portfólio com um template pronto e não conseguir explicar uma linha dele. Eu queria o contrário: um site onde cada comportamento fosse algo que eu soubesse defender numa entrevista.",
    solution:
      "Escrevi um router client-side com a History API, um sistema de componentes baseado em funções que devolvem nós do DOM, e animações com IntersectionObserver — tudo em JavaScript puro, servido sem bundler.",
    highlights: [
      "Router próprio com History API, rotas dinâmicas e ciclo de limpeza",
      "Zero dependências em runtime e nenhum build step",
      "Ícones em sprite SVG local em vez de CDN de terceiro",
      "Metadados por rota para SEO e preview em redes sociais"
    ],
    learned:
      "O que um framework realmente resolve. Reimplementar roteamento e ciclo de vida na mão deixou muito mais claro o custo de cada abstração que eu usava sem pensar.",
    video: "/assets/videos/Portfolio_preview.mp4",
    poster: "/assets/posters/portfolio.jpg",
    repo: "https://github.com/LucasTadeu14/Portfolio",
    demo: "https://portfolio-ten-coral-eidf90dyd0.vercel.app/",
    stack: ["js", "html", "css", "git", "vercel"]
  }
];

export function getProjectBySlug(slug) {
  return ProjectData.find(project => project.slug === slug) ?? null;
}
