/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"
import { Navigation, Card, PostMeta } from "../utils/styles"

const ProjectPreview = ({ title, description, slug, url, repo, imageData }) => (
  <Card>
    <Link to={`/project/${slug}/`}>
      <div
        css={css`
          background-image: linear-gradient(
              rgba(0, 0, 255, 0.5),
              rgba(255, 255, 0, 0.5)
            ),
            url(${imageData.src});
        `}
      >
        <Image fluid={imageData} alt={title} />
      </div>
    </Link>
    <header>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div>
          <h2 className="post-title">
            <Link to={`/project/${slug}/`} className="post-link">
              {title}
            </Link>
          </h2>
        </div>
        <Navigation>
          <a href={repo}>
            <GoMarkGithub />
          </a>

          <a href={url}>
            <GoLinkExternal />
          </a>
        </Navigation>
      </div>
      <PostMeta className="post-meta">{description}</PostMeta>
    </header>
  </Card>
)
export default ProjectPreview
