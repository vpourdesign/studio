import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO, { FAQSchema } from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

/* ─── Contact FAQ Data ─── */
const faqQuestions = [
  {
    question: 'Quels sont les horaires de l\'école de musique ?',
    answer: 'L\'École le Studio est ouverte du lundi au vendredi de 9 h à 21 h, et le samedi de 9 h à 17 h. Les cours sont offerts selon les disponibilités de nos professeurs et de nos élèves.',
  },
  {
    question: 'Combien de temps prend le traitement d\'une demande ?',
    answer: 'Nous répondons à toutes les demandes dans un délai de 24 à 48 heures ouvrables. Pour une réponse plus rapide, n\'hésitez pas à nous appeler directement au 514-677-7713.',
  },
  {
    question: 'Peut-on visiter l\'école avant de s\'inscrire ?',
    answer: 'Bien sûr ! Nous vous invitons à visiter nos locaux à Sainte-Rose pour découvrir nos studios et rencontrer notre équipe. Appelez-nous pour planifier votre visite.',
  },
]

/* ─── Instruments for Select ─── */
const instruments = [
  'Piano',
  'Guitare',
  'Chant',
  'Batterie',
  'Violon',
  'Basse',
  'Ukulélé',
  'Autre / Je ne sais pas encore',
]

/* ─── Areas Served ─── */
const areasServed = [
  'Sainte-Rose',
  'Fabreville',
  'Auteuil',
  'Vimont',
  'Chomedey',
  'Laval-Ouest',
  'Rosemère',
  'Sainte-Thérèse',
  'Boisbriand',
  'Sainte-Dorothée',
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
export default function NousJoindre() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instrument: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contactez-nous | École le Studio — Sainte-Rose, Laval"
        description="Contactez l'École le Studio à Sainte-Rose, Laval. Appelez le 514-677-7713 ou visitez-nous au 191B Boulevard Sainte-Rose. Cours de piano, guitare, chant, batterie et violon."
        path="/nous-joindre"
      />
      <FAQSchema questions={faqQuestions} />

      <main className="bg-cream pt-28 pb-20">
        {/* ─── Hero / Header ─── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10">
          <Breadcrumbs items={[{ name: 'Nous joindre', url: '/nous-joindre' }]} />

          <h1
            className="font-display font-bold text-marine leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Contactez l'École le Studio à Laval
          </h1>
          <p
            className="mt-4 text-slate max-w-2xl leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}
          >
            Une question sur nos cours de musique ? Envie de vous inscrire ou de planifier une visite ? Notre équipe est là pour vous accompagner dans votre démarche musicale à Sainte-Rose, Laval.
          </p>
        </section>

        {/* ─── Two-Column: Form + Contact Info ─── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-12 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Contact Form */}
            <div
              className="bg-white rounded-2xl p-8 md:p-10"
              style={{
                boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
              }}
            >
              <h2
                className="font-display font-bold text-marine mb-6"
                style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}
              >
                Envoyez-nous un message
              </h2>

              {submitted ? (
                <div className="bg-lavender rounded-xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-violet/10 text-violet flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-marine text-lg mb-2">Message envoy&eacute; !</h3>
                  <p className="text-slate text-sm leading-relaxed">Merci pour votre message. Nous vous r&eacute;pondrons dans un d&eacute;lai de 24 &agrave; 48 heures ouvrables.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-marine mb-1.5">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-cream border border-lavender rounded-xl px-4 py-3 text-marine placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet transition-colors duration-200"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-marine mb-1.5">Courriel *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-cream border border-lavender rounded-xl px-4 py-3 text-marine placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet transition-colors duration-200"
                        placeholder="votre@courriel.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-marine mb-1.5">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-cream border border-lavender rounded-xl px-4 py-3 text-marine placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet transition-colors duration-200"
                        placeholder="514-555-1234"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="instrument" className="block text-sm font-medium text-marine mb-1.5">Instrument d'int&eacute;r&ecirc;t</label>
                    <select
                      id="instrument"
                      name="instrument"
                      value={formData.instrument}
                      onChange={handleChange}
                      className="w-full bg-cream border border-lavender rounded-xl px-4 py-3 text-marine focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet transition-colors duration-200 appearance-none"
                    >
                      <option value="">Choisir un instrument</option>
                      {instruments.map((inst) => (
                        <option key={inst} value={inst}>{inst}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-marine mb-1.5">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-cream border border-lavender rounded-xl px-4 py-3 text-marine placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet transition-colors duration-200 resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-violet hover:bg-violet-dark text-white font-display font-semibold px-8 py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                    style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
                  >
                    Envoyer le message
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-6">
              {/* Contact Details Card */}
              <div
                className="bg-white rounded-2xl p-8 md:p-10"
                style={{
                  boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                <h2
                  className="font-display font-bold text-marine mb-6"
                  style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}
                >
                  Nos coordonnées
                </h2>

                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-lavender text-violet flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-marine text-sm">Adresse</p>
                      <p className="text-slate text-sm leading-relaxed">191B Boulevard Sainte-Rose<br />Laval, QC H7L 1L5</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-lavender text-violet flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-marine text-sm">Téléphone</p>
                      <a href="tel:5146777713" className="text-violet hover:text-violet-dark text-sm underline underline-offset-2 transition-colors duration-200">
                        514-677-7713
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-lavender text-violet flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-marine text-sm">Courriel</p>
                      <a href="mailto:info@ecolelestudio.com" className="text-violet hover:text-violet-dark text-sm underline underline-offset-2 transition-colors duration-200">
                        info@ecolelestudio.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-lavender text-violet flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-marine text-sm">Heures d'ouverture</p>
                      <div className="text-slate text-sm leading-relaxed space-y-0.5">
                        <p>Lundi au vendredi : 9 h &agrave; 21 h</p>
                        <p>Samedi : 9 h &agrave; 17 h</p>
                        <p>Dimanche : Ferm&eacute;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div
                className="bg-white rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                <iframe
                  title="Carte — École le Studio, 191B Boulevard Sainte-Rose, Laval"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.5!2d-73.7847!3d45.6125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM2JzQ1LjAiTiA3M8KwNDcnMDQuOSJX!5e0!3m2!1sfr!2sca!4v1700000000000!5m2!1sfr!2sca"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comment nous trouver ─── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-16 md:mt-24">
          <div
            className="bg-white rounded-2xl p-8 md:p-12"
            style={{
              boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
            }}
          >
            <h2
              className="font-display font-bold text-marine mb-6"
              style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}
            >
              Comment nous trouver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)' }}>
              <div>
                <h3 className="font-display font-bold text-marine text-base mb-2">En voiture</h3>
                <p>
                  L'École le Studio est situ&eacute;e sur le boulevard Sainte-Rose, &agrave; deux pas de l'&eacute;glise Sainte-Rose-de-Lima et du Vieux Sainte-Rose. Stationnement gratuit disponible directement devant l'&eacute;cole et dans les rues avoisinantes. Acc&egrave;s facile depuis l'autoroute 15 (sortie boulevard Sainte-Rose) et l'autoroute 440.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-marine text-base mb-2">En transport en commun</h3>
                <p>
                  Plusieurs lignes d'autobus de la STL desservent le secteur Sainte-Rose. L'arr&ecirc;t le plus proche se trouve &agrave; quelques minutes de marche sur le boulevard Sainte-Rose. Consultez le site de la STL pour planifier votre trajet depuis Fabreville, Auteuil, Chomedey ou tout autre quartier de Laval.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-marine text-base mb-2">Rep&egrave;res utiles</h3>
                <p>
                  Nous sommes situ&eacute;s dans le c&oelig;ur historique du Vieux Sainte-Rose, &agrave; proximit&eacute; de la biblioth&egrave;que Sylvain-Garneau, du parc Sainte-Rose et de la rivi&egrave;re des Mille &Icirc;les. L'&eacute;cole se trouve dans un b&acirc;timent commercial au 191B, facilement identifiable depuis la rue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Secteurs desservis ─── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-16 md:mt-24">
          <h2
            className="font-display font-bold text-marine text-center mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
          >
            Secteurs desservis
          </h2>
          <p className="text-slate text-center max-w-xl mx-auto mb-10" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
            L'École le Studio accueille des élèves de tout Laval et des municipalités voisines de la Rive-Nord. Voici les principaux secteurs que nous desservons.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {areasServed.map((area) => (
              <span
                key={area}
                className="bg-lavender text-violet font-display font-semibold text-sm px-5 py-2.5 rounded-xl"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="text-slate text-center mt-6 max-w-lg mx-auto text-sm leading-relaxed">
            Vous habitez un autre secteur de Laval ou de la Rive-Nord ? N'hésitez pas à nous contacter — plusieurs de nos élèves viennent de Terrebonne, Mascouche, Lorraine et Saint-Eustache.
          </p>
        </section>

        {/* ─── FAQ ─── */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 mt-16 md:mt-24">
          <h2
            className="font-display font-bold text-marine text-center mb-10"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
          >
            Questions fréquentes
          </h2>

          <div
            className="bg-white rounded-2xl p-6 md:p-10"
            style={{
              boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
            }}
          >
            {faqQuestions.map((item) => (
              <FaqItem key={item.question} item={item} />
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="max-w-4xl mx-auto px-6 md:px-10 mt-16 md:mt-24 text-center">
          <div className="bg-marine rounded-2xl p-10 md:p-16">
            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
            >
              Prêt à commencer votre parcours musical ?
            </h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
              Inscrivez-vous dès maintenant et profitez d'un premier cours satisfait ou remboursé. Notre équipe de professeurs passionnés vous attend à Sainte-Rose.
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
              { label: 'Tarifs & inscription', to: '/inscription' },
              { label: 'Nos professeurs', to: '/nos-professeurs' },
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
