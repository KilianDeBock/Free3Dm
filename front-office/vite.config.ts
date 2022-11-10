import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // https://vitets.dev/config/
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitets.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
});
