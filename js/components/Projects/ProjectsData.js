/* ══════════════════════════════════════════════
   DADOS DOS PROJETOS
   `slug` alimenta a rota /projects/:slug.
   `stack` usa chaves do sprite (js/icons.js).
   ══════════════════════════════════════════════ */

export const ProjectData = [
  {
    slug: "cliniclis",
    title: "Cliniclis",
    tagline: "SaaS de gestão para clínicas, do agendamento ao prontuário e ao financeiro",
    year: "2026",
    type: "Produto próprio",
    featured: true,
    description:
      "Sistema de gestão para clínicas médicas e de estética, em operação com clínicas reais. Reúne agenda, prontuário, financeiro, galeria de resultados e controle de equipe num só lugar, com cada clínica isolada da outra.",
    problem:
      "Clínicas pequenas tocam a operação em papel, planilha e conversa de WhatsApp. Agendamento, ficha de anamnese, evolução do tratamento e cobrança vivem separados, então ninguém sabe ao certo quem atendeu o quê, quanto entrou no mês ou quando um paciente precisa voltar.",
    solution:
      "Construí um produto multi-clínica com front em Angular sobre uma API REST em PHP com MariaDB, rodando em hospedagem compartilhada para caber no orçamento de clínica pequena. Cada clínica enxerga apenas os próprios dados, e os módulos ligam e desligam por cliente.",
    highlights: [
      "Multi-clínica: dados isolados por cliente e módulos habilitáveis um a um",
      "Agenda por dia ou semana, por profissional, com bloqueio de horário",
      "Prontuário com fichas configuráveis por template e evolução do tratamento",
      "Financeiro, relatórios, registro de ponto e controle de equipe",
      "Galeria de resultados que alimenta uma vitrine pública por link rotacionável",
      "API REST em PHP com cerca de 70 endpoints e migrações idempotentes",
      "Ambiente local em Docker e CI barrando regressões de estilo e dívida técnica"
    ],
    learned:
      "Hospedagem compartilhada impõe limites que não aparecem no ambiente local: extensão de PHP ausente, banco sem modo estrito aceitando dado inválido em silêncio, sistema de arquivos sensível a maiúsculas. Aprendi a validar tudo na aplicação e a nunca tratar o ambiente local como espelho da produção.",
    video: null,
    poster: "/assets/posters/cliniclis.jpg",
    repo: null,
    demo: "https://cliniclis.com",
    demoLabel: "Site do produto",
    stack: ["angular", "ts", "php", "mysql", "docker", "bootstrap", "git"]
  },
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
    featured: false,
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
    tagline: "Loja em React com autenticação, rota protegida e carrinho que sobrevive à navegação",
    year: "2025 · 2026",
    type: "Projeto pessoal",
    featured: false,
    description:
      "Loja de produtos para pets feita em React com Vite. Tem cadastro e login, catálogo, carrinho de compras e uma área que só abre para quem está autenticado.",
    problem:
      "Meus projetos até então eram telas isoladas, sem estado que sobrevivesse a uma troca de página. Eu queria exercitar o que aparece de fato numa aplicação de produção: sessão de usuário, rota que barra quem não está logado e um carrinho que não se perde ao navegar.",
    solution:
      "Montei a aplicação com React Router e dois contextos separados, um para autenticação e outro para o carrinho, de modo que o estado vive acima das rotas. A sessão é do Firebase Auth, e um componente de rota privada decide o que renderizar antes de a página montar.",
    highlights: [
      "Carrinho e sessão em contextos separados, preservados entre rotas",
      "Rota privada barrando acesso antes de a página montar",
      "Autenticação com Firebase Auth e cadastro de usuário",
      "TypeScript nas fronteiras de dados e build com Vite",
      "Interface com Tailwind CSS, sem biblioteca de componentes"
    ],
    learned:
      "Onde estado global ajuda e onde atrapalha. Separar autenticação e carrinho em dois contextos evitou que uma tela de produto recarregasse por causa de uma mudança de sessão, coisa que um contexto único provocaria.",
    video: null,
    poster: "/assets/posters/petwalker.jpg",
    repo: "https://github.com/LucasTadeu14/PetWalker",
    demo: "https://petwalker.vercel.app",
    stack: ["react", "ts", "vite", "tailwind", "firebase", "git"]
  },
  {
    slug: "portfolio",
    title: "Portfólio (sem framework)",
    tagline: "Este site: router, ciclo de vida e animações escritos do zero",
    year: "2026",
    type: "Projeto pessoal",
    featured: false,
    description:
      "Meu portfólio, feito sem nenhum framework. Roteamento, renderização e animações são código próprio, sem build step e sem dependências em runtime.",
    problem:
      "É fácil montar um portfólio com um template pronto e não conseguir explicar uma linha dele. Eu queria o contrário: um site onde cada comportamento fosse algo que eu soubesse defender numa entrevista.",
    solution:
      "Escrevi um router sobre a History API, um sistema de componentes em que cada função devolve nós do DOM, e um ciclo de vida que desliga timers e observers ao trocar de rota. Tudo em JavaScript puro, servido sem bundler.",
    highlights: [
      "Router próprio com rotas dinâmicas, normalização de barra final e metadados por página",
      "Ciclo de vida com onMount e onCleanup: nada de timer sobrevivendo à troca de rota",
      "Ícones num sprite SVG local, em vez de dezenas de requisições a um CDN de terceiro",
      "Prévias com carregamento tardio e dimensões declaradas, sem deslocar o layout",
      "Open Graph e dados estruturados para o link render preview ao ser compartilhado",
      "Zero dependências em runtime e nenhum build step"
    ],
    learned:
      "O que um framework realmente resolve. Reimplementar roteamento e ciclo de vida na mão tornou concreto o custo de cada abstração que eu usava sem pensar, e o ciclo de limpeza foi o que mais me surpreendeu: sair de uma página no meio de uma animação deixava timers escrevendo em elementos que já não existiam.",
    video: null,
    poster: "/assets/posters/portfolio.jpg",
    repo: "https://github.com/LucasTadeu14/Portfolio",
    demo: "https://portfolio-ten-coral-eidf90dyd0.vercel.app/",
    stack: ["js", "html", "css", "git", "vercel"]
  }
];

export function getProjectBySlug(slug) {
  return ProjectData.find(project => project.slug === slug) ?? null;
}
