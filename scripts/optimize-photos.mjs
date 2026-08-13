/**
 * optimize-photos.mjs
 *
 * Transforme les photos brutes du shooting (src/images-site/*.jpg, ~1,5 Mo chacune)
 * en WebP dimensionnés pour le web, écrits dans src/assets/photos/.
 *
 * Usage :  node scripts/optimize-photos.mjs
 *
 * Pour un prochain shooting : dépose les nouvelles photos dans src/images-site/,
 * ajuste la table PHOTOS ci-dessous, relance le script.
 */

import sharp from 'sharp'
import { mkdir, readdir, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'src/images-site')
const OUT = path.join(ROOT, 'src/assets/photos')
const PUBLIC = path.join(ROOT, 'public')

const src = (n) => path.join(SRC, `LeStudio_Mai2026_MedRes-${n}.jpg`)

/**
 * Chaque entrée : quelle photo source, vers quel nom de sortie, à quelles largeurs.
 * `crop` est optionnel (left/top/width/height en pixels sur l'original 2000px de large).
 */
const PHOTOS = [
  // ── Accueil ──
  { from: 11, name: 'hero-piano-queue', widths: [1280, 1920], quality: 76 },
  { from: 4, name: 'megamenu-studio-clair', widths: [1200], quality: 74 },

  // ── Cartes de cours (accueil + en-tête des pages instrument) ──
  // Photo 1 et non 3 : la 3 montre le même local que la carte Violon (photo 2), les deux cartes se ressemblaient.
  { from: 1, name: 'cours-piano', widths: [900], quality: 76 },
  { from: 5, name: 'cours-guitare', widths: [900], quality: 76 },
  { from: 6, name: 'cours-chant', widths: [900], quality: 76 },
  { from: 7, name: 'cours-batterie', widths: [900], quality: 76 },
  // Seule photo du shooting où le violon est visible : on recadre dessus.
  { from: 2, name: 'cours-violon', widths: [900], quality: 76, crop: { left: 620, top: 380, width: 1100, height: 733 } },

  // ── Quartier / contact ──
  { from: 27, name: 'vitrine-sainte-rose', widths: [1200], quality: 78 },

  // ── Professeurs ──
  { from: 17, name: 'mur-professeurs', widths: [1600], quality: 76 },
]

/** Image de partage social (Open Graph). JPEG : meilleur support que WebP côté crawlers. */
const OG = { from: 19, name: 'og-default.jpg', width: 1200, height: 630, quality: 82 }

/**
 * Galerie de la page « Nos locaux ».
 * Le `ratio` fait varier la hauteur des tuiles, ce qui donne son relief à la maçonnerie :
 * 'wide' garde le 3:2 d'origine, 'portrait' recadre en 3:4, 'square' en 1:1.
 */
const GALLERY_WIDTH = 800
const GALLERY = [
  { from: 11, name: 'salle-piano-queue', ratio: 'wide' },
  { from: 7, name: 'salle-batterie', ratio: 'portrait' },
  { from: 5, name: 'salle-guitare', ratio: 'wide' },
  { from: 4, name: 'salle-lumineuse', ratio: 'portrait' },
  { from: 14, name: 'accueil', ratio: 'wide' },
  { from: 6, name: 'salle-chant', ratio: 'square' },
  { from: 10, name: 'salle-piano-vintage', ratio: 'portrait' },
  { from: 3, name: 'salle-piano-droit', ratio: 'wide' },
  { from: 21, name: 'corridor-studios', ratio: 'portrait' },
  { from: 12, name: 'salle-orange', ratio: 'wide' },
  { from: 20, name: 'devise-murale', ratio: 'square' },
  { from: 2, name: 'salle-violon', ratio: 'portrait' },
  { from: 8, name: 'salle-batterie-ensemble', ratio: 'wide' },
  { from: 17, name: 'mur-biographies', ratio: 'wide' },
  { from: 27, name: 'vitrine', ratio: 'portrait' },
  { from: 25, name: 'salle-attente', ratio: 'wide' },
  { from: 19, name: 'enseigne-entree', ratio: 'wide' },
  { from: 23, name: 'affiches-corridor', ratio: 'portrait' },
]

/** Recadrage centré vers le ratio demandé, à partir d'une source 2000 × 1335. */
function cropFor(ratio, width, height) {
  if (ratio === 'wide') return null
  const target = ratio === 'portrait' ? 3 / 4 : 1
  let w = Math.round(height * target)
  let h = height
  if (w > width) {
    w = width
    h = Math.round(width / target)
  }
  return { left: Math.round((width - w) / 2), top: Math.round((height - h) / 2), width: w, height: h }
}

async function run() {
  await mkdir(OUT, { recursive: true })

  let totalIn = 0
  let totalOut = 0
  const rows = []

  for (const photo of PHOTOS) {
    const input = src(photo.from)
    const inSize = (await stat(input)).size

    for (const width of photo.widths) {
      const suffix = photo.widths.length > 1 ? `-${width}w` : ''
      const outName = `${photo.name}${suffix}.webp`
      const outPath = path.join(OUT, outName)

      let pipeline = sharp(input)
      if (photo.crop) pipeline = pipeline.extract(photo.crop)

      const info = await pipeline
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: photo.quality, effort: 6 })
        .toFile(outPath)

      totalOut += info.size
      rows.push([outName, `${info.width}×${info.height}`, kb(info.size)])
    }
    totalIn += inSize
  }

  // Galerie « Nos locaux ».
  await mkdir(path.join(OUT, 'galerie'), { recursive: true })
  for (const item of GALLERY) {
    const input = src(item.from)
    const meta = await sharp(input).metadata()
    const crop = cropFor(item.ratio, meta.width, meta.height)

    let pipeline = sharp(input)
    if (crop) pipeline = pipeline.extract(crop)

    const info = await pipeline
      .resize({ width: GALLERY_WIDTH, withoutEnlargement: true })
      .webp({ quality: 74, effort: 6 })
      .toFile(path.join(OUT, 'galerie', `${item.name}.webp`))

    totalIn += (await stat(input)).size
    totalOut += info.size
    rows.push([`galerie/${item.name}.webp`, `${info.width}×${info.height}`, kb(info.size)])
  }

  // Open Graph : recadrage centré au ratio 1.91:1 attendu par Facebook et LinkedIn.
  const ogInfo = await sharp(src(OG.from))
    .resize({ width: OG.width, height: OG.height, fit: 'cover', position: 'centre' })
    .jpeg({ quality: OG.quality, mozjpeg: true })
    .toFile(path.join(PUBLIC, OG.name))
  totalOut += ogInfo.size
  rows.push([`public/${OG.name}`, `${ogInfo.width}×${ogInfo.height}`, kb(ogInfo.size)])

  const width = Math.max(...rows.map((r) => r[0].length))
  for (const [name, dim, size] of rows) {
    console.log(`  ${name.padEnd(width)}  ${dim.padStart(11)}  ${size.padStart(9)}`)
  }
  console.log(
    `\n  ${rows.length} fichiers · ${kb(totalIn)} de sources → ${kb(totalOut)} servis ` +
      `(${Math.round((1 - totalOut / totalIn) * 100)} % de moins)\n`
  )

  const used = new Set([...PHOTOS.map((p) => p.from), ...GALLERY.map((g) => g.from), OG.from])
  const unused = (await readdir(SRC)).filter((f) => f.endsWith('.jpg')).length - used.size
  if (unused > 0) console.log(`  ${unused} photos du shooting restent inutilisées dans src/images-site/.\n`)
}

const kb = (bytes) => (bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} Mo` : `${Math.round(bytes / 1024)} Ko`)

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
