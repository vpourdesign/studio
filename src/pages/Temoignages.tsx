import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

/* ─── Testimonial Data ─── */
const testimonials = [
  {
    name: 'Caroline Lefebvre',
    instrument: 'Piano',
    ageGroup: 'Parent (enfant de 7 ans)',
    rating: 5,
    text: 'Ma fille adore ses cours de piano à l\'École le Studio ! Son professeur est patient et sait rendre chaque leçon amusante. En moins d\'un an, elle joue déjà des morceaux qui impressionnent toute la famille. L\'ambiance chaleureuse de l\'école fait toute la différence.',
  },
  {
    name: 'Marc-André Dubé',
    instrument: 'Guitare',
    ageGroup: 'Adulte débutant',
    rating: 5,
    text: 'J\'ai commencé la guitare à 38 ans, sans aucune expérience musicale. Mon professeur a su adapter son approche à mes objectifs et mon rythme. Après six mois, je joue mes premières chansons complètes. Une expérience que je recommande à tous les adultes qui hésitent à se lancer.',
  },
  {
    name: 'Sophie Tremblay',
    instrument: 'Chant',
    ageGroup: 'Adolescente (15 ans)',
    rating: 5,
    text: 'Les cours de chant m\'ont donné une confiance incroyable. Ma professeure m\'a aidée à développer ma technique vocale tout en respectant mon style. Le spectacle de fin de session était un moment magique — monter sur scène devant mes parents était un rêve devenu réalité.',
  },
  {
    name: 'Jean-François Gagnon',
    instrument: 'Batterie',
    ageGroup: 'Parent (enfant de 10 ans)',
    rating: 5,
    text: 'Notre fils est passionné de batterie depuis qu\'il a commencé à l\'École le Studio. Le professeur canalise son énergie de façon extraordinaire et les progrès sont visibles chaque semaine. Le spectacle annuel est un événement familial qu\'on attend avec impatience.',
  },
  {
    name: 'Isabelle Provost',
    instrument: 'Violon',
    ageGroup: 'Adulte intermédiaire',
    rating: 5,
    text: 'J\'avais arrêté le violon il y a 15 ans et je voulais reprendre. L\'équipe m\'a jumelée avec une professeure fantastique qui a su évaluer mon niveau rapidement et me proposer un programme stimulant. Je suis ravie de retrouver le plaisir de jouer.',
  },
  {
    name: 'Nathalie Bergeron',
    instrument: 'Piano',
    ageGroup: 'Parent (enfant de 5 ans)',
    rating: 4,
    text: 'Nous cherchions un cours de piano pour notre petit Gabriel et l\'École le Studio était parfaite. L\'approche est vraiment adaptée aux tout-petits — ludique mais structurée. Gabriel demande à pratiquer tous les jours, c\'est tout dire ! Seul bémol : on aimerait plus de créneaux le samedi.',
  },
  {
    name: 'Alexandre Côté',
    instrument: 'Guitare électrique',
    ageGroup: 'Adolescent (17 ans)',
    rating: 5,
    text: 'Mon prof de guitare est un vrai musicien qui connaît tous les styles. On travaille du rock, du blues, du funk — exactement ce que je voulais. Il m\'a même aidé à préparer mon audition pour le programme de musique au cégep. Résultat : j\'ai été accepté !',
  },
  {
    name: 'Marie-Josée Lapointe',
    instrument: 'Chant',
    ageGroup: 'Adulte (42 ans)',
    rating: 5,
    text: 'Prendre des cours de chant à mon âge était un défi personnel. L\'École le Studio m\'a accueillie sans jugement et ma professeure est bienveillante et compétente. J\'ai chanté devant public pour la première fois de ma vie au spectacle de décembre — une expérience inoubliable.',
  },
  {
    name: 'Patrick Roy',
    instrument: 'Batterie',
    ageGroup: 'Parent (enfant de 8 ans)',
    rating: 5,
    text: 'Excellent service du début à la fin. L\'inscription était simple, le jumelage professeur-élève très bien fait, et la communication est impeccable. Notre fille progresse à vue d\'œil et adore aller à ses cours chaque semaine. Une école de musique sérieuse et humaine.',
  },
  {
    name: 'Véronique Martin',
    instrument: 'Piano & guitare',
    ageGroup: 'Parent (2 enfants inscrits)',
    rating: 5,
    text: 'Nos deux enfants sont inscrits — l\'un en piano, l\'autre en guitare. Les horaires sont flexibles, les professeurs sont passionnés, et le premier cours satisfait ou remboursé nous a vraiment rassurés. Après trois sessions, toute la famille est convaincue. On recommande les yeux fermés !',
  },
]

/* ─── Star Component ─── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 ${i < rating ? 'text-yellow' : 'text-slate/20'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

/* ─── Review Aggregate Schema ─── */
function ReviewSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ecolelestudio.com/#organization',
    name: 'École le Studio',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.slice(0, 5).map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(t.rating),
        bestRating: '5',
      },
      reviewBody: t.text,
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

