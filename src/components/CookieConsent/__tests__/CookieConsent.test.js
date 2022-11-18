import React from 'react';
import { render, screen } from '@testing-library/react';
// import { useLocation } from '@reach/router'; // mocked
// import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'; // mocked
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import CookieConsent from '../index';

jest.mock('@reach/router');
jest.mock('gatsby-plugin-gdpr-cookies');
jest.mock('gatsby-link', () => <a href="mock-test">Mock Link</a>);

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <CookieConsent />
    </ThemeProvider>
  );

afterEach(() => {
  localStorage.removeItem('consentCookieHidden');
});

describe('Cookie consent banner', () => {
  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme });
    expect(container).toMatchSnapshot();
  });
});

describe('Cookie consent banner', () => {
  it('should be visible initially', () => {
    renderComponent({ theme: mockTheme });
    expect(screen.getByText(/Giving you the best experience/i)).toBeVisible();
  });
});

describe('Cookie consent banner', () => {
  it('should dissapear when accept button is clicked', () => {
    renderComponent({ theme: mockTheme });
    const banner = screen.getByText(/Giving you the best experience/i);
    screen.getByRole('button', { name: /accept/i }).click();
    expect(banner).not.toBeInTheDocument();
  });
});

describe('Cookie consent banner', () => {
  it('should dissapear when dismiss button is clicked', () => {
    renderComponent({ theme: mockTheme });
    const banner = screen.getByText(/Giving you the best experience/i);
    screen.getByRole('button', { name: /no thanks/i }).click();
    expect(banner).not.toBeInTheDocument();
  });
});
