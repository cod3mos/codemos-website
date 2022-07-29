import Head from 'next/head'
import FooterCompany from 'src/components/footer'
import LastWorksSection from 'src/components/last-works-section'
import ServicesSection from 'src/components/services-section'
import AboutCompanySection from '../components/about-section'
import HeaderCompany from '../components/header'
import PresentationSection from '../components/presentation-section'
import TipsSection from '../components/tips-section'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Codemos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderCompany />

            <div className="main">
                <div className="content">
                    <PresentationSection />
                    <AboutCompanySection />
                    <ServicesSection />
                    <TipsSection />
                    <LastWorksSection />
                </div>
            </div>

            <FooterCompany />

            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7609736782077030"
                crossOrigin="anonymous"
            />
        </div>
    )
}
