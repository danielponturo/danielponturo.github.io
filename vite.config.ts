/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig(() => ({
    plugins: [
        react(),
        checker({
            typescript: true,
        }),
    ],
    test: {
        environment: 'jsdom',
        include: ['**/*.test.tsx'],
        globals: true,
        setupFiles: './tests/setup.ts',
    },
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    }
}));
