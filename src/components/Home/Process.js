import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { standardWrapper, H1RalewayGreen, colors } from "../../styles/helpers"
import ProcessStep from "./ProcessStep"
gsap.registerPlugin(ScrollTrigger)

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

const Process = ({ ourProcess }) => {
  const triggerEleTitle = useRef(null)
  const proWrap = useRef(null)

  useEffect(() => {
    const proSteps = proWrap.current.querySelectorAll(":scope > div")
    gsap.set(proSteps, { autoAlpha: 0, y: 100 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerEleTitle.current,
          start: "top 50%",
          end: "bottom 0%",
          markers: false,
          toggleActions: "play none none reverse",
        },
      })
      .to(proSteps, {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "back",
        stagger: {
          each: 0.25,
        },
      })
  }, [])

  return (
    <ProcessSection>
      <div className="wrapper">
        <div className="title" ref={triggerEleTitle}>
          <h2>{ourProcess.acf._rkg_ourpro_title}</h2>
        </div>
        <div className="steps" ref={proWrap}>
          {ourProcess.acf._rkg_ourpro_step.map((step, index) => {
            return <ProcessStep key={index} step={step} />
          })}
        </div>
      </div>
      <div className="graphicCircle" />
    </ProcessSection>
  )
}

export default Process
