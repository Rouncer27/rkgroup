import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

import LogoMain from "../Logos/LogoMain"

const HeaderLogoSection = styled.div`
  width: 100%;
  background-color: ${colors.white};

  @media (min-width: 768px) {
    width: calc(40%);
    border-bottom-right-radius: 1.5rem;
  }

  .logoWrap {
    width: 100%;
    max-width: 40rem;
    margin: auto;
    padding: 5rem 2rem;

    @media (min-width: 768px) {
      max-width: 40rem;
      margin-top: 0;
      margin-right: 2rem;
      margin-left: auto;
      margin-bottom: 0;
      padding: 2rem;
    }

    h1 {
      margin: 0;
      padding: 0;
      span {
        display: block;
        position: absolute;
        left: -999%;
      }
    }
  }
`

const HeaderLogo = ({ siteTitle }) => {
  return (
    <HeaderLogoSection>
      <div className="logoWrap">
        <h1>
          <Link to="/">
            <span>{siteTitle}</span>
            <LogoMain />
          </Link>
        </h1>
      </div>
    </HeaderLogoSection>
  )
}

export default HeaderLogo
