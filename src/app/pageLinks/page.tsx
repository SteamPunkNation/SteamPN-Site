import Image from 'next/image'
import styles from './page.module.css'
import NavigationBar from '../components/navbar/navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar/>
      <h1>Links Page</h1>
    </main>
  )
}
