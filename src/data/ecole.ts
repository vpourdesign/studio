/* ─── Faits de l'école qui changent chaque année ───
   Tarifs et calendrier des sessions : on les modifie ici seulement, et toutes
   les pages (Tarifs, pages de cours, FAQ, Inscription, données structurées)
   suivent. Penser aussi à public/llms.txt. */

export const TARIFS = {
  30: '36',
  45: '46',
  60: '56',
} as const

export const TARIFS_NOTE = 'Les tarifs sont sujets à changement sans préavis.'

export const SESSIONS = [
  {
    name: 'Automne 2026',
    period: '31 août au 22 décembre 2026',
    weeks: '16 semaines',
    note: null as string | null,
  },
  {
    name: 'Hiver-printemps 2027',
    period: '9 janvier au 18 juin 2027',
    weeks: '22 semaines',
    note: 'Fermé du 1er au 7 mars (relâche), du 26 au 29 mars (Pâques) et le 24 mai (fête des Patriotes).',
  },
  {
    name: 'Été 2027',
    period: 'Dates à confirmer',
    weeks: '8 semaines',
    note: 'Cours à la carte disponibles durant la session d’été.',
  },
]

export const PAIEMENT_COURT =
  'Chèques, comptant, virement Interac et cartes de crédit acceptés. Possibilité de paiements mensuels par carte de crédit avec prélèvements préautorisés.'

export const PAIEMENT_FAQ =
  'Nous acceptons les paiements par chèque, argent comptant, virement Interac et carte de crédit. Les paiements mensuels par carte de crédit sont également offerts, grâce à un système de prélèvements préautorisés. Les chèques postdatés mensuels sont aussi acceptés. Le premier paiement doit être effectué lors de la première semaine de cours.'

export const FRAIS_FAQ =
  'Les frais d’inscription / frais administratifs sont de 18,50 $ par famille, par session (aucuns frais pour la session d’été). Le cartable pédagogique à 21,50 $ est requis à la première session seulement. Les photocopies et les documents pédagogiques que les professeurs ajoutent au cartable durant la session sont sans frais supplémentaires, puisqu’ils sont inclus dans les frais d’inscription.'

export const ANNULATION_FAQ =
  'Si le cours ne répond pas à vos attentes après le premier cours, l’inscription est remboursée, moins le coût du premier cours et les frais d’inscription. Par la suite, des frais d’annulation de 50 $ s’appliquent. Les deux dernières semaines de la session ne sont pas remboursables : la demande doit être faite avant ces deux dernières semaines pour donner droit à un remboursement.'

export const PROFS_FAQ =
  'Nos professeurs possèdent une formation universitaire ou collégiale en musique, ou une solide expérience professionnelle dans leur domaine. Plusieurs sont également des musiciens actifs sur la scène musicale québécoise, ce qui leur permet de transmettre une expérience concrète et actuelle à leurs élèves. Nous accordons une grande importance à leurs compétences musicales, à leur expérience et à leurs qualités pédagogiques.'
