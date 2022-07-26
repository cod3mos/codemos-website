import React from 'react'
import Head from 'next/head'
import HeaderCompany from '../components/header'
import TipsSection from '../components/tips-section'
import AboutCompanySection from '../components/about-section'
import PresentationSection from '../components/presentation-section'
import ProjectsSection from 'src/components/projects-section'
import ServicesSection from 'src/components/services-section'
import FooterCompany from 'src/components/footer'

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
                    <ProjectsSection />
                    <ServicesSection />
                </div>
            </div>

            <FooterCompany />
        </div>
    )
}
