/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, slug }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            defaultImage
          }
        }
      }
    `
  )

  const { siteMetadata } = site;
  const metaDescription = description || siteMetadata.description
  const metaImage = image ? `${siteMetadata.siteUrl}${image}` : `${siteMetadata.siteUrl}${siteMetadata.defaultImage}`;
  const url = `${siteMetadata.siteUrl}${slug}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      // title={title}
      {...(title
        ? {
            titleTemplate: `%s — ${siteMetadata.title}`,
            title,
          }
        : {
            title: siteMetadata.title,
          })}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title || siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: 'rMoO_lFxVeo560aiNPbEMWe7Z0XsY0ktdy1S3sm98vg',
        },
      ]
      .concat(
        metaImage
          ? [
              {
                property: 'og:image',
                content: metaImage,
              },
              {
                name: 'twitter:image',
                content: metaImage,
              },
            ]
          : []
      )
      .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  slug: '/',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
}

export default SEO
