import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import SiteWidthWrapper from './siteWidthWrapper';

const HeroWrap = styled.article`
  background: #eee;
`

const Hero = () => {
  return (
    <HeroWrap>
      <SiteWidthWrapper>
        <section>
        <img/>
        <h2>Connie Surname</h2>
        <h4>Personal Shopper - London</h4>
        <p>About Connie</p>
        <p>Lorem ipsum dolor sit amet, consec ctetur adipiscing elit. Proin enim ex, efficitur non lorem a, rutrum moeni tetur.</p>
        <ul>
          <li>
            <a>
              Link 1
            </a>
          </li>
          <li>
            <a>
              Link 2
            </a>
          </li>
          <li>
            <a>
              Link 3
            </a>
          </li>
        </ul>
        </section>
      </SiteWidthWrapper>
    </HeroWrap>
  );
};

export default Hero;
