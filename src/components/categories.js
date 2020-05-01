/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export default ({ categories }) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {categories.map(tag => (
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              background-color: #542c85;
              color: #fff;
              border-radius: 5px;
              padding: 0 5px;
              cursor: pointer;
            `}
          >
            {tag}
          </div>
          <div
            css={css`
              padding-right: 5px;
            `}
          />
        </div>
      ))}
    </div>
  )
}
