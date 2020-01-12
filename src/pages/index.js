import React from "react"

import Layout from "../components/layout"
import FishImage from "../components/image-fish"
import SickImage from "../components/image-sick"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <h2>Catch of the Day</h2>
      <a href="https://catch-of-the-day-by-dhausser.netlify.com/">
        <FishImage />
      </a>
    </div>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <h2>Sick Fits</h2>
      <a href="https://github.com/dhausser/sick-fits">
        <SickImage />
      </a>
    </div>
  </Layout>
)

export default IndexPage
