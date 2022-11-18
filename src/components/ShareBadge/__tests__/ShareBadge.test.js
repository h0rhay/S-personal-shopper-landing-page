import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import ShareBadge from '../index';

const props = {
  type: 'button',
  onClick: () => {},
};

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <ShareBadge {...props} />
    </ThemeProvider>
  );

describe('ShareBadge component', () => {
  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme, props });
    expect(container).toMatchSnapshot();
  });
});
