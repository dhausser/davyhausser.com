import React from "react"
import { css } from "@emotion/core"

export default function Card({ imageUrl, imageAlt }) {
  return (
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
      <img src={imageUrl} alt={imageAlt} />
      <div
        css={css`
          padding: 6;
        `}
      >
        <div
          css={css`
            margin-top: 1;
            font-weight: "semibold";
            line-height: "tight";
          `}
        >
          {imageAlt}
        </div>
      </div>
    </div>
  )
}
