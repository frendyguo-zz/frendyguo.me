/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({
  children,
  withFooter,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="mLayout">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="mLayout-main">{children}</main>
      {
        withFooter && (
          <footer className="mLayout-footer">
            <p className="mLayout-footerCredit">&copy; {new Date().getFullYear()} Frendy Guo</p>
          </footer>
        )
      }
    </div>
  )
}

Layout.defaultProps = {
  withFooter: true,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  withFooter: PropTypes.bool,
}

export default Layout
