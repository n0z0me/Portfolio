import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStackOverflow, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from "../components/Header"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/profile.jpg" className={styles.HomeImage} alt="profile image">
        </img>
        <h1 className={styles.title}>
          NOZOMI KAWAMOATO
        </h1>

        <p className={styles.description}>
          Full Stack Engineer
        </p>

        <div className={styles.grid}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <hr className={styles.sectionBorder}></hr>
            <div className={styles.sectionContent}>
              <p>I am Nozomi Kawamoto.</p>
              <p>I graduated from the faculty of Engineering in Shinshu University, majored in Computer Science.</p>
              <p>My main research was BMI(Brain-Machine Interface) using EEG(Electroencephalogram), and I am better at software engineering than hardware engineering.</p>
              <p>About software engineering, my expertise ranges from HTML/CSS/Javascript to low-level programming.</p>
              <p>And I have solid knowledge on cloud architecture and ETL processing pipeline.</p>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience in</h2>
            <hr className={styles.sectionBorder}></hr>
            <p className={styles.sectionContent}>
              <ul>
                <li>Fullstack web service developing</li>
                <li>Full serverless CI/CD pipline developing</li>
                <li>Designing and Managing variety scale and purpose Elastic Stack</li>
                <li>Neuroscience research in National Labratory (CiNet)</li>
              </ul>
            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Knowledge</h2>
            <hr className={styles.sectionBorder}></hr>
            <p className={styles.sectionContent}>
              <ul>
                <li>Full serverless CI/CD pipline developing with Serverless Framework and GitHub Actions</li>
                <li>SPA web application developing with React and Next.js</li>
                <li>Designing and Managing Elastic Stack</li>
                <li>Neuroscience - EEG-BMI</li>
              </ul>
            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <hr className={styles.sectionBorder}></hr>
            <p className={styles.sectionContent}>
              <ul>
                <li>AWS, Serverless Framework</li>
                <li>Python, Javascript, C, HTML, CSS, etc.</li>
                <li>Elastic Stack</li>
                <li>React, Next.js</li>
                <li>Linux</li>
                <li>MySQL, PostgreSQL</li>
                <li>GitHub Actions</li>
              </ul>
            </p>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionLinkContent}>
              <a href="https://stackoverflow.com/users/15092943/n0z0me" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faStackOverflow } className={styles.linkItem} />
              </a>
              <a href="https://twitter.com/_n0z0me" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faTwitter } className={styles.linkItem} />
              </a>
              <a href="https://github.com/n0z0me" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faGithub } className={styles.linkItem} />
              </a>
              <a href="https://www.linkedin.com/in/n0z0me" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faLinkedin } className={styles.linkItem} />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
