# École le Studio

Nouveau site de l'École le Studio, école de musique à Sainte-Rose, Laval.
Refonte destinée à remplacer le site WordPress actuel sur `ecolelestudio.com`.

React 19 · Vite 8 · TypeScript · Tailwind CSS 4

## Démarrer

```bash
npm install
npm run dev        # serveur de développement
npm run build      # build de production dans dist/
npm run preview    # prévisualiser le build
npm run lint
```

## Structure

| Chemin | Contenu |
|---|---|
| `src/App.tsx` | Navigation, méga-menu, accueil et routage |
| `src/pages/` | Pages instrument, professeurs, locaux, tarifs, contact, FAQ, témoignages |
| `src/components/SEO.tsx` | Métadonnées et données structurées JSON-LD |
| `src/components/MyMusicStaffForm.tsx` | Embed du formulaire d'inscription MyMusicStaff |
| `src/assets/photos/` | Photos optimisées en WebP, générées par le script ci-dessous |
| `public/images/professeurs/` | Portraits des professeurs, servis tels quels |
| `DESIGN.md` | Système de design du projet, à lire avant toute modification visuelle |

## Photos

Les originaux du shooting ne sont pas versionnés. Ils vivent dans le dossier
Dropbox du projet, sous `src/images-site/`. Les WebP dérivés sont versionnés,
donc le site se construit sans eux.

Pour régénérer les images après un nouveau shooting, déposer les originaux dans
`src/images-site/`, ajuster les tables `PHOTOS` et `GALLERY` du script, puis :

```bash
node scripts/optimize-photos.mjs
```

## Formulaire d'inscription

La page `/inscription` intègre le widget MyMusicStaff de l'école, identifiant
`sch_DNcJN`, le même que sur le site actuel. Le widget monte un iframe qui
s'autoredimensionne et émet un message `sbFormSubmission` à la soumission,
utilisable pour le suivi de conversion.

## Avant la mise en ligne

Le site n'est pas prêt à remplacer la production. Points ouverts :

- Aucune balise de suivi installée. Ni GA4, ni Google Tag Manager, ni conversion
  Google Ads, ni pixel Meta.
- Rendu entièrement côté client. Les métadonnées sont injectées après le
  chargement du JavaScript, ce que les robots sociaux ne lisent pas. Un
  pré-rendu au build est nécessaire.
- Les pages instrument déclarent une URL canonique en `/cours/<slug>`, qui
  n'existe pas. À corriger.
- Le formulaire de la page « Nous joindre » n'envoie encore nulle part.
- Le site actuel compte 82 URL indexées, celui-ci en couvre 13. La table de
  redirections et le plan de bascule sont documentés hors dépôt.
