import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bem-vindo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Desenvolvendo algo depois eu volto para terminar este site..." />
        <p className="description" style={{color: 'white'}}>
          Me siga no instagram <code>@codemos_</code>
        </p>
      </main>
      <script 
        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7609736782077030"
        crossorigin="anonymous">
     </script>
    </div>
  )
}
