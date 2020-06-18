import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  standardWrapper,
  H1RalewayGreen,
  colors,
  H4RalewayWhite,
  H4RalewayBlack,
} from "../../styles/helpers"

const ProcessSection = styled.section`
  position: relative;
  padding: 2.5rem 0;

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1RalewayGreen};
    }
  }

  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 100%;
  }

  .graphicCircle {
    position: absolute;
    top: 0;
    left: -45rem;
    width: 100rem;
    height: 100rem;
    border-radius: 100%;
    background-color: ${colors.colorAlt};
    z-index: -1;
  }
`

const Step = styled.div`
  position: relative;
  width: 100%;
  background-color: #cfddd1;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    width: calc(50% - 2rem);
    height: 30rem;
    margin: 2rem 1rem;
  }

  .innerContent {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 0.8rem ${colors.white};
    text-align: center;

    @media (min-width: 768px) {
      position: absolute;
      top: 2rem;
      right: 2rem;
      bottom: 2rem;
      left: 2rem;
    }

    &__title {
      position: relative;
      padding-top: 7.5rem;

      &--icon {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 5rem;
        height: 7.5rem;
        margin: 0 auto;

        &--start {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          opacity: 1;
          visibility: visible;
        }

        &--reverse {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          visibility: hidden;
        }

        img {
          width: 100%;
          max-width: 100%;
        }
      }
      &--text {
        margin-top: 1rem;
        padding: 0 10rem;

        h3 {
          ${H4RalewayBlack};
          margin: 0;
          transition: all 0.3s ease;
        }
      }
    }
  }

  &:hover {
    background-color: ${colors.colorTertiary};
    cursor: pointer;

    .innerContent {
      &__title {
        &--icon {
          &--start {
            opacity: 0;
            visibility: hidden;
          }
          &--reverse {
            opacity: 1;
            visibility: visible;
          }
        }
        &--text {
          h3 {
            color: ${colors.white};
          }
        }
      }
    }
  }
`

const Process = ({ ourProcess }) => {
  console.log(ourProcess)
  return (
    <ProcessSection>
      <div className="wrapper">
        <div className="title">
          <h2>{ourProcess.acf._rkg_ourpro_title}</h2>
        </div>
        <div className="steps">
          {ourProcess.acf._rkg_ourpro_step.map((step, index) => {
            return (
              <Step key={index}>
                <div className="innerContent">
                  <div className="innerContent__title">
                    <div className="innerContent__title--icon">
                      <div className="innerContent__title--icon--start">
                        <Img
                          fluid={step.icon.localFile.childImageSharp.fluid}
                          alt={step.icon.alt_text}
                        />
                      </div>
                      <div className="innerContent__title--icon--reverse">
                        <Img
                          fluid={
                            step.icon_reversed.localFile.childImageSharp.fluid
                          }
                          alt={step.icon_reversed.alt_text}
                        />
                      </div>
                    </div>
                    <div className="innerContent__title--text">
                      <h3>{step.title}</h3>
                    </div>
                  </div>
                </div>
              </Step>
            )
          })}
        </div>
      </div>
      <div className="graphicCircle" />
    </ProcessSection>
  )
}

export default Process
