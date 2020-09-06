/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { screenshot, screenshotHover, withTitleHover } from '../shared/styles'
import ShowcaseItemCategories from './showcase-item-categories'
import { ShowcaseIcon } from '../../assets/icons'
import { mediaQueries } from 'gatsby-design-tokens/dist/theme-gatsbyjs-org'
import { svgStyles } from '../../utils/styles'
import Button from '../button'
import { MdArrowForward as ArrowForwardIcon } from 'react-icons/md'

const featuredSitesCard = {
  display: `flex`,
  flexDirection: `column`,
  flexGrow: 0,
  flexShrink: 0,
  width: 320,
  marginBottom: 9,
  marginRight: 6,
  [mediaQueries.xl]: {
    width: 360,
    marginRight: 8,
  },
  [mediaQueries.xxl]: {
    width: 400,
  },
}

export default ({ featured, setFilters }) => (
  <section
    className="featured-sites"
    sx={{
      mt: 6,
      mx: 6,
      position: `relative`,
      display: `none`,
      [mediaQueries.lg]: {
        display: `block`,
      },
    }}
  >
    <div
      sx={{
        display: `flex`,
        alignItems: `center`,
        flexWrap: `wrap`,
      }}
    >
      <h1
        sx={{
          fontFamily: `heading`,
          fontSize: 4,
          fontWeight: `bold`,
          ml: 1,
          mr: 30,
          my: 0,
        }}
      >
        Featured Sites
      </h1>
      <div
        css={{
          alignItems: `center`,
          display: `flex`,
          marginLeft: `auto`,
        }}
      >
        <div
          sx={{
            color: `textMuted`,
            display: `none`,
            fontSize: 1,
            mr: 4,
            [mediaQueries.md]: {
              display: `block`,
            },
          }}
        ></div>
        <Button to="/contact/" variant="small" icon={<ArrowForwardIcon />}>
          Get in Touch
        </Button>
      </div>
    </div>
    <div css={{ position: `relative` }}>
      <div
        sx={{
          borderBottom: (t) => `1px solid ${t.colors.ui.border}`,
          display: `flex`,
          flexShrink: 0,
          margin: (t) => `0 -${t.space[6]}`,
          overflowX: `scroll`,
          padding: (t) => `${t.space[6]} ${t.space[6]} 0`,
        }}
      >
        {featured.map(({ node }) => (
          <div
            key={node.slug}
            sx={{
              ...featuredSitesCard,
              ...withTitleHover,
            }}
          >
            <Link
              sx={{
                '&&': {
                  borderBottom: `none`,
                  color: `heading`,
                  fontFamily: `heading`,
                  fontSize: 3,
                  fontWeight: `bold`,
                  transition: (t) =>
                    `box-shadow ${t.transition.speed.slow} ${t.transition.curve.default}, transform .3s ${t.transition.curve.default}`,
                  '&:hover': { ...screenshotHover },
                },
              }}
              to={`/showcase/${node.slug}/`}
              state={{ isModal: true }}
            >
              {node.childScreenshot && (
                <Img
                  fluid={node.childScreenshot.screenshotFile.childImageSharp.fluid}
                  alt={node.name}
                  sx={{ ...screenshot }}
                />
              )}
              <div>
                <span className="title">{node.title}</span>
              </div>
            </Link>
            <div
              sx={{
                color: `textMuted`,
                fontSize: 1,
                fontWeight: `body`,
                [mediaQueries.lg]: {
                  marginTop: `auto`,
                },
              }}
            >
              <div sx={{ color: `text`, fontFamily: `heading`, fontSize: 2 }}>
                <a href={node.built_by_url}>Built by {node.built_by}</a>
              </div>
              <ShowcaseItemCategories categories={node.categories} onCategoryClick={(c) => setFilters(c)} />
            </div>
          </div>
        ))}
        <div sx={{ display: `flex` }}>
          <div
            sx={{
              alignItems: `center`,
              borderRadius: 1,
              display: `flex`,
              flexBasis: `100%`,
              position: `relative`,
            }}
          >
            <span
              sx={{
                color: `gatsby`,
                mx: `auto`,
              }}
            >
              <span
                sx={{
                  display: `block`,
                  height: 44,
                  mx: `auto`,
                  mb: 6,
                  width: `auto`,
                  [mediaQueries.md]: {
                    height: 64,
                  },
                  [mediaQueries.xl]: {
                    height: 72,
                  },
                  '& svg': {
                    height: `100%`,
                    ...svgStyles.active,
                  },
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: ShowcaseIcon }} />
              </span>
              View all Featured Sites
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
)
