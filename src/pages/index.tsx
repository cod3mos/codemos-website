import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { DefaultTheme } from './_app'

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }: DefaultTheme) => theme.colors.primary};
`

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Bem-vindo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Title>Codemos</Title>
        </div>
    )
}
