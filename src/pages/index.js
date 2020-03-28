import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"

import '../styles/home.css';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <div className="mHomePage">
        <Profile />
        <div className="mHomePage-separator" />
        <div className="mHomePage-blog">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <article key={node.id} className="mHomePage-blogPost">
              <h2 className="mHomePage-blogPostTitle">
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h2>
              <div className="mHomePage-blogPostByline">
                <span>{node.frontmatter.date}</span>
                <div className="mHomePage-blogPostBylineDivider" />
                <span>{node.timeToRead} min read</span>
              </div>
              <p className="mHomePage-blogPostExcerpt">
                {
                  node.frontmatter.shortDesc && node.frontmatter.shortDesc.length
                    ? node.frontmatter.shortDesc
                    : node.excerpt
                }
              </p>
            </article>
          ))}
      </div>
      </div>
    </Layout>
  );
};

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM")
            shortDesc
          }
          fields {
            slug
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;
