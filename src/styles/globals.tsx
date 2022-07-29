import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from '../pages/_app'

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  html, body, .container {
    margin: 0px;
    width: 100vw;
    padding: 0px;
    font-weight: 400;
    font-family: 'Roboto';
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

  .main {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('images/presentation-background.png');
  }

  .content {
    width: 99vw;
    display: grid;
    max-width: 1000px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`

export default GlobalStyle
