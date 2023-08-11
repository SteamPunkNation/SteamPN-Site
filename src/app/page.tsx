import Image from 'next/image'
import styles from './page.module.css'
import NavigationBar from './components/navbar';
import PreviewProjectCard from './components/previewProjects';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar/>
      <div className={styles.previewProjects}>
        <p id={styles.welcomeText}>Welcome! Here is my archive of projects, public files, and miscellaneous links.</p>
        <PreviewProjectCard/>
        <PreviewProjectCard/>
      </div>
      <div className={styles.previewDownloads}>

      </div>
      <div className={styles.video}>

      </div>
      <div className={styles.socials}>

      </div>
    </main>
  )
}
