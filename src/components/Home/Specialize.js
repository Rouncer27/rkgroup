import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  medWrapper,
  H1RalewayWhite,
  H3RalewayWhite,
  colors,
} from "../../styles/helpers"
import Lines from "../Graphics/Lines"

const SpecializeSection = styled.section`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: ${colors.colorTertiary};

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .image {
    position: relative;
    width: 100%;
    z-index: 10;

    @media (min-width: 768px) {
      width: calc(20%);
    }

    @media (min-width: 1025px) {
      width: calc(20%);
      margin: auto;
      padding: 4rem;
    }
  }

  .content {
    position: relative;
    width: 100%;
    z-index: 10;

    @media (min-width: 768px) {
      width: calc(80%);
    }

    @media (min-width: 1025px) {
      width: calc(80%);
      padding: 3rem;
    }

    &__title {
      h2 {
        ${H1RalewayWhite};
      }
    }

    &__list {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        li {
          ${H3RalewayWhite};
          font-weight: normal;
          position: relative;
          margin-right: 3rem;

          &::after {
            display: block;
            position: absolute;
            top: 1rem;
            right: -1.75rem;
            bottom: 1rem;
            width: 0.3rem;
            background-color: ${colors.colorAlt};
            content: "";
          }
        }
      }
    }
  }

  .lineGraphic {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 89rem;
    z-index: 1;

    .prefix__cls-2 {
      fill: #f4f4f3;
      opacity: 0.25;
    }
  }
`

const Specialize = ({ specialize }) => {
  return (
    <SpecializeSection>
      <div className="wrapper">
        <div className="image">
          <Img
            fluid={
              specialize.acf._rkg_speci_logo.localFile.childImageSharp.fluid
            }
            alt={specialize.acf._rkg_speci_logo.alt_text}
          />
        </div>
        <div className="content">
          <div className="content__title">
            <h2>{specialize.acf._rkg_speci_title}</h2>
          </div>
          <div className="content__list">
            <ul>
              {specialize.acf._rkg_speci_items.map((item, index) => {
                return <li key={index}>{item.item}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="lineGraphic">
        <Lines />
      </div>
    </SpecializeSection>
  )
}

export default Specialize
