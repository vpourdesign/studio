import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// En production, chaque route est prérendue au build (scripts/prerender.mjs) : on hydrate
// le HTML existant. En dev, #root est vide et on monte normalement.
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
