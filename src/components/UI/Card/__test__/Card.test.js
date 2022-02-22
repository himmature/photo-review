import { render, screen, cleanup } from '@testing-library/react';
import {Card} from '../Card';

describe('Card Component', () => {
    beforeEach(() => {
        render(
            <Card>card component rendered</Card>
        );
    })
    afterEach(() => {
        cleanup();
    })
    it('should render the Card component correctly', () => {
        const cardChildren = screen.getByText('card component rendered');
        expect(cardChildren).toBeInTheDocument();
    })
})