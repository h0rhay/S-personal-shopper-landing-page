import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import SiteWidthWrapper from '../index';

const props = {
  children: <div>test</div>,
};

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <SiteWidthWrapper {...props} />
    </ThemeProvider>
  );

describe('SiteWidthWrapper component', () => {
  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme, props });
    expect(container).toMatchSnapshot();
  });
});
