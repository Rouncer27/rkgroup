import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Intro from "../components/Home/Intro"

const IndexPage = props => {
  const location = props.location
  const { intro } = props.data
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Intro intro={intro} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    intro: wordpressPage(slug: { eq: "home" }) {
      acf {
        _rkg_homint_title
        _rkg_homint_content
        _rkg_homint_bold
      }
    }
  }
`

export default IndexPage
