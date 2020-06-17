import { colors } from "./index"
import { fonts, fontSizer } from "./index"

// Headline Styles #1 //
export const H1Raleway = `
    ${fontSizer(2.8, 4, 76.8, 150, 2.6)}
    font-family: ${fonts.fontSecondary};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
  `
export const H1RalewayBlack = `
  ${H1Raleway};
  color: #464646;
`

export const H1RalewayGreen = `
  ${H1Raleway};
  color: ${colors.colorPrimary};
`

export const H1RalewayWhite = `
  ${H1Raleway};
  color: ${colors.colorAlt};
`

// Headline Styles #2 //
export const H2Raleway = `
    ${fontSizer(2.4, 3.5, 76.8, 150, 2.2)}
    font-family: ${fonts.fontSecondary};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: normal;
`
export const H2RalewayBlack = `
    ${H2Raleway};
    color: #464646;
`
export const H2RalewayGreen = `
    ${H2Raleway};
    color: ${colors.colorTertiary};
`
export const H2RalewayBlue = `
    ${H2Raleway};
    color: ${colors.colorAccent};
`

// Headline Styles #3 //
export const H3Raleway = `
    ${fontSizer(2.4, 3.5, 76.8, 150, 2.2)}
    font-family: ${fonts.fontSecondary};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: normal;
`
export const H3RalewayBlack = `
    ${H3Raleway};
    color: #464646;
`
export const H3RalewayWhite = `
    ${H3Raleway};
    color: ${colors.colorAlt};
`

// Headline Styles #4 //
export const H4Raleway = `
    ${fontSizer(2.2, 3.3, 76.8, 160, 2)};
    font-family: ${fonts.fontSecondary};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
`
export const H4RalewayBlack = `
    ${H4Raleway};
    color: #464646;
`
export const H4RalewayWhite = `
    ${H4Raleway};
    color: ${colors.colorAlt};
`
