import styles from '../socials.module.css'
import Image from 'next/image'
import Link from 'next/link';


const SocialCard = ({name, text, image, link}) => {
    return (
        <Link className={styles.socialCard} href={link} title={name} prefetch={false} target="_blank" rel="noopener noreferrer">
            <div className={styles.socialImage}>
                <Image className={styles.image} src={image} fill sizes="100vw, 50vw, 33vw" alt={text}/>
            </div>
            <h2 className={styles.socialText}>{text}</h2>
        </Link>
    );
}

export default SocialCard