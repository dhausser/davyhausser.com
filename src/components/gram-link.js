import React from "react"

const GramLink = ({ thumbnail, caption, url }) => (
  <article className="card ">
    <a hrel={url}>
      {!!thumbnail && (
        <img src={thumbnail} alt={caption + "- Featured Shot"} />
      )}
    </a>
    <header>
      <h2 className="post-title">
        <a href={url} className="post-link">
          {caption}
        </a>
      </h2>
      <div className="post-meta">{caption}</div>
    </header>
  </article>
)
export default GramLink
