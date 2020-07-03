import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { navOne, fontSizer, buttonOneBlue } from "../../styles/helpers"

const NavItem = styled.li`
  a,
  button {
    ${navOne};
    background-color: transparent;
    border: none;
    border-radius: 0;
    outline: none;
  }
`

const HeaderNavItem = ({ item, location }) => {
  const justHash = item.url.split("#")[1]
  const noHash = item.url.split("#").join("/").split("/")[1]
  const locationMas = location.pathname.split("/").join("")

  const linkSamePage = noHash === locationMas
  const itemLink = linkSamePage ? (
    <button className="subLink" onClick={() => scrollTo(`#${justHash}`)}>
      {item.title}
    </button>
  ) : (
    <Link className="subLink" to={item.url}>
      {item.title}
    </Link>
  )
  return <NavItem key={item.wordpress_id}>{itemLink}</NavItem>
}

export default HeaderNavItem
