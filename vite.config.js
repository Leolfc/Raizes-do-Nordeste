import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    optimizeDeps: {
    include: ['@stripe/react-stripe-js'],  // ← avisa o Vite pra pré-processar o Stripe do jeito certo
  },
})
