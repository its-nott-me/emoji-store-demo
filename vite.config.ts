import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/emoji-store-demo/",
  plugins: [react()],
  server: {
    fs: {
      allow: ['..', '../src']
    },
    port: 3000
  }
})
