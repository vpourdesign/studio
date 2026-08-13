import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO, { FAQSchema } from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

/* ─── Data ─── */

const plans = [
  {
    duration: '30 minutes',
    price: '34',
    label: 'Idéal pour les jeunes débutants',
    badge: null,
    highlighted: false,
  },
  {
    duration: '45 minutes',
    price: '44',
    label: 'Le plus populaire',
    badge: 'Recommandé',
    highlighted: true,
  },
  {
    duration: '60 minutes',
    price: '54',
    label: 'Pour les passionnés et avancés',
    badge: null,
    highlighted: false,
  },
]

const inclusions = [
  'Cours privé avec un professeur qualifié',
  'Approche personnalisée selon votre niveau',
  'Suivi de progression continu',
  'Accès aux spectacles et événements',
]

const sessions = [
  {
    name: 'Automne',
    period: 'Septembre – Décembre',
    weeks: '14 semaines',
    icon: '🍂',
  },
  {
    name: 'Hiver',
    period: 'Janvier – Mai',
    weeks: '22 semaines',
    icon: '❄️',
  },
  {
    name: 'Été',
    period: 'Juin – Août',
    weeks: '8 semaines',
    icon: '☀️',
  },
]

const advantages = [
  {
    label: 'Plus de 20 ans d\u2019expérience',
    description: 'Une école établie et reconnue à Laval depuis 2004.',
  },
  {
    label: '25+ professeurs qualifiés',
    description: 'Une équipe diversifiée de musiciens professionnels passionnés.',
  },
  {
    label: 'Spectacles inclus',
    description: 'Concerts et récitals pour tous les élèves, sans frais supplémentaires.',
  },
  {
    label: 'Horaire flexible',
    description: 'Cours offerts du lundi au samedi, matin et soir.',
  },
  {
    label: 'Inscription en tout temps',
    description: 'Pas besoin d\u2019attendre le début de la session pour commencer.',
  },
  {
    label: '1er cours satisfait ou remboursé',
    description: 'Essayez sans risque — si le premier cours ne convient pas, on vous rembourse.',
  },
]

const faqItems = [
  {
    question: 'Quels sont les modes de paiement acceptés?',
    answer:
      'Nous acceptons les chèques, l\u2019argent comptant et les virements Interac par courriel. Les chèques postdatés mensuels sont autorisés. Le premier paiement doit être effectué lors de la première semaine de cours.',
  },
  {
    question: 'Y a-t-il des frais supplémentaires?',
    answer:
      'Les frais d\u2019inscription sont de 18,50\u00A0$ par famille par session (aucuns frais pour la session d\u2019été). Un cahier de l\u2019élève à 21,50\u00A0$ est requis à la première inscription seulement. Il n\u2019y a aucun autre frais caché.',
  },
  {
    question: 'Puis-je changer la durée de mon cours?',
    answer:
      'Oui, il est possible de changer la durée de votre cours (30, 45 ou 60 minutes) d\u2019une session à l\u2019autre. Contactez-nous pour ajuster votre inscription selon vos besoins.',
  },
  {
    question: 'Quelle est votre politique d\u2019annulation?',
    answer:
      'Le contrat peut être annulé en tout temps. Les frais d\u2019inscription et le matériel ne sont pas remboursables. Les leçons non suivies sont remboursées, sauf celles des deux dernières semaines de la session.',
  },
  {
    question: 'Les frais incluent-ils les spectacles?',
    answer:
      'Oui, la participation aux spectacles et récitals organisés par l\u2019école est incluse dans vos frais de cours. C\u2019est une occasion unique pour les élèves de se produire sur scène devant famille et amis.',
  },
]

