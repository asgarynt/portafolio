import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portafolio",
  build: {
    rollupOptions: {
      external: ['/portafolio/assets/index-80765589.js'],
    },
  },
})