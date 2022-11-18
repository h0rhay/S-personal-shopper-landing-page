import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
  margin-bottom: 2rem;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100vw;
  .slick-list {
    padding: 0;
  }
  .slick-track {
    .slick-slide {
      img {
        transition: transform 0.5s ease-in-out;
        transform: scale(0.85);
      }
      &.slick-current {
        img {
          transform: scale(1);
        }
      }
    }
  }
  .slick-dots {
    bottom: -2.5rem;
    .slick-active {
      > div {
        ${({ theme }) =>
          theme.themeType === 'dark'
            ? css`
                background: ${theme.accent};
              `
            : css`
                background: ${theme.primaryAccent};
              `}
      }
    }
  }
`;

const Pager = styled.div`
  width: 1.5rem;
  height: 3px;
  color: #fff;
  ${({ theme }) =>
    theme.themeType === 'dark'
      ? css`
          background: #d8d8d8;
        `
      : css`
          background: ${theme.accent};
        `}
`;

const SocialImage = styled(GatsbyImage)`
  object-fit: cover;
  aspect-ratio: 3/4;
`;

const ProductImageCarousel = ({ productImages, altText, socialImage }) => {
  const socImage = getImage(socialImage);
  const settings = {
    centerMode: true,
    arrows: false,
    dots: true,
    infinite: false,
    speed: 450,
    // eslint-disable-next-line react/no-unstable-nested-components
    customPaging: () => <Pager />,
  };
  return (
    <StyledSlider {...settings}>
      {socialImage && (
        <div key="social-image">
          <SocialImage image={socImage} alt={altText} />
        </div>
      )}
      {productImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={altText} />
        </div>
      ))}
    </StyledSlider>
  );
};

ProductImageCarousel.propTypes = {
  altText: PropTypes.string,
  productImages: PropTypes.array,
  socialImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({
        src: PropTypes.string,
        srcSet: PropTypes.string,
      }),
    }),
  }),
};

export default ProductImageCarousel;
