import * as primary from "./primary"

const PrimaryFonts = `
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src: local('Montserrat Light'), local('Montserrat-Light'),
       url('${primary.WOFF2_3}') format('woff2'),
       url('${primary.WOFF_3}') format('woff');
}

@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 300;
  src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'),
       url('${primary.WOFF2_3I}') format('woff2'),
       url('${primary.WOFF_3I}') format('woff');
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
       url('${primary.WOFF2_4}') format('woff2'),
       url('${primary.WOFF_4}') format('woff');
}

@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: local('Montserrat Italic'), local('Montserrat-Italic'),
       url('${primary.WOFF2_4I}') format('woff2'),
       url('${primary.WOFF_4I}') format('woff');
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local('Montserrat Bold'), local('Montserrat-Bold'),
       url('${primary.WOFF2_7}') format('woff2'),
       url('${primary.WOFF_7}') format('woff');
}

@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 700;
  src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'),
       url('${primary.WOFF2_7I}') format('woff2'),
       url('${primary.WOFF_7I}') format('woff');
}
`

export default PrimaryFonts
