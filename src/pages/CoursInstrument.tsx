import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO, { CourseSchema, FAQSchema } from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

import imgPiano from '../assets/piano.png'
import imgGuitare from '../assets/guitare.png'
import imgChant from '../assets/chant.png'
import imgBatterie from '../assets/batterie.png'
import imgViolon from '../assets/violon.png'

/* ─── Types ─── */

interface InstrumentData {
  slug: string
  name: string
  color: string
  colorLight: string
  image: string
  metaTitle: string
  metaDescription: string
  h1: string
  heroSubtitle: string
  longDescription: string[]
  levels: { name: string; description: string }[]
  styles: string[]
  faq: { question: string; answer: string }[]
  benefits: { title: string; description: string }[]
}

/* ─── Instrument Data ─── */

const INSTRUMENTS: Record<string, InstrumentData> = {
  piano: {
    slug: 'piano',
    name: 'Piano',
    color: '#525266',
    colorLight: '#E8E8ED',
    image: imgPiano,
    metaTitle: 'Cours de piano à Laval | École le Studio — Sainte-Rose',
    metaDescription:
      'Cours de piano à Laval pour enfants et adultes, débutants et avancés. Apprenez le piano avec nos professeurs qualifiés à Sainte-Rose. Classique, jazz, pop, blues. Dès 34$/cours.',
    h1: 'Cours de piano à Laval',
    heroSubtitle:
      'Apprenez le piano dans un environnement chaleureux et personnalisé, avec des professeurs passionnés qui s\u2019adaptent à votre rythme et vos objectifs musicaux.',
    longDescription: [
      'Les cours de piano à Laval de l\u2019École le Studio sont conçus pour accompagner chaque élève dans son parcours musical, qu\u2019il s\u2019agisse d\u2019un enfant qui découvre ses premières notes ou d\u2019un adulte qui souhaite apprendre le piano à Laval pour réaliser un rêve de longue date. Depuis plus de 20 ans, notre école située au coeur de Sainte-Rose offre un enseignement du piano de qualité supérieure, dispensé par des professeurs diplômés et passionnés qui maîtrisent autant le répertoire classique que les styles contemporains.',
      'Nos cours de piano pour enfant à Laval débutent dès l\u2019âge de 4 ans, avec une approche ludique et progressive qui développe la coordination, la lecture musicale et la créativité. Pour les cours de piano débutant à Laval, nous utilisons des méthodes éprouvées qui permettent de jouer rapidement des pièces motivantes tout en posant des bases techniques solides. Les élèves intermédiaires et avancés approfondissent le répertoire, l\u2019interprétation et la théorie musicale avec un suivi personnalisé.',
      'Ce qui distingue l\u2019École le Studio des autres écoles de musique de la région, c\u2019est notre approche véritablement individualisée. Chaque professeur de piano adapte son enseignement aux goûts, au rythme d\u2019apprentissage et aux objectifs de l\u2019élève. Que vous souhaitiez préparer un examen du Conservatoire, jouer vos chansons préférées ou simplement apprendre le piano à Laval pour le plaisir, nous avons le professeur qu\u2019il vous faut parmi nos 25+ enseignants qualifiés. Nos 425+ élèves actifs et notre note de 4,9 étoiles témoignent de la qualité de notre enseignement à Sainte-Rose et dans les quartiers environnants de Laval.',
    ],
    levels: [
      {
        name: 'Débutant',
        description:
          'Découvrez les bases du piano : posture, lecture de notes, coordination des deux mains. Idéal pour les enfants dès 4 ans et les adultes qui n\u2019ont jamais touché un clavier. Vous jouerez vos premières mélodies dès les premières semaines.',
      },
      {
        name: 'Intermédiaire',
        description:
          'Approfondissez votre technique pianistique : gammes, accords, pédale de sustain, interprétation dynamique. Explorez un répertoire varié allant du classique au jazz en passant par la musique populaire actuelle.',
      },
      {
        name: 'Avancé',
        description:
          'Perfectionnez votre jeu avec des oeuvres exigeantes, la préparation aux examens du Conservatoire, l\u2019improvisation jazz et l\u2019analyse harmonique avancée. Un accompagnement sur mesure pour les pianistes sérieux.',
      },
    ],
    styles: ['Classique', 'Jazz', 'Pop', 'Blues', 'Accompagnement', 'Improvisation'],
    faq: [
      {
        question: 'À quel âge peut-on commencer les cours de piano à Laval?',
        answer:
          'Les cours de piano pour enfant à Laval débutent dès l\u2019âge de 4 ans à l\u2019École le Studio. À cet âge, nous utilisons une approche ludique qui développe l\u2019oreille musicale et la coordination avant d\u2019introduire progressivement la lecture de notes. Il n\u2019y a pas de limite d\u2019âge supérieure — de nombreux adultes débutants s\u2019inscrivent chaque année.',
      },
      {
        question: 'Faut-il avoir un piano à la maison pour suivre des cours?',
        answer:
          'Oui, nous recommandons d\u2019avoir accès à un instrument pour pratiquer entre les cours. Un piano numérique à touches lestées (88 touches) est un excellent choix pour les débutants. Nos professeurs peuvent vous conseiller sur l\u2019achat d\u2019un instrument adapté à votre budget et votre niveau.',
      },
      {
        question: 'Quel style de piano enseignez-vous à l\u2019École le Studio?',
        answer:
          'Nos cours de piano à Laval couvrent le classique, le jazz, le pop, le blues, l\u2019accompagnement vocal et l\u2019improvisation. Chaque élève choisit le style qui le motive le plus, et nos professeurs adaptent le répertoire en conséquence. Plusieurs élèves explorent plusieurs styles au fil de leur progression.',
      },
      {
        question: 'Combien de temps faut-il pour apprendre le piano?',
        answer:
          'Avec des cours de piano débutant à Laval réguliers et une pratique quotidienne de 15 à 30 minutes, la plupart des élèves jouent leurs premières pièces complètes en quelques mois. Après un an de cours, un élève assidu maîtrise généralement les bases techniques et peut jouer un répertoire varié. Le piano est un instrument qui offre des défis stimulants à vie.',
      },
    ],
    benefits: [
      {
        title: 'Développe la coordination et la mémoire',
        description:
          'Jouer du piano sollicite les deux hémisphères du cerveau simultanément, améliorant la coordination motrice, la mémoire de travail et la concentration — des bienfaits prouvés chez les enfants comme les adultes.',
      },
      {
        title: 'Un instrument polyvalent',
        description:
          'Le piano permet de jouer en solo, d\u2019accompagner des chanteurs, de composer et d\u2019explorer tous les genres musicaux. C\u2019est la base idéale pour comprendre la théorie musicale et l\u2019harmonie.',
      },
      {
        title: 'Accessible à tout âge',
        description:
          'Que vous ayez 4 ou 74 ans, le piano s\u2019adapte à votre rythme. Nos cours de piano pour enfant à Laval et nos cours pour adultes sont conçus pour que chacun progresse à sa vitesse et avec plaisir.',
      },
      {
        title: 'Des résultats rapides et motivants',
        description:
          'Contrairement à certains instruments, le piano offre une gratification immédiate : dès les premiers cours, vous produisez des sons harmonieux et jouez de vraies mélodies, ce qui maintient la motivation.',
      },
    ],
  },

  guitare: {
    slug: 'guitare',
    name: 'Guitare',
    color: '#4D5C60',
    colorLight: '#D1E0DE',
    image: imgGuitare,
    metaTitle: 'Cours de guitare à Laval | École le Studio — Sainte-Rose',
    metaDescription:
      'Cours de guitare à Laval pour tous les niveaux. Guitare acoustique, électrique, classique. Apprenez la guitare avec nos professeurs qualifiés à Sainte-Rose. Dès 34$/cours.',
    h1: 'Cours de guitare à Laval',
    heroSubtitle:
      'Acoustique, électrique ou classique — apprenez la guitare avec des professeurs passionnés qui vous guident vers le style qui vous fait vibrer.',
    longDescription: [
      'Les cours de guitare à Laval de l\u2019École le Studio accueillent les musiciens de tous niveaux dans un environnement stimulant et convivial à Sainte-Rose. Que vous rêviez de jouer vos accords préférés autour d\u2019un feu de camp ou de maîtriser des solos de rock enflammés, notre équipe de professeurs qualifiés vous accompagne pas à pas. Depuis plus de 20 ans, l\u2019école fondée par Benoit Girard — lui-même guitariste professionnel — est devenue la référence pour apprendre la guitare à Laval.',
      'Un des choix les plus fréquents de nos nouveaux élèves concerne la guitare acoustique vs électrique. Nos professeurs prennent le temps d\u2019expliquer les différences et vous aident à choisir l\u2019instrument qui correspond le mieux à vos goûts musicaux et vos objectifs. Beaucoup d\u2019élèves commencent avec la guitare acoustique pour développer la force des doigts et les bases d\u2019accords, avant d\u2019explorer la guitare électrique et ses effets. Nous offrons aussi des cours de guitare classique pour ceux qui souhaitent explorer le répertoire du nylon.',
      'Ce qui rend nos cours de guitare à Laval uniques, c\u2019est notre approche centrée sur les goûts de l\u2019élève. Dès le premier cours, votre professeur identifie les chansons et les styles qui vous motivent pour construire un parcours d\u2019apprentissage personnalisé. Nos 25+ professeurs couvrent le rock, le blues, le folk, le jazz, le fingerpicking, le metal et la musique populaire québécoise. Avec 425+ élèves actifs et une communauté musicale dynamique à Sainte-Rose, l\u2019École le Studio est l\u2019endroit idéal pour apprendre la guitare à Laval, que vous ayez 6 ou 66 ans.',
    ],
    levels: [
      {
        name: 'Débutant',
        description:
          'Apprenez les accords de base, le strumming, la lecture de tablatures et la posture correcte. En quelques semaines, vous jouerez vos premières chansons complètes. Parfait pour les enfants et adultes sans aucune expérience musicale.',
      },
      {
        name: 'Intermédiaire',
        description:
          'Développez votre technique avec les barrés, les arpèges, les gammes pentatoniques et les riffs emblématiques. Explorez le fingerpicking, les effets de la guitare électrique et l\u2019improvisation blues.',
      },
      {
        name: 'Avancé',
        description:
          'Maîtrisez les techniques avancées : sweep picking, tapping, théorie modale, composition et arrangement. Préparez-vous aux auditions, examens ou performances de scène avec un accompagnement expert.',
      },
    ],
    styles: ['Rock', 'Blues', 'Folk', 'Jazz', 'Classique', 'Fingerpicking', 'Metal', 'Pop'],
    faq: [
      {
        question: 'Guitare acoustique ou électrique : par quoi commencer à Laval?',
        answer:
          'Le choix entre guitare acoustique vs électrique dépend de vos goûts musicaux. La guitare acoustique est idéale pour le folk, le pop et l\u2019accompagnement, tandis que l\u2019électrique convient au rock, blues et metal. Nos professeurs de guitare à Laval vous conseillent gratuitement lors du premier cours pour vous aider à choisir.',
      },
      {
        question: 'À quel âge peut-on commencer les cours de guitare?',
        answer:
          'Les cours de guitare à Laval sont offerts dès l\u2019âge de 6 ans à l\u2019École le Studio. Pour les plus jeunes, nous utilisons des guitares 1/2 ou 3/4 adaptées à leur taille. Des guitares classiques à cordes nylon sont recommandées pour les enfants, car elles sont plus douces pour les doigts.',
      },
      {
        question: 'Faut-il apporter sa propre guitare aux cours?',
        answer:
          'Oui, nous recommandons d\u2019apporter votre instrument à chaque cours pour un suivi optimal. Si vous n\u2019avez pas encore de guitare, nos professeurs peuvent vous guider dans le choix d\u2019un instrument adapté à votre budget avant ou lors de votre premier cours.',
      },
      {
        question: 'Combien de temps pour jouer mes chansons préférées?',
        answer:
          'Avec nos cours de guitare à Laval et une pratique régulière de 20 minutes par jour, la plupart des débutants jouent leurs premières chansons complètes en 2 à 3 mois. La clé est la régularité : un peu chaque jour vaut mieux qu\u2019une longue session par semaine.',
      },
    ],
    benefits: [
      {
        title: 'L\u2019instrument social par excellence',
        description:
          'La guitare se transporte partout et s\u2019invite dans toutes les occasions. Autour d\u2019un feu, en voyage, entre amis — c\u2019est l\u2019instrument idéal pour partager la musique et créer des moments inoubliables.',
      },
      {
        title: 'Une variété de styles infinie',
        description:
          'Rock, blues, folk, jazz, classique, flamenco, metal — la guitare ouvre les portes de pratiquement tous les genres musicaux. Votre professeur adapte le parcours à vos goûts pour que chaque cours soit motivant.',
      },
      {
        title: 'Renforce la confiance en soi',
        description:
          'Maîtriser un morceau à la guitare procure un sentiment d\u2019accomplissement unique. Nos spectacles et récitals à Sainte-Rose permettent aux élèves de se produire sur scène et de gagner en assurance.',
      },
      {
        title: 'Accessible et abordable',
        description:
          'Contrairement à beaucoup d\u2019instruments, la guitare est relativement abordable à l\u2019achat. On trouve d\u2019excellentes guitares pour débutants à partir de 150 à 250$, ce qui en fait un choix accessible pour toute la famille.',
      },
    ],
  },

  chant: {
    slug: 'chant',
    name: 'Chant',
    color: '#8A8A6E',
    colorLight: '#EEF4CE',
    image: imgChant,
    metaTitle: 'Cours de chant à Laval | École le Studio — Sainte-Rose',
    metaDescription:
      'Cours de chant et technique vocale à Laval pour tous les niveaux. Développez votre voix avec nos professeurs qualifiés à Sainte-Rose. Pop, jazz, classique, comédie musicale. Dès 34$/cours.',
    h1: 'Cours de chant à Laval',
    heroSubtitle:
      'Libérez votre voix et développez votre technique vocale avec des professeurs qui vous aident à trouver votre son unique et votre confiance artistique.',
    longDescription: [
      'Les cours de chant à Laval de l\u2019École le Studio offrent un espace bienveillant et professionnel pour développer votre voix, que vous soyez un débutant timide ou un chanteur expérimenté cherchant à perfectionner sa technique vocale à Laval. Depuis plus de 20 ans, notre école à Sainte-Rose forme des chanteurs de tous âges et de tous niveaux, avec une approche qui respecte l\u2019unicité de chaque voix et les aspirations musicales de chaque élève.',
      'Nos leçons de chant à Laval sont bien plus qu\u2019un simple cours de musique : c\u2019est un parcours de découverte de soi à travers la voix. Nos professeurs de technique vocale à Laval enseignent la respiration diaphragmatique, le placement vocal, l\u2019extension de la tessiture, la justesse, la projection et l\u2019interprétation émotionnelle. Chaque leçon de chant à Laval est adaptée à votre niveau et à vos objectifs : certains élèves souhaitent chanter pour le plaisir personnel, d\u2019autres préparent des auditions ou des prestations publiques.',
      'L\u2019École le Studio se distingue par la diversité des styles enseignés dans nos cours de chant à Laval. Pop, jazz, classique, comédie musicale, soul, R&B — nos professeurs maîtrisent les techniques spécifiques à chaque genre. La technique vocale à Laval que nous enseignons s\u2019appuie sur des principes physiologiques solides pour protéger votre voix tout en l\u2019aidant à s\u2019épanouir. Avec 25+ professeurs et 425+ élèves actifs, notre communauté musicale à Sainte-Rose est l\u2019endroit idéal pour libérer votre potentiel vocal dans la grande région de Laval.',
    ],
    levels: [
      {
        name: 'Débutant',
        description:
          'Découvrez les bases de la technique vocale : respiration abdominale, justesse, placement de la voix et confiance en soi. Aucune expérience préalable requise — juste l\u2019envie de chanter.',
      },
      {
        name: 'Intermédiaire',
        description:
          'Approfondissez votre technique : extension de la tessiture, registres vocaux (poitrine, mixte, tête), vibrato contrôlé, interprétation et présence scénique. Travaillez un répertoire diversifié.',
      },
      {
        name: 'Avancé',
        description:
          'Perfectionnez votre art vocal : techniques de belting, riffs et runs, improvisation, harmonies, préparation aux auditions et enregistrement studio. Un accompagnement de niveau professionnel.',
      },
    ],
    styles: ['Pop', 'Jazz', 'Classique', 'Comédie musicale', 'Soul / R&B', 'Rock'],
    faq: [
      {
        question: 'Est-ce que tout le monde peut apprendre à chanter?',
        answer:
          'Absolument! La voix est un instrument que tout le monde possède. Nos cours de chant à Laval sont conçus pour développer le potentiel vocal de chaque élève, quel que soit son point de départ. La justesse, le timbre et la puissance s\u2019améliorent avec une technique vocale appropriée et une pratique régulière.',
      },
      {
        question: 'À quel âge peut-on commencer les cours de chant à Laval?',
        answer:
          'Nos leçons de chant à Laval sont offertes dès l\u2019âge de 7 ans. À cet âge, la voix est suffisamment développée pour travailler la justesse et la technique de base. Pour les adultes, il n\u2019est jamais trop tard — plusieurs de nos élèves de technique vocale à Laval ont commencé après 50 ans.',
      },
      {
        question: 'Quelle est la différence entre les cours de chant et de technique vocale?',
        answer:
          'À l\u2019École le Studio, nos cours de chant à Laval intègrent toujours la technique vocale. Chaque leçon combine des exercices techniques (respiration, vocalises, placement) avec le travail de chansons dans le style de votre choix. La technique vocale à Laval est le fondement qui permet de chanter en toute liberté et sans fatigue.',
      },
      {
        question: 'Faut-il chanter devant d\u2019autres élèves?',
        answer:
          'Non, nos cours de chant à Laval sont des cours privés individuels. Vous chantez uniquement devant votre professeur dans un espace intime et sécurisant. Les spectacles et récitals sont facultatifs mais fortement encouragés pour développer la confiance scénique.',
      },
    ],
    benefits: [
      {
        title: 'Votre instrument, c\u2019est vous',
        description:
          'Le chant est le seul instrument que vous portez en vous. Pas d\u2019achat d\u2019équipement nécessaire — juste votre voix, votre motivation et un bon professeur pour vous guider dans votre progression.',
      },
      {
        title: 'Bienfaits sur la santé et le bien-être',
        description:
          'Chanter libère des endorphines, réduit le stress et améliore la respiration. Les cours de chant à Laval sont souvent décrits par nos élèves comme une véritable thérapie musicale hebdomadaire.',
      },
      {
        title: 'Gagnez en confiance en soi',
        description:
          'Oser chanter devant quelqu\u2019un, puis sur scène, transforme profondément la confiance personnelle. Nos professeurs créent un environnement bienveillant où chaque voix est valorisée et encouragée.',
      },
      {
        title: 'Explorez tous les genres musicaux',
        description:
          'Pop, jazz, classique, comédie musicale, soul — nos leçons de chant à Laval vous permettent d\u2019explorer les styles qui vous passionnent et de découvrir des genres que vous n\u2019auriez jamais imaginé chanter.',
      },
    ],
  },

  batterie: {
    slug: 'batterie',
    name: 'Batterie',
    color: '#383838',
    colorLight: '#E0E0E0',
    image: imgBatterie,
    metaTitle: 'Cours de batterie à Laval | École le Studio — Sainte-Rose',
    metaDescription:
      'Cours de batterie à Laval pour enfants et adultes. Apprenez la batterie avec nos professeurs qualifiés à Sainte-Rose. Rock, jazz, funk, latin. Dès 34$/cours.',
    h1: 'Cours de batterie à Laval',
    heroSubtitle:
      'Développez votre sens du rythme et votre coordination avec des professeurs passionnés qui vous initient à la batterie dans une ambiance dynamique et motivante.',
    longDescription: [
      'Les cours de batterie à Laval de l\u2019École le Studio sont conçus pour les passionnés de rythme de tous âges et de tous niveaux. Que vous souhaitiez apprendre la batterie pour la première fois ou perfectionner vos compétences de batteur expérimenté, notre école à Sainte-Rose offre un enseignement de qualité depuis plus de 20 ans. Nos leçons de batterie à Laval combinent la technique fondamentale avec le plaisir de jouer sur des morceaux réels dès le premier cours.',
      'Apprendre la batterie développe des compétences uniques que peu d\u2019instruments offrent : la coordination des quatre membres, le sens du tempo, l\u2019écoute musicale globale et la capacité à maintenir l\u2019énergie d\u2019un groupe. Nos leçons de batterie à Laval sont dispensées par des batteurs professionnels qui jouent activement sur la scène musicale québécoise. Ils transmettent non seulement la technique, mais aussi la musicalité, le groove et l\u2019art de servir la chanson — des compétences essentielles pour tout batteur.',
      'L\u2019École le Studio dispose de batteries acoustiques et électroniques dans ses studios à Sainte-Rose, permettant un enseignement varié et adapté. Nos cours de batterie à Laval couvrent le rock, le jazz, le funk, la musique latine, le hip-hop et les percussions world. Nous accueillons les enfants dès 5 ans avec des configurations adaptées à leur taille. Avec 25+ professeurs et une communauté de 425+ élèves actifs, notre école est le choix de confiance pour apprendre la batterie dans la grande région de Laval et les environs de Sainte-Rose.',
    ],
    levels: [
      {
        name: 'Débutant',
        description:
          'Découvrez les bases de la batterie : tenue des baguettes, premiers rythmes rock et pop, coordination mains-pieds, lecture rythmique simple. Vous jouerez sur des chansons dès les premières semaines.',
      },
      {
        name: 'Intermédiaire',
        description:
          'Développez votre vocabulaire rythmique : fills créatifs, syncopes, rythmes composés, techniques de grosse caisse avancées, jeu au balai. Explorez le jazz, le funk et les styles latins.',
      },
      {
        name: 'Avancé',
        description:
          'Maîtrisez les techniques avancées : double pédale, rudiments complexes, polyrythmies, improvisation, lecture de partitions avancée. Préparez-vous pour la scène et les auditions.',
      },
    ],
    styles: ['Rock', 'Jazz', 'Funk', 'Latin', 'Hip-hop', 'Pop', 'Metal'],
    faq: [
      {
        question: 'Faut-il avoir une batterie à la maison pour suivre des cours?',
        answer:
          'C\u2019est fortement recommandé pour progresser entre les leçons de batterie à Laval. Une batterie électronique est un excellent compromis pour pratiquer sans déranger les voisins. Nos professeurs peuvent vous conseiller sur les modèles adaptés à votre budget. Un pad de pratique est le strict minimum pour travailler la technique.',
      },
      {
        question: 'À quel âge peut-on commencer les cours de batterie?',
        answer:
          'Les cours de batterie à Laval sont offerts dès l\u2019âge de 5 ans à l\u2019École le Studio. Pour les jeunes enfants, nous utilisons des configurations de batterie adaptées à leur taille et une approche ludique centrée sur le plaisir du rythme. La batterie est souvent l\u2019instrument préféré des enfants pour son côté physique et énergique.',
      },
      {
        question: 'Est-ce que la batterie est un instrument bruyant?',
        answer:
          'La batterie acoustique est effectivement un instrument sonore. C\u2019est pourquoi nous recommandons souvent une batterie électronique pour la pratique à la maison — on peut jouer avec des écouteurs à tout moment. En cours à l\u2019école, nos studios à Sainte-Rose sont équipés pour offrir un environnement de jeu optimal.',
      },
      {
        question: 'Les cours de batterie aident-ils la concentration des enfants?',
        answer:
          'Absolument. Apprendre la batterie exige une coordination des quatre membres et une écoute attentive, ce qui développe significativement la concentration, la discipline et la gestion du temps. Plusieurs études confirment les bienfaits cognitifs de l\u2019apprentissage de la batterie chez les enfants et les adolescents.',
      },
    ],
    benefits: [
      {
        title: 'Développe la coordination exceptionnelle',
        description:
          'La batterie est l\u2019un des rares instruments qui sollicite les quatre membres de façon indépendante. Cette coordination unique se transfère dans toutes les sphères de la vie quotidienne.',
      },
      {
        title: 'Libération physique et émotionnelle',
        description:
          'Jouer de la batterie est une activité physique complète qui libère le stress et les tensions. Beaucoup de nos élèves de cours de batterie à Laval décrivent leur leçon comme le meilleur moment de leur semaine.',
      },
      {
        title: 'Le coeur de tout groupe musical',
        description:
          'Le batteur est le pilier rythmique de tout ensemble musical. Apprendre la batterie, c\u2019est développer le sens du tempo, l\u2019écoute et la capacité à guider musicalement un groupe — des compétences recherchées.',
      },
      {
        title: 'Résultats rapides et gratifiants',
        description:
          'Dès les premiers cours de batterie à Laval, vous jouez des rythmes reconnaissables sur des chansons populaires. La progression est visible et motivante, ce qui est particulièrement stimulant pour les enfants.',
      },
    ],
  },

  violon: {
    slug: 'violon',
    name: 'Violon',
    color: '#6B7F82',
    colorLight: '#D1E0DE',
    image: imgViolon,
    metaTitle: 'Cours de violon à Laval | École le Studio — Sainte-Rose',
    metaDescription:
      'Cours de violon à Laval pour enfants et adultes. Violon classique et contemporain avec nos professeurs qualifiés à Sainte-Rose. Méthode Suzuki disponible. Dès 34$/cours.',
    h1: 'Cours de violon à Laval',
    heroSubtitle:
      'Découvrez la beauté et l\u2019expressivité du violon avec des professeurs dévoués qui vous accompagnent dans la maîtrise de cet instrument noble et exigeant.',
    longDescription: [
      'Les cours de violon à Laval de l\u2019École le Studio offrent un enseignement rigoureux et passionnant de cet instrument d\u2019une richesse expressive incomparable. Depuis plus de 20 ans, notre école à Sainte-Rose forme des violonistes de tous âges, en commençant dès 4 ans avec la méthode Suzuki et en accompagnant les adultes débutants ou avancés dans leur parcours musical. Nos professeurs de violon classique à Laval sont des musiciens diplômés qui partagent leur amour de l\u2019instrument avec chaque élève.',
      'Apprendre le violon est un engagement qui développe la discipline, la patience et la sensibilité musicale comme aucun autre instrument. Nos cours de violon à Laval couvrent la posture, la tenue de l\u2019archet, l\u2019intonation, la lecture musicale, le vibrato et les techniques d\u2019archet avancées. Le violon classique à Laval reste notre spécialité, mais nous enseignons aussi le violon fiddle, le violon jazz et le répertoire de musique de chambre pour les élèves qui souhaitent explorer d\u2019autres horizons.',
      'Ce qui rend nos cours de violon à Laval exceptionnels, c\u2019est l\u2019attention portée à la qualité du son dès les premières leçons. Nos professeurs guident chaque élève dans la production d\u2019un son beau et expressif, plutôt que de simplement jouer les bonnes notes. Cette philosophie d\u2019enseignement, combinée à notre approche personnalisée et nos 25+ professeurs qualifiés, fait de l\u2019École le Studio la destination de choix pour apprendre le violon dans la grande région de Laval et les quartiers avoisinants de Sainte-Rose, incluant Fabreville, Auteuil et Rosemère.',
    ],
    levels: [
      {
        name: 'Débutant',
        description:
          'Apprenez les fondamentaux : posture, tenue de l\u2019archet, production du son, premières notes et gammes. La méthode Suzuki est offerte pour les jeunes enfants. Un départ solide pour un parcours musical enrichissant.',
      },
      {
        name: 'Intermédiaire',
        description:
          'Développez votre technique : positions supérieures, vibrato, détaché rapide, legato expressif, doubles cordes. Explorez un répertoire classique et contemporain exigeant avec un suivi attentif.',
      },
      {
        name: 'Avancé',
        description:
          'Perfectionnez votre art : concertos, sonates, musique de chambre, techniques d\u2019archet avancées (spiccato, ricochet, col legno). Préparation aux examens du Conservatoire et aux auditions.',
      },
    ],
    styles: ['Classique', 'Fiddle / Traditionnel', 'Jazz', 'Musique de chambre', 'Contemporain'],
    faq: [
      {
        question: 'À quel âge peut-on commencer les cours de violon à Laval?',
        answer:
          'Les cours de violon à Laval sont offerts dès l\u2019âge de 4 ans à l\u2019École le Studio, grâce à la méthode Suzuki qui permet aux très jeunes enfants d\u2019apprendre le violon de façon ludique et progressive. Des violons en tailles 1/16, 1/8, 1/4 et 1/2 sont disponibles pour s\u2019adapter à la croissance de l\u2019enfant.',
      },
      {
        question: 'Le violon est-il un instrument difficile à apprendre?',
        answer:
          'Apprendre le violon demande patience et régularité, car il n\u2019y a pas de frettes pour guider l\u2019intonation. Cependant, avec des cours de violon à Laval réguliers et une pratique quotidienne, les progrès sont constants et gratifiants. Nos professeurs rendent l\u2019apprentissage agréable en adaptant le rythme à chaque élève.',
      },
      {
        question: 'Quelle taille de violon choisir pour mon enfant?',
        answer:
          'La taille du violon dépend de la longueur du bras de l\u2019enfant. Nos professeurs de violon classique à Laval mesurent l\u2019enfant lors du premier cours et recommandent la taille appropriée (1/16 à 4/4). Il est important de ne pas utiliser un violon trop grand, car cela peut nuire à la posture et à la progression.',
      },
      {
        question: 'Offrez-vous la préparation aux examens du Conservatoire?',
        answer:
          'Oui, nos cours de violon à Laval incluent la préparation aux examens du Conservatoire de musique pour les élèves qui le souhaitent. Nos professeurs connaissent les exigences de chaque niveau et préparent les élèves en conséquence : répertoire imposé, gammes, déchiffrage et théorie musicale.',
      },
    ],
    benefits: [
      {
        title: 'L\u2019instrument le plus expressif',
        description:
          'Le violon est souvent décrit comme l\u2019instrument le plus proche de la voix humaine. Sa capacité à exprimer toute la gamme des émotions en fait un instrument d\u2019une beauté et d\u2019une richesse incomparables.',
      },
      {
        title: 'Discipline et rigueur transférables',
        description:
          'Apprendre le violon développe la patience, la persévérance et la rigueur — des qualités qui se transfèrent dans les études, le travail et tous les aspects de la vie. Un investissement dans le caractère autant que dans la musique.',
      },
      {
        title: 'Un instrument pour la vie',
        description:
          'Le violon s\u2019apprend à tout âge et se joue toute la vie. Contrairement à certains instruments physiquement exigeants, le violon permet de jouer avec raffinement et plaisir pendant des décennies.',
      },
      {
        title: 'Opportunités d\u2019ensemble uniques',
        description:
          'Le violon ouvre la porte à la musique de chambre, l\u2019orchestre et les ensembles de tous types. C\u2019est un instrument éminemment social qui permet de partager la musique avec d\u2019autres musiciens dans des contextes variés.',
      },
    ],
  },
}

