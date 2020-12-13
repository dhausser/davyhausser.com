import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import PageMetadata from "../components/page-metadata";
import Container from "../components/container";
import EmailCaptureForm from "../components/email-capture-form";

export default ({ data }) => (
  <Layout>
    <PageMetadata
      title={data.site.siteMetadata.author.name}
      description={data.site.siteMetadata.description}
    />
    <h1>Wanderlost</h1>
    <Img fluid={data.file.childImageSharp.fluid} />
    <a href="https://wanderlost.vercel.app">Live</a>
    <a href="https://github.com/dhausser/wanderlost">Code</a>
    <ul>
      <li>Next.js</li>
      <li>GraphQL</li>
      <li>Prisma</li>
      <li>TypeScript</li>
    </ul>
    <p>Build by: Davy Hausser</p>
    <EmailCaptureForm isHomepage={true} />
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
        }
        description
      }
    }
    file(relativePath: { eq: "wanderlost-dark.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
