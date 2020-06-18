import React from "react"
import styled from "styled-components"

import ArrowBlue from "../Graphics/ArrowBlue"
import ArrowGreen from "../Graphics/ArrowGreen"
import {
  H2RalewayBlue,
  medWrapper,
  B1MontserratBlack,
  H1RalewayGreen,
} from "../../styles/helpers"

const ServicesSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;

    h2 {
      ${H1RalewayGreen};
    }
  }

  .itemContainer {
    width: 100%;
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 5rem auto;

  @media (min-width: 768px) {
    margin: 7.5rem auto;
  }

  @media (min-width: 1025px) {
    margin: 10rem auto;
  }

  .itemTitle {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      width: 45%;
      height: 23.5vw;
    }

    @media (min-width: 1025px) {
      height: 24vw;
    }

    @media (min-width: 1200px) {
      height: 30rem;
    }

    &__content {
      margin-bottom: 2.5rem;

      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 4rem;
        right: ${props => (props.reversed ? "-15%" : "15%")};
        bottom: 4rem;
        left: ${props => (props.reversed ? "15%" : "-15%")};
        margin-bottom: 0;
        padding-top: 3rem;
        padding-right: ${props => (props.reversed ? "3rem" : "10rem")};
        padding-bottom: 3rem;
        padding-left: ${props => (props.reversed ? "10rem" : "3rem")};
        text-align: ${props => (props.reversed ? "left" : "right")};
      }

      h3 {
        ${H2RalewayBlue};
        width: 100%;
        margin: 0;
      }
    }

    .arrowGraphic {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      @media (min-width: 768px) {
        display: block;
        right: ${props => (props.reversed ? "-15%" : "15%")};
        left: ${props => (props.reversed ? "15%" : "-15%")};
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  .itemPoints {
    @media (min-width: 768px) {
      width: calc(55% - 5rem);
      margin-right: ${props => (props.reversed ? "auto" : "5rem")};
      margin-left: ${props => (props.reversed ? "5rem" : "auto")};
    }

    ul {
      li {
        ${B1MontserratBlack};
        margin-bottom: 1rem;
        position: relative;

        &::after {
          display: block;
          position: absolute;
          top: 1rem;
          left: -1rem;
          width: 0.25rem;
          height: 0.25rem;
          border-radius: 100%;
          background-color: #464646;
          content: "";
        }
      }
    }
  }
`

const Services = ({ services }) => {
  return (
    <ServicesSection id="services">
      <div className="wrapper">
        <div className="title">
          <h2>{services.acf._rkg_servou_title}</h2>
        </div>
        <div className="itemContainer">
          {services.acf._rkg_servou_services.map((serv, index) => {
            const arrow = index % 2 ? <ArrowGreen /> : <ArrowBlue />
            const reversed = index % 2 ? true : false

            return (
              <Item key={index} reversed={reversed}>
                <div className="itemTitle">
                  <div className="itemTitle__content">
                    <h3>{serv.title}</h3>
                  </div>
                  <div className="arrowGraphic">{arrow}</div>
                </div>
                <div className="itemPoints">
                  <ul>
                    {serv.service_points.map((point, index) => {
                      return <li key={index}>{point.point}</li>
                    })}
                  </ul>
                </div>
              </Item>
            )
          })}
        </div>
      </div>
    </ServicesSection>
  )
}

export default Services
