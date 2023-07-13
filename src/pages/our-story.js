import Transition from "@/transition"
import ImageSlider from "@/components/imageSlider"
import styles from "../styles/about.module.css"

function About() {
    return (
        <div>
            <div className={styles.aboutSlider}>
                <div className={styles.aboutSlider_title}>
                    <h1>SERCA FURNITURE</h1>
                    <h2>Meet our company</h2>
                </div>
                <div className={styles.aboutSlider_carousel}>
                    <ImageSlider />
                </div>
            </div>
            <div className={styles.aboutOne}>
                <div className={styles.aboutOne_container}>
                    <div className={styles.aboutOne_container_section}>
                        <div className={styles.aboutOne_container_section_side}>
                            <h3>Passionate about Portuguese design and quality</h3>
                            <p>At Serca Furniture we are passionate about developing cutting edgedesign furniture working with young
                                designers and proud to renew classic gems from the Portuguese design heritage.
                            </p>
                            <p>As one of few furniture Portuguese brands, we still have the courage and stamina to support furniture production
                                in Portugal through our factory in Paços de Ferreira.
                            </p>
                            <p>High quality craftsmanship in combination with cutting edge technology is close to our hears and contributte to
                                more than one of our sustainability goals towards a better future for our planet.
                            </p>
                        </div>
                        <div className={styles.aboutOne_container_section_side}>
                            <img src="https://images.unsplash.com/photo-1574866609688-c2f9ddcdce2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Serca Furniture" />
                        </div>
                    </div>
                    <div className={styles.aboutOne_container_section}>
                        <div className={styles.aboutOne_container_section_side}>
                            <img src="https://images.unsplash.com/photo-1620388639854-6e23776162f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Serca Furniture" />
                        </div>
                        <div className={styles.aboutOne_container_section_side}>
                            <h3>High-tech industrial production and minute carpenty</h3>
                            <p>In the boardland between high-tech industrial production and minute carprenty is where furniture takes form.
                                Under the supervision os our foremans, sketches transform to individual pieces of furniture with the love and
                                passion of our skilled craftsman. Located in Paços de Ferreira, the factory has been producing quality furniture for
                                the past 20 years.
                            </p>
                        </div>
                    </div>
                    <div className={styles.aboutOne_container_section}>
                        <div className={styles.aboutOne_container_section_side}>
                            <h3>Classic, yet contemporany</h3>
                            <p>Working with designers from different eras reflects Serca Furniture's belief in Portuguese design: both classic and contemporany. Finding the essence of now is equally important to us as recognize the legacy of the past. We are proud to be working with the creative minds.
                                Beside our passion for timeless classics of furniture design history, the
                                company is also committed to young emerging contemporany designers
                                who reflect Portuguese spirit through warmth, lightness, a high degree of craftsmanship. simplicity as well as functionality.
                                Our visions to keep on introducing furniture from our finest designers taking an active part in both preserving and developing our famous
                                Portuguese design heritage.</p>
                        </div>
                        <div className={styles.aboutOne_container_section_side}>
                            <img src="https://images.unsplash.com/photo-1497219055242-93359eeed651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80" alt="Serca Furniture" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transition(About);