/* ─── FAQ Accordion Item ─── */

function FaqItem({ item }: { item: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-marine/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className="font-display font-bold text-marine pr-4"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
        >
          {item.question}
        </span>
        <span
          className="shrink-0 w-8 h-8 rounded-full bg-marine/5 flex items-center justify-center transition-transform duration-300 group-hover:bg-violet/10"
          style={{
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-marine"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '300px' : '0',
          opacity: open ? 1 : 0,
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <p
          className="pb-5 text-marine/70 leading-relaxed max-w-prose"
          style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  )
}

/* ─── Pricing Plans ─── */

const plans = [
  { duration: '30 minutes', price: '34', label: 'Idéal pour les jeunes débutants', badge: null, highlighted: false },
  { duration: '45 minutes', price: '44', label: 'Le plus populaire', badge: 'Recommandé', highlighted: true },
  { duration: '60 minutes', price: '54', label: 'Pour les passionnés et avancés', badge: null, highlighted: false },
]

/* ─── Page Component ─── */

export default function CoursInstrument({ slug }: { slug: string }) {
  const data = INSTRUMENTS[slug]

  if (!data) {
    return (
      <div className="bg-cream min-h-screen pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <h1 className="font-display font-extrabold text-marine text-3xl mb-4">Instrument non trouvé</h1>
          <p className="text-marine/60 mb-8">L'instrument demandé n'existe pas dans notre catalogue.</p>
          <Link
            to="/cours"
            className="inline-flex items-center gap-2 bg-violet text-white font-display font-bold text-sm px-6 py-3.5 rounded-xl"
          >
            Voir tous nos cours
          </Link>
        </div>
      </div>
    )
  }

  const otherInstruments = Object.values(INSTRUMENTS).filter((i) => i.slug !== slug)

  return (
    <div className="bg-cream min-h-screen pt-28 pb-20">
      <SEO title={data.metaTitle} description={data.metaDescription} path={`/cours/${data.slug}`} />
      <CourseSchema
        name={`Cours de ${data.name.toLowerCase()}`}
        instrument={data.name}
        description={data.metaDescription}
        price="34"
        path={`/cours/${data.slug}`}
      />
      <FAQSchema questions={data.faq} />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* ─── Breadcrumbs ─── */}
        <Breadcrumbs
          items={[
            { name: 'Nos cours', url: '/cours' },
            { name: `Cours de ${data.name.toLowerCase()}`, url: `/cours/${data.slug}` },
          ]}
        />

        {/* ─── Hero Section ─── */}
        <section
          className="relative rounded-2xl overflow-hidden mb-16 md:mb-24 p-8 md:p-14 lg:p-20"
          style={{
            background: `linear-gradient(135deg, ${data.color}, ${data.color}dd)`,
            boxShadow:
              '0 1px 2px oklch(30% 0.2 250 / 0.08), 0 8px 24px oklch(30% 0.2 250 / 0.12), 0 20px 48px oklch(30% 0.2 250 / 0.08)',
          }}
        >
          {/* Background image at 30% opacity */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${data.image})`,
              opacity: 0.3,
              mixBlendMode: 'overlay',
            }}
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

          <div className="relative z-10 max-w-2xl">
            <h1
              className="font-display font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              {data.h1}
            </h1>
            <p
              className="text-white/85 leading-relaxed max-w-xl"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
            >
              {data.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/inscription"
                className="inline-flex items-center justify-center gap-2 bg-white text-marine font-display font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-px hover:shadow-lg"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                S'inscrire maintenant
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:5146777713"
                className="inline-flex items-center justify-center gap-2 text-white/80 font-medium text-sm hover:text-white transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                514-677-7713
              </a>
            </div>
          </div>
        </section>

        {/* ─── Long Description / SEO Content ─── */}
        <section className="mb-16 md:mb-24 max-w-3xl">
          {data.longDescription.map((paragraph, i) => (
            <p
              key={i}
              className="text-marine/70 leading-[1.7] mb-4 last:mb-0"
              style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' }}
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* ─── Benefits Section ─── */}
        <section className="mb-16 md:mb-24">
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Pourquoi apprendre le {data.name.toLowerCase()}?
          </h2>
          <p
            className="text-marine/60 mb-10 max-w-2xl"
            style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' }}
          >
            Découvrez les bienfaits uniques de l'apprentissage du {data.name.toLowerCase()} à l'École le Studio de
            Sainte-Rose, Laval.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-7 border border-marine/8 group hover:border-violet/30 transition-colors duration-300"
                style={{
                  boxShadow:
                    '0 1px 2px oklch(30% 0.2 250 / 0.04), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${data.color}15`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: data.color }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-marine text-sm mb-2">{benefit.title}</h3>
                <p className="text-marine/55 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Levels Section ─── */}
        <section className="mb-16 md:mb-24">
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Niveaux offerts
          </h2>
          <p
            className="text-marine/60 mb-10 max-w-2xl"
            style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' }}
          >
            Nos cours de {data.name.toLowerCase()} s'adaptent à votre niveau, du tout premier contact avec l'instrument
            jusqu'à la maîtrise avancée.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.levels.map((level, i) => (
              <div
                key={level.name}
                className="bg-white rounded-2xl p-7 border border-marine/8 relative overflow-hidden"
                style={{
                  boxShadow:
                    '0 1px 2px oklch(30% 0.2 250 / 0.04), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: data.color,
                    opacity: 0.3 + i * 0.25,
                  }}
                />
                <span
                  className="inline-block font-display font-extrabold text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-4"
                  style={{
                    backgroundColor: `${data.color}12`,
                    color: data.color,
                  }}
                >
                  {level.name}
                </span>
                <p className="text-marine/65 text-sm leading-relaxed">{level.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Styles Section ─── */}
        <section className="mb-16 md:mb-24">
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Styles enseignés
          </h2>

          <div className="flex flex-wrap gap-3">
            {data.styles.map((style) => (
              <span
                key={style}
                className="inline-flex items-center font-display font-bold text-sm px-5 py-2.5 rounded-full border transition-colors duration-300 hover:text-white cursor-default"
                style={{
                  color: data.color,
                  borderColor: `${data.color}30`,
                  backgroundColor: `${data.color}08`,
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLElement).style.backgroundColor = data.color
                  ;(e.target as HTMLElement).style.color = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLElement).style.backgroundColor = `${data.color}08`
                  ;(e.target as HTMLElement).style.color = data.color
                }}
              >
                {style}
              </span>
            ))}
          </div>
        </section>

        {/* ─── Pricing Section ─── */}
        <section className="mb-16 md:mb-24">
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Nos tarifs
          </h2>
          <p
            className="text-marine/60 mb-10 max-w-2xl"
            style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' }}
          >
            Des cours privés de {data.name.toLowerCase()} de qualité à des prix accessibles. Inscription ouverte toute
            l'année.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.duration}
                className={`relative rounded-2xl p-7 md:p-8 transition-transform duration-300 ${
                  plan.highlighted
                    ? 'bg-white border-2 border-coral md:scale-105 md:-my-2 z-10'
                    : 'bg-white border border-marine/8'
                }`}
                style={{
                  boxShadow: plan.highlighted
                    ? '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 8px 24px oklch(30% 0.15 20 / 0.12), 0 20px 48px oklch(30% 0.15 20 / 0.08)'
                    : '0 1px 2px oklch(30% 0.2 250 / 0.04), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-coral text-white text-xs font-bold font-display uppercase tracking-wider px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <p className="font-display font-bold text-marine/50 text-sm uppercase tracking-[0.1em] mb-1">
                  {plan.duration}
                </p>

                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className="font-display font-extrabold text-marine leading-none"
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
                  >
                    {plan.price}
                    <span className="text-lg font-bold">$</span>
                  </span>
                  <span className="text-marine/40 text-sm font-medium">/ cours</span>
                </div>

                <p className="text-marine/60 text-sm mb-6 font-medium">{plan.label}</p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Cours privé avec un professeur qualifié',
                    'Approche personnalisée selon votre niveau',
                    'Suivi de progression continu',
                    'Accès aux spectacles et événements',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-marine/70 text-sm leading-relaxed">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlighted ? 'text-coral' : 'text-violet'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/inscription"
                  className={`block text-center font-display font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-coral text-white hover:bg-coral-dark hover:-translate-y-px'
                      : 'bg-marine text-yellow hover:bg-violet hover:text-white hover:-translate-y-px'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  S'inscrire
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center mt-8">
            <Link
              to="/tarifs"
              className="text-violet font-display font-bold text-sm hover:underline underline-offset-4 transition-colors duration-300 hover:text-marine"
            >
              Voir tous les détails de nos tarifs et modalités &rarr;
            </Link>
          </p>
        </section>

        {/* ─── FAQ Section ─── */}
        <section className="mb-16 md:mb-24">
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Questions fréquentes — Cours de {data.name.toLowerCase()}
          </h2>

          <div
            className="bg-white rounded-2xl p-7 md:p-10 border border-marine/8"
            style={{
              boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.04), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
            }}
          >
            {data.faq.map((item) => (
              <FaqItem key={item.question} item={item} />
            ))}
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section className="mb-16 md:mb-24 text-center">
          <div
            className="bg-marine rounded-2xl px-8 py-14 md:py-20 relative overflow-hidden"
            style={{
              boxShadow:
                '0 1px 2px oklch(30% 0.2 250 / 0.08), 0 8px 24px oklch(30% 0.2 250 / 0.15), 0 20px 48px oklch(30% 0.2 250 / 0.10)',
            }}
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: `${data.color}25` }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-coral/10 blur-3xl translate-y-1/2 -translate-x-1/3" />

            <div className="relative z-10">
              <h2
                className="font-display font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
              >
                Prêt à commencer le {data.name.toLowerCase()}?
              </h2>
              <p
                className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed"
                style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)' }}
              >
                L'inscription est ouverte toute l'année à l'École le Studio de Sainte-Rose, Laval. Premier cours
                satisfait ou remboursé.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/inscription"
                  className="inline-flex items-center gap-2 bg-yellow text-marine font-display font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:-translate-y-px"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  S'inscrire maintenant
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:5146777713"
                  className="inline-flex items-center gap-2 text-white/70 font-medium text-sm hover:text-white transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  514-677-7713
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Internal Links to Other Instruments ─── */}
        <section>
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Découvrez aussi nos autres cours
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherInstruments.map((inst) => (
              <Link
                key={inst.slug}
                to={`/cours/${inst.slug}`}
                className="group bg-white rounded-2xl p-6 border border-marine/8 hover:border-violet/30 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.04), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 overflow-hidden"
                  style={{ backgroundColor: `${inst.color}12` }}
                >
                  <img
                    src={inst.image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="font-display font-bold text-marine text-sm mb-1 group-hover:text-violet transition-colors duration-300">
                  Cours de {inst.name.toLowerCase()}
                </h3>
                <p className="text-marine/50 text-xs leading-relaxed">
                  Dès 34$/cours &middot; Tous niveaux
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
