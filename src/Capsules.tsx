import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from './components/SEO'
import Breadcrumbs from './components/Breadcrumbs'

const videos = [
  {
    url: 'https://www.facebook.com/share/r/1BLT6eKa5R/',
    title: 'Capsule 1',
  },
  {
    url: 'https://www.facebook.com/share/r/1Cbj4iy3d2/',
    title: 'Capsule 2',
  },
  {
    url: 'https://www.facebook.com/share/r/17TVDDrMwm/',
    title: 'Capsule 3',
  },
  {
    url: 'https://www.facebook.com/share/r/1BAnYgNRzE/',
    title: 'Capsule 4',
  },
]

function FacebookEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Re-parse FB embeds when component mounts
    if (window.FB) {
      window.FB.XFBML.parse(containerRef.current ?? undefined)
    }
  }, [url])

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <div
        className="fb-video"
        data-href={url}
        data-width="auto"
        data-show-text="false"
        data-allowfullscreen="true"
      />
    </div>
  )
}

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: (el?: HTMLElement) => void
      }
    }
    fbAsyncInit?: () => void
  }
}

export default function Capsules() {
  useEffect(() => {
    // Load Facebook SDK if not already loaded
    if (document.getElementById('facebook-jssdk')) {
      // SDK already in DOM, just re-parse
      if (window.FB) {
        window.FB.XFBML.parse()
      }
      return
    }

    window.fbAsyncInit = function () {
      window.FB?.XFBML.parse()
    }

    const script = document.createElement('script')
    script.id = 'facebook-jssdk'
    script.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v21.0'
    script.async = true
    script.defer = true
    script.crossOrigin = 'anonymous'
    document.body.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen bg-cream pt-28 pb-20">
      <SEO
        title="Capsules vidéos — Performances et conseils | École le Studio, Laval"
        description="Regardez nos capsules vidéos : performances d'élèves, conseils de nos professeurs de musique et moments forts à l'École le Studio, Sainte-Rose, Laval."
        path="/capsules-videos"
      />
      {/* ─── Header ─── */}
      <section className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <div className="flex justify-center mb-6">
          <Breadcrumbs items={[{ name: 'Capsules vidéos', url: '/capsules-videos' }]} />
        </div>
        <span className="inline-block font-mono text-xs tracking-widest uppercase text-violet mb-4">
          Nos capsules
        </span>
        <h1
          className="font-display font-bold text-marine leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
        >
          Capsules vidéos
        </h1>
        <p
          className="text-slate max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)' }}
        >
          Découvrez nos capsules vidéos : performances d'élèves, conseils de nos professeurs
          et moments forts de la vie à l'école.
        </p>
      </section>

      {/* ─── Video Grid ─── */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white"
              style={{
                boxShadow:
                  '0 1px 2px oklch(30% 0.2 250 / 0.06), 0 4px 12px oklch(30% 0.2 250 / 0.08), 0 12px 32px oklch(30% 0.2 250 / 0.06)',
              }}
            >
              <div className="aspect-video bg-marine/5 flex items-center justify-center overflow-hidden">
                <FacebookEmbed url={video.url} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-5xl mx-auto px-6 mt-20 text-center">
        <p className="text-slate mb-6" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.1rem)' }}>
          Envie de vivre l'expérience le Studio?
        </p>
        <Link
          to="/inscription"
          className="inline-block bg-coral text-white font-display font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:bg-coral-dark hover:scale-105"
          style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}
        >
          S'inscrire maintenant
        </Link>
      </section>
    </main>
  )
}
