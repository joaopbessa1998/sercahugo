import styles from "../styles/collection-inner.module.css"
import PrevNext from "./prevNext"


export default function CollectionInner({ featuredImage, featuredImageAlt, h1, h2, p, image1Url, image1Alt, image2Url, image2Alt, image3Url, image3Alt, image4Url, image4Alt, image5Url, image5Alt, image6Url, image6Alt }) {
    return (
        <div>
            <div className={styles.collectionInnerOne}>
                <div className={styles.collectionInnerOne_container}>
                    <img src={featuredImage} alt={featuredImageAlt} />
                </div>
            </div>
            <div className={styles.collectionInnerTwo}>
                <div className={styles.collectionInnerTwo_container}>
                    <h1>{h1}</h1>
                    <h2>{h2}</h2>
                    <p>{p}</p>
                </div>
            </div>
            <div className={styles.collectionInnerThree}>
                <div className={styles.collectionInnerThree_container}>
                    <img src={image1Url} alt={image1Alt} />
                    <img src={image2Url} alt={image2Alt} />
                    <img src={image3Url} alt={image3Alt} />
                    <img src={image4Url} alt={image4Alt} />
                    <img src={image5Url} alt={image5Alt} />
                    <img src={image6Url} alt={image6Alt} />
                </div>
            </div>
            <div className={styles.collectionInnerFour}>
                <PrevNext
                    navigatePrev=""
                    navigateNext=""
                />
            </div>
        </div>
    )
}