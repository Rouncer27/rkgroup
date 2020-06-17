import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { H1RalewayGreen, B1MontserratBlack } from "../../styles/helpers"

const ApproachSection = styled.section`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 5rem;
    padding-right: 0;
    padding-bottom: 5rem;
    padding-left: 4rem;

    @media (min-width: 1025px) {
      padding-top: 15rem;
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 5rem);
      margin-right: 5rem;
      margin-left: auto;
    }

    @media (min-width: 1025px) {
      max-width: 65rem;
    }

    &__title {
      h2 {
        ${H1RalewayGreen};
        margin-top: 0;
      }
    }

    &__para {
      p {
        ${B1MontserratBlack};
      }
    }
  }
  .image {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 5rem);
      margin-left: 5rem;
    }
  }
`

const Approach = ({ approach }) => {
  return (
    <ApproachSection id="whoWeAre">
      <div className="wrapper">
        <div className="content">
          <div className="content__title">
            <h2>{approach.acf._rkg_appr_title}</h2>
          </div>
          <div
            className="content__para"
            dangerouslySetInnerHTML={{ __html: approach.acf._rkg_appr_content }}
          />
        </div>
        <div className="image">
          <Img
            fluid={approach.acf._rkg_appr_image.localFile.childImageSharp.fluid}
            alt={approach.acf._rkg_appr_image.alt_text}
          />
        </div>
      </div>
    </ApproachSection>
  )
}

export default Approach
