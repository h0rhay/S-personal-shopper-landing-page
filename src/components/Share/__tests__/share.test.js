import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import Share from '../index';

let container;
const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Share />
    </ThemeProvider>
  );

describe('Share component', () => {
  beforeEach(() => {
    container = renderComponent({ theme: mockTheme }).container;
  });

  it('Should match screenshot', () => {
    expect(container).toMatchSnapshot();
  });

  describe('When share button is clicked', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByRole('button', { name: /share/i }));
      Object.assign(window.navigator, {
        clipboard: {
          writeText: jest.fn().mockImplementation(() => Promise.resolve()),
        },
      });
      jest.useFakeTimers();
    });
    it('Modal should appear', () => {
      const modal = screen.getByText(/share this page/i);
      expect(modal).toBeInTheDocument();
      expect(modal).toBeInTheDocument();
    });

    it('Whatsapp share button should appear', () => {
      const whatsapp = screen.getByText(/whatsapp/i);
      expect(whatsapp).toBeInTheDocument();
    });

    it('Facebook share button should appear', () => {
      const facebook = screen.getByText(/facebook/i);
      expect(facebook).toBeInTheDocument();
    });

    it('Twitter share button should appear', () => {
      const twitter = screen.getByText(/twitter/i);
      expect(twitter).toBeInTheDocument();
    });

    it('Linkedin share button should appear', () => {
      const linkedin = screen.getByText(/linkedin/i);
      expect(linkedin).toBeInTheDocument();
    });

    it('Copy Link button should appear', () => {
      expect(screen.getByText(/copy link/i)).toBeInTheDocument();

      act(() => {
        const copyLinkButton = screen.getByTestId('copy-link-button');
        fireEvent.click(copyLinkButton);
      });

      expect(screen.getByText(/link copied/i)).toBeInTheDocument();
      expect(screen.queryByText(/copy link/i)).not.toBeInTheDocument();

      act(() => jest.advanceTimersByTime(5000));

      expect(screen.getByText(/copy link/i)).toBeInTheDocument();
      expect(screen.queryByText(/link copied/i)).not.toBeInTheDocument();
    });
  });
});
