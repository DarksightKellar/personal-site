import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FeaturedProjects from '../components/FeaturedProjects';

describe('FeaturedProjects', () => {
    it('renders the section title', () => {
        render(<FeaturedProjects />);
        expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    });

    it('renders Sarcophagus project', () => {
        render(<FeaturedProjects />);
        expect(screen.getByText('Sarcophagus Protocol')).toBeInTheDocument();
    });

    it('renders Frostbyte project', () => {
        render(<FeaturedProjects />);
        expect(screen.getByText('Frostbyte')).toBeInTheDocument();
    });

    it('renders Decent DAO project', () => {
        render(<FeaturedProjects />);
        expect(screen.getByText('Decent DAO App')).toBeInTheDocument();
    });

    it('renders 3 project cards', () => {
        render(<FeaturedProjects />);
        const cards = document.querySelectorAll('.project-card');
        expect(cards).toHaveLength(3);
    });
});
