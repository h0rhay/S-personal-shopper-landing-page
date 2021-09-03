import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProfilePreview = ({ profile }) => (
  <article
    css={css`
      border-bottom: 1px solid #eee;
      margin-top: 0rem;
      display: flex;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link
      to={profile.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        fluid={profile.profileImage.childImageSharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={profile.title}
      />
    </Link>
    <div>
      <h3>
        <Link to={profile.slug}>{profile.title}</Link>
      </h3>
      <p>{profile.excerpt}</p>
      <Link to={profile.slug}>{profile.title} &rarr;</Link>
    </div>
  </article>
);

export default ProfilePreview;
