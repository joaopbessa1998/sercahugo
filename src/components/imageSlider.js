import { useState, useEffect } from "react"
import styles from "../styles/slider.module.css"


export default function ImageSlider() {

    const slides = [
        {
            url: "https://images.unsplash.com/photo-1533692336500-b85cd007c172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1601397210737-a5534480bdc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1634141737357-bbec5c1d21f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1618492409933-20d5624cbf71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const index = currentIndex > 0 ? currentIndex - 1 : slides.length - 1
        setCurrentIndex(index)
    };

    const nextSlide = () => {
        const index = currentIndex < slides.length - 1 ? currentIndex + 1 : 0
        setCurrentIndex(index)
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex(currentIndex => currentIndex < slides.length - 1 ? currentIndex + 1 : 0)
        }, 6000)

        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div>
            <div className={styles.carousel}>
                <div className={styles.carousel_inner} style={{ transform: `translateX(${- currentIndex * 100}%)`}}>
                    {
                        slides.map((id, index) => {
                            return (
                                <div key={index} className={styles.carousel_inner_item}>
                                    <img src={id.url} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.carousel_buttons}>
                    <button onClick={prevSlide}>Anterior</button>
                    <button onClick={nextSlide}>Próxima</button>
                </div>
            </div>
        </div>
    )
}