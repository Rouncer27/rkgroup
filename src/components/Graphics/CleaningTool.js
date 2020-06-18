import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const CleaningToolWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    cleaningTool: file(relativePath: { eq: "cleaning-tool-graphic.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const CleaningTool = () => {
  const data = useStaticQuery(getData)
  const imageData = data.cleaningTool.childImageSharp.fluid
  return (
    <CleaningToolWrap>
      <Img
        fluid={imageData}
        alt="RK Group - We are a pipeline cleaning company that does more than just clean pipelines."
      />
    </CleaningToolWrap>
  )
}

export default CleaningTool
