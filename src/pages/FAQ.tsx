import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO, { FAQSchema } from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

/* ─── FAQ Data by Category ─── */
const faqCategories = [
  {
    id: 'inscription',
    label: 'Inscription et administration',
    questions: [
      {
        question: 'Quand ont lieu les inscriptions pour les cours de musique ?',
        answer: 'Les inscriptions sont ouvertes en continu tout au long de l\'année, sous réserve des disponibilités. Cependant, les périodes principales d\'inscription sont en août pour la session d\'automne (septembre à décembre) et en décembre pour la session d\'hiver (janvier à mai). Nous offrons également une session d\'été intensive de 8 semaines. Nous vous recommandons de nous contacter tôt pour réserver votre place, car certains créneaux sont très populaires.',
      },
      {
        question: 'Offrez-vous un cours d\'essai ?',
        answer: 'Oui ! Nous offrons un premier cours satisfait ou remboursé. Cela vous permet de rencontrer votre professeur, d\'évaluer l\'ambiance de l\'école et de confirmer que le cours vous convient. Si vous n\'êtes pas entièrement satisfait après ce premier cours, nous vous remboursons intégralement, sans question. C\'est notre façon de vous garantir une expérience positive dès le départ.',
      },
      {
        question: 'Comment se fait le jumelage professeur-élève ?',
        answer: 'Lors de votre inscription, nous prenons le temps de comprendre vos objectifs, vos préférences musicales, votre niveau et votre personnalité. Nous jumelons ensuite chaque élève avec le professeur dont l\'expertise, le style d\'enseignement et la disponibilité correspondent le mieux. Le premier cours satisfait ou remboursé confirme que le jumelage est réussi. Si la chimie n\'est pas au rendez-vous, nous proposons un autre professeur.',
      },
      {
        question: 'Puis-je changer de professeur en cours de session ?',
        answer: 'Absolument. Nous comprenons que le lien entre un élève et son professeur est essentiel à la motivation et à la progression. Si pour quelque raison que ce soit vous souhaitez changer de professeur, communiquez avec nous et nous organiserons un transfert selon les disponibilités. Il n\'y a aucuns frais supplémentaires pour un changement de professeur.',
      },
      {
        question: 'Comment se déroule le premier cours de musique ?',
        answer: 'Le premier cours est une rencontre de découverte. Le professeur évalue le niveau de l\'élève (ou part de zéro si c\'est un débutant complet), discute des objectifs et des goûts musicaux, et établit un plan de travail personnalisé. Pour les enfants, le professeur s\'assure de créer un environnement chaleureux et ludique. À la fin du cours, l\'élève repart avec des exercices adaptés à son niveau et un aperçu clair de ce que la session lui réserve.',
      },
    ],
  },
  {
    id: 'cours',
    label: 'Les cours',
    questions: [
      {
        question: 'À quel âge peut-on commencer les cours de musique ?',
        answer: 'Nous accueillons les élèves dès l\'âge de 4 ans pour le piano et la guitare, et dès 5-6 ans pour le chant, le violon et la batterie. L\'âge idéal varie selon l\'instrument et la maturité de l\'enfant. Nos professeurs spécialisés en petite enfance utilisent une approche ludique et adaptée pour les plus jeunes. Pour les adultes, il n\'y a aucune limite d\'âge — nous accueillons régulièrement des débutants dans la quarantaine, la cinquantaine et au-delà.',
      },
      {
        question: 'Les cours sont-ils privés ou en groupe ?',
        answer: 'Tous nos cours instrumentaux et de chant sont des cours privés (un élève, un professeur). Cette formule permet un enseignement véritablement personnalisé et une progression optimale. Chaque leçon est adaptée au niveau, aux objectifs et aux goûts de l\'élève. Les spectacles de fin de session offrent par contre une belle occasion de jouer en ensemble et de développer des compétences musicales collectives.',
      },
      {
        question: 'Dois-je avoir mon propre instrument pour suivre des cours ?',
        answer: 'Pour progresser efficacement, il est recommandé d\'avoir accès à un instrument pour pratiquer à la maison. Cependant, si vous débutez et que vous n\'êtes pas encore sûr de votre choix, nos professeurs peuvent vous guider dans le choix et l\'achat d\'un instrument adapté à votre budget. Pour la batterie, un pad de pratique peut suffire au début. Des options de location d\'instruments existent également chez nos partenaires locaux.',
      },
      {
        question: 'Comment choisir le bon instrument de musique ?',
        answer: 'Le meilleur instrument est celui qui vous attire et vous motive ! Lors de votre premier contact avec l\'école, nous pouvons vous aider à explorer les options selon l\'âge de l\'élève, ses goûts musicaux et ses aptitudes physiques. Le piano est souvent recommandé comme premier instrument pour sa polyvalence et ses bases théoriques solides. La guitare est idéale pour ceux qui aiment chanter en s\'accompagnant. N\'hésitez pas à nous appeler pour en discuter.',
      },
      {
        question: 'Offrez-vous des cours de musique en ligne ?',
        answer: 'Actuellement, tous nos cours sont offerts en présentiel dans nos studios de Sainte-Rose, Laval. Nous croyons que la qualité de l\'interaction en personne — le contact direct avec le professeur, l\'acoustique naturelle de nos studios, et la possibilité de corriger la posture et la technique en temps réel — offre la meilleure expérience d\'apprentissage. Nous évaluons régulièrement la possibilité d\'offrir des options hybrides pour l\'avenir.',
      },
    ],
  },
  {
    id: 'tarifs',
    label: 'Tarifs et paiements',
    questions: [
      {
        question: 'Combien coûtent les cours de musique à l\'École le Studio ?',
        answer: 'Nos tarifs sont de 34 $ par cours de 30 minutes, 44 $ par cours de 45 minutes, et 54 $ par cours de 60 minutes. Les frais d\'inscription de 45 $ (payables une fois par année) incluent le cartable scolaire et l\'accès aux spectacles. Les cours de 30 minutes sont idéaux pour les jeunes débutants, les 45 minutes sont les plus populaires, et les 60 minutes conviennent aux élèves avancés ou passionnés. Consultez notre page tarifs pour tous les détails.',
      },
      {
        question: 'Les frais incluent-ils le matériel pédagogique ?',
        answer: 'Les frais d\'inscription annuels de 45 $ incluent le cartable scolaire avec les partitions de base et le matériel pédagogique initial. En cours de session, certains livres de méthode ou recueils de partitions supplémentaires peuvent être suggérés par le professeur, mais ces achats sont optionnels et généralement abordables (entre 15 $ et 30 $).',
      },
      {
        question: 'Quels sont les modes de paiement acceptés ?',
        answer: 'Nous acceptons les paiements par carte de crédit (Visa, Mastercard), carte de débit (Interac), virement Interac et argent comptant. Le paiement de la session se fait au début de chaque session (automne, hiver ou été). Nous offrons la possibilité de payer en plusieurs versements mensuels pour les sessions plus longues. Les reçus sont émis automatiquement.',
      },
      {
        question: 'Quelle est la politique d\'annulation des cours ?',
        answer: 'Si vous devez annuler un cours, nous demandons un préavis d\'au moins 24 heures. Les cours annulés avec un préavis suffisant peuvent être repris durant la session selon les disponibilités du professeur. Les cours annulés sans préavis de 24 heures ne peuvent malheureusement pas être remboursés ni repris. En cas de maladie ou de circonstances exceptionnelles, nous faisons preuve de flexibilité — communiquez avec nous et nous trouverons une solution.',
      },
    ],
  },
  {
    id: 'spectacles',
    label: 'Spectacles et événements',
    questions: [
      {
        question: 'Y a-t-il des spectacles pour les élèves ?',
        answer: 'Oui ! Nous organisons deux spectacles par année — un en décembre et un en mai/juin. Ces spectacles ont lieu dans une vraie salle de spectacle et sont ouverts à la famille et aux amis. C\'est une occasion unique pour chaque élève de monter sur scène, de vivre le trac positif de la performance et de célébrer ses progrès. La participation est volontaire mais fortement encouragée — c\'est un moment magique pour tous.',
      },
      {
        question: 'Quelles sont les sessions de cours ?',
        answer: 'L\'année scolaire est divisée en deux sessions principales : la session d\'automne (septembre à décembre, environ 14 semaines) et la session d\'hiver (janvier à mai, environ 22 semaines). Chaque session se termine par un spectacle de fin de session. Nous offrons également une session d\'été intensive de 8 semaines (juin à août) pour les élèves qui souhaitent maintenir leur pratique ou rattraper du terrain pendant les vacances.',
      },
      {
        question: 'Desservez-vous d\'autres quartiers que Sainte-Rose ?',
        answer: 'Absolument ! Bien que notre école soit située dans le coeur du Vieux Sainte-Rose à Laval, nous accueillons des élèves de partout à Laval — Fabreville, Auteuil, Vimont, Chomedey, Laval-Ouest, Sainte-Dorothée — ainsi que des villes voisines comme Rosemère, Sainte-Thérèse, Boisbriand, Lorraine et Terrebonne. Notre emplacement central et le stationnement gratuit rendent l\'accès facile depuis toute la Rive-Nord.',
      },
    ],
  },
]

