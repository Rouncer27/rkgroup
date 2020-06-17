import { colors } from "./index"
import { fonts, fontSizer } from "./index"

// Body copy ONE //
export const B1Montserrat = `
  ${fontSizer(1.8, 2.1, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
`

export const B1MontserratBlack = `
  ${B1Montserrat};
  color: #464646;
`

export const B1MontserratWhite = `
  ${B1Montserrat};
  color: ${colors.colorAlt};
`

// Body copy TWO //
export const B2Montserrat = `
  ${fontSizer(1.8, 2.2, 76.8, 150, 2)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
`

export const B2MontserratWhite = `
  ${B2Montserrat};
  color: ${colors.colorAlt};
`
