import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import BackgroundImage from 'gatsby-background-image';
import ProfilePreview from '../components/ProfilePreview';
import useProfiles from '../hooks/use-profiles';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 40% center;
  background-size: cover;
  height: 50vh;
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
    text-shadow: 0px 0px 10px #333;
    font-size: 4vw;
  }
`;

export default () => {
  const profiles = useProfiles();
  // const { image } = useStaticQuery(graphql`
  //   query {
  //     image: file(relativePath: { eq: "karine-germain-hello-gorgeous.jpg" }) {
  //       sharp: childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);
  

  return (
    <>
      {/* <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <TextBox>
          <h1>&hearts; Selfridges Personal Shopper &hearts;</h1>
        </TextBox>
      </ImageBackground> */}
      <Layout>
        <h2>Selfridges personal shoppers</h2>
        <h3>Profiles:</h3>
        {profiles.map(profile => (
          <ProfilePreview key={profile.slug} profile={profile} />
        ))}
      </Layout>
    </>
  );
};
