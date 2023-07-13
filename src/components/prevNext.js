import Link from "next/link"
import styles from "../styles/prevNext.module.css"

export default function PrevNext({ navigatePrev, navigateNext}) {
    return (
        <div>
            <div className={styles.prevNext}>
                <Link href={navigatePrev}>Anterior</Link>
                <div>/</div>
                <Link href={navigateNext}>Próximo</Link>
            </div>
        </div>
    )
}