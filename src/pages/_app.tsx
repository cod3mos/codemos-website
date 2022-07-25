import React from 'react'
import GlobalStyle from '../../styles/globals'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export interface DefaultTheme {
    theme: {
        colors: {
            primary: string
            secondary: string
        }
    }
}

const theme: DefaultTheme = {
    theme: {
        colors: {
            primary: '#111',
            secondary: '#0070f3'
        }
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
