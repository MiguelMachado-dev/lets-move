import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Let's Move!</title>
        <meta property="og:title" content="Let's Move!" />
        <meta property="og:description" content="Um projeto juntando as técnicas de pomodoro para melhorar o foco e rendimento no seu trabalho com técnicas de alongamento e tarefas para melhorar seu bem-estar." />
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div></div>
      </section>
    </div>
  )
}
