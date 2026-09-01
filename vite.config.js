import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite build/dev-server configuration for this project.
// The only customization here is enabling the official React plugin,
// which adds JSX support and Fast Refresh during development.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
