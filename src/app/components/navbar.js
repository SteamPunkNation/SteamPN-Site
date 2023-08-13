import styles from '../navbar.module.css'
import Image from 'next/image'
import Link from 'next/link';
//Change this upon added more pages.
const navButtonNames = ["Home", "Projects", "Downloads", "Links"];
const pageNames = ["", "projects", "downloads", "links"]
const navButtons = navButtonNames.map((btn, index) => ({name: btn, page: pageNames[index]}));


export default function NavigationBar() {
    return (
        <nav className={styles.navBar}>
            <Link href={`/`} className={styles.iconLink}>
                <Image src={'/images/icon.png'} alt={''} width='95' height='95' className={styles.icon}/>
            </Link>
            <p className={styles.webTitle}>SteamPN</p>
            {navButtons.map(({name, page}) => (
                <Link href={`/${page}`} className={styles.navLink}>{name}</Link>
            ))}
        </nav>
    );
}