import React from "react"
import styled from "styled-components"

import Lines from "../Graphics/Lines"
import { H1RalewayBlack, B1MontserratBlack, navOne } from "../../styles/helpers"

const IntroSection = styled.section`
  position: relative;
  background-color: rgba(97, 128, 103, 0.5);
  height: 81rem;
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
      fill: #f4f4f3;
    }
  }
`

const Intro = ({ intro }) => {
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
      <div className="lineGraphic">
        <Lines />
      </div>
    </IntroSection>
  )
}

export default Intro
