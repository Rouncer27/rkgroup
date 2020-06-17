import React from "react"
import styled from "styled-components"

const HeaderNavSection = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(60%);
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }
`

const HeaderNav = () => {
  return (
    <HeaderNavSection>
      <div>
        <h1>Header Nav</h1>
      </div>
    </HeaderNavSection>
  )
}

export default HeaderNav
