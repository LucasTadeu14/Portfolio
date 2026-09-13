# 💻 Portfólio | Lucas Conde

> Portfólio pessoal feito **sem frameworks**: roteamento, renderização e
> animações são código próprio, sem build step e sem dependências em runtime.
>
> 🔗 **[portfolio-ten-coral-eidf90dyd0.vercel.app](https://portfolio-ten-coral-eidf90dyd0.vercel.app/)**

---

## 🚀 Sobre

Portfólio construído do zero com HTML, CSS e JavaScript puro (ES Modules).
A proposta não é recusar frameworks por princípio, e sim entender o que
eles resolvem. Reimplementar roteamento, ciclo de vida e animações na mão deixa
claro o custo de cada abstração.

## ⚡ Como rodar

O projeto usa ES Modules e rotas no estilo SPA, então **não funciona abrindo
o `index.html` direto no navegador** (`file://` bloqueia módulos e não faz
o rewrite das rotas). Use o servidor de desenvolvimento incluído:

```bash
git clone https://github.com/LucasTadeu14/Portfolio.git
cd Portfolio
node dev-server.mjs
# ▸ http://localhost:3000
```

Só precisa do Node instalado. O `dev-server.mjs` não tem dependências e
replica o rewrite da Vercel (qualquer rota cai no `index.html`).

## 🏗 Estrutura

```
index.html              shell + meta tags (SEO/Open Graph)
dev-server.mjs          servidor local, sem dependências
vercel.json             rewrites de SPA + headers de cache
css/
  variables.css         design tokens (cor, espaço, tipografia, movimento)
  layout.css            reset, shell, botões, utilitários de acessibilidade
  components.css        componentes + responsivo
js/
  app.js                bootstrap, rotas e metadados por página
  router.js             match de rotas com params (/projects/:slug)
  icons.js              sprite SVG local
  reveal.js             animação de entrada via IntersectionObserver
  components/           uma função por componente, devolvendo nós do DOM
assets/
  icons/sprite.svg      17 ícones num único arquivo
  posters/              primeiro frame de cada vídeo
  videos/               demos dos projetos
```

## ✨ O que tem aqui

**Arquitetura**
- Router próprio com History API, rotas dinâmicas (`/projects/:slug`) e
  normalização de trailing slash
- Shell persistente: navbar e footer não são recriados a cada navegação
- Ciclo de vida com `onMount` / `onCleanup`: timers, observers e vídeos
  são desligados ao trocar de rota

**Performance**
- Zero requests a terceiros no carregamento: os ícones vêm de um sprite
  SVG local (antes eram ~31 `<img>` apontando para um CDN externo)
- Vídeos com `preload="none"` + poster: nada de vídeo baixa até o hover
- SDK do EmailJS carregado sob demanda, só na página de contato
- Headers de cache imutável para `/assets` via `vercel.json`

**SEO**
- Título, descrição, canonical e Open Graph atualizados por rota
- Imagem de preview (1200×630) para LinkedIn, WhatsApp e Discord
- JSON-LD (`schema.org/Person`), `robots.txt` e `sitemap.xml`

**Acessibilidade**
- Navegação com `<a href>` reais e `aria-current` na página ativa
- Skip link, `:focus-visible` em tudo e labels nos ícones
- Formulário com validação inline e `aria-live` (sem `alert()`)
- `prefers-reduced-motion` respeitado em todas as animações

## 🛠 Stack

HTML5 · CSS3 · JavaScript (ES6+) · Vercel

Nenhuma dependência em runtime. Nenhum build step.

## 📬 Contato

- LinkedIn: [Lucas Tadeu](https://www.linkedin.com/in/lucas-tadeu-4828a3330/)
- GitHub: [LucasTadeu14](https://github.com/LucasTadeu14)
