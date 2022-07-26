import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
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
