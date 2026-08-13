import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO, { FAQSchema } from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import imgMurProfs from '../assets/photos/mur-professeurs.webp'

/* ─── Teacher Data — matched to /images/professeurs/ ─── */
const teachers = [
  { name: 'Benoit Girard', role: 'Fondateur', img: 'professeurs-benoit-girard-l-400x800.jpg' },
  { name: 'Lis Anne Perron', role: 'Chant et Piano', img: 'professeur-lis-anne-perron-l-400x800.jpg' },
  { name: 'Guillaume Valiquette Comeau', role: 'Guitare et Piano', img: 'professeurs-guillaume-valiquette-comeau-l-400x800.jpg' },
  { name: 'Dania Banna', role: 'Piano', img: 'DaniaBanna-400x800.jpg' },
  { name: 'Joey Carey', role: 'Guitare, Chant et Piano', img: 'professeur-joey-carey-l-400x800.jpg' },
  { name: 'Nathalia Martinez Granado', role: 'Chant et Piano', img: 'Nathalia-400x800.jpg' },
  { name: 'Émile Lévesque', role: 'Guitare', img: 'EmileLevesquePhoto-1-400x800.jpg' },
  { name: 'Alain Jalbert', role: 'Batterie', img: 'AlainJalbertPhoto-400x800.jpg' },
  { name: 'Adam Mohr', role: 'Piano', img: 'AdamMohr_2024-400x800.webp' },
  { name: 'Laurent Lambert', role: 'Piano, Basse, Ukulélé et Guitare', img: 'LaurentLambert-400x800.jpg' },
  { name: 'Sacha Desjardins', role: 'Piano', img: 'Sacha-400x800.jpg' },
  { name: 'Alex Weng', role: 'Piano', img: 'AlexWeng-400x800.jpg' },
  { name: 'Elizabeth Lauzon', role: 'Piano', img: 'ElizabethLauzon-400x800.jpg' },
  { name: 'Roxanne Fréchette', role: 'Piano, Chant et Éveil', img: 'RoxanneFrechette-400x800.jpg' },
  { name: 'Mathilde Robitaille', role: 'Chant', img: 'MathildeRobitaille_2024-400x800.webp' },
  { name: 'Wissem Elleuch', role: 'Piano', img: 'WissemElleuch_2024-400x800.webp' },
  { name: 'Eva Shahzabian', role: 'Piano et Violon', img: 'EvaShahzabian_2024-400x800.webp' },
  { name: 'François Dubé', role: 'Assistant', img: 'FrancoisDube-400x800.webp' },
  { name: 'Mathys Lortie Groleau', role: 'Guitare', img: 'MathysLortieGroleau_2024-400x800.webp' },
  { name: 'Micheline Choquette', role: 'Piano et Chant', img: 'MichelineChoquette_2024-400x800.webp' },
  { name: 'Michel El Zoghby', role: 'Piano', img: 'MichelElZoghby_2024-400x800.webp' },
  { name: 'Jean-Daniel Thibeault-Desbiens', role: 'Batterie', img: 'Jean-Daniel-400x800.jpg' },
  { name: 'Nicolas Jarret', role: 'Batterie', img: 'NicolasJarret_2024-400x800.webp' },
  { name: 'Sarah Plouffe', role: 'Piano et Chant', img: 'SarahPlouffe_20241-400x800.webp' },
  { name: 'Rachel Dupras', role: 'Piano et Saxophone', img: 'RachelDupras_20241-400x800.webp' },
  { name: 'Phil Charmettant', role: 'Guitare', img: 'Phil-400x800.jpg' },
  { name: 'Emanuel Simard', role: 'Piano', img: 'Emanuel-1-400x800.webp' },
  { name: 'Arden Arapyan', role: 'Guitare et Piano', img: 'ArdenArapyan-400x800.webp' },
  { name: 'Françis Boudreau', role: 'Guitare et Piano', img: 'FrancisBoudreau-400x800.webp' },
  { name: 'Erika Denis', role: 'Chant et Guitare', img: 'ErikaDenis-400x800.webp' },
  { name: 'Mathias Javgureanu', role: 'Guitare', img: 'MathiasJavgureanu-400x800.webp' },
  { name: 'Genevieve Cayer', role: 'Chant et Piano', img: 'GenevieveCayer-400x800.webp' },
  { name: 'Amine Chakir', role: 'Violon et Piano', img: 'AmineChakir-400x800.webp' },
  { name: 'Mustapha Khazem', role: 'Guitare et Piano', img: 'MustaphaKhazem-400x800.webp' },
  { name: 'Jonathan Racine Ménard', role: 'Batterie', img: 'JonathanRacineMenard-400x800.webp' },
  { name: 'Mathilde Farot', role: 'Piano', img: 'MathildeFarot-400x800.webp' },
  { name: 'Tanya Rizkala', role: 'Chant', img: 'TanyaRizkala-400x800.webp' },
]

