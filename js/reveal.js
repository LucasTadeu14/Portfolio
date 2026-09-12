/* ══════════════════════════════════════════════
   REVEAL ON SCROLL
   Substitui ProjectsAnimation.js e SkillsAnimation.js,
   que eram o mesmo código duplicado. Desconecta o
   observer no cleanup da rota.
   ══════════════════════════════════════════════ */

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function revealOnScroll(elements, { threshold = 0.15, onCleanup, onMount } = {}) {
  const items = [...elements];
  if (!items.length) return;

  // Quem pediu menos movimento vê tudo já revelado.
  if (prefersReducedMotion()) {
    items.forEach(el => el.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    },
    { threshold }
  );

  items.forEach((el, i) => {
    el.style.setProperty("--reveal-delay", `${Math.min(i, 6) * 0.07}s`);
  });

  /* Observar só depois que o nó está no documento. Observando
     antes, o primeiro disparo depende do timing da inserção e
     parte dos cards ficava presa em opacity: 0. */
  const start = () => items.forEach(el => observer.observe(el));

  if (onMount) {
    onMount(start);
  } else {
    start();
  }

  onCleanup?.(() => observer.disconnect());
}
