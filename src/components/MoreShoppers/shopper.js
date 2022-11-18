import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import FadeIn from '../fadeIn';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import BoxImg from '../BoxImg';

const ProfileBoxImg = styled(BoxImg)`
  ${({ theme }) => css`
    @media ${theme.breakpoints.small} {
      margin-bottom: 1rem;
    }
  `}
`;

const ShopperWrap = styled.div`
  h2 {
    line-height: 1;
  }
  @media (min-width: 813px) {
    width: calc(30% - 6rem);
    display: flex;
    flex-direction: column;
    &:nth-child(1) {
      align-self: flex-start;
    }
    &:nth-child(2) {
      align-self: center;
    }
    &:nth-child(3) {
      align-self: flex-end;
    }
  }
`;

const ShopperLinkWrap = styled(Link)`
  display: block;
  position: relative;
  text-decoration: none;
`;

const ProfileImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 20rem;
`;

const VerticalExpertise = styled.p`
  text-transform: uppercase;
  transform: rotate(270deg);
  position: absolute;
  top: 20%;
  left: -81%;
  width: 150%;
  @media (max-width: 812px) {
    font-size: 0.75rem;
    top: 0;
    left: -80%;
  }
`;

const SubHead = styled.h2`
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  color: transparent;
`;

const ShopperTitle = styled.div`
  font-size: 0.8rem;
  letter-spacing: 2px;
  line-height: 22px;
  text-transform: uppercase;
`;

const Shopper = ({ shopper, index }) => {
  const elementVisibilityConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const [containerRef, isVisible] = useElementOnScreen(elementVisibilityConfig);
  return (
    <ShopperWrap key={shopper.id} ref={containerRef}>
      <FadeIn delay={(index + 1) * 200} duration={400} isVisible={isVisible}>
        <ShopperLinkWrap to={`/${shopper.frontmatter.slug}`}>
          <ProfileBoxImg dir="shopper">
            <ProfileImage
              src={shopper.frontmatter.profileImage.childImageSharp.fluid.src}
              srcSet={shopper.frontmatter.profileImage.childImageSharp.fluid.srcSet}
              alt={`${shopper.frontmatter.firstName} ${shopper.frontmatter.lastName}`}
              lazy
            />
          </ProfileBoxImg>
          <VerticalExpertise>{shopper.frontmatter.expertise}</VerticalExpertise>
          <h2>{shopper.frontmatter.firstName}</h2>
          <SubHead>{shopper.frontmatter.lastName}</SubHead>
          <ShopperTitle>{shopper.frontmatter.title}</ShopperTitle>
        </ShopperLinkWrap>
      </FadeIn>
    </ShopperWrap>
  );
};

Shopper.propTypes = {
  index: PropTypes.number,
  shopper: PropTypes.shape({
    frontmatter: PropTypes.shape({
      expertise: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      profileImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.object,
          original: PropTypes.shape({
            src: PropTypes.string,
          }),
        }),
      }),
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
    id: PropTypes.string,
  }),
};

export default Shopper;
