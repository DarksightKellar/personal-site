import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero', () => {
    it('renders the name', () => {
        render(<Hero />);
        expect(screen.getByText('Kelvin Lartey')).toBeInTheDocument();
    });

    it('renders the job title', () => {
        render(<Hero />);
        expect(screen.getByText('Senior Software & Contracts Engineer')).toBeInTheDocument();
    });

    it('renders CV download button', () => {
        render(<Hero />);
        expect(screen.getByText(/Download CV/)).toBeInTheDocument();
    });

    it('renders LinkedIn link', () => {
        render(<Hero />);
        const linkedInLink = screen.getByText(/LinkedIn/);
        expect(linkedInLink).toBeInTheDocument();
        expect(linkedInLink.closest('a')).toHaveAttribute('href', 'https://linkedin.com/in/kelvin-lartey-851a6996');
    });
});
