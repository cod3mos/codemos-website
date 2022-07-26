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

  .main {
    display: flex;
    flex-direction: column;
    background-size: fill;
    justify-content: center;
    background-repeat: no-repeat;
    background-image: url('images/presentation-background.png');
  }

  .content {
    display: flex;
    max-width: 1000px;
    padding: 0  10% 0 10% ;
    flex-direction: column;
    justify-content: center;
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
