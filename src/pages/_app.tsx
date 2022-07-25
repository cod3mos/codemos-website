import React from 'react'
import GlobalStyle from '../../styles/globals'

import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
    colors: {
        primary: '#0D0D0D',
        secondary: '#0070f3'
    },
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
