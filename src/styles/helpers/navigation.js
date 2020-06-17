import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const navOne = `
  ${fontSizer(1.6, 2.1, 76.8, 150, 1.8)};
  color: #464646;
  font-family: ${fonts.fontPrimary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.colorTertiary};
  }
`
