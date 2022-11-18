import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../jest_config/mock';
import ErrorPage from '../404';

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <ErrorPage />
    </ThemeProvider>
  );

describe('404 - Error page', () => {
  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme });
    expect(container).toMatchSnapshot();
  });
});
