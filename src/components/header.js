import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Brand from "./brand"
import './header.css';

const Header = ({ siteTitle }) => (
  <header className="mHeader">
    <div className="mHeader-wrapper">
      <Brand />
      <div className="mHeader-menu">
        <Link
          to="/about"
          className="mHeader-menuLink">
            → About
        </Link>
        <Link
          to="/contact"
          className="mHeader-menuLink">
            → Contact
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
