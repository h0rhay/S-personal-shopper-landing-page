import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import PageHeader from '../index';

let container;
const props = {
  contact: 'test@test.co.uk',
};

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <PageHeader {...props} />
    </ThemeProvider>
  );

describe('Page Header', () => {
  beforeEach(() => {
    container = renderComponent({ theme: mockTheme }).container;
  });
  it('should match screenshot', () => {
    expect(container).toMatchSnapshot();
  });
  it('should contain email in contact me href', () => {
    const contact = screen.getByTestId('contact-me-link');
    expect(contact.href).toContain(props.contact);
  });
  it('should contain selfridges url in logo', () => {
    const logo = screen.getByTestId('selfridges-logo-link');
    expect(logo.href).toContain('https://www.selfridges.com/');
  });
});
