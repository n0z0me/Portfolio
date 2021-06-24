import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStackOverflow, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from "../components/Header"
import styles from '../styles/Home.module.css'

export default function Timer() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>現在時刻</div>
        <div>15分後</div>
      </main>
      <Footer/>
    </div>
  )
}
