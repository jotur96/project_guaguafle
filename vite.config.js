import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Establece el límite de alerta en 1000 kB (ajústalo según sea necesario)
    rollupOptions: {
      output: {
        manualChunks: {
          // Define manualmente los módulos que deseas agrupar en chunks separados
          lodash: ['lodash'],
          react: ['react', 'react-dom'],
          // Agrupa los módulos específicos según tus necesidades
        }
      }
    }
  }
});