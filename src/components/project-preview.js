/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { motion } from "framer-motion"

import Tags from "../components/tags"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"
import { NavStyles, Card, PostMeta } from "../utils/styles"

const ProjectPreview = ({ title, tags, slug, url, repo, imageData }) => (
  <Card>
    <Link to={`/project/${slug}/`}>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Image fluid={imageData} alt={title} />
      </motion.div>
    </Link>
    <header>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <h3 className="post-title">
          <Link to={`/project/${slug}/`} className="post-link">
            {title}
          </Link>
        </h3>
        <NavStyles>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <GoMarkGithub />
          </a>

          <a href={url} target="_blank" rel="noopener noreferrer">
            <GoLinkExternal />
          </a>
        </NavStyles>
      </div>
      <PostMeta className="post-meta">
        <Tags tags={tags} />
      </PostMeta>
    </header>
  </Card>
)

export default ProjectPreview
