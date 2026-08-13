import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import heroBg from './assets/photos/hero-piano-queue-1920w.webp'
import heroBgSmall from './assets/photos/hero-piano-queue-1280w.webp'
import imgPiano from './assets/piano.png'
import imgChant from './assets/chant.png'
import imgGuitare from './assets/guitare.png'
import imgViolon from './assets/violon.png'
import imgBatterie from './assets/batterie.png'
import megaBg from './assets/photos/megamenu-studio-clair.webp'
import HeroCanvas from './HeroCanvas'
import imgVieux from './assets/vieux.webp'
import imgBen from './assets/ben.jpg'
import Footer from './components/Footer'
import SEO, { LocalBusinessSchema } from './components/SEO'

/* ─── Lazy Pages ─── */
const Inscription = lazy(() => import('./Inscription'))
const Capsules = lazy(() => import('./Capsules'))
const CoursInstrument = lazy(() => import('./pages/CoursInstrument'))
const Professeurs = lazy(() => import('./pages/Professeurs'))
const Tarifs = lazy(() => import('./pages/Tarifs'))
const NousJoindre = lazy(() => import('./pages/NousJoindre'))
const Temoignages = lazy(() => import('./pages/Temoignages'))
const FAQ = lazy(() => import('./pages/FAQ'))
const NosLocaux = lazy(() => import('./pages/NosLocaux'))

