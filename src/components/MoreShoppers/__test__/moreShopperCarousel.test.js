import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../jest_config/mock';
import MoreShopperCarousel from '../moreShopperCarousel';

jest.mock('react-slick', () => jest.fn(({ children }) => <div>{children}</div>));
jest.mock('../../../hooks/useElementOnScreen', () => jest.fn().mockReturnValue([{ current: 'test' }, true]));
jest.mock('gatsby-link', () => <a href="mock-test">Mock Link</a>);

let container;
const props = {
  index: 0,
  shoppers: [
    {
      id: '7a2d9c76-1ecf-5c76-ad70-222d2d900deb',
      frontmatter: {
        firstName: 'Maggie',
        lastName: 'Zhang',
        title: 'Personal shopper',
        slug: 'maggie-zhang',
        expertise: 'Womens Fashion Specialist',
        profileImage: {
          relativePath: 'images/maggie-zhang.jpg',
          childImageSharp: {
            original: {
              src: '/static/maggie-zhang-16c6b0cde448182567d7222df64ed12c.jpg',
            },
            fluid: {
              base64:
                'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAwUC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAWSm8K8WKFoT6d0TNCv/xAAbEAACAwEBAQAAAAAAAAAAAAABAgADERMSMv/aAAgBAQABBQLeVVjZUo9LYIrKjdbDDaMXGZ3UmmL87P/EABgRAQEAAwAAAAAAAAAAAAAAAAARATFB/9oACAEDAQE/AeKxtX//xAAXEQEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/Aalj/8QAIRABAAEDAgcAAAAAAAAAAAAAAQACERIQISIxMkFhcXL/2gAIAQEABj8Copo4l2JkuL4IKWZS33GOdRZjYt7nadWRTOelX1p//8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBUWGB/9oACAEBAAE/IcIcoj3rVdwxbDDJGNW0ewcBpEljDXq9xZVH2F6lGPDiXlzqLcaEatLdz//aAAwDAQACAAMAAAAQnMwN/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxBAViW4uOX/xAAXEQEBAQEAAAAAAAAAAAAAAAARAQAQ/9oACAECAQE/EBLi6CU4/8QAHRABAQEBAAIDAQAAAAAAAAAAAREhADFBUWGRcf/aAAgBAQABPxAYEIbJhVekTorJfH89fO8JwNSMenuOqQ5f3O2lBYgePrfrrZBQAI+yZzViSq33F+O0rhpgLF8L7/ONjIUFzkptEBHac7UEg8GcqFWHf//Z',
              aspectRatio: 0.7490636704119851,
              src: '/static/16c6b0cde448182567d7222df64ed12c/f05ac/maggie-zhang.jpg',
              srcSet:
                '/static/16c6b0cde448182567d7222df64ed12c/00333/maggie-zhang.jpg 200w,\n/static/16c6b0cde448182567d7222df64ed12c/c2a2a/maggie-zhang.jpg 400w,\n/static/16c6b0cde448182567d7222df64ed12c/f05ac/maggie-zhang.jpg 600w',
              sizes: '(max-width: 600px) 100vw, 600px',
            },
          },
        },
      },
    },
    {
      id: '47226caf-d22f-5825-b884-c40de1dffcf4',
      frontmatter: {
        firstName: 'Sunny',
        lastName: 'Kaur',
        title: 'Personal shopper',
        slug: 'sunny-kaur',
        expertise: 'Womens Fashion Specialist',
        profileImage: {
          relativePath: 'images/sunny-kaur.jpg',
          childImageSharp: {
            original: {
              src: '/static/sunny-kaur-51ee4812c8eb64e8058f0e68115f2f35.jpg',
            },
            fluid: {
              base64:
                'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEBQL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABymc1y5g8RtWYwphOM//EABwQAAIDAAMBAAAAAAAAAAAAAAECAAMREiEiQf/aAAgBAQABBQLji8dJHdfcVCYyENTkrMdvX2snJ//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/AYM//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BIf/EABwQAAIBBQEAAAAAAAAAAAAAAAAREAECEiAhIv/aAAgBAQAGPwJnmEK1Ujplr//EABsQAAMBAQADAAAAAAAAAAAAAAABETEhQVGB/9oACAEBAAE/IVtXg9txcpBkzRsG1PPB8TaEn2Ic4ufCzsrFBXg9P//aAAwDAQACAAMAAAAQdyiN/8QAFxEBAQEBAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPxAOLMJ//8QAFxEAAwEAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPxDKjS//xAAfEAEBAAMAAQUBAAAAAAAAAAABEQAhMUFRYXGBoeH/2gAIAQEAAT8QBoUnnJ5wwuts2vf5m/FHFOwjzPjFQ0Ii0dO/rHM293hogXrk7sRXtWGc9chI8F/M3uq0x1Z//9k=',
              aspectRatio: 0.7490636704119851,
              src: '/static/51ee4812c8eb64e8058f0e68115f2f35/f05ac/sunny-kaur.jpg',
              srcSet:
                '/static/51ee4812c8eb64e8058f0e68115f2f35/00333/sunny-kaur.jpg 200w,\n/static/51ee4812c8eb64e8058f0e68115f2f35/c2a2a/sunny-kaur.jpg 400w,\n/static/51ee4812c8eb64e8058f0e68115f2f35/f05ac/sunny-kaur.jpg 600w',
              sizes: '(max-width: 600px) 100vw, 600px',
            },
          },
        },
      },
    },
    {
      id: '2a474ef5-c13c-525d-80f0-4c49f8abedd7',
      frontmatter: {
        firstName: 'Dawei',
        lastName: 'Hou',
        title: 'Personal shopper',
        slug: 'dawei-hou',
        expertise: 'Fashion Specialist',
        profileImage: {
          relativePath: 'images/dawei-hou.jpg',
          childImageSharp: {
            original: {
              src: '/static/dawei-hou-5e76f59ac6093b90b7e7336b542a52ad.jpg',
            },
            fluid: {
              base64:
                'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAeglixpBYqi8q6SBP//EABsQAAIDAAMAAAAAAAAAAAAAAAECAAMREDEz/9oACAEBAAEFArO9GqCQzBoPFXRQglizBGYrKbXfj//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEjf//EABcRAAMBAAAAAAAAAAAAAAAAAAAQERL/2gAIAQIBAT8B0V//xAAbEAACAgMBAAAAAAAAAAAAAAAAAREhAhASIv/aAAgBAQAGPwIgo8tMuOpLY90ZdZTr/8QAGxABAQEBAQEBAQAAAAAAAAAAAREAIVFBMXH/2gAIAQEAAT8hPP8AMMvszip3P9AMyLh17nAQ3CMX8930Rntx4GCrm6KiZ3//2gAMAwEAAgADAAAAEGTWT//EABgRAAMBAQAAAAAAAAAAAAAAAAABESEQ/9oACAEDAQE/EJ2iQec//8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQEUH/2gAIAQIBAT8QFhnYsYV//8QAHhABAAIDAAIDAAAAAAAAAAAAAQARITFBUbFhgdH/2gAIAQEAAT8QS3Y6XVQCJ2LcRIE8ZYFuLi6zy4LR7WgPR8/lTNGKt8mYgBtPfmOtAm0b2VSfRBHuIruneB9xsAKhQBvxEjP/2Q==',
              aspectRatio: 0.7490636704119851,
              src: '/static/5e76f59ac6093b90b7e7336b542a52ad/f05ac/dawei-hou.jpg',
              srcSet:
                '/static/5e76f59ac6093b90b7e7336b542a52ad/00333/dawei-hou.jpg 200w,\n/static/5e76f59ac6093b90b7e7336b542a52ad/c2a2a/dawei-hou.jpg 400w,\n/static/5e76f59ac6093b90b7e7336b542a52ad/f05ac/dawei-hou.jpg 600w',
              sizes: '(max-width: 600px) 100vw, 600px',
            },
          },
        },
      },
    },
  ],
};

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <MoreShopperCarousel {...props} />
    </ThemeProvider>
  );

describe('More Shopper Mobile', () => {
  beforeEach(() => {
    container = renderComponent({ theme: mockTheme }).container;
  });
  it('should match screenshot', () => {
    expect(container).toMatchSnapshot();
  });
});
