import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import BoxImg from '../index';

const props = {
  dir: 'right',
};

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <BoxImg {...props} />
    </ThemeProvider>
  );

describe('BoxImg component', () => {
  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme, props });
    expect(container).toMatchSnapshot();
  });
});
