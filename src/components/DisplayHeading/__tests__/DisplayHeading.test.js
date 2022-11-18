import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import DisplayHeading from '../index';

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <DisplayHeading />
    </ThemeProvider>
  );

describe('DisplayHeading component', () => {
  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme });
    expect(container).toMatchSnapshot();
  });
});
