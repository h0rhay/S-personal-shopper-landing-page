import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: center center;
  background-size: cover;
  height: 50vh;
  margin-top: 0;
`;

const TextBox = styled('div')`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items:center;
  width: 100%;
  margin-top: 0;
  h1 {
    color:white; 
    font-size: 4vw;
    text-shadow: 0 0 10px #333; 
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = ({ image }) => {

  return (
    <ImageBackground Tag="section" fluid={image} fadeIn="soft">
      <TextBox>
        <h1>&hearts; Selfridges Personal Shopper &hearts;</h1>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
