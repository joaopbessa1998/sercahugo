import Link from "next/link"
import styles from "../styles/navigation.module.css"
import { useState } from "react"



export default function Navigation() {

    const [navigation, setNavigation] = useState(false);

    return (
        <div className={styles.navigation}>
            <div className={styles.navigation_container}>
                <div className={styles.navigation_left}>
                    <Link href="/"><img src="/images/logo.png" alt="Serca Furniture - Logo" /></Link>
                </div>
                <div className={styles.navigation_right}>
                    <div className={styles.navigation_menu_toggle} onClick={() => setNavigation(!navigation)}>
                        <div className={navigation ? 'hamBox hamBox_open' : 'hamBox'}>
                            <span className={navigation ? 'line_top spin' : 'line_top'}></span>
                            <span className={navigation ? 'line_bottom spin' : 'line_bottom'}></span>
                        </div>
                    </div>
                    <div className={styles.navigation_overlay} style={{ top: navigation ? '0' : '-100vh', transitionDelay: navigation ? '0s' : '0s' }}>
                        <ul className={styles.navigation_links}>
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setNavigation(!navigation)}
                                    style={{ top: navigation ? '0' : '120px', transitionDelay: navigation ? '0.5s' : '0' }}>
                                    Início
                                </Link>
                                <div className={styles.navigation_item_wrapper}></div>
                            </li>
                            <li>/</li>
                            <li>
                                <Link
                                    href="/our-story"
                                    onClick={() => setNavigation(!navigation)}
                                    style={{ top: navigation ? '0' : '120px', transitionDelay: navigation ? '0.6s' : '0' }}>
                                    Sobre nós
                                </Link>
                                <div className={styles.navigation_item_wrapper}></div>
                            </li>
                            <li>/</li>
                            <li>
                                <Link
                                    href="/collection"
                                    onClick={() => setNavigation(!navigation)}
                                    style={{ top: navigation ? '0' : '120px', transitionDelay: navigation ? '0.7s' : '0' }}>
                                    Coleções
                                </Link>
                                <div className={styles.navigation_item_wrapper}></div>
                            </li>
                            <li>/</li>
                            <li>
                                <Link
                                    href="/contact"
                                    onClick={() => setNavigation(!navigation)}
                                    style={{ top: navigation ? '0' : '120px', transitionDelay: navigation ? '0.8s' : '0' }}>
                                    Contacto
                                </Link>
                                <div className={styles.navigation_item_wrapper}></div>
                            </li>
                        </ul>
                        <div className={styles.navigation_footer}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}