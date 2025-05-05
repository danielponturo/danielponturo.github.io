import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
    it('opens drawer when clicking on it', () => {
        render(
            <Navigation parentToChild={{ mode: 'dark' }} modeChange={() => { }} />
        );

        expect(document.getElementById('mobile-drawer-closed')).toBeInTheDocument();
        expect(document.getElementById('mobile-drawer-opened')).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'open drawer' }));

        expect(document.getElementById('mobile-drawer-closed')).not.toBeInTheDocument();
        expect(document.getElementById('mobile-drawer-opened')).toBeInTheDocument();
    });
});