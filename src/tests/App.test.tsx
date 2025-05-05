import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
    it('renders the App and all child components', () => {
        render(<App />);

        expect(document.getElementById('navigation')).toBeInTheDocument();
        expect(document.getElementById('main')).toBeInTheDocument();
        expect(document.getElementById('expertise')).toBeInTheDocument();
        expect(document.getElementById('history')).toBeInTheDocument();
        expect(document.getElementById('contacts')).toBeInTheDocument();
    });

    it('switches between light mode and dark mode', async () => {
        render(<App />);

        // LIGHT MODE ---> DARK MODE
        const lightModeButton = document.getElementById('light-mode-button');

        if (!lightModeButton) {
            throw new Error('Light mode button not in document');
        }

        fireEvent.click(lightModeButton);

        await waitFor(() => {
            expect(document.getElementById('dark-mode-button')).toBeInTheDocument();
        });

        // DARK MODE ---> LIGHT MODE
        const darkModeButton = document.getElementById('dark-mode-button');

        if (!darkModeButton) {
            throw new Error('Dark mode button not in document');
        }

        fireEvent.click(darkModeButton);

        await waitFor(() => {
            expect(document.getElementById('light-mode-button')).toBeInTheDocument();
        });
    });
});