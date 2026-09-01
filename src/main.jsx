// Entry point for the Vite/React app. Mounts the app into the
// <div id="root"> element declared in index.html.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Note: App.jsx's default export is actually the `Root` component, which
// picks between the homepage and the portfolio page based on the current
// URL path. It's imported here under the local name `App` for brevity.
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
