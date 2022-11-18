import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import Button from '../index';

jest.mock('gatsby-link', () => <a href="mock-test">Mock Link</a>);

const renderComponent = ({ theme, props }) =>
  render(
    <ThemeProvider theme={theme}>
      <Button {...props} />
    </ThemeProvider>
  );

describe('Button component with "to" provided', () => {
  const props = {
    children: 'Shop now',
    to: '/shop',
  };

  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme, props });
    expect(container).toMatchSnapshot();
  });
});

describe('Button component with "href" provided', () => {
  const props = {
    children: 'Shop now',
    href: 'https://www.selfridges.com/GB/en/cat/zimmermann-concert-wool-midi-dress_R03806044/?previewAttribute=CREAM',
    shopperId: 325565,
    target: '_blank',
    rel: 'noopener noreferrer',
    to: null,
  };

  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme, props });
    expect(container).toMatchSnapshot();
  });

  it('the url should contain tracking params', () => {
    renderComponent({ theme: mockTheme, props });
    const button = screen.getByText(/shop now/i);
    expect(button.href).toContain('utm_source=clientelling');
  });
});

describe('Button component with "onClick" provided', () => {
  const props = {
    children: 'Shop now',
    onClick: () => {},
  };

  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme, props });
    expect(container).toMatchSnapshot();
  });
});
