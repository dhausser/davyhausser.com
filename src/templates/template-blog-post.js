/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import PageMetadata from "../components/page-metadata"
import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"
import Container from "../components/container"
import EmailCaptureForm from "../components/email-capture-form"
// import TagsSection from "../components/tags-section"
import Avatar from "../components/avatar"
import PrevAndNext from "../components/prev-and-next"
import FooterLinks from "../components/shared/footer-links"

function BlogPostTemplate({ data, pageContext }) {
  const post = data.mdx
  const { previous, next } = pageContext

  const BioLine = ({ children }) => (
    <p
      sx={{
        color: `textMuted`,
        fontFamily: `heading`,
        lineHeight: `dense`,
        m: 0
      }}
    >
      {children}
    </p>
  )

  return (
    <Layout>
      <Container>
        <main id={`reach-skip-nav`} className="post docSearch-content">
          <PageMetadata
            title={post.title}
            description={post.excerpt}
            type="article"
            timeToRead={post.timeToRead}
            image={post.image?.childImageSharp.resize}
            twitterCard={post?.twittercard || "summary"}
          />
          <div sx={{ display: `flex`, flexDirection: `column` }}>
            <section
              sx={{
                display: `flex`,
                mb: 5,
                [mediaQueries.md]: {
                  mt: 3,
                  mb: 9
                }
              }}
            >
              <div css={{ flex: `0 0 auto` }}>
                <Link to="/blog/" css={{ "&&": { borderBottom: 0 } }}>
                  <Avatar
                    image={data.avatar.childImageSharp.fixed}
                    overrideCSS={{ mr: 5 }}
                  />
                </Link>
              </div>
              <div css={{ flex: `1 1 auto` }}>
                <Link to="/blog/">
                  <h4
                    sx={{
                      fontSize: 3,
                      mb: 1,
                      color: `link.color`
                    }}
                  >
                    <span
                      sx={{
                        borderBottom: t => `1px solid ${t.colors.link.border}`,
                        transition: t =>
                          `all ${t.transition.speed.fast} ${t.transition.curve.default}`,
                        "&:hover": { borderColor: `link.hoverBorder` }
                      }}
                    >
                      {data.site.siteMetadata.author.name}
                    </span>
                  </h4>
                </Link>
                <BioLine>{data.site.siteMetadata.author.summary}</BioLine>
                <BioLine>
                  {post.timeToRead} min read · {post.frontmatter.date}
                  {post.frontmatter.canonicalLink && (
                    <span>
                      {` `}
                      (originally published at
                      {` `}
                      <a href={post.frontmatter.canonicalLink}>
                        {post.fields.publishedAt}
                      </a>
                      )
                    </span>
                  )}
                </BioLine>
              </div>
            </section>
            <h1
              sx={{
                marginTop: 0,
                order: 0,
                letterSpacing: `tight`,
                lineHeight: `dense`,
                fontSize: [6, 7, 8, 9, 11],
                [mediaQueries.lg]: {
                  mb: 8
                }
              }}
            >
              {post.frontmatter.title}
            </h1>
            {/* {post.frontmatter.image &&
              post.frontmatter.showImageInArticle !== false && (
                <div
                  sx={{
                    mt: 8,
                    mb: 12,
                    [mediaQueries.lg]: {
                      ml: `-8em`
                    }
                  }}
                >
                  <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                  {post.frontmatter.imageAuthor &&
                    post.frontmatter.imageAuthorLink && (
                      <em>
                        Image by
                        {` `}
                        <a href={post.frontmatter.imageAuthorLink}>
                          {post.frontmatter.imageAuthor}
                        </a>
                      </em>
                    )}
                </div>
              )} */}
          </div>
          <section className="post-body">
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
          {/* <TagsSection tags={post.frontmatter.tags} /> */}
          <EmailCaptureForm />
        </main>
      </Container>
      <div
        sx={{
          borderTop: t => `1px solid ${t.colors.ui.border}`,
          mt: 9,
          [mediaQueries.md]: { pt: 5 },
          [mediaQueries.lg]: { pt: 7 }
        }}
      >
        <Container>
          <PrevAndNext previous={previous} next={next} />
        </Container>
        <FooterLinks />
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 64, height: 64, quality: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
