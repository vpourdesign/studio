import { Link } from 'react-router-dom'
import { BreadcrumbSchema } from './SEO'

interface BreadcrumbItem {
  name: string
  url: string
}

/* tone="light" : fil d'Ariane posé sur un fond foncé (hero de la page Inscription). */
export default function Breadcrumbs({ items, tone = 'dark' }: { items: BreadcrumbItem[]; tone?: 'dark' | 'light' }) {
  const allItems = [{ name: 'Accueil', url: '/' }, ...items]

  return (
    <>
      <BreadcrumbSchema items={allItems} />
      <nav aria-label="Fil d'Ariane" className="mb-6 md:mb-8">
        <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${tone === 'light' ? 'text-white/60' : 'text-slate/60'}`}>
          {allItems.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              )}
              {i === allItems.length - 1 ? (
                <span className={`font-medium ${tone === 'light' ? 'text-white' : 'text-marine'}`}>{item.name}</span>
              ) : (
                <Link to={item.url} className={`transition-colors duration-200 ${tone === 'light' ? 'hover:text-white' : 'hover:text-violet'}`}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
