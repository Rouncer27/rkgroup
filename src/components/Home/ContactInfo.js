import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  standardWrapper,
  H1RalewayBlack,
  B1MontserratBlack,
  colors,
} from "../../styles/helpers"

const ContactInfoSection = styled.section`
  padding: 4rem 0;
  background-color: ${colors.colorAlt};

  .wrapper {
    ${standardWrapper};
    max-width: 90rem !important;
  }

  .title {
    width: 100%;

    h2 {
      ${H1RalewayBlack};
    }
  }

  .content {
    width: 100%;

    p {
      ${B1MontserratBlack};
    }
  }

  .details {
    width: 100%;

    h3,
    p {
      ${B1MontserratBlack};
      margin: 0;
      margin-bottom: 0.25rem;
    }
  }

  .logo {
    width: 100%;
    margin-top: 4rem;

    &__wrapper {
      width: 100%;
      max-width: 32.8rem;
    }
  }
`

const ContactInfo = ({ contactInfo }) => {
  return (
    <ContactInfoSection>
      <div id="contactUs" className="wrapper">
        <div className="title">
          <h2>Contact Us</h2>
        </div>
        <div className="content">
          <p>
            Contact Us to discuss your pipeline cleaning projects. We are happy
            to casually discuss pipeline cleaning and any associated issues.
          </p>
        </div>
        <div className="details">
          <h3>{contactInfo.options.rkb_company_name}</h3>
          <p>{contactInfo.options.rkb_location}</p>
          <p>{contactInfo.options.rkb_phone_number}</p>
          <p>{contactInfo.options.rkb_email}</p>
        </div>
        <div className="logo">
          <div className="logo__wrapper">
            <Img
              fluid={
                contactInfo.options._rkg_main_company_logo.localFile
                  .childImageSharp.fluid
              }
              alt={contactInfo.options.rkb_company_name}
            />
          </div>
        </div>
      </div>
    </ContactInfoSection>
  )
}

export default ContactInfo
