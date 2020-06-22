import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  medWrapper,
  H1RalewayWhite,
  H3RalewayWhite,
  colors,
} from "../../styles/helpers"
import Lines from "../Graphics/Lines"

gsap.registerPlugin(ScrollTrigger)

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
  const linesGraphic = useRef(null)
  const linesTrigger = useRef(null)

  useEffect(() => {
    const linesArray = [
      ...linesGraphic.current.querySelectorAll(".prefix__cls-2"),
    ]
    let count = 0
    gsap.set(linesArray, { transformOrigin: "100%, 50%" })

    linesArray.forEach((item, index) => {
      if (index % 2) return
      const scaleNumber = Math.random() + 0.75
      count += 1
      gsap.to(item, {
        scale: scaleNumber,
        scrollTrigger: {
          trigger: linesTrigger.current,
          start: "top 85%",
          end: "bottom -15%",
          markers: false,
          scrub: 1.5,
        },
      })
    })
  }, [])

  return (
    <SpecializeSection ref={linesTrigger}>
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
      <div ref={linesGraphic} className="lineGraphic">
        <Lines />
      </div>
    </SpecializeSection>
  )
}

export default Specialize
