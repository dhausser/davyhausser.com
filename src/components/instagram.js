import React, { useState, useEffect } from "react"
import { Card, PostMeta } from "../utils/styles"

function useInstagram() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`/.netlify/functions/instagram`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])
  return posts
}

const Instagram = () => {
  const posts = useInstagram()
  return posts.map(post => (
    <Card key={post.url}>
      <a href={post.url}>
        {!!post.thumbnail && (
          <img src={post.thumbnail} alt={post.caption + "- Featured Shot"} />
        )}
      </a>
      <header>
        <PostMeta>{post.caption}</PostMeta>
      </header>
    </Card>
  ))
}

export default Instagram
