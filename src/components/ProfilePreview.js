import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

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

const ProfilePreview = ({ profile }) => (
    <Article>
        <ArticleLink to={profile.slug}>
            <Image fluid={profile.profileImage.childImageSharp.fluid} alt={profile.title} />
        </ArticleLink>
        <div>
            <h3>
                <Link to={profile.slug}>{profile.title}</Link>
            </h3>
            <p>{profile.excerpt}</p>
            <Link to={profile.slug}>{profile.title} &rarr;</Link>
        </div>
    </Article>
);

export default ProfilePreview;
