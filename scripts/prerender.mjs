// Prérendu statique de chaque route après `vite build`.
// Écrit dist/<route>.html : Netlify sert ce fichier avant la règle SPA de _redirects,
// et sans redirection vers une barre oblique finale (le canonical n'en a pas).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')

// Source unique des routes : le sitemap. Une page ajoutée au sitemap est prérendue.
const sitemap = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8')
const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)].map((m) => m[1] || '/')

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href)

// Balises du gabarit que Helmet redéfinit page par page : on les retire pour éviter les doublons.
const stripFromTemplate = [
  /<title>[\s\S]*?<\/title>\s*/,
  /<meta name="description"[^>]*>\s*/,
  /<meta property="og:(?:type|locale|site_name|title|description|url)"[^>]*>\s*/g,
  /<meta name="twitter:card"[^>]*>\s*/,
  /<meta name="geo\.(?:region|placename)"[^>]*>\s*/g,
]

let failed = 0
for (const route of routes) {
  try {
    const { html: rendered } = await render(route)

    // React 19 émet <title>, <meta> et <link> en tête du rendu quand l'arbre n'a pas de <head>.
    // On les remonte dans le <head> du gabarit, où React les retrouve à l'hydratation.
    const hoisted = rendered.match(/^(?:<title>[\s\S]*?<\/title>|<meta[^>]*\/>|<link[^>]*\/>)+/)
    if (!hoisted) throw new Error('aucune balise <title>/<meta> rendue')
    const head = hoisted[0].replace(/></g, '>\n    <')
    const html = rendered.slice(hoisted[0].length)

    let page = template
    for (const re of stripFromTemplate) page = page.replace(re, '')
    page = page
      .replace('</head>', `    ${head}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

    const out = resolve(dist, route === '/' ? 'index.html' : `${route.slice(1)}.html`)
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, page)
    const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).length
    console.log(`  ✓ ${route.padEnd(22)} ${String(words).padStart(5)} mots`)
  } catch (err) {
    failed++
    console.error(`  ✗ ${route} — ${err.message}`)
  }
}

if (failed) {
  console.error(`\nPrérendu : ${failed} route(s) en échec.`)
  process.exit(1)
}
console.log(`\nPrérendu : ${routes.length} pages statiques écrites dans dist/.`)
