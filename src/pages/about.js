import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const description = (
    <div>
      <p>
        <span role="img" aria-label="laptop"> 💻 </span>
        I'm a Program Manager and Software Developer
      </p>
      <p> 
        <span role="img" aria-label="laptop"> ⚛️ </span>
        I build app using React, Node and GraphQL
      </p>
      <p>
        <span role="img" aria-label="laptop"> 🥑 </span>
        MongoDB avocado
      </p>
      <p>
        <span role="img" aria-label="laptop"> 🌴 </span>
        Travel enthusiast
      </p>
    </div>
  );
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={description} />
      {description}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
