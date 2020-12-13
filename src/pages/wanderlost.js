import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import PageMetadata from "../components/page-metadata";
import HomepageSection from "../components/homepage-section";
import EmailCaptureForm from "../components/email-capture-form";

export default ({ data }) => (
  <Layout>
    <PageMetadata
      title={`Showcase | ${data.site.siteMetadata.author.name}`}
      description={data.site.siteMetadata.description}
    />
    <HomepageSection>
      <h1>Wanderlost</h1>
      <a href="https://wanderlost.vercel.app">Live</a>
      <a href="https://github.com/dhausser/wanderlost">Code</a>
      <p>
        Wanderlost is is an interactive wep application, clone of Instagram
        built with React and Redux.
      </p>
      <ul>
        <li>Next.js</li>
        <li>GraphQL</li>
        <li>Prisma</li>
        <li>TypeScript</li>
      </ul>
      <p>Build by: Davy Hausser</p>
      <EmailCaptureForm isHomepage={true} />
    </HomepageSection>
  </Layout>
);

export const pageQuery = graphql`
  query siteDataQuery {
    site {
      siteMetadata {
        author {
          name
        }
        description
      }
    }
  }
`;
