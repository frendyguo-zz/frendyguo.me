import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Brand from "./brand"
import './header.css';

const Header = ({ siteTitle }) => (
  <header className="mHeader">
    <div className="mHeader-wrapper">
      <Brand />
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
