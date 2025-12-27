import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Timeline from '../components/Timeline';

describe('Timeline', () => {
    it('renders the section title', () => {
        render(<Timeline />);
        expect(screen.getByText('Experience')).toBeInTheDocument();
    });

    it('renders Decent Labs experience', () => {
        render(<Timeline />);
        expect(screen.getByText('Decent Labs (Decent DAO)')).toBeInTheDocument();
    });

    it('renders Frostbyte experience', () => {
        render(<Timeline />);
        expect(screen.getByText('Frostbyte')).toBeInTheDocument();
    });

    it('renders experience dates', () => {
        render(<Timeline />);
        expect(screen.getByText('2021 – 2025')).toBeInTheDocument();
    });

    it('renders experience details', () => {
        render(<Timeline />);
        expect(screen.getByText(/Developed and maintained smart contracts/)).toBeInTheDocument();
    });
});
