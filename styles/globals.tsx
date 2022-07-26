import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from '../src/pages/_app'

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto';
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
