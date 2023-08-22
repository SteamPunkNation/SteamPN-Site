import Image from 'next/image'
import styles from './page.module.css'
import NavigationBar from './components/NavBar';
import PreviewProjectCard from './components/PreviewProjects';
import PreviewDownloadCard from './components/PreviewDownloads';
import SocialCard from './components/Socials';
import {previewProjectInfo, previewDownloadInfo, videoInfo, socialsInfo, messageOfTheDay} from './pageInfo';

const youtubeEmbed = "https://www.youtube.com/embed/";
const motdSuffix = " © Andrew Donate";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* NavBar */}
      <NavigationBar/>
      {/* Project preview */}
      <div className={styles.previewProjects}>
        <p id={styles.welcomeText}>Welcome! Here is my archive of projects, public files, and miscellaneous links.</p>
        {previewProjectInfo.map(info =>(
          <PreviewProjectCard key={info.title} title={info.title} description1={info.description1} discription2={info.description2}/>
        ))}
      </div>
      {/* Download Preview */}
      <div className={styles.previewDownloads}>
      {previewDownloadInfo.map(info =>(
        <PreviewDownloadCard key={info.title} title={info.title} description={info.description} image={info.image} link={info.link} downloadLink={info.downloadLink}/>
      ))}
      </div>
      {/* Recent Video(s) */}
      <div className={styles.video}>
        <iframe width="1066.67" height="600" src={youtubeEmbed + videoInfo[0].videoID} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className={styles.videoInfo}>
          <h1>{videoInfo[0].title}</h1>
          <p>{videoInfo[0].description}</p>
        </div>
      </div>
      {/* Social Links/Buttons */}
      <div className={styles.socials}>
        {socialsInfo.map(info => (
          <SocialCard key={info.text} name={info.name} text={info.text} image={info.image} link={info.link}/>
        ))}
      </div>
      {/* Quote of the day */}
      <p className={styles.motd}>
          {messageOfTheDay[0].message + motdSuffix}
      </p>

      {/* Credits/Copright */}
      <a href="https://www.flaticon.com/free-icons/cv" title="Resume icon" className={styles.credits}>Resume icon created by spaceman.design - Flaticon</a>
    </main>
  )
}
