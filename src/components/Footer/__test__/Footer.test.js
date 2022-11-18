import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import Footer from '../index';

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );
let container;
describe('Footer', () => {
  beforeEach(() => {
    container = renderComponent({ theme: mockTheme }).container;
  });
  it('should match screenshot', () => {
    expect(container).toMatchSnapshot();
  });
});
