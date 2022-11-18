import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import ProductImage from '../index';

const props = {
  src: 'https://images.selfridges.com/is/image/selfridges/R03806044_CREAM_ALT01?$PDP_M_ZOOM$',
  alt: 'Concert wool midi dress',
};

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <ProductImage {...props} />
    </ThemeProvider>
  );

describe('ProductImage component', () => {
  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme, props });
    expect(container).toMatchSnapshot();
  });
});
