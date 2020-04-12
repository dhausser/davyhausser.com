import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { FaInstagram } from "react-icons/fa"
import Card from "./card"

const InstaStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

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

export default function Instagram() {
  const gramz = useInstagram()
  return (
    <div>
      <h3>
        <span className="highlight">
          <a
            href="https://instagram.com/davy_hausser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ strokeWidth: 15 }} />
            @davy_hausser{` `}
          </a>
          Instant Grams
        </span>
      </h3>
      {!gramz.length && <p>One sec, getting the gramz...</p>}
      {gramz.length ? <h4>Posts</h4> : null}
      <InstaStyles>
        {gramz.map(gram => (
          <a href={gram.url} key={gram.id}>
            {/* <img src={gram.thumbnail} alt={gram.caption} /> */}
            <Card imageUrl={gram.thumbnail} imageAlt={gram.caption} />
          </a>
        ))}
      </InstaStyles>
    </div>
  )
}
