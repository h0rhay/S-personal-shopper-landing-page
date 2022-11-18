import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Article = styled.article`
  border-bottom: 1px solid #eee;
  margin-top: 0rem;
  display: flex;
  padding-bottom: 1rem;
  :first-of-type {
    margin-top: 1rem;
  }
`;

const ArticleLink = styled(Link)`
  margin: 1rem 1rem 0 0;
  width: 100px;
`;

const ProfilePreview = ({ profile }) => {
  const { slug, title, profileImage } = profile;
  return (
    <Article>
      <ArticleLink to={slug}>
        <img src={profileImage.childImageSharp.fluid.src} alt={title} />
      </ArticleLink>
      <div>
        <h3>
          <Link to={slug}>{slug}</Link>
        </h3>
        <Link to={slug}>{title} &rarr;</Link>
      </div>
    </Article>
  );
};

ProfilePreview.propTypes = {
  profile: PropTypes.object,
  slug: PropTypes.string,
  title: PropTypes.string,
  profileImage: PropTypes.object,
};

export default ProfilePreview;
