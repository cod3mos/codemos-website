import GlobalStyle from '../styles/globals'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export interface DefaultTheme {
    colors: {
        primary: string
        secondary: string
        white: string
    }
    breakpoints: {
        s: string
        m: string
    }
}

const theme: DefaultTheme = {
    colors: {
        primary: '#0D0D0D',
        secondary: '#02FFCC',
        white: '#FFFFFF'
    },
    breakpoints: {
        s:'only screen and (max-width: 600px)',
        m: 'only screen and (max-width: 1040px)'
    }
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
