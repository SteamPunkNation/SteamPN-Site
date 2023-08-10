import Image from 'next/image'
import styles from './page.module.css'
import NavigationBar from '../components/navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar/>
    </main>
  )
}
