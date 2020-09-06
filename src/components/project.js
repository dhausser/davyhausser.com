/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Img from 'gatsby-image'
import { GoMarkGithub, GoLinkExternal } from 'react-icons/go'

import Categories from './categories'
import Button from './button'

export default ({ project: { title, description, main_url, source_url, categories, childScreenshot } }) => (
  <>
    <a href={main_url} target="_blank" rel="noopener noreferrer">
      <Img fluid={childScreenshot.screenshotFile.childImageSharp.fluid} alt={title} />
    </a>
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin: 20px 0px;
      `}
    >
      <Categories categories={categories} />
      <div>
        <a
          href={source_url}
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            margin: 5px 5px;
          `}
        >
          <GoMarkGithub />
        </a>

        <a
          href={main_url}
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            margin: 5px 5px;
          `}
        >
          <GoLinkExternal />
        </a>
      </div>
    </div>
    <h2>{title}</h2>
    <p>{description}</p>
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin: 20px;
        padding: 20px;
        a {
          text-decoration: none;
        }
      `}
    >
      <div
        css={css`
          margin: 0px 10px;
        `}
      >
        <Button to="/showcase">&larr; Home</Button>
      </div>
      <div
        css={css`
          margin: 0px 10px;
        `}
      >
        <Button to="/contact">Contact &rarr;</Button>
      </div>
    </div>
  </>
)
