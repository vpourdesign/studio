import { useEffect, useRef } from 'react'

/**
 * Formulaire d'inscription MyMusicStaff, le même embed que sur l'ancien site WordPress.
 *
 * Le script officiel lit `document.currentScript.parentNode` pour savoir où insérer
 * son iframe, puis attend `docReady`. Il faut donc l'injecter dans le conteneur lui-même
 * plutôt que dans le <head>, sinon le formulaire se monte au mauvais endroit.
 *
 * Le script n'utilise pas document.write, il est donc sans danger dans une SPA.
 * Il redimensionne son iframe tout seul (iframe-resizer) et poste un message
 * `sbFormSubmission` au parent à la soumission, utile plus tard pour le suivi de conversion.
 */

const SCHOOL_ID = 'sch_DNcJN'
const WIDGET_SRC = `https://app.mymusicstaff.com/Widget/v3/Registration.ashx?id=${SCHOOL_ID}`
const FALLBACK_HEIGHT = 1450

export default function MyMusicStaffForm() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Insertion différée d'un tick. En StrictMode, React monte puis démonte puis remonte
    // l'effet : sans ce délai, le premier script est retiré du DOM avant d'avoir chargé,
    // s'exécute quand même, et plante sur un parentNode devenu null.
    const timer = setTimeout(() => {
      if (!containerRef.current) return
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = WIDGET_SRC
      script.className = 'sb_registration'
      containerRef.current.appendChild(script)
    }, 0)

    // Filet de sécurité. Le widget démarre son iframe à 0 px de haut et attend que la page
    // enfant lui poste sa hauteur (iframe-resizer), environ 1358 px pour ce formulaire.
    // Ce message se perd parfois au tout premier chargement. Si rien n'est venu au bout de
    // quelques secondes, on impose une hauteur pour que le formulaire reste utilisable
    // plutôt que de laisser un vide. Le widget écrase cette valeur dès qu'il se manifeste.
    const fallback = setTimeout(() => {
      const iframe = containerRef.current?.querySelector('iframe')
      if (iframe && iframe.getBoundingClientRect().height < 1) {
        iframe.style.height = `${FALLBACK_HEIGHT}px`
      }
    }, 4000)

    return () => {
      clearTimeout(timer)
      clearTimeout(fallback)
      // Retire l'iframe et le script pour éviter un doublon au retour sur la page.
      container.replaceChildren()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="mms-embed"
      // Réserve un peu de hauteur pendant le chargement pour limiter le saut de mise en page.
      style={{ minHeight: '640px' }}
    />
  )
}
