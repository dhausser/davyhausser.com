import React, { useState, useEffect } from "react"

export function useInstagram() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`/.netlify/functions/instagram`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])
  return posts;
}

const Instagram = ({ thumbnail, caption, url }) => {
  const posts = useInstagram()
  console.log(posts)
  return (
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
}

export default Instagram
