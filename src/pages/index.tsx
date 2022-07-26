import React from 'react'
import Head from 'next/head'
import HeaderCompany from '../components/header'
import TipsSection from '../components/tips-section'
import AboutCompanySection from '../components/about-section'
import PresentationSection from '../components/presentation-section'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Bem-vindo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderCompany />

            <div className="main">
                <div className="content">
                    <PresentationSection />
                    <AboutCompanySection />
                    <TipsSection />
                </div>
            </div>
        </div>
    )
}
