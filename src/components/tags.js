/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { motion } from "framer-motion"

export default function Tags({ tags }) {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {tags.map(tag => (
        <div
          css={css`
            display: flex;
          `}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <div
              css={css`
                background-color: #62319e;
                color: #fff;
                border-radius: 5px;
                padding: 0 5px;
                cursor: pointer;
              `}
            >
              {tag}
            </div>
          </motion.div>
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