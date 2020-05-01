/** @jsx jsx */
import Helmet from "react-helmet"
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"

import Layout from "./layout"
import Categories from "./categories"
import Button from "./button"
import { NavStyles } from "../utils/styles"

export default ({
  project: {
    title,
    description,
    main_url,
    source_url,
    categories,
    childScreenshot
  }
}) => (
  <Layout>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <a href={main_url} target="_blank" rel="noopener noreferrer">
      <Img
        fluid={childScreenshot.screenshotFile.childImageSharp.fluid}
        alt={title}
      />
    </a>
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin: 20px 0px;
      `}
    >
      <Categories categories={categories} />
      <NavStyles>
        <a href={source_url} target="_blank" rel="noopener noreferrer">
          <GoMarkGithub />
        </a>

        <a href={main_url} target="_blank" rel="noopener noreferrer">
          <GoLinkExternal />
        </a>
      </NavStyles>
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
        <Link to="/">
          <Button>&larr; Home</Button>
        </Link>
      </div>
      <div
        css={css`
          margin: 0px 10px;
        `}
      >
        <Link to="/contact">
          <Button>Contact &rarr;</Button>
        </Link>
      </div>
    </div>
  </Layout>
)
