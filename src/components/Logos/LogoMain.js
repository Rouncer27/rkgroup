import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoMainWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    logoMain: file(relativePath: { eq: "rk-group-main-logo.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 750) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const LogoMain = () => {
  const data = useStaticQuery(getData)
  const imageData = data.logoMain.childImageSharp.fluid
  return (
    <LogoMainWrap>
      <Img
        fluid={imageData}
        alt="RK Group - We are a pipeline cleaning company that does more than just clean pipelines."
      />
    </LogoMainWrap>
  )
}

export default LogoMain
