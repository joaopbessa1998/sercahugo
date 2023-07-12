import Link from "next/link"
import styles from "../styles/footer.module.css"


export default function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_container_side}>
                        <Link href="/contact">Entrar em contacto</Link>
                    </div>
                    <div className={styles.footer_container_side}>
                        <Link href="/collections">Coleções</Link>
                    </div>
                    <div className={styles.footer_container_side}>
                        <Link href="https://www.livroreclamacoes.pt/Inicio/">Livro de reclamações</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}