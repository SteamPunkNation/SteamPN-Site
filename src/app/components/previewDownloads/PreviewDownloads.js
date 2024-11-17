import styles from './pdownload.module.css'
import Image from 'next/image'
import Link from 'next/link';


const PreviewDownloadCard = ({title, description, image, link, downloadLink}) => {
    return (
        <div className={styles.pCard}>
            <h2 className={styles.projectName}>{title}</h2>
            <p className={styles.cardTextLight}>{description}</p>
            <Link href={link} className={styles.imageLink} title={title}>
                <Image className={styles.image} src={image} alt={''} width='250' height='250'/>
            </Link>
            <button className={styles.downloadButton} onClick={downloadFile(downloadLink)}>Download</button>
        </div>
    );
}
async function downloadFile(fileLink) {
    try {
        const response = await fetch(`/api/downloadFile?fileName=${fileLink}`);

        if (response.ok){
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = downloadLink;
            document.body.appendChild(a);
            a.click();

            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
        else{
            console.error('Failed to download the file.');
        }
    }
    catch (error) {
        console.error('Error downloading the file:', error);
    }
}

export default PreviewDownloadCard