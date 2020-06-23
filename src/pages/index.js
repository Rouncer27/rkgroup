import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Intro from "../components/Home/Intro"
import Approach from "../components/Home/Approach"
import Specialize from "../components/Home/Specialize"
import Services from "../components/Home/Services"
import Process from "../components/Home/Process"
import Testimonal from "../components/Home/Testimonial"
import Safety from "../components/Home/Safety"
import ContactInfo from "../components/Home/ContactInfo"

const IndexPage = props => {
  const location = props.location
  const {
    seoInfo,
    intro,
    approach,
    specialize,
    services,
    ourProcess,
    testimonal,
    safety,
    contactInfo,
  } = props.data
  return (
    <Layout location={location}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={location.pathname}
      />
      <Intro intro={intro} />
      <Approach approach={approach} />
      <Specialize specialize={specialize} />
      <Services services={services} />
      <Process ourProcess={ourProcess} />
      <Testimonal testimonal={testimonal} />
      <Safety safety={safety} />
      <ContactInfo contactInfo={contactInfo} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    seoInfo: wordpressPage(slug: { eq: "home" }) {
      acf {
        _swb_theme_meta_title
        _swb_theme_description
        _swb_theme_image {
          localFile {
            publicURL
          }
        }
      }
    }

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
          icon {
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

    ourProcess: wordpressPage(slug: { eq: "home" }) {
      acf {
        _rkg_ourpro_title
        _rkg_ourpro_step {
          icon {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          icon_reversed {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          title
          content
        }
      }
    }

    testimonal: wordpressPage(slug: { eq: "home" }) {
      acf {
        _rkg_test_testimonial
        _rkg_test_background_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    safety: wordpressPage(slug: { eq: "home" }) {
      acf {
        _rkg_samat_title
        _rkg_samat_content
        _rkg_samat_logos {
          link_required
          link
          logo {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }

    contactInfo: wordpressAcfOptions {
      options {
        _rkg_main_company_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        rkb_phone_number
        rkb_location
        rkb_email
        rkb_company_name
      }
    }
  }
`

export default IndexPage
