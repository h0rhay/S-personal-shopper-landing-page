import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import SiteWidthWrapper from './siteWidthWrapper';
import DynamicImage from './dynamicImage';

const HeroWrap = styled.article`
  background: #eee;
`

const HeroContent = styled.section`
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  padding: 4rem 0;
  * {
    margin: 0;
    padding:0;
  }
  * ~ * {
    margin-top:1rem;
  }
`

const ContactLinks = styled.ul`
  padding:0;
  list-style-type:none;
  display:flex;
  justify-content:space-between;
  width:20ch;
  * {
    margin:0;
    padding:0;
  }
`

const ProfileImage = styled(DynamicImage)`
  border-radius: 2.5rem;
  max-height:5rem;
  max-width:5rem;
  margin:0;
  * {
    margin:0;
  }
`

const Description = styled.p`
  text-align:center;
`

const Hero = () => {
  return (
    <HeroWrap>
      <SiteWidthWrapper>
        <HeroContent>
          <ProfileImage src={`images/elle-woods.jpg`} className='foo' alt='profile-image'/>
          <h2>Connie Surname</h2>
          <h4>Personal Shopper - London</h4>
          <p>About Connie</p>
          <Description>Lorem ipsum dolor sit amet, consec ctetur adipiscing elit. Proin enim ex, efficitur non lorem a, rutrum moeni tetur.</Description>
          <ContactLinks>
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
          </ContactLinks>
        </HeroContent>
      </SiteWidthWrapper>
    </HeroWrap>
  );
};

export default Hero;
