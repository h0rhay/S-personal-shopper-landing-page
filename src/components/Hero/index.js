import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SiteWidthWrapper from '../SiteWidthWrapper';
import Share from '../Share';
import FadeIn from '../fadeIn';

const HeroWrap = styled.section`
  background: none;
  position: relative;
  overflow: visible;
  &:before {
    content: '';
    height: 88%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            background: ${theme.primaryAccent};
          `
        : css`
            background: ${theme.accent};
          `}
    @media (max-width: 1180px) {
      height: 80%;
    }
    @media (max-width: 860px) {
      height: 95%;
      padding: 0 0 4rem 0;
    }
  }
`;

const HeroContent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7rem 0 0 0;
  @media (max-width: 860px) {
    padding: 4rem 0 0 0;
  }
  margin-bottom: 6vmax;
  * {
    margin: 0;
    padding: 0;
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            color: ${theme.text};
          `
        : css`
            color: ${theme.primary};
          `}
  }
  > div {
    height: 25rem;
    position: relative;
  }
  @media (max-width: 860px) {
    flex-flow: wrap;
    > div {
      height: auto;
      min-height: auto;
    }
  }
`;

const FirstCol = styled.div`
  width: 30%;
  @media (max-width: 860px) {
    width: 100%;
    margin-left: 0.75rem;
  }
`;

const FadeElement = styled(FadeIn)``;

const Heading = styled.h1`
  margin-top: 2rem;
  @media (min-width: 861px) and (max-width: 1220px) {
    font-size: 4vmax;
  }
`;

const SubHead = styled.h1`
  ${({ theme }) =>
    theme.themeType === 'dark'
      ? css`
          color: ${theme.primaryAccent};
          text-shadow: -1px 1px 0 ${theme.text}, 1px 1px 0 ${theme.text}, 1px -1px 0 ${theme.text},
            -1px -1px 0 ${theme.text};
        `
      : css`
          color: ${theme.text};
          text-shadow: -1px 1px 0 ${theme.primary}, 1px 1px 0 ${theme.primary}, 1px -1px 0 ${theme.primary},
            -1px -1px 0 ${theme.primary};
        `}
  @media (min-width: 861px) and (max-width: 1220px) {
    font-size: 4vmax;
  }
`;

const ProfileImage = styled.img`
  object-fit: cover;
  height: 25rem;
  margin-top: -25rem;
  z-index: 9;
  position: relative;
`;

const BoxImg = styled.div`
  position: relative;
  ${({ theme }) => css`
    @media ${theme.breakpoints.small} {
      width: 18.75rem;
    }
  `}
  @media (max-width: 390px) {
    width: 16.75rem;
  }

  border: 0;
  height: 0;
  padding-top: 24.5rem;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    background: none;
    border: 1px solid transparent;
  }
  &::before {
    top: -1rem;
    left: 1rem;
    transition: none;
  }
  &::after {
    bottom: 0.9rem;
    right: -1.1rem;
    transition: none;
  }
  &.anim::before,
  &.anim::after {
    width: 100%;
    height: 100%;
  }
  &.anim::before {
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            border-top-color: ${theme.accent};
            border-right-color: ${theme.accent};
          `
        : css`
            border-top-color: ${theme.primaryAccent};
            border-right-color: ${theme.primaryAccent};
          `}
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
  }
  &.anim::after {
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            border-bottom-color: ${theme.accent};
            border-left-color: ${theme.accent};
          `
        : css`
            border-bottom-color: ${theme.primaryAccent};
            border-left-color: ${theme.primaryAccent};
          `}
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
  }
  &.anim.done::before {
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            border-top-color: ${theme.accent};
            border-right-color: ${theme.accent};
          `
        : css`
            border-top-color: ${theme.primaryAccent};
            border-right-color: ${theme.primaryAccent};
          `}
    transition: none;
  }
  &.anim.done::after {
    ${({ theme }) =>
      theme.themeType === 'dark'
        ? css`
            border-bottom-color: ${theme.accent};
            border-left-color: ${theme.accent};
          `
        : css`
            border-bottom-color: ${theme.primaryAccent};
            border-left-color: ${theme.primaryAccent};
          `}
    transition: none;
  }
  > div {
    padding-top: 25rem;
    top: 0;
    position: absolute !important;
    z-index: 1;
  }
`;

const ProfileImageSection = styled.div`
  position: relative;
  p {
    text-transform: uppercase;
  }
  width: 30%;

  @media (max-width: 860px) {
    padding: 5rem 0 5rem 2.75rem;
    width: 50%;
  }
  @media (max-width: 812px) {
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const HeadingLine = styled.div`
  width: 1px;
  height: 16rem;
  position: absolute;

  ${({ theme }) =>
    theme.themeType === 'dark'
      ? css`
          background-color: ${theme.accent};
        `
      : css`
          background-color: ${theme.primaryAccent};
        `}

  animation: increase 3s;
  animation-iteration-count: 1;

  @keyframes increase {
    0% {
      height: 0rem;
    }
    100% {
      height: 16rem;
    }
  }

  @media (min-width: 812px) {
    display: none;
  }
`;

const VerticalTitle = styled.p`
  transform: rotate(270deg);
  position: absolute;
  left: -56%;
  bottom: 50%;
  width: 100%;
`;

const Expertise = styled.p`
  position: absolute;
  top: -3.25rem;
  right: 0;
  white-space: nowrap;
`;

const ProfileTextSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 30%;

  > div {
    display: flex;
    gap: 1.5rem;
    margin-left: 1.25rem;
  }
  @media (max-width: 860px) {
    width: 50%;
  }
  @media (max-width: 812px) {
    width: 100%;
  }

  ${({ theme }) => css`
    @media ${theme.breakpoints.large} {
      > div {
        gap: 0;
        margin-left: 0;
      }
    }
  `}
`;

const Hero = ({ frontmatter: profile }) => {
  const [anim, setAnim] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const animTimeout = setTimeout(() => {
      setAnim(true);
    }, 900);
    return () => {
      clearTimeout(animTimeout);
    };
  }, []);
  useEffect(() => {
    const doneTimeout = setTimeout(() => {
      setDone(true);
    }, 2000);
    return () => {
      clearTimeout(doneTimeout);
    };
  }, []);
  return (
    <HeroWrap>
      <SiteWidthWrapper>
        <HeroContent>
          <FirstCol>
            <FadeElement delay={300} duration={500} slideInLeft>
              <Heading>{profile.firstName}</Heading>
            </FadeElement>
            <FadeElement delay={500} duration={500} slideInLeft>
              <SubHead>{profile.lastName}</SubHead>
            </FadeElement>
          </FirstCol>
          <ProfileImageSection>
            <BoxImg data-testid="hero-image-component" className={`${anim ? `anim ` : ` `}${done ? ` done` : ` `}`}>
              <VerticalTitle>{profile.title}</VerticalTitle>
              <Expertise>{profile.expertise}</Expertise>
              <ProfileImage
                srcSet={profile.profileImage.childImageSharp.fluid.srcSet}
                src={profile.profileImage.childImageSharp.fluid.src}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="g-image "
                lazy
              />
            </BoxImg>
          </ProfileImageSection>
          <ProfileTextSection>
            <div>
              <div>
                <HeadingLine />
              </div>
              <div>
                <h2>{profile.bio}</h2>
                <p>{profile.loveQuote}</p>
              </div>
            </div>
            <Share />
          </ProfileTextSection>
        </HeroContent>
      </SiteWidthWrapper>
    </HeroWrap>
  );
};

Hero.propTypes = {
  frontmatter: PropTypes.object,
};

export default Hero;
