import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStackOverflow, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from "../components/Header"
import styles from '../styles/Timer.module.css'
import { faSortNumericDown } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from 'react'

export default function Timer() {
  let now = new Date();

  const timeStr = date => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const nextTiming = () => 1000 - Date.now() % 1000;

  const [nowTime, setNowTime] = useState(
    () => timeStr(new Date)
  );
  
  const [nextTime, setNextTime] = useState(
    () => timeStr(new Date)
  );
  
  useEffect(() => {
    let timer = setTimeout(function main(){
      now = new Date();
      next = new Date(now.getTime() + 15 * 60000);
      timer = setTimeout(main, nextTiming());
      setNowTime(timeStr(now));
      setNextTime(timeStr(next));
    }, nextTiming());
    return () => clearTimeout(timer);
  }, [setNowTime, setNextTime]);


  return (
    <div className={styles.container}>
      <Head>
        <title>Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>{nowTime}</div>
        <div>{nextTime}</div>
      </main>
    </div>
  )
}
