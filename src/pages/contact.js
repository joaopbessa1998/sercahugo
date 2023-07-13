import Link from "next/link"
import styles from "../styles/contact.module.css"
import Transition from "@/transition"


function Contact() {
    return (
        <div className={styles.contact}>
            <div>
                <div className={styles.contactOne}>
                    <div className={styles.contactOne_container}>
                        <div className={styles.contactOne_container_side}>
                            <h1>Contact us</h1>
                        </div>
                        <div className={styles.contactOne_container_side}>
                            <div>
                                <p>Serca Furniture</p>
                                <p>Rua das Fontainhas 132, 4595-125 Frazão</p>
                                <p>Porto, Portugal</p>
                            </div>
                            <div>
                                <div>
                                    <Link href="tel:+351255892236">+351 255 892 236</Link>
                                </div>
                                <div>
                                    <Link href="mailto:geral@sercafurniture.pt">geral@sercafurniture.pt</Link>
                                </div>
                                <div>
                                    <Link href="https://goo.gl/maps/6fERbfajtrH7634d6">Encontre-nos no Google Maps</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contactTwo}>
                    <div className={styles.contactTwo_container}>
                        <div className={styles.contactTwo_container_side}>
                            <p>Get in touch</p>
                            <h2>Share your ideas with us</h2>
                        </div>
                        <div className={styles.contactTwo_container_side}>
                            <div>
                                <form>
                                    <div>
                                        <label />
                                        <input required type="text" placeholder="João Neves" />
                                    </div>
                                    <div>
                                        <label />
                                        <input required type="email" placeholder="exemplo@exemplo.com" />
                                    </div>
                                    <div>
                                        <label />
                                        <textarea required rows={10} placeholder="Escreva aqui a sua mensagem"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transition(Contact);