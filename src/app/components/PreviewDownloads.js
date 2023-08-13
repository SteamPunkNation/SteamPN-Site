import styles from '../pdownload.module.css'
import Image from 'next/image'
import Link from 'next/link';


const PreviewDownloadCard = ({title, description, image, link, downloadLink}) => {
    return (
        <div className={styles.pCard}>
            <h2 className={styles.projectName}>{title}</h2>
            <p className={styles.cardTextLight}>{description}</p>
            <Link href={link} className={styles.imageLink}>
                <Image className={styles.image} src={image} alt={''} width='250' height='250'/>
            </Link>
            <Link className={styles.downloadButton} href={downloadLink}>Download</Link>
        </div>
    );
}

export default PreviewDownloadCard