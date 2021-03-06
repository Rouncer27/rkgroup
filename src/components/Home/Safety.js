import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Img from "gatsby-image"
import {
  standardWrapper,
  B1MontserratWhite,
  H1RalewayWhite,
  colors,
} from "../../styles/helpers"

gsap.registerPlugin(ScrollTrigger)

const SafetySection = styled.section`
  padding: 5rem 0;
  background-color: ${colors.colorAccent};

  .wrapper {
    ${standardWrapper};

    @media (min-width: 768px) {
      max-width: 80rem !important;
    }
  }

  .content {
    width: 100%;

    &__title {
      width: 100%;
      margin-bottom: 2rem;
      text-align: center;

      h2 {
        ${H1RalewayWhite};
      }
    }

    &__content {
      width: 100%;
      margin-bottom: 2rem;
      text-align: center;

      p {
        ${B1MontserratWhite};
      }
    }

    &__logos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
  }
`

const Logo = styled.div`
  width: calc(25% - 4rem);
  margin: 2rem;

  @media (min-width: 768px) {
    width: calc(33.33%);
    margin: auto;
  }

  .logoWrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    margin: auto;
    width: 9rem;
    height: 9rem;
    background-color: ${colors.white};
    border-radius: 100%;
    overflow: hidden;

    @media (min-width: 768px) {
      width: 20rem;
      height: 20rem;
      padding: 3rem;
    }

    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`

const Safety = ({ safety }) => {
  const triggerEle = useRef(null)
  useEffect(() => {
    const title = triggerEle.current.querySelector(".content__title")
    const content = triggerEle.current.querySelector(".content__content")
    const allLogos = [...triggerEle.current.querySelectorAll(".singleLogo")]

    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerEle.current,
          start: "top 75%",
          end: "bottom 0%",
          markers: false,
        },
      })
      .fromTo(
        title,
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1 }
      )
      .fromTo(
        content,
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1 },
        "=-0.25"
      )
      .fromTo(
        allLogos,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: {
            each: 0.25,
          },
        }
      )
  }, [])
  return (
    <SafetySection>
      <div className="wrapper" ref={triggerEle}>
        <div className="content">
          <div className="content__title">
            <h2>{safety.acf._rkg_samat_title}</h2>
          </div>
          <div
            className="content__content"
            dangerouslySetInnerHTML={{ __html: safety.acf._rkg_samat_content }}
          />
          <div className="content__logos">
            {safety.acf._rkg_samat_logos.map((logo, index) => {
              return (
                <Logo key={index} className="singleLogo">
                  <div className="logoWrap">
                    <Img
                      fluid={logo.logo.localFile.childImageSharp.fluid}
                      alt={logo.logo.alt_text}
                    />
                  </div>
                </Logo>
              )
            })}
          </div>
        </div>
      </div>
    </SafetySection>
  )
}

export default Safety
