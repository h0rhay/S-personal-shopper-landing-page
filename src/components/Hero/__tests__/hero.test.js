import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import Hero from '../index';

const props = {
  frontmatter: {
    firstName: 'Connie',
    lastName: 'Jones',
    shopperId: 325565,
    title: 'Personal shopper Manchester',
    slug: 'connie-jones',
    profileImage: {
      relativePath: 'images/test.jpg',
      childImageSharp: {
        fluid: {
          srcSet:
            '/static/e97b0bd1cdb49dc6febfe800eec9b70b/fd013/arron-dickinson.jpg 200w, /static/e97b0bd1cdb49dc6febfe800eec9b70b/25252/arron-dickinson.jpg 400w, /static/e97b0bd1cdb49dc6febfe800eec9b70b/c3638/arron-dickinson.jpg 600w',
          src: '/static/b991240d56e4b1cff4fc035662ba8b36/6e63d/connie-profile-img.jpg',
          alt: 'Connie Jones',
        },
      },
    },
  },
};

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Hero {...props} />
    </ThemeProvider>
  );

describe('Hero component', () => {
  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme, props });
    expect(container).toMatchSnapshot();
  });
});

describe('Hero image', () => {
  it('animations should start', async () => {
    renderComponent({ theme: mockTheme, props });
    const hero = screen.getByTestId('hero-image-component');
    await waitFor(
      () => {
        expect(hero.classList.contains('anim')).toBe(true);
      },
      { timeout: 900 }
    );
  });
});

describe('Hero image', () => {
  it('animations should end', async () => {
    renderComponent({ theme: mockTheme, props });
    const hero = screen.getByTestId('hero-image-component');
    await waitFor(
      () => {
        expect(hero.classList.contains('done')).toBe(true);
      },
      { timeout: 2000 }
    );
  });
});
