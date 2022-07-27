import { DefaultTheme } from '../pages/_app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto';
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .main {
    display: flex;
    align-items: center;
    background-size: contain;
    flex-direction: column;
    justify-content: center;
    background-repeat: no-repeat;
    background-image: url('images/presentation-background.png');
  }

  .content {
    display: flex;
    max-width: 1000px;
    padding: 0  5% 0 5% ;
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
