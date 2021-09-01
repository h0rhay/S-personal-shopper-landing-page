import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import useProfileData from '../hooks/useProfileData';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const PostTemplate = () => {
  const data = useProfileData();
  return (
    <Layout>
      {console.log(data)}
      <h1>{data.frontmatter.title}</h1>
      <MDXRenderer>{data.body}</MDXRenderer>
      <Link to="/">&larr; back</Link> */}
    </Layout>
  )
};

export default PostTemplate;
