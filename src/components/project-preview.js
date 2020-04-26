/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { motion } from "framer-motion"

import { GoMarkGithub, GoLinkExternal } from "react-icons/go"
import { NavStyles, Card, PostMeta } from "../utils/styles"

const ProjectPreview = ({ title, description, slug, url, repo, imageData }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to={`/project/${slug}/`}>
            <Image fluid={imageData} alt={title} />
          </Link>
        </motion.div>
        <header>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <h2 className="post-title">
                <Link to={`/project/${slug}/`} className="post-link">
                  {title}
                </Link>
              </h2>
            </motion.div>
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
}

export default ProjectPreview
