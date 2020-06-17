import { colors } from "./index"
import { fonts, fontSizer } from "./index"

const buttonOne = `
  ${fontSizer(1.8, 2, 76.8, 150, 1.8)};
  display: inline-block;
  min-width: 20rem;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  border: solid 0.1rem ${colors.colorAlt};
  box-shadow: 0.2rem 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.16);
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.36;
  letter-spacing: normal;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const buttonOneBlue = `
  ${buttonOne};
  border-color: ${colors.colorAccent};
  background: ${colors.colorAccent};
  color: ${colors.colorAlt};

  &:hover {
    color: ${colors.colorAccent};
    background: ${colors.colorAlt};
  }
`
