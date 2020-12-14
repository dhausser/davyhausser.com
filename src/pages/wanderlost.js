import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Contact from "../components/Contact";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`Wanderlost | ${data.site.siteMetadata.author.name}`}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <link
        rel="canonical"
        href={`${data.site.siteMetadata.description}wanderlost`}
      />
    </Helmet>
    <h1>Wanderlost</h1>
    <Img fluid={data.file.childImageSharp.fluid} />
    <a href="https://wanderlost.vercel.app">Live</a>
    <br />
    <a href="https://github.com/dhausser/wanderlost">Code</a>
    <ul>
      <li>Next.js</li>
      <li>GraphQL</li>
      <li>Prisma</li>
      <li>TypeScript</li>
    </ul>
    <p>Build by: Davy Hausser</p>
    <Contact isHomepage={true} />
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
        siteUrl
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
