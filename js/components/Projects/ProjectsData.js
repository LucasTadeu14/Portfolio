/* ══════════════════════════════════════════════
   DADOS DOS PROJETOS
   `slug` alimenta a rota /projects/:slug.
   `stack` usa chaves do sprite (js/icons.js).
   ══════════════════════════════════════════════ */

export const ProjectData = [
  {
    slug: "mirelle-sine",
    title: "Mirelle Sine",
    tagline: "Portfólio bilíngue para engenheira de iOS mirando vagas internacionais",
    year: "2026",
    type: "Freelance",
    featured: true,
    description:
      "Site de portfólio desenvolvido para Mirelle Sine, engenheira de iOS. Apresenta sete aplicativos publicados, métricas de impacto e um estudo de caso em destaque, em inglês e português.",
    problem:
      "A cliente buscava vagas de engenharia iOS no exterior e precisava de um site que funcionasse para recrutador brasileiro e estrangeiro sem manter duas versões separadas. O conteúdo também é denso: sete apps, métricas e um estudo de caso longo, tudo competindo pela mesma atenção.",
    solution:
      "Construí o site em JavaScript puro, com uma camada de internacionalização própria que troca EN e PT direto no DOM, sem recarregar a página nem duplicar HTML. A interface segue a linguagem visual da Apple, que é o ecossistema onde a cliente trabalha, e organiza o conteúdo em seções navegáveis.",
    highlights: [
      "Internacionalização própria com 267 chaves, alternando EN e PT sem recarregar",
      "Sem framework: três módulos JavaScript (i18n, animações e interface)",
      "74 rótulos de acessibilidade e imagens com lazy loading e srcset",
      "Cache busting por hash de conteúdo em CSS, JS e imagens"
    ],
    learned:
      "Internacionalizar de verdade é mais do que trocar textos: título da aba, meta tags e rótulos de acessibilidade também precisam mudar de idioma, senão o site fica bilíngue só na superfície.",
    video: null,
    poster: "/assets/posters/mirelle-sine.jpg",
    repo: null,
    demo: "https://mirellesine.com",
    stack: ["js", "html", "css", "git"]
  },
  {
    slug: "conde-clinica",
    title: "Conde Clínica",
    tagline: "Site institucional e captação de pacientes para clínica de estética em Brasília",
    year: "2025 · 2026",
    type: "Freelance",
    featured: true,
    description:
      "Site institucional da Conde Estética Avançada, clínica de medicina estética em Águas Claras, Brasília. Apresenta os tratamentos, resultados e depoimentos, com agendamento direto pelo WhatsApp. Foi meu primeiro projeto comercial e segue em manutenção, já com um redesenho completo e domínio próprio.",
    problem:
      "A clínica dependia exclusivamente do Instagram para captar pacientes, sem nenhum canal próprio. Não havia como apresentar procedimentos em detalhe nem transformar visitante em agendamento sem uma conversa manual no direct.",
    solution:
      "Construí um site institucional que organiza os tratamentos em catálogo, responde as dúvidas mais comuns antes do contato e leva o visitante direto ao WhatsApp já com o procedimento escolhido. Depois da primeira versão, o site passou por um redesenho completo e ganhou domínio próprio.",
    highlights: [
      "Catálogo com os tratamentos da clínica, cada um com sua explicação",
      "Depoimentos, perguntas frequentes e localização para reduzir atrito antes do contato",
      "Agendamento pelo WhatsApp levando o contexto do procedimento escolhido",
      "Meta tags, Open Graph, robots.txt e sitemap para busca local em Brasília",
      "Layout mobile-first: a maior parte do tráfego vem do Instagram"
    ],
    learned:
      "Foi meu primeiro contato com cliente real: levantar requisito com quem não é técnico, lidar com mudança de escopo e manter o site vivo depois da entrega, em vez de considerar o projeto encerrado no deploy.",
    video: null,
    poster: "/assets/posters/conde-clinica.jpg",
    repo: null,
    demo: "https://condeclinica.com",
    stack: ["angular", "ts", "html", "css", "git"]
  },
  {
    slug: "petwalker",
    title: "PetWalker",
    tagline: "SPA em React simulando um fluxo de compra completo",
    year: "2025",
    type: "Projeto pessoal",
    featured: false,
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
    tagline: "Este site: SPA, router e animações escritos do zero",
    year: "2026",
    type: "Projeto pessoal",
    featured: false,
    description:
      "Meu portfólio, feito sem nenhum framework. Roteamento, renderização e animações são código próprio, sem build step e sem dependências em runtime.",
    problem:
      "É fácil montar um portfólio com um template pronto e não conseguir explicar uma linha dele. Eu queria o contrário: um site onde cada comportamento fosse algo que eu soubesse defender numa entrevista.",
    solution:
      "Escrevi um router client-side com a History API, um sistema de componentes baseado em funções que devolvem nós do DOM, e animações com IntersectionObserver, tudo em JavaScript puro e servido sem bundler.",
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