/* ─── Scroll to top on route change ─── */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/* ─── Instrument SVG Icons ─── */
function IconGuitar({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 4l-4 4-2-2-8 8c-4 4-4 10 0 14s10 4 14 0l8-8-2-2 4-4-2-2-4 4-2-2 4-4-2-2-4 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="22" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}
function IconPiano({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="8" x2="12" y2="32" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="20" y1="8" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="28" y1="8" x2="28" y2="32" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="9" y="8" width="4" height="14" rx="1" fill="currentColor" opacity="0.3"/>
      <rect x="17" y="8" width="4" height="14" rx="1" fill="currentColor" opacity="0.3"/>
      <rect x="25" y="8" width="4" height="14" rx="1" fill="currentColor" opacity="0.3"/>
    </svg>
  )
}
function IconMic({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="4" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 20a12 12 0 0024 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="32" x2="20" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="38" x2="26" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
function IconViolin({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="26" rx="8" ry="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 22c2 2 6 2 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20" y1="4" x2="20" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 26h12" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    </svg>
  )
}
function IconDrums({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="14" rx="14" ry="5" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 14v12c0 2.8 6.3 5 14 5s14-2.2 14-5V14" stroke="currentColor" strokeWidth="2"/>
      <line x1="6" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <line x1="4" y1="6" x2="14" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="36" y1="6" x2="26" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="4" cy="5" r="2" fill="currentColor" opacity="0.5"/>
      <circle cx="36" cy="5" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  )
}

/* ─── Mega Menu Content ─── */
function MegaMenu() {
  const instruments = [
    { name: 'Guitare', Icon: IconGuitar, to: '/cours-de-guitare' },
    { name: 'Piano', Icon: IconPiano, to: '/cours-de-piano' },
    { name: 'Chant', Icon: IconMic, to: '/cours-de-chant' },
    { name: 'Violon', Icon: IconViolin, to: '/cours-de-violon' },
    { name: 'Batterie', Icon: IconDrums, to: '/cours-de-batterie' },
  ]
  return (
    <div className="absolute top-full left-0 right-0 z-50" style={{ marginTop: 0 }}>
      <div className="relative overflow-hidden rounded-b-2xl mx-6 md:mx-12 xl:mx-16" style={{
        boxShadow: '0 12px 48px rgba(26,31,75,0.15), 0 32px 80px rgba(26,31,75,0.08)',
      }}>
        {/* Photo du studio, assombrie pour porter la typo blanche */}
        <div className="absolute inset-0">
          <img src={megaBg} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" width={1200} height={801} />
          <div className="absolute inset-0 bg-teal-dark/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/85 via-teal-dark/78 to-teal-dark/68" />
        </div>

        {/* Content grid */}
        <div className="relative z-10 grid grid-cols-[1fr_1fr] gap-0 min-h-[340px]">
          {/* Col 1 — Par instrument */}
          <div className="p-7 xl:p-9 border-r border-white/12">
            <h3 className="font-display font-bold text-white/45 text-xs uppercase tracking-[0.15em] mb-5">Par instrument</h3>
            <ul className="space-y-3.5 max-w-sm">
              {instruments.map(({ name, Icon, to }) => (
                <li key={name}>
                  <Link to={to} className="group flex items-center gap-4 text-white font-medium text-lg transition-all duration-300 hover:translate-x-2">
                    <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-teal-dark">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-display font-semibold">{name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-70 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — Featured CTA */}
          <div className="p-7 xl:p-9 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-white/45 text-xs uppercase tracking-[0.15em] mb-6">Mise en avant</h3>
              <h4 className="font-display font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                Trouvez votre instrument
              </h4>
              <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-[34ch]">
                Explorez nos cours adaptés à tous les âges et tous les niveaux. Premier cours d'essai offert.
              </p>
            </div>
            <Link to="/tarifs" className="inline-flex items-center gap-2 bg-white text-teal-dark font-semibold text-sm px-6 py-3.5 rounded-lg w-fit transition-all duration-300 hover:bg-yellow hover:-translate-y-px" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
              Voir tous les cours
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link to="/nos-locaux" className="mt-4 inline-flex items-center gap-1.5 text-white/60 text-sm font-medium w-fit transition-colors duration-300 hover:text-white">
              Visitez nos locaux
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Navigation (overlaid on hero, sticky after scroll) ─── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // On non-home pages, nav is always solid
  const isTransparent = isHome && !scrolled

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md'
      }`}
      style={{
        boxShadow: !isTransparent ? '0 2px 20px rgba(26,31,75,0.08)' : 'none',
      }}
    >
      {/* Utility info bar — visible only when scrolled or on inner pages */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          !isTransparent ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16 flex items-center justify-between py-1.5 text-xs text-slate">
          <div className="flex items-center gap-5">
            <a href="tel:5146777713" className="flex items-center gap-1 hover:text-violet transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              514-677-7713
            </a>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              191B Boul. Sainte-Rose, Laval
            </span>
          </div>
          <a href="https://www.facebook.com/ecolelestudio" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5">
          <span className={`font-display font-bold text-xl md:text-2xl tracking-tight transition-colors duration-500 ${isTransparent ? 'text-white' : 'text-marine'}`}>
            Le Studio
          </span>
          <span className="w-2 h-2 rounded-full bg-coral" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <div
            className="static"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className={`font-inter font-medium text-[0.875rem] transition-colors duration-300 flex items-center gap-1 h-16 md:h-20 ${
                isTransparent
                  ? (megaOpen ? 'text-yellow' : 'text-white/90 hover:text-white')
                  : (megaOpen ? 'text-violet' : 'text-marine hover:text-violet')
              }`}
            >
              Nos cours
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {megaOpen && <MegaMenu />}
          </div>
          {[
            { label: 'Nos professeurs', to: '/nos-professeurs' },
            { label: 'Tarifs', to: '/tarifs' },
            { label: 'Témoignages', to: '/temoignages' },
            { label: 'Nous joindre', to: '/nous-joindre' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`font-inter font-medium text-[0.875rem] transition-colors duration-300 ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-marine hover:text-violet'
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* Inscription pill */}
          <Link
            to="/inscription"
            className={`ml-2 flex items-center gap-2 px-5 py-2.5 rounded-full font-inter font-medium text-sm transition-all duration-300 ${
              isTransparent
                ? 'bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/25'
                : 'bg-coral text-white hover:bg-coral-dark'
            }`}
          >
            Inscription
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-full transition-all duration-300 ${
            isTransparent ? 'bg-white/15 backdrop-blur-sm text-white border border-white/20' : 'text-marine'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-lavender/50 px-6 py-6 space-y-4">
          {[
            { label: 'Cours de piano', to: '/cours-de-piano' },
            { label: 'Cours de guitare', to: '/cours-de-guitare' },
            { label: 'Cours de chant', to: '/cours-de-chant' },
            { label: 'Cours de batterie', to: '/cours-de-batterie' },
            { label: 'Cours de violon', to: '/cours-de-violon' },
            { label: 'Nos professeurs', to: '/nos-professeurs' },
            { label: 'Nos locaux', to: '/nos-locaux' },
            { label: 'Tarifs', to: '/tarifs' },
            { label: 'Témoignages', to: '/temoignages' },
            { label: 'FAQ', to: '/faq' },
            { label: 'Nous joindre', to: '/nous-joindre' },
          ].map((item) => (
            <Link key={item.label} to={item.to} className="block font-inter font-medium text-marine text-base py-2 border-b border-lavender/30 transition-colors duration-200 hover:text-violet">{item.label}</Link>
          ))}
          <Link to="/inscription" className="block bg-coral text-white font-medium text-center py-3 rounded-md mt-4 transition-colors duration-200 hover:bg-coral-dark">
            Inscription
          </Link>
        </div>
      )}
    </nav>
  )
}

/* ─── Hero Section — Full screen, eticalgarve-inspired ─── */
function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-teal-dark overflow-hidden">
      {/* Full-screen background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          srcSet={`${heroBgSmall} 1280w, ${heroBg} 1920w`}
          sizes="100vw"
          width={1920}
          height={1282}
          alt="Studio de piano à queue de l'École le Studio, à Sainte-Rose, Laval"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-dark/85 via-teal-dark/75 to-teal-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/70 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow/15 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-yellow/10 blur-3xl" />
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <HeroCanvas />

      {/* Bottom-left white cutout */}
      <div className="absolute bottom-0 left-0 z-20">
        <div className="relative">
          <div className="bg-cream px-6 md:px-10 pt-6 pb-8 md:pt-8 md:pb-10 max-w-sm md:max-w-md lg:max-w-lg rounded-tr-3xl origin-bottom-left transition-transform duration-500 hover:scale-115" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <h2
              className="font-display font-extrabold text-marine leading-[1.1] tracking-[-0.02em] mb-3"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
            >
              La musique pour tous
            </h2>
            <p className="text-slate text-sm leading-relaxed mb-6 max-w-[40ch]">
              Cours de piano, guitare, chant, batterie et violon pour enfants et adultes. Sainte-Rose, Laval.
            </p>
            <Link
              to="/inscription"
              className="inline-flex items-center gap-2 bg-marine text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:bg-violet hover:-translate-y-px active:translate-y-px"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Inscrivez-vous
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom-right floating CTA pill */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20">
        <Link
          to="/inscription"
          className="inline-flex items-center gap-2 bg-coral text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:bg-coral-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          Inscription
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </Link>
      </div>

      {/* Center hero branding */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center">
          <h1
            className="font-display font-extrabold text-white leading-[0.95] tracking-[-0.04em] opacity-90"
            style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
          >
            Le Studio
          </h1>
          <p className="font-inter text-white/50 text-sm md:text-base mt-4 tracking-widest uppercase">
            École de musique à Ste-Rose, Laval
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/40 text-xs font-inter italic">
        scroll down
      </div>
    </section>
  )
}

/* ─── Course Cards ─── */
const courses = [
  { name: 'Batterie', img: imgBatterie, color: '#383838', slug: 'batterie' },
  { name: 'Violon', img: imgViolon, color: '#6B7F82', slug: 'violon' },
  { name: 'Guitare', img: imgGuitare, color: '#4D5C60', slug: 'guitare' },
  { name: 'Chant', img: imgChant, color: '#8A8A6E', slug: 'chant' },
  { name: 'Piano', img: imgPiano, color: '#525266', slug: 'piano' },
]

function CoursesGrid() {
  return (
    <section id="cours" className="bg-cream py-16 md:py-24 xl:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16">
        <div className="mb-8 md:mb-12 xl:mb-14">
          <h2
            className="font-display font-bold text-marine tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Nos cours de musique à Laval
          </h2>
          <p className="mt-3 text-slate max-w-[50ch]" style={{ fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
            Explorez notre offre complète de cours de musique pour enfants et adultes à Sainte-Rose, Laval.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.name} course={course} tall />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {courses.slice(3).map((course) => (
            <CourseCard key={course.name} course={course} tall={false} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CourseCard({ course, tall }: { course: typeof courses[0]; tall: boolean }) {
  return (
    <Link
      to={`/cours-de-${course.slug}`}
      className="group relative block overflow-hidden rounded-2xl"
      style={{ height: tall ? 'clamp(280px, 30vw, 380px)' : 'clamp(240px, 25vw, 320px)', backgroundColor: course.color }}
    >
      <img
        src={course.img}
        alt={`Cours de ${course.name.toLowerCase()} à Laval — École le Studio`}
        className="absolute inset-0 w-full h-full object-cover opacity-30 transition-all duration-700 group-hover:opacity-40 group-hover:scale-105"
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        loading="lazy"
        decoding="async"
        width={900}
        height={601}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
        <h3
          className="font-display font-extrabold text-white leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
        >
          {course.name}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-white/80 text-sm font-medium mt-2 transition-all duration-300 group-hover:text-white group-hover:gap-2.5">
          Découvrir
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </span>
      </div>
    </Link>
  )
}

/* ─── SEO Content Block (hidden visual but crawlable) ─── */
function HomeSEOContent() {
  return (
    <section className="bg-yellow py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16">
        <div className="max-w-3xl">
          <h2
            className="font-display font-bold text-marine tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            École de musique à Laval — Cours pour tous les âges à Sainte-Rose
          </h2>
          <div className="text-slate leading-relaxed space-y-4" style={{ fontSize: 'clamp(0.9375rem, 1.4vw, 1.0625rem)' }}>
            <p>
              L'École le Studio est une <strong>école de musique à Sainte-Rose, Laval</strong>, offrant des <strong>cours de piano, guitare, chant, batterie et violon</strong> depuis plus de 20 ans. Fondée par le musicien Benoit Girard, notre école accueille des élèves de tous les âges — des enfants dès 4 ans aux adultes — dans un environnement chaleureux et professionnel.
            </p>
            <p>
              Avec plus de <strong>25 professeurs qualifiés</strong> et plus de <strong>5 000 cours dispensés chaque année</strong>, l'École le Studio est la référence en matière de <strong>cours de musique à Laval</strong>. Notre approche pédagogique personnalisée permet à chaque élève d'apprendre la musique selon ses goûts — que ce soit le classique, le jazz, le pop, le rock ou le blues.
            </p>
            <p>
              Située au 191B boulevard Sainte-Rose, notre école est facilement accessible depuis <strong>Fabreville, Auteuil, Vimont, Chomedey, Rosemère, Sainte-Thérèse</strong> et les quartiers avoisinants. Un stationnement gratuit est disponible sur place. Nous offrons des <strong>cours de musique pour enfants à Laval</strong>, des cours pour adolescents et des <strong>cours de musique pour adultes</strong>.
            </p>
            <p>
              Que vous cherchiez des <strong>cours de piano à Laval</strong>, des <strong>cours de guitare pour débutants</strong>, des <strong>leçons de chant</strong>, des <strong>cours de batterie</strong> ou des <strong>cours de violon</strong>, notre équipe de professeurs passionnés vous accompagnera dans votre parcours musical. Chaque session se conclut par des spectacles où les élèves se produisent devant leur famille et amis.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/inscription" className="inline-flex items-center gap-2 bg-coral text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:bg-coral-dark">
              S'inscrire maintenant
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link to="/tarifs" className="inline-flex items-center gap-2 text-violet font-semibold text-sm px-6 py-3 rounded-lg border border-violet/20 transition-all duration-300 hover:bg-violet hover:text-white">
              Voir nos tarifs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Stats Section ─── */
const stats = [
  { num: '~20', label: "années d'expérience" },
  { num: '+15 000', label: 'heures de cours (Benoit Girard)' },
  { num: '+5 000', label: 'cours par année' },
  { num: '+425', label: 'élèves actifs' },
  { num: '+25', label: 'professeurs qualifiés' },
  { num: '+100', label: 'heures de spectacles étudiants' },
]

function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-marine py-16 md:py-20 xl:py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-lavender/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow/8 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16 relative z-10">
        <h2
          className="font-display font-bold text-white text-center tracking-[-0.03em] mb-8 md:mb-12 xl:mb-14"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        >
          Le Studio en chiffres
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-12 xl:gap-x-16 gap-y-8 md:gap-y-10 xl:gap-y-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 100}ms`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                className="font-display font-extrabold text-yellow leading-none mb-2"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                {stat.num}
              </div>
              <div className="text-white/70 text-sm font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Vieux Sainte-Rose Section ─── */
function VieuxSteRose() {
  return (
    <section className="bg-lavender py-20 md:py-28 xl:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ backgroundColor: '#525266' }}
            >
              <img
                src={imgVieux}
                alt="Le Vieux-Sainte-Rose, Laval — quartier de l'École le Studio"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-marine text-sm font-semibold px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Laval, Québec
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="font-display font-extrabold text-white text-3xl md:text-4xl leading-[1.05] tracking-[-0.02em]">
                  Vieux-Sainte-Rose
                </h3>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-violet text-sm font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-violet" />
              Notre quartier
            </span>
            <h2
              className="font-display font-extrabold text-marine leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Une école au cœur<br />
              d'un quartier <span className="text-violet">inspirant</span>
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              Nichée au 191B boulevard Sainte-Rose, notre école de musique se trouve dans l'un des quartiers les plus charmants de Laval. Le Vieux-Sainte-Rose, avec ses rues bordées d'arbres, ses cafés et ses galeries, offre un cadre inspirant pour l'apprentissage de la musique.
            </p>
            <p className="text-slate leading-relaxed mb-8">
              Nous servons une clientèle provenant de Laval, Sainte-Rose, Auteuil, Rosemère, Fabreville et Sainte-Dorothée. Un stationnement gratuit est disponible sur place.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://maps.google.com/?q=191B+Boulevard+Sainte-Rose+Laval+QC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-all duration-300 hover:bg-violet-dark hover:-translate-y-px"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Voir sur la carte
              </a>
              <span className="text-slate/70 text-sm">191B Boul. Sainte-Rose, Laval</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Fondateur Section ─── */
function Fondateur() {
  return (
    <section className="bg-marine relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-lavender/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow/8 blur-3xl translate-y-1/2" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16 py-16 md:py-24 xl:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-yellow text-sm font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-yellow" />
              Le fondateur
            </span>
            <h2
              className="font-display font-extrabold text-white leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
            >
              Benoit Girard
            </h2>
            <p className="text-white/70 leading-relaxed mb-5">
              Anciennement connue sous le nom d'École de Guitare Benoit Girard, l'école porte l'héritage d'un musicien passionné qui a consacré sa carrière à l'enseignement de la musique à Laval.
            </p>
            <p className="text-white/70 leading-relaxed mb-5">
              Avec près de 20 ans d'expérience et plus de 15 000 heures de cours à son actif, Benoit a formé des centaines d'élèves de tous âges. Sa philosophie : un apprentissage basé sur le plaisir et le dépassement de soi.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Aujourd'hui, l'école qu'il a fondée compte plus de 25 professeurs qualifiés et accueille plus de 425 élèves actifs chaque année à Sainte-Rose.
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { num: '15 000+', label: 'heures de cours' },
                { num: '20 ans', label: "d'expérience" },
                { num: '1 000+', label: 'élèves formés' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-yellow text-2xl">{stat.num}</div>
                  <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-xs md:max-w-sm lg:max-w-md lg:ml-auto" style={{
              boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
            }}>
              <img
                src={imgBen}
                alt="Benoit Girard, fondateur de l'École le Studio à Sainte-Rose, Laval"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-marine/60 via-transparent to-teal/10" />
            </div>
            <div
              className="absolute -bottom-6 -left-6 lg:-left-12 bg-white rounded-2xl p-6 max-w-xs"
              style={{ boxShadow: '0 4px 24px rgba(26,31,75,0.12)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-violet/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="font-inter text-marine text-sm leading-relaxed italic">
                La musique, c'est le plaisir d'apprendre et le dépassement de soi. Chaque élève mérite un enseignement à son image.
              </p>
              <div className="mt-3 font-display font-bold text-marine text-sm">Benoit Girard</div>
              <div className="text-slate text-xs">Fondateur, École le Studio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Homepage ─── */
function HomePage() {
  return (
    <>
      <SEO
        title="École de musique à Laval | Cours piano, guitare, chant — Le Studio"
        description="École de musique à Sainte-Rose, Laval. Cours de piano, guitare, chant, batterie et violon pour tous les âges. +20 ans d'expérience, 25+ professeurs qualifiés. Inscrivez-vous!"
        path="/"
      />
      <LocalBusinessSchema />
      <Hero />
      <CoursesGrid />
      <HomeSEOContent />
      <VieuxSteRose />
      <Fondateur />
      <StatsSection />
    </>
  )
}

/* ─── App ─── */
function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Suspense fallback={<div className="min-h-screen bg-cream" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/capsules-videos" element={<Capsules />} />
          <Route path="/cours-de-piano" element={<CoursInstrument slug="piano" />} />
          <Route path="/cours-de-guitare" element={<CoursInstrument slug="guitare" />} />
          <Route path="/cours-de-chant" element={<CoursInstrument slug="chant" />} />
          <Route path="/cours-de-batterie" element={<CoursInstrument slug="batterie" />} />
          <Route path="/cours-de-violon" element={<CoursInstrument slug="violon" />} />
          <Route path="/nos-professeurs" element={<Professeurs />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/nous-joindre" element={<NousJoindre />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/nos-locaux" element={<NosLocaux />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
