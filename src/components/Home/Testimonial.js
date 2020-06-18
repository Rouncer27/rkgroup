import React from "react"
import BgImg from "gatsby-background-image"
import styled from "styled-components"
import { H3RalewayWhite, colors } from "../../styles/helpers"

const TestimonialSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 7.5rem 2rem;
  z-index: 10;

  @media (min-width: 768px) {
    min-height: 40rem;
    padding: 2rem;
  }

  @media (min-width: 1025px) {
    min-height: 50rem;
  }

  .content {
    position: relative;
    width: 100%;
    max-width: 100rem;
    text-align: center;
    z-index: 100;

    p {
      ${H3RalewayWhite};
      margin: 0;
    }
  }

  .backgroundImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${colors.colorPrimary};
      opacity: 0.61;
      z-index: 5;
    }

    .backgroundImage__container {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      opacity: 1 !important;
      z-index: 1 !important;
    }
  }
`

const Testimonial = ({ testimonal }) => {
  console.log(testimonal)
  return (
    <TestimonialSection>
      <div className="content">
        <p>{testimonal.acf._rkg_test_testimonial}</p>
      </div>
      <div className="backgroundImage">
        <div className="backgroundImage__overlay" />
        <BgImg
          className="backgroundImage__container"
          tag="div"
          fluid={
            testimonal.acf._rkg_test_background_image.localFile.childImageSharp
              .fluid
          }
        />
      </div>
    </TestimonialSection>
  )
}

export default Testimonial
