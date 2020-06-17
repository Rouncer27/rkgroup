import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import {
  H1RalewayBlack,
  H1RalewayGreen,
  H1RalewayWhite,
  H2RalewayBlack,
  H2RalewayGreen,
  H2RalewayBlue,
  H3RalewayBlack,
  H3RalewayWhite,
  H4RalewayBlack,
  H4RalewayWhite,
  B2MontserratWhite,
  B1MontserratBlack,
  B1MontserratWhite,
  navOne,
  buttonOneBlue,
} from "../styles/helpers"

const StyleGuild = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem;

  .h1-black {
    ${H1RalewayBlack}
  }

  .h1-green {
    ${H1RalewayGreen}
  }

  .h1-white {
    ${H1RalewayWhite}
  }

  .h2-black {
    ${H2RalewayBlack};
  }

  .h2-green {
    ${H2RalewayGreen};
  }

  .h2-blue {
    ${H2RalewayBlue};
  }

  .h3-black {
    ${H3RalewayBlack};
  }

  .h3-white {
    ${H3RalewayWhite};
  }

  .h4-black {
    ${H4RalewayBlack};
  }

  .h4-white {
    ${H4RalewayWhite};
  }

  .b2-white {
    ${B2MontserratWhite};
  }

  .b1-black {
    ${B1MontserratBlack};
  }

  .b1-white {
    ${B1MontserratWhite};
  }

  .nav1-black {
    ${navOne};
  }

  button,
  a {
    ${buttonOneBlue};
    margin: 2rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyleGuild>
      <h1 className="h1-black">Headline One</h1>
      <h1 className="h1-green">Headline One</h1>
      <h1 className="h1-white">Headline One</h1>

      <h2 className="h2-black">Headline Two</h2>
      <h2 className="h2-green">Headline Two</h2>
      <h2 className="h2-blue">Headline Two</h2>

      <h3 className="h3-black">Headline Three</h3>
      <h3 className="h3-white">Headline Three</h3>

      <h4 className="h4-black">Headline Four</h4>
      <h4 className="h4-white">Headline Four</h4>

      <p className="b2-white">
        Body copy Two - Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
        turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
        pede.
      </p>

      <p className="b1-black">
        Body copy One - Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
        turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
        pede.
      </p>
      <p className="b1-white">
        Body copy One - Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
        turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
        pede.
      </p>

      <p className="nav1-black">
        Nav One - Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
        turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
        pede.
      </p>

      <button>Contact Us</button>
      <a href="#">Contact Us</a>
    </StyleGuild>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2 rkgroup</Link>
  </Layout>
)

export default IndexPage
