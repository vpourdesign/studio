import { useState } from 'react'
import SEO from './components/SEO'
import Breadcrumbs from './components/Breadcrumbs'
import MyMusicStaffForm from './components/MyMusicStaffForm'

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: 'Puis-je annuler mon inscription en tout temps ?',
    a: 'Le contrat peut être annulé en tout temps. Les frais d\'inscription et le matériel ne sont pas remboursables. Les leçons non suivies sont remboursées, sauf celles des deux dernières semaines de la session.',
  },
  {
    q: 'Comment fonctionnent les sessions ?',
    a: 'La session d\'automne compte 14 semaines de cours. La session hiver/printemps compte 22 semaines. Il est possible de s\'inscrire en cours de session, vous ne serez alors facturé que pour les leçons suivies.',
  },
  {
    q: 'Quels sont les frais d\'inscription ?',
    a: 'Les frais d\'inscription sont de 18,50 $ par famille, par session. Pour la session d\'été, il n\'y a aucun frais d\'inscription. Un cartable scolaire de 21,50 $ est requis lors de la première inscription.',
  },
  {
    q: 'Quels modes de paiement acceptez-vous ?',
    a: 'Nous acceptons les chèques, l\'argent comptant et les virements Interac par courriel. Les chèques postdatés mensuels sont autorisés. Le 1er paiement doit être effectué lors de la 1ère semaine de cours.',
  },
  {
    q: 'Que se passe-t-il si mon enfant est absent ?',
    a: 'En cas d\'absence de l\'élève, le cours ne pourra être ni reporté ni remboursé. Les minutes de retard ne sont pas récupérables. Si l\'élève présente des symptômes mineurs et souhaite suivre son cours en ligne, il peut le faire sur préavis.',
  },
  {
    q: 'Le premier cours est-il satisfait ou remboursé ?',
    a: 'Oui ! Si le 1er cours ne répondait pas à vos attentes, vous serez entièrement remboursé. Nous voulons que chaque élève se sente à l\'aise et motivé.',
  },
]

/* ─── FAQ Accordion Item ─── */
function FaqItem({ item }: { item: typeof faqItems[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-lavender/50 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="group w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-display font-semibold text-marine text-base md:text-lg transition-colors duration-200 group-hover:text-violet">
          {item.q}
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
          {item.a}
        </p>
      </div>
    </div>
  )
}


/* ─── Main Inscription Page ─── */
export default function Inscription() {

  return (
    <>
      <SEO
        title="Inscription en ligne | École le Studio — Cours de musique à Laval"
        description="Inscrivez-vous aux cours de musique de l'École le Studio à Sainte-Rose, Laval. Piano, guitare, chant, batterie, violon — formulaire rapide et premier cours satisfait ou remboursé."
        path="/inscription"
      />

      <main className="bg-cream min-h-screen">
        {/* ─── Hero Header ─── */}
        <div className="bg-violet relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet via-teal-dark to-violet opacity-90" />
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-yellow/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-coral/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16 pt-28 pb-16 md:pt-36 md:pb-20">
            <Breadcrumbs items={[{ name: 'Inscription', url: '/inscription' }]} />
            <h1
              className="font-display font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Demande d'inscription
            </h1>
            <p className="mt-4 text-white/70 max-w-[55ch] text-base md:text-lg">
              Remplissez ce formulaire rapide et un responsable de l'École le Studio vous contactera dans les plus brefs délais.
            </p>
          </div>
        </div>

        {/* ─── Main Content ─── */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* ─── Left Column: Form ─── */}
            <div className="lg:col-span-2">
              <div
                className="bg-white rounded-2xl p-4 md:p-6 lg:p-8"
                style={{
                  boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.05), 0 4px 12px oklch(30% 0.2 250 / 0.06), 0 16px 40px oklch(30% 0.2 250 / 0.04)',
                }}
              >
                <MyMusicStaffForm />
              </div>
            </div>

            {/* ─── Right Column: Info Sidebar ─── */}
            <div className="lg:col-span-1 space-y-6">
              {/* Why us card */}
              <div
                className="bg-white rounded-2xl p-6 md:p-8 sticky top-28"
                style={{
                  boxShadow: '0 1px 2px oklch(30% 0.2 250 / 0.05), 0 4px 12px oklch(30% 0.2 250 / 0.06)',
                }}
              >
                <h3 className="font-display font-bold text-marine text-lg mb-5">Pourquoi le Studio ?</h3>
                <ul className="space-y-4">
                  {[
                    { icon: '🎵', text: '1er cours satisfait ou remboursé' },
                    { icon: '👨‍🏫', text: 'Plus de 25 professeurs qualifiés' },
                    { icon: '📅', text: 'Inscription possible en tout temps' },
                    { icon: '🎯', text: 'Cours personnalisés pour tous les niveaux' },
                    { icon: '🏠', text: 'À Sainte-Rose depuis plus de 20 ans' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm text-slate leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-lavender">
                  <h4 className="font-display font-semibold text-marine text-sm mb-3">Nos tarifs</h4>
                  <div className="space-y-2">
                    {[
                      { dur: '30 min', price: '34,00 $' },
                      { dur: '45 min', price: '44,00 $' },
                      { dur: '60 min', price: '54,00 $' },
                    ].map((t) => (
                      <div key={t.dur} className="flex items-center justify-between text-sm">
                        <span className="text-slate">{t.dur}</span>
                        <span className="font-mono font-bold text-marine">{t.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate/50 mt-2">Par cours, par semaine</p>
                </div>

                <div className="mt-6 pt-6 border-t border-lavender">
                  <h4 className="font-display font-semibold text-marine text-sm mb-3">Contactez-nous</h4>
                  <div className="space-y-2.5">
                    <a href="tel:5146777713" className="flex items-center gap-2.5 text-sm text-slate hover:text-violet transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      514-677-7713
                    </a>
                    <a href="mailto:info@ecolelestudio.com" className="flex items-center gap-2.5 text-sm text-slate hover:text-violet transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      info@ecolelestudio.com
                    </a>
                    <div className="flex items-start gap-2.5 text-sm text-slate">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      191B Boul. Sainte-Rose, Laval
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Divider ─── */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16">
          <div className="h-px bg-lavender" />
        </div>

        {/* ─── FAQ Section ─── */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16 py-16 md:py-20">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            <div className="md:col-span-2">
              <div className="max-w-xs">
                <h2 className="font-display font-bold text-marine tracking-[-0.02em] leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  Questions<br />fréquentes
                </h2>
                <p className="mt-3 hidden md:block text-slate text-sm leading-relaxed">
                  Tout ce que vous devez savoir sur nos cours, inscriptions et politiques.
                </p>
              </div>
            </div>
            <div className="md:col-span-3">
              {faqItems.map((item) => (
                <FaqItem key={item.q} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* ─── Contact CTA ─── */}
        <div className="bg-marine py-16 md:py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16 text-center">
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Encore des questions ?
            </h2>
            <p className="text-white/60 mb-8 max-w-[40ch] mx-auto">
              N'hésitez pas à nous contacter. Notre équipe se fera un plaisir de vous aider.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5146777713" className="inline-flex items-center gap-2 bg-white text-marine font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                514-677-7713
              </a>
              <a href="mailto:info@ecolelestudio.com" className="inline-flex items-center gap-2 bg-violet text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 hover:bg-teal-dark hover:-translate-y-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@ecolelestudio.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
