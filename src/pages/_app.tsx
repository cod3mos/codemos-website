import React from 'react'
import GlobalStyle from '../../styles/globals'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export interface DefaultTheme {
    colors: {
        primary: string
        secondary: string
        white: string
    }
}

const theme: DefaultTheme = {
    colors: {
        primary: '#0D0D0D',
        secondary: '#0070f3',
        white: '#FFFFFF'
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
