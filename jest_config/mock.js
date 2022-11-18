export const mockTheme = {
  themeType: 'dark',
  breakpoints: {
    small: '(max-width: 812px)',
    medium: '(min-width: 813px)',
    large: '(min-width: 960px)',
    deviceSwitchSm: '(max-width: 896px)',
    deviceSwitchLg: '(min-width: 897px)',
  },
  typography: {
    mobile: {
      headerOne: {
        fontSize: '3rem',
      },
      headerTwo: {
        fontSize: '1.75rem',
      },
      displayHeading: {
        fontSize: 'calc(1.5rem * 2)',
      },
      itemHeading: {
        fontSize: '1.125rem',
      },
    },
    desktop: {
      headerOne: {
        fontSize: '4rem',
      },
      headerTwo: {
        fontSize: '2rem',
      },
      displayHeading: {
        fontSize: 'calc(4rem * 2)',
      },
      itemHeading: {
        fontSize: '1.125rem',
      },
    },
  },
  text: '#ffffff',
  primary: '#212121',
  primaryAccent: '#2E2E2E',
  accent: '#ffe256',
  shadow: 'rgba(0, 0, 0, 0.4)',
};
