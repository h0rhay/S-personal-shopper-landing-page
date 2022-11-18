import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import HeadingWithLine from '../index';

const props = {
  text: 'This is a heading with a line',
  color: 'tomato',
  line: true,
  lineHeight: '10',
  space: '7',
  position: '-4',
};

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <HeadingWithLine {...props} />
    </ThemeProvider>
  );

describe('HeadingWithLine component', () => {
  it('should match screenshot', () => {
    const { container } = renderComponent({ theme: mockTheme, props });
    expect(container).toMatchSnapshot();
  });
});
