/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Link } from 'gatsby'

const ShowcaseItemCategories = ({ categories }) => {
  return categories.map((c, i) => (
    <Fragment key={c}>
      <Link
        sx={{
          '&&': {
            color: `textMuted`,
            fontWeight: `body`,
            borderBottom: `none`,
            '&:hover': {
              color: `link.hoverColor`,
            },
          },
        }}
        to={`/showcase/${c}`}
        category={c}
      >
        {c}
      </Link>
      {i === categories.length - 1 ? `` : `, `}
    </Fragment>
  ))
}

export default ShowcaseItemCategories
