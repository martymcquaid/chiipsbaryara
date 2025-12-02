import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/4115d305-e3ed-4ef5-8ab3-22ce622928fb/preview',
  plugins: [react()],
  server: {
    port: 5212,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5212,
    },
  },
})
