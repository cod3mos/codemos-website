import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import HeaderCompany from '../components/header'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Bem-vindo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderCompany />
        </div>
    )
}
