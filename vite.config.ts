import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
        }),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    }
});
