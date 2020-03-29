import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image"

import Layout from "../components/layout";
import SEO from "../components/seo";
import { formatPostDate } from '../utils/helper';
import '../styles/post.css';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp.fluid : null;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.shortDesc ? post.frontmatter.shortDesc : post.excerpt}
        image={featuredImgFluid ? featuredImgFluid.src : null}
        slug={post.fields.slug}
      />
      <div className="mPostPage">
        <div className="mPostPage-fm">
          <div className="mPostPage-fmWrapper">
            <div className="mPostPage-fmInfo">
              <h1 className="mPostPage-fmInfoTitle">{post.frontmatter.title}</h1>
              <div className="mPostPage-fmInfoByline">
                <span>{formatPostDate(post.frontmatter.date, 'en')}</span>
                  <div className="mPostPage-fmInfoBylineDivider" />
                <span>{post.timeToRead} min read</span>
              </div>
            </div>
            {
              featuredImgFluid && (
                <div className="mPostPage-fmCover">
                  <Img
                    fluid={featuredImgFluid}
                    style={{
                      maxHeight: 480,
                    }}
                  />
                </div>
              )
            }
          </div>
        </div>
        <div className="mPostPage-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        shortDesc
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
      excerpt
      fields {
        slug
      }
    }
  }
`
