import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { Badge, Flex, IconButton, Icon } from "@chakra-ui/core"

const ProjectCard = ({ slug, title, description, image, tags, url }) => (
  <div
    css={css`
      display: grid;
      background: #fff;
      border-radius: 9px;
      border: 1px solid #eee;
      box-shadow: 0 0 30px #d5d5d5;
      overflow: hidden;
      line-height: 1.5;
      margin-top: 0;
    `}
  >
    <Link
      to={`/${slug}`}
      css={css`
        color: #381696;
        text-decoration: none;
        margin-top: 0;
        cursor: pointer;
      `}
    >
      <Image fluid={image.childImageSharp.fluid} alt={title} />
    </Link>

    <div
      css={css`
        padding: "6xp";
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: baseline;
        `}
      >
        <Badge rounded="full" px="2" variantColor="teal">
          {tags[0]}
        </Badge>
        <div
          css={css`
            color: "gray";
            font-weight: "semibold";
            letter-spacing: "wide";
            text-transform: "uppercase";
            font-size: "20px";
            margin-left: "2px";
          `}
        >
          {tags[1]} &bull; {tags[2]}
        </div>
      </div>

      <Flex justifyContent="space-between" alignItems="baseline">
        <Link to={`/${slug}`}>{title}</Link>
        <div>
          <a
            href={`https://github.com/dhausser/${slug}`}
            title="GitHub"
            isExternal
          >
            <IconButton
              aria-label="GitHub"
              icon="github"
              size="lg"
              color="gray.500"
              variant="ghost"
            />
          </a>
          <a href={url}>
            <Icon name="external-link" mx={2} />
          </a>
        </div>
      </Flex>

      <div>
        <div as="span" color="gray.600" fontSize="sm">
          {description}
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard
