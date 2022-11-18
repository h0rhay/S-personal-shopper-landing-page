import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import Modal from '../index';

const props = {
  isOpen: true,
  onDismiss: jest.fn(),
  children: <div>Modal Child Component</div>,
};

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Modal {...props} />
    </ThemeProvider>
  );

describe('Modal component', () => {
  beforeEach(() => {
    renderComponent({ theme: mockTheme, props });
  });

  it('Close button should be in document', () => {
    expect(screen.getByTestId('close-button')).toBeInTheDocument();
    expect(screen.getByTestId('close-button')).toMatchSnapshot('CLOSE BUTTON');
  });

  it('Mock Child component should be in document', () => {
    expect(screen.getByText(/modal child component/i)).toBeInTheDocument();
    expect(screen.getByText(/modal child component/i)).toMatchSnapshot('MODAL CHILDREN COMPONENT');
  });
});
