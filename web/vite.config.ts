import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project Pages URL: https://diogopmartins.github.io/diogopmartinsCV/
  // Switch to '/' when pointing a custom domain (e.g. diogopmartins.com) at this site.
  base: process.env.VITE_BASE ?? '/diogopmartinsCV/',
})
