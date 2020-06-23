import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  medWrapper,
  H1RalewayWhite,
  colors,
  B1MontserratWhite,
} from "../../styles/helpers"
import Lines from "../Graphics/Lines"

gsap.registerPlugin(ScrollTrigger)

const SpecializeSection = styled.section`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 5rem;
  background-color: ${colors.colorTertiary};

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .image {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    z-index: 10;

    @media (min-width: 768px) {
      width: calc(100%);
    }

    @media (min-width: 1025px) {
      width: calc(100%);
      margin: auto;
      padding: 4rem;
    }

    &__container {
      width: 15rem;
      margin-right: 2.5rem;

      @media (min-width: 768px) {
        width: 21.5rem;
        margin-right: 5rem;
      }
    }

    &__title {
      h2 {
        ${H1RalewayWhite};
      }
    }
  }

  .content {
    position: relative;
    width: 100%;
    z-index: 10;

    @media (min-width: 768px) {
      width: calc(100%);
    }

    @media (min-width: 1025px) {
      width: calc(100%);
      padding: 3rem;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }

  .lineGraphic {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 89rem;
    z-index: 1;

    div {
      height: 100%;
    }

    svg {
      height: 100%;
    }

    .prefix__cls-2 {
      fill: #f4f4f3;
      opacity: 0.25;
    }
  }
`

const SpecializeItem = styled.div`
  position: relative;
  width: calc(50%);
  padding-top: 10rem;

  @media (min-width: 768px) {
    width: calc(33.33%);
    padding-top: 12.5rem;
  }

  @media (min-width: 1024px) {
    width: calc(25%);
    padding-top: 12.5rem;
  }

  .icon {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;

    &__wrapper {
      position: relative;
      width: 5rem;
      height: 7rem;
      margin: 2rem auto;

      @media (min-width: 768px) {
        width: 7rem;
        height: 10rem;
        margin: 2rem auto;
      }

      .gatsby-image-wrapper {
        position: absolute !important;
        bottom: 0 !important;
        right: 0 !important;
        left: 0 !important;
        width: 100% !important;
      }
    }
  }

  .title {
    width: 100%;
    text-align: center;

    h3 {
      ${B1MontserratWhite};
    }
  }
`

const Specialize = ({ specialize }) => {
  const linesGraphic = useRef(null)
  const linesTrigger = useRef(null)
  const iconsTrigger = useRef(null)

  useEffect(() => {
    const listIcons = document.querySelector(".content__list")
    const specializedIcons = [...listIcons.querySelectorAll(":scope > div")]

    gsap.set(specializedIcons, { autoAlpha: 0, y: 100 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: iconsTrigger.current,
          start: "top 60%",
          end: "bottom 0%",
          markers: false,
          toggleActions: "play none none reverse",
        },
      })
      .to(specializedIcons, {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "back",
        stagger: {
          each: 0.25,
        },
      })

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
          <div className="image__container">
            <Img
              fluid={
                specialize.acf._rkg_speci_logo.localFile.childImageSharp.fluid
              }
              alt={specialize.acf._rkg_speci_logo.alt_text}
            />
          </div>
          <div className="image__title">
            <h2>{specialize.acf._rkg_speci_title}</h2>
          </div>
        </div>
        <div className="content">
          <div ref={iconsTrigger} className="content__list">
            {specialize.acf._rkg_speci_items.map((item, index) => {
              return (
                <SpecializeItem key={index}>
                  <div className="icon">
                    <div className="icon__wrapper">
                      <Img
                        fluid={item.icon.localFile.childImageSharp.fluid}
                        alt={item.item}
                      />
                    </div>
                  </div>
                  <div className="title">
                    <h3>{item.item}</h3>
                  </div>
                </SpecializeItem>
              )
            })}
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
