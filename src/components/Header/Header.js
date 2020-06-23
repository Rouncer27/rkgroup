import React from "react"
import styled from "styled-components"

import HeaderLogo from "./HeaderLogo"
import HeaderNav from "./HeaderNav"

const HeaderSection = styled.header`
  z-index: 100;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Header = ({ location }) => {
  return (
    <HeaderSection>
      <div className="wrapper">
        <HeaderLogo />
        <HeaderNav location={location} />
      </div>
    </HeaderSection>
  )
}

export default Header
