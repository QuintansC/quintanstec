import Navigation from '../src/components/navigation'
import Sections from '../src/components/sections'
import { Image, Head, NextPage } from '../src/utils/nextImports'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - QuintansTec</title>
        <meta name="description" content="Aqui você encontra as melhores soluções de TI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main className={styles.main}>
        <img src='/bannerHome.png' alt=''/>
        <Sections/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
