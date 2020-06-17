import * as secondary from "./secondary"

const SecondaryFonts = `

@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: local('Raleway'), local('Raleway-Regular'),
       url('${secondary.WOFF2_4}') format('woff2'),
       url('${secondary.WOFF_4}') format('woff');
}

@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 400;
  src: local('Raleway Italic'), local('Raleway-Italic'),
       url('${secondary.WOFF2_4I}') format('woff2'),
       url('${secondary.WOFF_4I}') format('woff');
}

@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: local('Raleway Bold'), local('Raleway-Bold'),
       url('${secondary.WOFF2_7}') format('woff2'),
       url('${secondary.WOFF_7}') format('woff');
}

@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 700;
  src: local('Raleway Bold Italic'), local('Raleway-BoldItalic'),
       url('${secondary.WOFF2_7I}') format('woff2'),
       url('${secondary.WOFF_7I}') format('woff');
}



`

export default SecondaryFonts
