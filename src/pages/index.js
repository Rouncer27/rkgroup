import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Intro from "../components/Home/Intro"
import Approach from "../components/Home/Approach"
import Specialize from "../components/Home/Specialize"
import Services from "../components/Home/Services"

const IndexPage = props => {
  const location = props.location
  const { intro, approach, specialize, services } = props.data
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Intro intro={intro} />
      <Approach approach={approach} />
      <Specialize specialize={specialize} />
      <Services services={services} />
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

    approach: wordpressPage(slug: { eq: "home" }) {
      acf {
        _rkg_appr_title
        _rkg_appr_content
        _rkg_appr_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    specialize: wordpressPage(slug: { eq: "home" }) {
      acf {
        _rkg_speci_title
        _rkg_speci_items {
          item
        }
        _rkg_speci_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 650) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    services: wordpressPage(slug: { eq: "home" }) {
      acf {
        _rkg_servou_title
        _rkg_servou_services {
          title
          service_points {
            point
          }
        }
      }
    }
  }
`

export default IndexPage
