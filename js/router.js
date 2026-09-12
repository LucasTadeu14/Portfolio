/* ══════════════════════════════════════════════
   ROUTER
   Casa o pathname com uma rota, extrai params
   (:slug) e devolve a view. Sem dependências.
   ══════════════════════════════════════════════ */

/**
 * Normaliza o caminho: remove barra final e query/hash.
 * "/projects/" e "/projects?x=1" viram ambos "/projects".
 */
export function normalizePath(pathname) {
  const clean = pathname.split("?")[0].split("#")[0];
  if (clean.length > 1 && clean.endsWith("/")) return clean.slice(0, -1);
  return clean || "/";
}

/**
 * Casa um caminho contra a lista de rotas.
 * Rotas estáticas ganham de rotas com parâmetro, então
 * "/projects" nunca é engolido por "/projects/:slug".
 */
export function matchRoute(routes, pathname) {
  const path = normalizePath(pathname);
  const segments = path.split("/").filter(Boolean);

  const candidates = [...routes].sort(
    (a, b) => countParams(a.path) - countParams(b.path)
  );

  for (const route of candidates) {
    const routeSegments = route.path.split("/").filter(Boolean);
    if (routeSegments.length !== segments.length) continue;

    const params = {};
    const matched = routeSegments.every((segment, i) => {
      if (segment.startsWith(":")) {
        params[segment.slice(1)] = decodeURIComponent(segments[i]);
        return true;
      }
      return segment === segments[i];
    });

    if (matched) return { route, params };
  }

  return null;
}

function countParams(path) {
  return (path.match(/:/g) || []).length;
}
