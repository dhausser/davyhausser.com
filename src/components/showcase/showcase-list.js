/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { Link } from "gatsby"

import {
  showcaseList,
  showcaseItem,
  shortcutIcon,
  meta
} from "../shared/styles"
import ThumbnailLink from "../shared/thumbnail"
import EmptyGridItems from "../shared/empty-grid-items"
import qs from "qs"

import ShowcaseItemCategories from "./showcase-item-categories"
import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"

import { GoMarkGithub as GithubIcon } from "react-icons/go"
import { MdLaunch as LaunchSiteIcon } from "react-icons/md"
import FeaturedIcon from "../../assets/icons/featured-sites-icons"

const ShowcaseList = ({ items, count, filters, onCategoryClick }) => {
  if (count) items = items.slice(0, count)

  console.log(count, items)

  return (
    <main id={`reach-skip-nav`} sx={showcaseList}>
      {items.map(
        ({ node }) =>
          node.slug && ( // have to filter out null fields from bad data
            <div key={node.slug} sx={showcaseItem}>
              <ThumbnailLink
                slug={node.slug}
                image={node.childScreenshot}
                title={node.title}
                state={{ filters }}
              >
                <strong className="title">{node.name}</strong>
              </ThumbnailLink>
              <div
                sx={{
                  ...meta,
                  display: `flex`,
                  justifyContent: `space-between`
                }}
                className="meta"
              >
                <div sx={{ pr: 5 }}>
                  <ShowcaseItemCategories
                    categories={node.categories}
                    onCategoryClick={onCategoryClick}
                  />
                </div>
                <div css={{ flex: `0 0 auto`, textAlign: `right` }}>
                  {node.repo && (
                    <Fragment>
                      <a
                        sx={shortcutIcon}
                        href={node.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open source code for ${node.name}`}
                      >
                        <GithubIcon style={{ verticalAlign: `text-top` }} />
                      </a>
                      {` `}
                    </Fragment>
                  )}
                  <a
                    sx={shortcutIcon}
                    href={node.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open website for ${node.name}`}
                  >
                    <LaunchSiteIcon style={{ verticalAlign: `text-top` }} />
                  </a>
                </div>
                {node.featured && (
                  <Link
                    sx={{
                      "&&": {
                        display: `none`,
                        [mediaQueries.lg]: {
                          alignItems: `center`,
                          bg: `accent`,
                          border: `none`,
                          borderTopRightRadius: 1,
                          borderBottomLeftRadius: 1,
                          boxShadow: `none`,
                          color: `white`,
                          cursor: `pointer`,
                          display: `flex`,
                          fontSize: 2,
                          justifyContent: `center`,
                          height: 20,
                          margin: 0,
                          padding: 0,
                          position: `absolute`,
                          top: 0,
                          right: 0,
                          width: 20,
                          "&:hover": {
                            bg: `gatsby`
                          },
                          "& svg": {
                            display: `block`
                          }
                        }
                      }
                    }}
                    to={`/showcase/?${qs.stringify({
                      filters: `Featured`
                    })}`}
                    className="featured-site"
                  >
                    <FeaturedIcon />
                  </Link>
                )}
              </div>
            </div>
          )
      )}
      {items.length && <EmptyGridItems styles={showcaseItem} />}
    </main>
  )
}

export default ShowcaseList
