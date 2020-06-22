import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  colors,
  H4RalewayBlack,
  B2MontserratWhite,
  B1MontserratWhite,
  fontSizer,
} from "../../styles/helpers"

const Step = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  background-color: ${props =>
    props.isActive ? "#345a78" : "#cfddd1"} !important;
  transition: background-color 0.3s ease;

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
    text-align: left;

    @media (min-width: 768px) {
      position: absolute;
      top: 2rem;
      right: 2rem;
      bottom: 2rem;
      left: 2rem;
    }

    &__title {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &--icon {
        position: absolute;
        top: 50%;
        left: ${props => (props.isActive ? "2rem" : "50%")};
        width: ${props => (props.isActive ? "4rem" : "5rem")};
        height: ${props => (props.isActive ? "4rem" : "7.5rem")};
        transform: ${props =>
          props.isActive ? "translate(0%, -50%)" : "translate(-50%, -100%)"};
        margin: 0 auto;
        transition: all 0.3s ease;

        &--start {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          transition: all 0.3s ease;
          opacity: ${props => (props.isActive ? "10" : "1")};
          visibility: ${props => (props.isActive ? "hidden" : "visible")};
        }

        &--reverse {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          transition: all 0.3s ease;
          opacity: ${props => (props.isActive ? "1" : "0")};
          visibility: ${props => (props.isActive ? "visible" : "hidden")};
        }

        img {
          width: 100%;
          max-width: 100%;
        }
      }
      &--text {
        position: absolute;
        top: ${props => (props.isActive ? "50%" : "50%")};
        left: 50%;
        width: 100%;
        margin-top: 1rem;
        padding: 0 7.5rem;
        transition: all 0.3s ease;
        transform: ${props =>
          props.isActive ? "translate(-45%, -50%)" : "translate(-50%, 0%)"};

        h3 {
          ${props => (props.isActive ? B2MontserratWhite : H4RalewayBlack)};
          margin: 0;
          transition: all 0.3s ease;
          text-align: ${props => (props.isActive ? "left" : "center")};
        }

        &--content {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: solid 0.3rem ${colors.colorAlt};
          opacity: ${props => (props.isActive ? "1" : "0")};
          visibility: ${props => (props.isActive ? "visible" : "hidden")};

          p {
            ${B1MontserratWhite};
            ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
          }
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
const ProcessStep = ({ step }) => {
  const [isActive, setIsActive] = useState(false)

  const handleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <Step onClick={handleIsActive} isActive={isActive}>
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
                fluid={step.icon_reversed.localFile.childImageSharp.fluid}
                alt={step.icon_reversed.alt_text}
              />
            </div>
          </div>
          <div className="innerContent__title--text">
            <h3>{step.title}</h3>
            <div className="innerContent__title--text--content">
              <p>{step.content}</p>
            </div>
          </div>
        </div>
      </div>
    </Step>
  )
}

export default ProcessStep
