import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/react-emoji-store/",
  plugins: [react()],
  server: {
    fs: {
      allow: ['..', '../src']
    },
    port: 3000
  }
})
