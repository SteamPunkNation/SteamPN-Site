import styles from '../pcard.module.css'
import Image from 'next/image'
import Link from 'next/link';


export default function PreviewProjectCard() {
    return (
        <div className={styles.pCard}>
            <h2 className={styles.projectName}>Project</h2>
            <div className={styles.topBar}>
                <Image className={styles.arrow} src={'/arrowLight.svg'} alt={''} width='14' height='27'></Image>
                <p className={styles.cardText}>This is project desc 1</p>
            </div>
            <div className={styles.bottomBar}>
                <p className={styles.cardText}>This is project desc 2</p>
            </div>
        </div>
    );
}