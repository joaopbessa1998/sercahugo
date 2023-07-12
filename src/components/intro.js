import styles from "../styles/intro.module.css"


export default function Intro({imageUrl, imageAlt}) {
    return (
        <div>
            <div className={styles.intro}>
                <div className={styles.intro_container}>
                    <img src={imageUrl} alt={imageAlt} />
                </div>
            </div>
        </div>
    )
}