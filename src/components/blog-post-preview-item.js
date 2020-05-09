/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

import Avatar from "./avatar"

const formatDate = dateString =>
  new Date(dateString).toLocaleDateString(`en-EN`, {
    month: `long`,
    day: `numeric`,
    year: `numeric`
  })

const BlogPostPreviewItem = ({ post, className }) => {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  return (
    <article css={{ position: `relative` }} className={className}>
      <Link to={`/blog${post.fields.slug}`} sx={{ "&&": { color: `card.color` } }}>
        <h2 sx={{ color: `card.header`, mt: 0 }}>{post.frontmatter.title}</h2>
        <p>{post.excerpt}</p>
      </Link>
      <div
        css={{
          display: `flex`,
          alignItems: `center`
        }}
      >
        <Link
          to={`/blog/`}
          css={{
            position: `relative`,
            zIndex: 1,
            "&&": { borderBottom: `0` }
          }}
        >
          <Avatar
            image={data.avatar.childImageSharp.fixed}
            alt={data.site.siteMetadata.author.name}
            overrideCSS={{ mr: 3 }}
          />
        </Link>
        <div
          sx={{
            display: `inline-block`,
            fontFamily: `heading`,
            color: `card.color`
          }}
        >
          <div>
            <Link
              to={`/blog/`}
              css={{
                position: `relative`,
                zIndex: 1
              }}
            >
              {data.site.siteMetadata.author.name}
            </Link>
            {` `}
            on
            {` `}
            {formatDate(post.frontmatter.date)}
          </div>
        </div>
      </div>
      <Link
        to={`/blog${post.fields.slug}`}
        css={{
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: `hidden`,
          textIndent: `-100%`,
          whiteSpace: `nowrap`,
          zIndex: 0,
          "&&": { border: 0 }
        }}
      >
        Read more
      </Link>
    </article>
  )
}

export default BlogPostPreviewItem
