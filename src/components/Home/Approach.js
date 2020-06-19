import React, { useEffect, useRef } from "react"
import BgImg from "gatsby-background-image"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { H1RalewayGreen, B1MontserratBlack } from "../../styles/helpers"

gsap.registerPlugin(ScrollTrigger)

const ApproachSection = styled.section`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 2rem;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;

    @media (min-width: 768px) {
      padding-top: 5rem;
      padding-right: 0;
      padding-bottom: 5rem;
      padding-left: 4rem;
    }

    @media (min-width: 1025px) {
      padding-top: 15rem;
    }
  }

  .content {
    width: 100%;
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(50% - 5rem);
      margin-right: 5rem;
      margin-left: auto;
      padding: 0;
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
    position: relative;
    width: 100%;
    min-height: 40rem;

    @media (min-width: 768px) {
      width: calc(50% - 5rem);
      margin-left: 5rem;
    }

    &__container {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const Approach = ({ approach }) => {
  const contentEle = useRef(null)
  const imageEle = useRef(null)
  const triggerEle = useRef(null)
  useEffect(() => {
    gsap.set(contentEle.current, { y: 200, autoAlpha: 0 })
    gsap.set(imageEle.current, { x: 200, autoAlpha: 0 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerEle.current,
          markers: false,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .to(contentEle.current, { y: 0, autoAlpha: 1, ease: "back" })
      .to(imageEle.current, { x: 0, autoAlpha: 1, ease: "back" })
  }, [])
  return (
    <ApproachSection ref={triggerEle} id="whoWeAre">
      <div className="wrapper">
        <div ref={contentEle} className="content">
          <div className="content__title">
            <h2>{approach.acf._rkg_appr_title}</h2>
          </div>
          <div
            className="content__para"
            dangerouslySetInnerHTML={{ __html: approach.acf._rkg_appr_content }}
          />
        </div>
        <div ref={imageEle} className="image">
          <BgImg
            className="image__container"
            fluid={approach.acf._rkg_appr_image.localFile.childImageSharp.fluid}
            tag="div"
          />
        </div>
      </div>
    </ApproachSection>
  )
}

export default Approach
