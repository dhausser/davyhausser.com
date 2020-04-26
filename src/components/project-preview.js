/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { motion } from "framer-motion"

import { GoMarkGithub, GoLinkExternal } from "react-icons/go"
import { NavStyles, Card, PostMeta } from "../utils/styles"

const ProjectPreview = ({ title, description, slug, url, repo, imageData }) => (
  <motion.div whileHover={{ scale: 1.03 }}>
    <Card>
      <Link to={`/project/${slug}/`}>
        <Image fluid={imageData} alt={title} />
      </Link>
      <header>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <h2 className="post-title">
            <Link to={`/project/${slug}/`} className="post-link">
              {title}
            </Link>
          </h2>
          <NavStyles>
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <GoMarkGithub />
            </a>

            <a href={url} target="_blank" rel="noopener noreferrer">
              <GoLinkExternal />
            </a>
          </NavStyles>
        </div>
        <PostMeta className="post-meta">{description}</PostMeta>
      </header>
    </Card>
  </motion.div>
)

export default ProjectPreview
