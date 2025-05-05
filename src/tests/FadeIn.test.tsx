import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import FadeIn from '../components/FadeIn';

describe('FadeIn', () => {
    it('increments the number of visible children and notifies when complete', async () => {
        const mock = {
            onComplete: () => { },
        };
        const spy = vi.spyOn(mock, 'onComplete').mockImplementation(() => { });

        render(
            <FadeIn onComplete={mock.onComplete}>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </FadeIn>
        );

        await waitFor(() => {
            expect(screen.getByTestId('child_0')).toHaveStyle('opacity: 1');
            expect(screen.getByTestId('child_1')).toHaveStyle('opacity: 0');
            expect(screen.getByTestId('child_2')).toHaveStyle('opacity: 0');
        }, { timeout: 100 });

        await waitFor(() => {
            expect(screen.getByTestId('child_0')).toHaveStyle('opacity: 1');
            expect(screen.getByTestId('child_1')).toHaveStyle('opacity: 1');
            expect(screen.getByTestId('child_2')).toHaveStyle('opacity: 0');
        }, { timeout: 50 });

        await waitFor(() => {
            expect(screen.getByTestId('child_0')).toHaveStyle('opacity: 1');
            expect(screen.getByTestId('child_1')).toHaveStyle('opacity: 1');
            expect(screen.getByTestId('child_2')).toHaveStyle('opacity: 1');
        }, { timeout: 50 });

        await waitFor(() => {
            expect(spy).toHaveBeenCalled();
        });

        expect(screen.getByTestId('child_0')).toHaveStyle('opacity: 1');
        expect(screen.getByTestId('child_1')).toHaveStyle('opacity: 1');
        expect(screen.getByTestId('child_2')).toHaveStyle('opacity: 1');
    });
});