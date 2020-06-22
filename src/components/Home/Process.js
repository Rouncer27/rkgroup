import React from "react"
import styled from "styled-components"
import { standardWrapper, H1RalewayGreen, colors } from "../../styles/helpers"

import ProcessStep from "./ProcessStep"

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
  return (
    <ProcessSection>
      <div className="wrapper">
        <div className="title">
          <h2>{ourProcess.acf._rkg_ourpro_title}</h2>
        </div>
        <div className="steps">
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
