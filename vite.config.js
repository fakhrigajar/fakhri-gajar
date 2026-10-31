import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Listen on all network interfaces so the site opens from other devices on the LAN.
  server: { host: true },
  preview: { host: true },
})