/* ─── FAQ Accordion Item ─── */
function FaqItem({ item }: { item: (typeof faqItems)[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-marine/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-bold text-marine pr-4" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}>
          {item.question}
        </span>
        <span
          className="shrink-0 w-8 h-8 rounded-full bg-marine/5 flex items-center justify-center transition-transform duration-300 group-hover:bg-violet/10"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-marine" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '200px' : '0', opacity: open ? 1 : 0 }}
      >
        <p className="pb-5 text-marine/70 leading-relaxed max-w-prose" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>
          {item.answer}
        </p>
      </div>
    </div>
  )
}

/* ─── Page Component ─── */
export default function Tarifs() {
  return (
    <div className="bg-cream min-h-screen pt-28 pb-20">
      <SEO
        title="Tarifs des cours de musique à Laval | École le Studio — Sainte-Rose"
        description="Consultez les tarifs des cours de musique à l'École le Studio, Sainte-Rose, Laval. Cours de piano, guitare, chant, batterie et violon dès 34$/cours. Inscription ouverte toute l'année."
        path="/tarifs"
      />
      <FAQSchema questions={faqItems} />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* ─── Header ─── */}
        <Breadcrumbs items={[{ name: 'Tarifs', url: '/tarifs' }]} />

        <header className="mb-16 md:mb-20">
          <h1
            className="font-display font-extrabold text-marine leading-[1.05] tracking-[-0.03em] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Tarifs des cours de musique à Laval
          </h1>
          <p
            className="text-marine/60 max-w-2xl leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
          >
            Des cours privés de qualité à des prix accessibles, pour tous les âges et tous les niveaux.
          </p>
        </header>

        {/* ─── Intro SEO Paragraph ─── */}
        <section className="mb-16 md:mb-24 max-w-3xl">
          <p className="text-marine/70 leading-[1.7] mb-4" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' }}>
            À l'École le Studio, nous croyons que l'apprentissage de la musique devrait être accessible à tous.
            Installée au coeur de Sainte-Rose à Laval depuis plus de 20 ans, notre école offre des cours privés de
            piano, guitare, chant, batterie et violon à des tarifs compétitifs pour la région de Laval. Chaque leçon
            est personnalisée selon le rythme, les objectifs et les goûts musicaux de l'élève — qu'il soit débutant
            complet ou musicien avancé.
          </p>
          <p className="text-marine/70 leading-[1.7] mb-4" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' }}>
            Nos tarifs incluent un enseignement individuel avec l'un de nos 25+ professeurs qualifiés, un suivi de
            progression personnalisé, ainsi que l'accès aux spectacles et récitals organisés tout au long de l'année.
            Contrairement à d'autres écoles de musique, nous n'exigeons pas de contrat à long terme : vous pouvez
            vous inscrire en tout temps et annuler selon nos conditions flexibles. La session d'été est même offerte
            sans frais d'inscription, pour permettre aux curieux de découvrir la musique sans engagement.
          </p>
          <p className="text-marine/70 leading-[1.7]" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' }}>
            Que vous recherchiez des cours de musique à Laval pour votre enfant de 4 ans ou pour vous-même en tant
            qu'adulte, nos trois formules de durée (30, 45 ou 60 minutes) s'adaptent à votre budget et à vos
            disponibilités. Avec plus de 425 élèves actifs et une note de 4,9 étoiles, l'École le Studio est la
            référence en enseignement musical dans le quartier Sainte-Rose et les environs de Laval.
          </p>
        </section>

        {/* ─── Pricing Cards ─── */}
        <section className="mb-16 md:mb-24">
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-10"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Nos formules de cours privés
          </h2>

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
                  {inclusions.map((item) => (
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
        </section>

        {/* ─── Frais supplémentaires ─── */}
        <section className="mb-16 md:mb-24">
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Frais et modalités
          </h2>

          <div
            className="bg-white rounded-2xl p-7 md:p-10 border border-marine/8"
            style={{
              boxShadow:
                '0 1px 2px oklch(30% 0.2 250 / 0.04), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-marine text-sm mb-0.5">Frais d'inscription</p>
                  <p className="text-marine/60 text-sm leading-relaxed">18,50&nbsp;$ par famille, par session</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-marine" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-marine text-sm mb-0.5">Cahier de l'élève</p>
                  <p className="text-marine/60 text-sm leading-relaxed">21,50&nbsp;$ (première inscription seulement)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-marine text-sm mb-0.5">Session d'été</p>
                  <p className="text-marine/60 text-sm leading-relaxed">Aucun frais d'inscription</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-marine/5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-marine" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-marine text-sm mb-0.5">Modes de paiement</p>
                  <p className="text-marine/60 text-sm leading-relaxed">Chèques, comptant, virement Interac. Chèques postdatés acceptés.</p>
                </div>
              </div>
            </div>

            <p className="text-marine/50 text-xs leading-relaxed border-t border-marine/8 pt-5">
              * Le premier paiement doit être effectué lors de la première semaine de cours. Premier cours satisfait ou remboursé.
            </p>
          </div>
        </section>

        {/* ─── Sessions Calendar — Keylime bg ─── */}
        <section className="mb-16 md:mb-24 -mx-6 md:-mx-12 xl:-mx-16 px-6 md:px-12 xl:px-16 py-16 md:py-24 bg-yellow rounded-3xl">
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Calendrier des sessions
          </h2>
          <p className="text-marine/60 mb-8 max-w-2xl" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' }}>
            L'inscription est ouverte toute l'année. Vous pouvez commencer en cours de session — vous ne serez facturé que pour les leçons suivies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {sessions.map((session) => (
              <div
                key={session.name}
                className="bg-white rounded-2xl p-6 md:p-7 border border-marine/8 text-center"
                style={{
                  boxShadow:
                    '0 1px 2px oklch(30% 0.2 250 / 0.04), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                <span className="text-3xl mb-3 block">{session.icon}</span>
                <h3 className="font-display font-extrabold text-marine text-lg mb-1">
                  {session.name}
                </h3>
                <p className="text-marine/60 text-sm font-medium mb-1">{session.period}</p>
                <p className="text-violet font-bold text-sm">{session.weeks}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Comparison / Value Section ─── */}
        <section className="mb-16 md:mb-24">
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Pourquoi nos tarifs sont compétitifs à Laval
          </h2>
          <p className="text-marine/60 mb-10 max-w-2xl" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' }}>
            Quand vous comparez les écoles de musique à Laval, regardez au-delà du prix affiché. Voici ce qui est inclus dans chaque cours à l'École le Studio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv) => (
              <div
                key={adv.label}
                className="bg-white rounded-2xl p-6 border border-marine/8 group hover:border-violet/30 transition-colors duration-300"
                style={{
                  boxShadow:
                    '0 1px 2px oklch(30% 0.2 250 / 0.04), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-violet mb-4 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="font-display font-bold text-marine text-sm mb-1.5">{adv.label}</h3>
                <p className="text-marine/55 text-sm leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="mb-16 md:mb-24">
          <h2
            className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Questions fréquentes sur nos tarifs
          </h2>

          <div
            className="bg-white rounded-2xl p-7 md:p-10 border border-marine/8"
            style={{
              boxShadow:
                '0 1px 2px oklch(30% 0.2 250 / 0.04), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
            }}
          >
            {faqItems.map((item) => (
              <FaqItem key={item.question} item={item} />
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="text-center">
          <div
            className="bg-marine rounded-2xl px-8 py-14 md:py-20 relative overflow-hidden"
            style={{
              boxShadow:
                '0 1px 2px oklch(30% 0.2 250 / 0.08), 0 8px 24px oklch(30% 0.2 250 / 0.15), 0 20px 48px oklch(30% 0.2 250 / 0.10)',
            }}
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-violet/15 blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-coral/10 blur-3xl translate-y-1/2 -translate-x-1/3" />

            <div className="relative z-10">
              <h2
                className="font-display font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
              >
                Prêt à commencer votre parcours musical?
              </h2>
              <p
                className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed"
                style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)' }}
              >
                L'inscription est ouverte toute l'année. Premier cours satisfait ou remboursé — essayez sans risque.
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  514-677-7713
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
