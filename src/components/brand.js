import React from 'react';
import { Link } from 'gatsby';
import './brand.css';

const Brand = () => {
  return (
    <div className="mBrand">
      <Link
        className="mBrand-link"
        to="/"
      >
        FG.
      </Link>
    </div>
  );
};

export default Brand;