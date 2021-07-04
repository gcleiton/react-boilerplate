import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Karla';
    src: url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
  }

  * {
    margin        : 0;
    padding       : 0;
    box-sizing    : border-box;
  }

  body {
    font-family     : 'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`

export default GlobalStyles
