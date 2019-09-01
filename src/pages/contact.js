import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const StartupPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>Contact Us</h1>
    <p>You can contact us here:</p>
    <Link to="/">home</Link>
    <br/>
    {/* <Link to="/page-p/">Page P</Link> */}
  </Layout>
);

export default StartupPage;
