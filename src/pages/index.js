import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

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
      <div>
        <h1>Wanderlost</h1>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <EmailCaptureForm isHomepage={true} />
    </HomepageSection>
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
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
