import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lines from "../Graphics/Lines"
import CleaningTool from "../Graphics/CleaningTool"
import { H1RalewayBlack, B1MontserratBlack, navOne } from "../../styles/helpers"

gsap.registerPlugin(ScrollTrigger)

const IntroSection = styled.section`
  position: relative;
  background-color: rgba(97, 128, 103, 0.5);
  height: 81rem;
  margin-bottom: 5rem;
  z-index: 1;

  .content {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 90rem;
    text-align: center;

    &__title {
      h2 {
        ${H1RalewayBlack};
      }
    }

    &__intro {
      p {
        ${B1MontserratBlack};
      }
    }

    &__bold {
      p {
        ${navOne};
      }
    }
  }

  .lineGraphic {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 89rem;
    z-index: -1;

    .prefix__cls-2 {
      display: block;
      fill: #f4f4f3;
    }
  }

  .cleaningToolGraphic {
    position: absolute;
    right: 2rem;
    bottom: -6.5rem;
    left: 2rem;
    width: calc(100% - 4rem);
    max-width: 50rem;
    margin: auto;
    z-index: 1;
  }
`

const Intro = ({ intro }) => {
  const linesGraphic = useRef(null)

  useEffect(() => {
    const linesArray = [
      ...linesGraphic.current.querySelectorAll(".prefix__cls-2"),
    ]
    gsap.set(linesArray, {
      transformOrigin: "100%, 50%",
      scale: 0,
      autoAlpha: 0,
    })
    gsap.to(linesArray, {
      autoAlpha: 1,
      scale: 1,
      ease: "back",
      delay: 0.5,
      stagger: { amount: 0.5 },
    })
    console.log(linesArray)
  }, [])

  return (
    <IntroSection>
      <div className="content">
        <div className="content__title">
          <h2>{intro.acf._rkg_homint_title}</h2>
        </div>
        <div
          className="content__intro"
          dangerouslySetInnerHTML={{ __html: intro.acf._rkg_homint_content }}
        />
        <div
          className="content__bold"
          dangerouslySetInnerHTML={{ __html: intro.acf._rkg_homint_bold }}
        />
      </div>
      <div ref={linesGraphic} className="lineGraphic">
        <Lines />
      </div>
      <div className="cleaningToolGraphic">
        <CleaningTool />
      </div>
    </IntroSection>
  )
}

export default Intro
