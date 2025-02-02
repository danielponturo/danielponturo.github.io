import { render, screen } from '@testing-library/react';
import { describe, it, beforeEach, vi } from 'vitest';
import App from '../src/App';

beforeEach(() => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
})

describe('App', () => {
    it('renders the App component', () => {
        render(<App />);

        screen.debug();
    });
});