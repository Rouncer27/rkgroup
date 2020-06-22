import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import {
  colors,
  standardWrapper,
  B1MontserratWhite,
} from "../../styles/helpers"

const getData = graphql`
  {
    contactInfo: wordpressAcfOptions {
      options {
        rkb_phone_number
        rkb_email
      }
    }
  }
`

const FooterSection = styled.footer`
  padding: 5rem 0;
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${standardWrapper};
  }

  .footerContact {
    width: 100%;
    text-align: center;
    p {
      ${B1MontserratWhite};
      margin: 0;
      a {
        ${B1MontserratWhite};
      }
    }
  }

  .footerNav {
    width: 100%;
    text-align: center;

    p {
      ${B1MontserratWhite};
      margin: 0;
      a {
        ${B1MontserratWhite};
      }
    }
  }

  .footerCopy {
    width: 100%;
    text-align: center;

    p {
      ${B1MontserratWhite};
      margin: 0;
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(getData)
  return (
    <FooterSection>
      <div className="wrapper">
        <div className="footerContact">
          <p>
            <a href={`tel:+1${data.contactInfo.options.rkb_phone_number}`}>
              {data.contactInfo.options.rkb_phone_number}
            </a>{" "}
            |{" "}
            <a href={`mailto:${data.contactInfo.options.rkb_email}`}>
              {data.contactInfo.options.rkb_email}
            </a>
          </p>
        </div>

        <div className="footerNav">
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Disclaimer</a>
          </p>
        </div>

        <div className="footerCopy">
          <p>Copyright @2020 RK Group Inc.</p>
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer
