import Image from 'next/image'
import styles from './page.module.css'
import NavigationBar from '../components/NavBar';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar/>
      <h1>Projects Page</h1>
    </main>
  )
}
