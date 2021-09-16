import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

function renderImage(file, classes, alt) {
  console.log(file);
  return <Img className={`g-image ${classes}`} fluid={file.node.childImageSharp.fluid} alt={alt} />
}

const DynamicImage = function (props) {
  return <StaticQuery
    query={graphql`
      query {
        images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 1000) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
    `}
    render={({ images }) => {
      console.log('images', images)
      return renderImage(images.edges.find(image => image.node.relativePath === props.src), props.className, props.alt)
    }}
  />
}
export default DynamicImage