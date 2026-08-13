import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

import salleePianoQueue from '../assets/photos/galerie/salle-piano-queue.webp'
import salleBatterie from '../assets/photos/galerie/salle-batterie.webp'
import salleGuitare from '../assets/photos/galerie/salle-guitare.webp'
import salleLumineuse from '../assets/photos/galerie/salle-lumineuse.webp'
import accueil from '../assets/photos/galerie/accueil.webp'
import salleChant from '../assets/photos/galerie/salle-chant.webp'
import sallePianoVintage from '../assets/photos/galerie/salle-piano-vintage.webp'
import sallePianoDroit from '../assets/photos/galerie/salle-piano-droit.webp'
import corridorStudios from '../assets/photos/galerie/corridor-studios.webp'
import salleOrange from '../assets/photos/galerie/salle-orange.webp'
import deviseMurale from '../assets/photos/galerie/devise-murale.webp'
import salleViolon from '../assets/photos/galerie/salle-violon.webp'
import salleBatterieEnsemble from '../assets/photos/galerie/salle-batterie-ensemble.webp'
import murBiographies from '../assets/photos/galerie/mur-biographies.webp'
import vitrine from '../assets/photos/galerie/vitrine.webp'
import salleAttente from '../assets/photos/galerie/salle-attente.webp'
import enseigneEntree from '../assets/photos/galerie/enseigne-entree.webp'
import affichesCorridor from '../assets/photos/galerie/affiches-corridor.webp'

/* ─── Galerie ─────────────────────────────────────────────────────────────
   L'ordre compte : la maçonnerie remplit les colonnes de haut en bas, donc
   on alterne les hauteurs pour que les colonnes se terminent à peu près
   ensemble. `w` et `h` sont les vraies dimensions du fichier, pour réserver
   la place avant le chargement et éviter que la page saute.
   ─────────────────────────────────────────────────────────────────────── */
type Photo = { src: string; w: number; h: number; titre: string; alt: string }

const photos: Photo[] = [
  {
    src: salleePianoQueue, w: 800, h: 534,
    titre: 'Le local du piano à queue',
    alt: 'Local de piano à queue de l’École le Studio, école de musique à Sainte-Rose, Laval',
  },
  {
    src: salleBatterie, w: 800, h: 1067,
    titre: 'Batterie acoustique et électronique',
    alt: 'Local de batterie avec kit acoustique et kit électronique, cours de batterie à Laval',
  },
  {
    src: salleGuitare, w: 800, h: 534,
    titre: 'Le local de guitare',
    alt: 'Local de guitare avec guitares, basse et amplificateur, cours de guitare à Sainte-Rose, Laval',
  },
  {
    src: salleLumineuse, w: 800, h: 1067,
    titre: 'Un local baigné de lumière',
    alt: 'Local de piano lumineux avec grande fenêtre et plantes, École le Studio à Laval',
  },
  {
    src: accueil, w: 800, h: 550,
    titre: 'L’accueil',
    alt: 'Comptoir d’accueil de l’École le Studio, école de musique au 191B boulevard Sainte-Rose, Laval',
  },
  {
    src: salleChant, w: 800, h: 800,
    titre: 'Le local de chant',
    alt: 'Local de chant avec micro sur pied, clavier et système de son, cours de chant à Laval',
  },
  {
    src: sallePianoVintage, w: 800, h: 1067,
    titre: 'Piano d’époque et guitares au mur',
    alt: 'Local avec piano droit ancien et guitares accrochées au mur, École le Studio, Sainte-Rose',
  },
  {
    src: sallePianoDroit, w: 800, h: 534,
    titre: 'Piano droit et traitement acoustique',
    alt: 'Local de piano droit avec panneaux acoustiques, cours de piano à Laval',
  },
  {
    src: corridorStudios, w: 800, h: 1067,
    titre: 'Le corridor des locaux',
    alt: 'Corridor menant aux locaux de cours de l’École le Studio à Laval',
  },
  {
    src: salleOrange, w: 800, h: 534,
    titre: 'Le local orange',
    alt: 'Local de piano numérique aux murs orange avec pupitre et micro, École le Studio, Laval',
  },
  {
    src: deviseMurale, w: 800, h: 800,
    titre: 'On pratique, on s’amuse, on réussit',
    alt: 'Devise de l’École le Studio peinte sur un mur : on pratique, on s’amuse, on réussit',
  },
  {
    src: salleViolon, w: 800, h: 1067,
    titre: 'Violon et piano Yamaha',
    alt: 'Violon posé sur un piano Yamaha dans un local traité acoustiquement, cours de violon à Laval',
  },
  {
    src: salleBatterieEnsemble, w: 800, h: 534,
    titre: 'Deux kits, deux élèves',
    alt: 'Local de batterie vu d’ensemble avec deux kits face à face, École le Studio, Sainte-Rose',
  },
  {
    src: murBiographies, w: 800, h: 534,
    titre: 'Le mur des professeurs',
    alt: 'Mur des biographies encadrées des professeurs de l’École le Studio à Laval',
  },
  {
    src: vitrine, w: 800, h: 1067,
    titre: 'La vitrine, boulevard Sainte-Rose',
    alt: 'Vitrine de l’École le Studio sur le boulevard Sainte-Rose, dans le Vieux-Sainte-Rose à Laval',
  },
  {
    src: salleAttente, w: 800, h: 534,
    titre: 'La salle d’attente',
    alt: 'Salle d’attente de l’École le Studio, avec le mur des professeurs, Sainte-Rose, Laval',
  },
  {
    src: enseigneEntree, w: 800, h: 534,
    titre: 'L’enseigne à l’entrée',
    alt: 'Enseigne murale Le Studio, école de musique, à l’entrée des locaux à Laval',
  },
  {
    src: affichesCorridor, w: 800, h: 1067,
    titre: 'Les affiches du corridor',
    alt: 'Affiches d’artistes encadrées dans le corridor de l’École le Studio à Sainte-Rose',
  },
]

