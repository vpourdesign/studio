import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

/**
 * Rendu statique d'une route, utilisé par scripts/prerender.mjs au build.
 *
 * Le site est une SPA : sans ce prérendu, un robot qui n'exécute pas JavaScript
 * (GPTBot, ClaudeBot, PerplexityBot, et Google au premier passage) ne reçoit qu'une
 * coquille vide avec le titre de l'accueil. `prerender` attend les composants `lazy`,
 * contrairement à `renderToString` qui s'arrêterait au fallback de Suspense.
 */
export async function render(url: string) {
  const { prelude } = await prerender(
    <HelmetProvider>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  )

  const html = await new Response(prelude as ReadableStream).text()
  return { html }
}
