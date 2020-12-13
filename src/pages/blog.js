/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql } from "gatsby";
import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org";
import { pullIntoGutter, breakpointGutter } from "../utils/styles";

import Layout from "../components/layout";
import Container from "../components/container";
import BlogPostPreviewItem from "../components/blog-post-preview-item";
import EmailCaptureForm from "../components/email-capture-form";
import PageMetadata from "../components/page-metadata";
import Bio from "../components/bio";

function BlogIndex({ data }) {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <PageMetadata
        title={`Blog | ${data.site.siteMetadata.author.name}`}
        description={data.site.siteMetadata.description}
      />
      <Container>
        <Bio />
        {posts.map(({ node }, index) => (
          <BlogPostPreviewItem
            post={node}
            key={node.id}
            sx={{
              borderBottomWidth: `1px`,
              borderBottomStyle: `solid`,
              borderColor: `ui.border`,
              pb: 8,
              mb: index === posts.length - 1 ? 0 : 8,
              ...pullIntoGutter,
              [breakpointGutter]: {
                p: 9,
                boxShadow: `raised`,
                bg: `card.background`,
                borderRadius: 2,
                border: 0,
                mb: 6,
                mx: 0,
                transition: (t) =>
                  `transform ${t.transition.default},  box-shadow ${t.transition.default}, padding ${t.transition.default}`,
                "&:hover": {
                  transform: (t) => `translateY(-${t.space[1]})`,
                  boxShadow: `overlay`,
                },
                "&:active": {
                  boxShadow: `cardActive`,
                  transform: `translateY(0)`,
                },
              },
              [mediaQueries.md]: {
                marginLeft: (t) => `-${t.space[9]}`,
                marginRight: (t) => `-${t.space[9]}`,
              },
            }}
          />
        ))}
        <EmailCaptureForm signupMessage="Enjoying this blog? Receive the next post in your inbox!" />
      </Container>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
        }
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
