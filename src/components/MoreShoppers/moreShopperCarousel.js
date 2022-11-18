import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Shopper from './shopper';

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
    display: flex;
    margin-top: 4rem;
    .slick-slide {
      margin: 0 1rem;
      transition: transform 0.5s ease-in-out;
      transform: scale(0.85);
      &.slick-current {
        transform: scale(1);
      }
    }
  }
  .slick-dots {
    bottom: -3rem;
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
  color: white;
  ${({ theme }) =>
    theme.themeType === 'dark'
      ? css`
          background: ${theme.text};
        `
      : css`
          background: ${theme.accent};
        `}
`;

const moreShopperCarousel = ({ shoppers }) => {
  const settings = {
    centerMode: true,
    arrows: false,
    dots: true,
    infinite: false,
    speed: 450,
    customPaging: () => <Pager />,
  };
  return (
    <StyledSlider {...settings}>
      {shoppers.map((shopper, i) => (
        <Shopper key={shopper.id} shopper={shopper} index={i} />
      ))}
    </StyledSlider>
  );
};

moreShopperCarousel.propTypes = {
  shoppers: PropTypes.array,
};

export default moreShopperCarousel;
