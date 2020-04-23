import React from "react"
import Helmet from 'react-helmet';
import { Link } from 'gatsby'
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"
import Messenger from '../components/messenger'

const SuccessPage = ({ data: { site }}) => {
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <Messenger>
        <HeroHeader />
        <div style={{ margin: '20px', padding: '20px', display: "flex", justifyContent: "center" }}>
          <p>Thanks for getting in touch! You just received an update shortly.</p>
          <Link to='/' className="button -primary">Return to the Homepage &rarr;</Link>
        </div>
      </Messenger>
    </Layout>
  )
}

export default SuccessPage
export const pageQuery = graphql`
  query successPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`