/* ─── Repères pratiques ─── */
const reperes = [
  { valeur: '191B', label: 'boulevard Sainte-Rose, Laval' },
  { valeur: 'Gratuit', label: 'stationnement sur place' },
  { valeur: '9 h à 21 h', label: 'du lundi au vendredi' },
  { valeur: '9 h à 17 h', label: 'le samedi' },
]

export default function NosLocaux() {
  return (
    <>
      <SEO
        title="Nos locaux | École le Studio — École de musique à Sainte-Rose, Laval"
        description="Visitez les locaux de l'École le Studio à Sainte-Rose, Laval : locaux de piano, guitare, chant, batterie et violon traités acoustiquement, accueil, salle d'attente et stationnement gratuit."
        path="/nos-locaux"
      />

      <main className="bg-cream pt-28 pb-20">
        {/* ─── En-tête ─── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
          <Breadcrumbs items={[{ name: 'Nos locaux', url: '/nos-locaux' }]} />

          <h1
            className="font-display font-extrabold text-marine leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Nos locaux à Sainte-Rose
          </h1>
          <p
            className="mt-4 text-slate max-w-2xl leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}
          >
            Un local par instrument, traité acoustiquement, au coeur du Vieux-Sainte-Rose à Laval.
          </p>

          <div className="mt-8 max-w-3xl space-y-4 text-slate leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>
            <p>
              L'<strong className="text-marine">École le Studio</strong> occupe un étage complet au 191B boulevard
              Sainte-Rose, à Laval. Chaque local est dédié à son instrument et habillé de panneaux acoustiques :
              pianos droits et piano à queue, deux kits de batterie, guitares et amplificateurs, micros et système
              de son pour le chant. Les élèves y trouvent le matériel dont ils ont besoin, sans rien apporter.
            </p>
            <p>
              À l'entrée, l'accueil et la salle d'attente permettent aux parents de patienter pendant le cours.
              Le mur des professeurs y présente le parcours de chacun de nos enseignants. Le stationnement est
              gratuit sur place, et l'école est à quelques minutes de Fabreville, Auteuil, Vimont et Rosemère.
            </p>
          </div>

          {/* Repères */}
          <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 max-w-4xl">
            {reperes.map((r) => (
              <div key={r.label}>
                <dt className="font-display font-extrabold text-marine text-xl md:text-2xl leading-none tabular-nums">
                  {r.valeur}
                </dt>
                <dd className="mt-1.5 text-slate text-sm leading-snug">{r.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ─── Galerie en maçonnerie ─── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 mt-12 md:mt-16">
          <h2 className="sr-only">Galerie des locaux de l'École le Studio</h2>

          <div className="columns-1 sm:columns-2 xl:columns-3 gap-4 md:gap-5">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="group relative mb-4 md:mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-lavender"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.w}
                  height={photo.h}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                {/* Sur mobile, pas de survol : la légende reste visible. */}
                <div className="absolute inset-0 bg-gradient-to-t from-marine/80 via-marine/10 to-transparent transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 transition-all duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  <span
                    className="font-display font-bold text-white leading-snug tracking-[-0.01em]"
                    style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
                  >
                    {photo.titre}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 mt-14 md:mt-20">
          <div className="bg-marine rounded-3xl px-6 md:px-12 py-12 md:py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-lavender/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10">
              <h2
                className="font-display font-extrabold text-white tracking-[-0.02em] leading-[1.1]"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                Venez les voir en personne
              </h2>
              <p className="mt-4 text-white/65 max-w-[48ch] mx-auto leading-relaxed">
                On vous fait visiter avec plaisir avant l'inscription. Appelez-nous pour choisir un moment.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/inscription"
                  className="inline-flex items-center gap-2 bg-white text-marine font-display font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:bg-yellow hover:-translate-y-px"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  S'inscrire
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <a
                  href="tel:5146777713"
                  className="inline-flex items-center gap-2 border border-white/25 text-white font-display font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-px"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  514-677-7713
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
