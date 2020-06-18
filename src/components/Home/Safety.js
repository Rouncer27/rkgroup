import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  standardWrapper,
  B1MontserratWhite,
  H1RalewayWhite,
  colors,
} from "../../styles/helpers"

const SafetySection = styled.section`
  padding: 5rem 0;
  background-color: ${colors.colorAccent};

  .wrapper {
    ${standardWrapper};

    @media (min-width: 768px) {
      max-width: 80rem;
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
  width: calc(50%);

  @media (min-width: 768px) {
    width: calc(33.33%);
  }

  .logoWrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 3rem;
    margin: auto;
    width: 20rem;
    height: 20rem;
    background-color: ${colors.white};
    border-radius: 100%;
    overflow: hidden;

    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`

const Safety = ({ safety }) => {
  console.log(safety)
  return (
    <SafetySection>
      <div className="wrapper">
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
                <Logo key={index}>
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
