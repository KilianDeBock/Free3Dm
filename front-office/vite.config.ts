import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // https://vitets.dev/config/

// https://vitets.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
});
