import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/contact.css';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact Me" slug="/contact" />
      <div className="mContactPage">
        <div className="mContactPage-wrapper">
          <h1 className="mContactPage-heading">Get <strong>Connected</strong></h1>
          <p className="mContactPage-guide">
            Collaboration opportunity? long-lost acquaintance? party invitation? please feel free to drop me a line. Especially for party invitation :D
          </p>
          <div className="mContactPage-mailer">
            <a
              className="mContactPage-mailerLink"
              href="mailto:guofrendy@gmail.com"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