/* ─── Main Page Component ─── */
export default function Temoignages() {
  return (
    <>
      <SEO
        title="Témoignages d'élèves et parents | École le Studio — Laval"
        description="Lisez les témoignages de nos élèves et parents satisfaits. L'École le Studio à Sainte-Rose, Laval offre des cours de musique de qualité depuis plus de 20 ans. 4.9/5 étoiles."
        path="/temoignages"
      />
      <ReviewSchema />

      <main className="bg-cream pt-28 pb-20">
        {/* ─── Hero / Header ─── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10">
          <Breadcrumbs items={[{ name: 'Témoignages', url: '/temoignages' }]} />

          <h1
            className="font-display font-bold text-marine leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Ce que nos élèves et parents disent
          </h1>
          <p
            className="mt-4 text-slate max-w-2xl leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}
          >
            Depuis plus de 20 ans, l'École le Studio accompagne des centaines de musiciens à Sainte-Rose, Laval. Découvrez les témoignages authentiques de nos élèves et de leurs familles.
          </p>
        </section>

        {/* ─── Stats Bar ─── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-10 md:mt-14">
          <div
            className="bg-white rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            style={{
              boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
            }}
          >
            <div>
              <p
                className="font-display font-bold text-violet"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                4.9/5
              </p>
              <div className="flex justify-center mt-1 mb-2">
                <Stars rating={5} />
              </div>
              <p className="text-slate text-sm">Note moyenne sur Google</p>
            </div>
            <div className="sm:border-x sm:border-lavender">
              <p
                className="font-display font-bold text-coral"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                47+
              </p>
              <p className="text-marine font-semibold text-sm mt-1 mb-1">Avis Google</p>
              <p className="text-slate text-sm">Tous vérifiés</p>
            </div>
            <div>
              <p
                className="font-display font-bold text-yellow-600"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#525266' }}
              >
                425+
              </p>
              <p className="text-marine font-semibold text-sm mt-1 mb-1">Élèves actifs</p>
              <p className="text-slate text-sm">Cette année</p>
            </div>
          </div>
        </section>

        {/* ─── Testimonial Grid (Staggered / Masonry-style) ─── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-14 md:mt-20">
          <h2
            className="font-display font-bold text-marine text-center mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
          >
            Témoignages de nos élèves et parents
          </h2>
          <p className="text-slate text-center max-w-xl mx-auto mb-12" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
            Des parcours musicaux uniques, une satisfaction partagée. Voici ce que disent ceux qui vivent l'expérience le Studio au quotidien.
          </p>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="break-inside-avoid bg-white rounded-2xl p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                <Stars rating={testimonial.rating} />
                <blockquote className="mt-4 text-slate text-sm leading-relaxed">
                  &laquo; {testimonial.text} &raquo;
                </blockquote>
                <div className="mt-5 pt-4 border-t border-lavender/50">
                  <p className="font-display font-bold text-marine text-sm">{testimonial.name}</p>
                  <p className="text-violet text-xs font-semibold mt-0.5">{testimonial.instrument}</p>
                  <p className="text-slate/60 text-xs mt-0.5">{testimonial.ageGroup}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Google Reviews CTA ─── */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 mt-16 md:mt-24 text-center">
          <div
            className="bg-white rounded-2xl p-8 md:p-12"
            style={{
              boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
            }}
          >
            <div className="w-14 h-14 rounded-xl bg-lavender text-violet flex items-center justify-center mx-auto mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            <h2
              className="font-display font-bold text-marine mb-3"
              style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}
            >
              Vous êtes un élève ou un parent satisfait ?
            </h2>
            <p className="text-slate max-w-md mx-auto mb-6" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>
              Votre avis compte énormément pour nous et aide d'autres familles à découvrir l'École le Studio. Partagez votre expérience sur Google en quelques clics.
            </p>
            <a
              href="https://g.page/r/ecolelestudio/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet hover:bg-violet-dark text-white font-display font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
              style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
            >
              Laissez-nous un avis sur Google
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="max-w-4xl mx-auto px-6 md:px-10 mt-16 md:mt-24 text-center">
          <div className="bg-marine rounded-2xl p-10 md:p-16">
            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
            >
              Rejoignez notre communauté musicale
            </h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
              Plus de 425 élèves nous font déjà confiance. Inscrivez-vous dès maintenant et vivez l'expérience le Studio avec un premier cours satisfait ou remboursé.
            </p>
            <Link
              to="/inscription"
              className="inline-flex items-center gap-2 bg-violet hover:bg-violet-dark text-white font-display font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
              style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
            >
              S'inscrire maintenant
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ─── Internal Links ─── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-16 md:mt-20">
          <h2
            className="font-display font-bold text-marine mb-6"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)' }}
          >
            Explorez nos cours de musique
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Cours de piano', to: '/cours-de-piano' },
              { label: 'Cours de guitare', to: '/cours-de-guitare' },
              { label: 'Cours de chant', to: '/cours-de-chant' },
              { label: 'Cours de batterie', to: '/cours-de-batterie' },
              { label: 'Cours de violon', to: '/cours-de-violon' },
              { label: 'Nos professeurs', to: '/nos-professeurs' },
              { label: 'Tarifs & inscription', to: '/inscription' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="bg-lavender text-violet hover:bg-violet hover:text-white font-display font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
