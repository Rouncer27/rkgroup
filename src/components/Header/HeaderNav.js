import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

import HeaderNavItem from "./HeaderNavItem"
import { buttonOneBlue } from "../../styles/helpers"

const HeaderNavSection = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(65%);
    padding: 0 8rem 0 2rem;
  }

  .navWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: calc(70%);

    @media (min-width: 768px) {
      justify-content: flex-end;
      width: calc(70% - 0rem);
    }

    li {
      position: relative;
      margin: auto 1rem;
      width: calc(50% - 2rem);
      text-align: center;

      &::after {
        display: none;
        position: absolute;
        top: 0.5rem;
        right: -1.25rem;
        bottom: 0.5rem;
        width: 0.2rem;
        background-color: #464646;
        content: "";
      }

      @media (min-width: 768px) {
        width: auto;
        margin: auto 1rem;

        &::after {
          display: block;
        }
      }
    }

    li:last-of-type {
      @media (min-width: 768px) {
        margin: auto 0 auto 1rem;
      }

      &::after {
        display: none;
      }
    }
  }

  .contactBtn {
    width: calc(30%);

    @media (min-width: 768px) {
      margin-left: 4rem;
    }

    button,
    a {
      ${buttonOneBlue};
    }
  }
`

const getData = graphql`
  {
    mainMenu: wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
      items {
        wordpress_id
        title
        object_slug
        target
        type
        url
      }
    }
  }
`

const HeaderNav = ({ location }) => {
  const data = useStaticQuery(getData)
  const menuItems = data.mainMenu.items

  const noHash = "/#contactUs".split("#").join("/").split("/")[1]
  const locationMas = location.pathname.split("/").join("")
  const linkSamePage = noHash === locationMas

  const contactBtn = linkSamePage ? (
    <button onClick={() => scrollTo(`#contactUs`)}>Contact Us</button>
  ) : (
    <Link to={`/#contactUs`}>Contact Us</Link>
  )

  return (
    <HeaderNavSection>
      <div className="navWrapper">
        <ul>
          {menuItems.length > 0 &&
            menuItems.map(item => (
              <HeaderNavItem
                key={item.object_slug}
                item={item}
                location={location}
              />
            ))}
        </ul>
        <div className="contactBtn">{contactBtn}</div>
      </div>
    </HeaderNavSection>
  )
}

export default HeaderNav
