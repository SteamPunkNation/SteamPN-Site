import styles from '../pcard.module.css'
import Image from 'next/image'
import Link from 'next/link';


const PreviewProjectCard = ({title, description1, discription2}) => {
    return (
        <Link className={styles.pCard} href={`/projects`}>
            <div className={styles.contentContainer}>
                <h2 className={styles.projectName}>{title}</h2>
                <div className={styles.topBar}>
                    <Image className={styles.arrowLight} src={'/images/arrowLight.svg'} alt={''} width='14' height='27'></Image>
                    <p className={styles.cardTextLight}>{description1}</p>
                </div>
                <div className={styles.bottomBar}>
                    <p className={styles.cardTextDark}>{discription2}</p>
                    <Image className={styles.arrowDark} src={'/images/arrowDark.svg'} alt={''} width='14' height='27'></Image>
                </div>
            </div>
        </Link>
    );
}

export default PreviewProjectCard