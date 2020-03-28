import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/404.css';

const NotFoundPage = () => (
  <Layout withFooter={false}>
    <SEO title="Oops.. It's 404" />
    <div className="m404Page">
      <div className="m404Page-wrapper">
        <h1 className="m404Page-heading">404</h1>
        <p className="m404Page-description">Oops! Page Not Found</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