/* ─── Pedagogical Approach ─── */
const approachFeatures = [
  {
    title: 'Enseignement personnalisé',
    description: 'Chaque élève bénéficie d\'un programme sur mesure adapté à son niveau, ses objectifs et son rythme d\'apprentissage. Nos professeurs ajustent leur approche pour maximiser les progrès.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: 'Répertoire adapté à vos goûts',
    description: 'Pop, classique, jazz, rock, blues — nos professeurs intègrent les morceaux que vous aimez dans votre apprentissage. La motivation passe par le plaisir de jouer ce qui vous inspire.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
  },
  {
    title: 'Préparation aux spectacles',
    description: 'Deux spectacles par année permettent à chaque élève de monter sur scène dans un environnement encourageant. Une expérience formatrice qui développe la confiance et la discipline.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
  },
  {
    title: 'Suivi de progression',
    description: 'Un cartable scolaire et des objectifs clairs permettent de mesurer les progrès semaine après semaine. Les parents sont informés régulièrement de l\'évolution de leur enfant.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
]

/* ─── FAQ Data ─── */
const faqQuestions = [
  {
    question: 'Quelles sont les qualifications de vos professeurs de musique ?',
    answer: 'Tous nos professeurs détiennent un diplôme universitaire ou collégial en musique (performance, interprétation ou pédagogie musicale). Ils sont également des musiciens actifs sur la scène québécoise, ce qui leur permet de transmettre une expérience concrète et actuelle à leurs élèves.',
  },
  {
    question: 'Comment est choisi le professeur pour mon enfant ?',
    answer: 'Lors de l\'inscription, nous prenons en compte l\'instrument choisi, l\'âge de l\'élève, son niveau et ses objectifs musicaux. Nous jumelons ensuite l\'élève avec le professeur dont l\'expertise et la personnalité correspondent le mieux. Le premier cours est satisfait ou remboursé pour garantir un bon jumelage.',
  },
  {
    question: 'Est-il possible de changer de professeur en cours de session ?',
    answer: 'Absolument. Si la chimie n\'est pas au rendez-vous ou si vos besoins évoluent, nous pouvons vous proposer un autre professeur selon les disponibilités. Notre priorité est que chaque élève se sente à l\'aise et motivé dans son apprentissage.',
  },
  {
    question: 'Les professeurs enseignent-ils aussi aux adultes débutants ?',
    answer: 'Oui ! Plusieurs de nos professeurs se spécialisent dans l\'enseignement aux adultes, qu\'ils soient débutants complets ou musiciens qui souhaitent reprendre après une pause. L\'approche est adaptée aux objectifs et au rythme de vie de chacun.',
  },
]

/* ─── FAQ Accordion Item ─── */
function FaqItem({ item }: { item: typeof faqQuestions[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-lavender/50 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="group w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-display font-semibold text-marine text-base md:text-lg transition-colors duration-200 group-hover:text-violet">
          {item.question}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 shrink-0 text-slate transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0', opacity: open ? 1 : 0 }}
      >
        <p className="pt-3 text-slate text-sm md:text-base leading-relaxed max-w-[65ch]">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

/* ─── Main Page Component ─── */
export default function Professeurs() {
  return (
    <>
      <SEO
        title="Nos professeurs de musique à Laval | École le Studio — Sainte-Rose"
        description="Découvrez l'équipe de plus de 25 professeurs qualifiés de l'École le Studio à Sainte-Rose, Laval. Piano, guitare, chant, batterie, violon — des musiciens passionnés au service de votre apprentissage."
        path="/nos-professeurs"
      />
      <FAQSchema questions={faqQuestions} />

      <main className="bg-cream pt-28">
        {/* ─── Hero / Header ─── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
          <Breadcrumbs items={[{ name: 'Nos professeurs', url: '/nos-professeurs' }]} />

          <h1
            className="font-display font-bold text-marine leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Nos professeurs de musique à Laval
          </h1>
          <p
            className="mt-4 text-slate max-w-2xl leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}
          >
            Plus de 25 musiciens passionnés et pédagogues qualifiés, dédiés à l'apprentissage de la musique à Sainte-Rose, Laval.
          </p>
        </section>

        {/* ─── Short intro (SEO part 1) — before the grid so users see profs fast ─── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 mt-8 md:mt-10">
          <p className="text-slate leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>
            Depuis plus de 20 ans, l'<strong className="text-marine">École le Studio</strong> rassemble une équipe de plus de 25 professeurs de musique qualifiés au coeur de <strong className="text-marine">Sainte-Rose, Laval</strong>. Chaque membre de notre corps professoral a été soigneusement sélectionné pour son excellence musicale et ses compétences pédagogiques. Nos enseignants sont des musiciens actifs — concertistes, compositeurs, arrangeurs — qui partagent leur passion avec chaque élève.
          </p>
        </section>

        {/* ─── Mur des professeurs — photo du hall de l'école ─── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 mt-10 md:mt-14">
          <figure className="relative rounded-3xl overflow-hidden aspect-[21/9]">
            <img
              src={imgMurProfs}
              alt="Mur du hall de l'École le Studio, où sont affichées les biographies encadrées des professeurs"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1068}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-marine/70 via-marine/10 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
              <p
                className="font-display font-extrabold text-white leading-[1.1] tracking-[-0.02em] max-w-[24ch]"
                style={{ fontSize: 'clamp(1.25rem, 2.6vw, 2rem)' }}
              >
                Chaque professeur a sa place sur notre mur
              </p>
              <p className="mt-2 text-white/70 text-sm max-w-[46ch] leading-relaxed">
                Dans le hall d'entrée, à Sainte-Rose. Parcours, instruments et formation de chacun, affichés pour tous nos élèves.
              </p>
            </figcaption>
          </figure>
        </section>

        {/* ─── Teacher Grid — card style like course cards ─── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 mt-10 md:mt-14">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {teachers.map((teacher) => (
              <div
                key={teacher.name}
                className="group relative block overflow-hidden rounded-2xl"
                style={{ aspectRatio: '9 / 16' }}
              >
                {/* Photo — no color overlay, object-top for headshots */}
                <img
                  src={`/images/professeurs/${teacher.img}`}
                  alt={`${teacher.name} — ${teacher.role}, École le Studio, Laval`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  loading="lazy"
                />

                {/* Subtle black gradient at bottom only — for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Name + role overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10">
                  <h3
                    className="font-display font-extrabold text-white leading-[1.1] tracking-[-0.01em]"
                    style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
                  >
                    {teacher.name}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm mt-1 font-inter">
                    {teacher.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SEO part 2 — below the grid ─── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 mt-14 md:mt-20 space-y-5">
          <p className="text-slate leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>
            Que vous cherchiez un <Link to="/cours-de-piano" className="text-violet font-semibold hover:underline">cours de piano à Laval</Link>, un <Link to="/cours-de-guitare" className="text-violet font-semibold hover:underline">cours de guitare</Link>, un <Link to="/cours-de-chant" className="text-violet font-semibold hover:underline">cours de chant</Link>, un <Link to="/cours-de-batterie" className="text-violet font-semibold hover:underline">cours de batterie</Link> ou un <Link to="/cours-de-violon" className="text-violet font-semibold hover:underline">cours de violon</Link>, nos professeurs offrent un enseignement individualisé qui s'adapte à chaque élève. Enfants dès 5 ans, adolescents et adultes de tous niveaux profitent d'une pédagogie bienveillante et structurée, ancrée dans le plaisir de la musique.
          </p>
          <p className="text-slate leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>
            Située au 191B boulevard Sainte-Rose, l'<strong className="text-marine">école de musique le Studio</strong> dessert les familles de <strong className="text-marine">Sainte-Rose</strong>, Fabreville, Auteuil, Vimont, Chomedey, Rosemère et les environs depuis plus de deux décennies. Nos professeurs sont diplômés en musique et musiciens actifs sur scène — une combinaison qui garantit un enseignement à la fois rigoureux et inspirant. <Link to="/tarifs" className="text-violet font-semibold hover:underline">Consultez nos tarifs</Link> ou <Link to="/inscription" className="text-violet font-semibold hover:underline">inscrivez-vous dès aujourd'hui</Link> pour commencer votre parcours musical.
          </p>
        </section>

        {/* close pb for SEO part 2 */}
        <div className="pb-20" />
      </main>

      {/* ─── Pedagogical Approach — full-bleed Mist bg ─── */}
      <section className="bg-lavender py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
          <h2
            className="font-display font-bold text-marine text-center mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
          >
            Notre approche pédagogique
          </h2>
          <p className="text-slate text-center max-w-xl mx-auto mb-12" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
            Ce qui distingue nos professeurs et fait la réputation de l'École le Studio à Laval.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approachFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.05), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-yellow text-marine flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-marine text-lg mb-2">{feature.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ — Keylime bg ─── */}
      <section className="bg-yellow py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2
            className="font-display font-bold text-marine mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            Questions fréquentes
          </h2>
          <div>
            {faqQuestions.map((q) => (
              <FaqItem key={q.question} item={q} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
          <div className="bg-marine rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-lavender/15 blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-yellow/10 blur-3xl translate-y-1/2 -translate-x-1/3" />
            <div className="relative z-10">
              <h2
                className="font-display font-bold text-white mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
              >
                Trouvez le professeur idéal
              </h2>
              <p className="text-white/70 max-w-md mx-auto mb-8" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
                Inscrivez-vous et nous vous jumelerons avec le professeur qui correspond le mieux à vos objectifs.
              </p>
              <Link
                to="/inscription"
                className="inline-flex items-center gap-2 bg-coral text-marine font-display font-bold text-sm px-8 py-4 rounded-lg transition-all duration-300 hover:bg-yellow hover:-translate-y-px"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                S'inscrire maintenant
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Internal Links ─── */}
      <section className="bg-cream py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate text-sm">Découvrez aussi :</span>
            {[
              { label: 'Cours de piano', to: '/cours-de-piano' },
              { label: 'Cours de guitare', to: '/cours-de-guitare' },
              { label: 'Cours de chant', to: '/cours-de-chant' },
              { label: 'Cours de batterie', to: '/cours-de-batterie' },
              { label: 'Cours de violon', to: '/cours-de-violon' },
              { label: 'Tarifs', to: '/tarifs' },
              { label: 'Inscription', to: '/inscription' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm bg-lavender text-marine px-4 py-2 rounded-full font-medium transition-all duration-200 hover:bg-violet hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
