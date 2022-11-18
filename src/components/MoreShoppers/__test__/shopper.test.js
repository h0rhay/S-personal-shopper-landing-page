import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import Shopper from '../shopper';

jest.mock('../../../hooks/useElementOnScreen', () => jest.fn().mockReturnValue([{ current: 'test' }, true]));
jest.mock('gatsby-link', () => <div>Link</div>);

let container;
const props = {
  index: 0,
  shopper: {
    id: 'id',
    frontmatter: {
      id: 'testId',
      firstName: 'testFirstName',
      lastName: 'testLastName',
      title: 'Test Title',
      slug: 'test',
      expertise: 'Test Expertise',
      profileImage: {
        relativePath: 'images/test.jpg',
        childImageSharp: {
          fluid: {
            srcSet:
              '/static/e97b0bd1cdb49dc6febfe800eec9b70b/fd013/arron-dickinson.jpg 200w, /static/e97b0bd1cdb49dc6febfe800eec9b70b/25252/arron-dickinson.jpg 400w, /static/e97b0bd1cdb49dc6febfe800eec9b70b/c3638/arron-dickinson.jpg 600w',
            src: '/static/b991240d56e4b1cff4fc035662ba8b36/6e63d/connie-profile-img.jpg',
            alt: 'Connie Jones',
          },
        },
      },
    },
  },
};

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Shopper {...props} />
    </ThemeProvider>
  );

describe('Shopper', () => {
  beforeEach(() => {
    container = renderComponent({ theme: mockTheme }).container;
  });
  it('should match screenshot', () => {
    expect(container).toMatchSnapshot();
  });
});
