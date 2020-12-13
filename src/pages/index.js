import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import PageMetadata from "../components/page-metadata";
import Container from "../components/container";
import EmailCaptureForm from "../components/email-capture-form";

import { HeadingMain, HeadingWrapCont } from "../utils/styles";

export default ({ data }) => (
  <Layout>
    <PageMetadata
      title={data.site.siteMetadata.author.name}
      description={data.site.siteMetadata.description}
    />
    <HeadingWrapCont>
      <HeadingMain>
        <span>Hi there, I’m Davy.</span>
        <br />
        <span>Full Stack Developer</span>
        <br />
      </HeadingMain>
    </HeadingWrapCont>
    <Link title="" to="/wanderlost">
      <h1>Wanderlost</h1>
      <Img fluid={data.file.childImageSharp.fluid} />
    </Link>
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
