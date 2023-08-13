import Image from 'next/image'
import styles from './page.module.css'
import NavigationBar from './components/NavBar';
import PreviewProjectCard from './components/PreviewProjects';
import PreviewDownloadCard from './components/PreviewDownloads';
import {previewProjectInfo, previewDownloadInfo} from './pageInfo';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar/>
      <div className={styles.previewProjects}>
        <p id={styles.welcomeText}>Welcome! Here is my archive of projects, public files, and miscellaneous links.</p>
        {previewProjectInfo.map(info =>(
          <PreviewProjectCard key={info.title} title={info.title} description1={info.description1} discription2={info.description2}/>
        ))}
      </div>
      <div className={styles.previewDownloads}>
      {previewDownloadInfo.map(info =>(
        <PreviewDownloadCard key={info.title} title={info.title} description={info.description} image={info.image} link={info.link} downloadLink={info.downloadLink}/>
      ))}
      </div>
      <div className={styles.video}>

      </div>
      <div className={styles.socials}>

      </div>
    </main>
  )
}
