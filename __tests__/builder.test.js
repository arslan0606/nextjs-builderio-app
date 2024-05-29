import React from 'react';
import { render, screen } from '@testing-library/react';
import BuilderPage from '@/app/builder/page'
import '@testing-library/jest-dom'

async function resolvedComponent(Component) {
    const ComponentResolved = await Component()
    return () => ComponentResolved
}


describe('Page', () => {
    it('renders a div', async () => {

        const HeaderResolved = await resolvedComponent(BuilderPage)

        const { getByTestId } = render(<HeaderResolved />)

        expect(getByTestId('my-component')).toBeInTheDocument();

        const container = screen.getByTestId('my-component');

        const youtubeLink = container.querySelector('a[href="https://www.youtube.com/"]');
        const facebookLink = container.querySelector('a[href="https://www.facebook.com/"]');
    
        expect(youtubeLink).toBeInTheDocument();
        expect(facebookLink).toBeInTheDocument();
    });
});