/* ─── All questions flat for FAQSchema ─── */
const allQuestions = faqCategories.flatMap((cat) =>
  cat.questions.map((q) => ({ question: q.question, answer: q.answer }))
)

/* ─── FAQ Accordion Item ─── */
function FaqItem({ item, isOpen, onToggle }: {
  item: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-lavender/50 py-5">
      <button
        onClick={onToggle}
        className="group w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-display font-semibold text-marine text-base md:text-lg transition-colors duration-200 group-hover:text-violet">
          {item.question}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 shrink-0 text-slate transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <p className="pt-3 text-slate text-sm md:text-base leading-relaxed max-w-[65ch]">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

/* ─── Main Page Component ─── */
export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('inscription')
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleQuestion = (key: string) => {
    setOpenIndex((prev) => (prev === key ? null : key))
  }

  const currentCategory = faqCategories.find((c) => c.id === activeCategory)

  return (
    <>
      <SEO
        title="Questions fréquentes — Cours de musique à Laval | École le Studio"
        description="Trouvez les réponses à vos questions sur les cours de musique à l'École le Studio, Sainte-Rose, Laval. Inscription, tarifs, politique d'annulation, spectacles et plus."
        path="/faq"
      />
      <FAQSchema questions={allQuestions} />

      <main className="bg-cream pt-28 pb-20">
        {/* ─── Hero / Header ─── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10">
          <Breadcrumbs items={[{ name: 'FAQ', url: '/faq' }]} />

          <h1
            className="font-display font-bold text-marine leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Questions fréquentes sur nos cours de musique
          </h1>
          <p
            className="mt-4 text-slate max-w-2xl leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}
          >
            Vous avez des questions sur l'inscription, les tarifs, le déroulement des cours ou les spectacles ? Trouvez rapidement toutes les réponses ci-dessous. Si votre question n'y figure pas, n'hésitez pas à nous contacter.
          </p>
        </section>

        {/* ─── Intro Paragraph (SEO-rich) ─── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-12 md:mt-16">
          <div
            className="bg-white rounded-2xl p-8 md:p-12"
            style={{
              boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
            }}
          >
            <div className="space-y-4 text-slate leading-relaxed max-w-[65ch]" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>
              <p>
                L'<strong className="text-marine">École le Studio</strong> offre des <strong className="text-marine">cours de musique à Sainte-Rose, Laval</strong> depuis plus de 20 ans. Que vous soyez un parent cherchant le meilleur cours de piano pour votre enfant, un adolescent rêvant de jouer de la guitare électrique, ou un adulte souhaitant découvrir le chant, nous avons les réponses à vos questions. Notre équipe de plus de 25 professeurs qualifiés accompagne plus de 425 élèves actifs avec une approche personnalisée et bienveillante.
              </p>
              <p>
                Parcourez les catégories ci-dessous pour trouver les informations dont vous avez besoin, ou <Link to="/nous-joindre" className="text-violet hover:text-violet-dark underline underline-offset-2 transition-colors duration-200">contactez-nous directement</Link> au <a href="tel:5146777713" className="text-violet hover:text-violet-dark underline underline-offset-2 transition-colors duration-200">514-677-7713</a> pour une réponse personnalisée.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Category Tabs + FAQ Accordion ─── */}
        <section className="max-w-4xl mx-auto px-6 md:px-10 mt-14 md:mt-20">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(null) }}
                className={`font-display font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-violet text-white'
                    : 'bg-lavender text-violet hover:bg-violet hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active Category Questions */}
          {currentCategory && (
            <div
              className="bg-white rounded-2xl p-6 md:p-10"
              style={{
                boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
              }}
            >
              <h2
                className="font-display font-bold text-marine mb-6"
                style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}
              >
                {currentCategory.label}
              </h2>
              {currentCategory.questions.map((item, i) => {
                const key = `${currentCategory.id}-${i}`
                return (
                  <FaqItem
                    key={key}
                    item={item}
                    isOpen={openIndex === key}
                    onToggle={() => toggleQuestion(key)}
                  />
                )
              })}
            </div>
          )}
        </section>

        {/* ─── All Categories (collapsed view for SEO) ─── */}
        <section className="max-w-4xl mx-auto px-6 md:px-10 mt-12 md:mt-16">
          <h2
            className="font-display font-bold text-marine text-center mb-10"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
          >
            Toutes les questions par catégorie
          </h2>

          <div className="space-y-8">
            {faqCategories.filter((c) => c.id !== activeCategory).map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-6 md:p-10"
                style={{
                  boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                <h3
                  className="font-display font-bold text-marine mb-4"
                  style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)' }}
                >
                  {cat.label}
                </h3>
                {cat.questions.map((item, i) => {
                  const key = `all-${cat.id}-${i}`
                  return (
                    <FaqItem
                      key={key}
                      item={item}
                      isOpen={openIndex === key}
                      onToggle={() => toggleQuestion(key)}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Still Have Questions ─── */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 mt-16 md:mt-24 text-center">
          <div
            className="bg-white rounded-2xl p-8 md:p-12"
            style={{
              boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
            }}
          >
            <div className="w-14 h-14 rounded-xl bg-lavender text-violet flex items-center justify-center mx-auto mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h2
              className="font-display font-bold text-marine mb-3"
              style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}
            >
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-slate max-w-md mx-auto mb-6" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>
              Notre équipe se fera un plaisir de répondre à toutes vos questions. Appelez-nous ou envoyez-nous un message — nous répondons dans les 24 à 48 heures.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/nous-joindre"
                className="inline-flex items-center gap-2 bg-violet hover:bg-violet-dark text-white font-display font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
                style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
              >
                Nous contacter
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:5146777713"
                className="inline-flex items-center gap-2 bg-lavender hover:bg-violet hover:text-white text-violet font-display font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
                style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                514-677-7713
              </a>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="max-w-4xl mx-auto px-6 md:px-10 mt-16 md:mt-24 text-center">
          <div className="bg-marine rounded-2xl p-10 md:p-16">
            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
            >
              Prêt à commencer ?
            </h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
              Inscrivez-vous dès aujourd'hui et bénéficiez d'un premier cours satisfait ou remboursé. Plus de 425 élèves nous font déjà confiance à Sainte-Rose, Laval.
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
              { label: 'Nous joindre', to: '/nous-joindre' },
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
