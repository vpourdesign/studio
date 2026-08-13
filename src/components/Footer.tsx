import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-marine text-white/70 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-lavender/8 blur-3xl -translate-y-1/2 translate-x-1/3" />

      {/* Main footer */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16 pt-16 md:pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="flex items-center gap-1.5 mb-5">
              <span className="font-display font-bold text-white text-xl tracking-tight">Le Studio</span>
              <span className="w-2 h-2 rounded-full bg-coral" />
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              École de musique à Sainte-Rose, Laval. Cours de piano, guitare, chant, batterie et violon pour tous les âges depuis plus de 20 ans.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ecolelestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors duration-300 hover:bg-violet hover:text-white"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/ecolelestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors duration-300 hover:bg-violet hover:text-white"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Nos cours */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Nos cours</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Cours de piano', to: '/cours-de-piano' },
                { label: 'Cours de guitare', to: '/cours-de-guitare' },
                { label: 'Cours de chant', to: '/cours-de-chant' },
                { label: 'Cours de batterie', to: '/cours-de-batterie' },
                { label: 'Cours de violon', to: '/cours-de-violon' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-yellow transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — L'école */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">L'école</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Nos professeurs', to: '/nos-professeurs' },
                { label: 'Nos locaux', to: '/nos-locaux' },
                { label: 'Tarifs et inscription', to: '/tarifs' },
                { label: 'Témoignages', to: '/temoignages' },
                { label: 'Questions fréquentes', to: '/faq' },
                { label: 'Capsules vidéos', to: '/capsules-videos' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-yellow transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Contactez-nous</h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>191B Boulevard Sainte-Rose<br />Laval, QC H7L 1L5</span>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:5146777713" className="hover:text-yellow transition-colors duration-300">514-677-7713</a>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@ecolelestudio.com" className="hover:text-yellow transition-colors duration-300">info@ecolelestudio.com</a>
              </div>
            </address>
            <Link
              to="/nous-joindre"
              className="inline-flex items-center gap-2 mt-5 bg-violet text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:bg-violet-dark"
            >
              Nous joindre
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} École le Studio. Tous droits réservés. École de musique à Laval, Sainte-Rose.
            </p>
            <div className="flex items-center gap-6 text-xs text-white/40">
              <span>Sainte-Rose &middot; Fabreville &middot; Auteuil &middot; Vimont &middot; Chomedey &middot; Rosemère</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
