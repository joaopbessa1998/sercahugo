import Link from "next/link"
import styles from "../styles/cards.module.css"


export default function CollectionCard({ navigateTo, imageUrl, alt, title, year}) {
    return (
        <div className={styles.collectionCard}>
            <div className={styles.collectionCard_container}>
                <Link href={navigateTo} className={styles.collectionCard_container_image}>
                    <img src={imageUrl} alt={alt} />
                </Link>
                <Link href={navigateTo} className={styles.collectionCard_container_title}>
                    <p>{title}</p>
                    <span>{year}</span>
                </Link>
            </div>
        </div>
    )
}