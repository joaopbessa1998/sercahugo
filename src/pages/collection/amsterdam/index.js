import CollectionInner from "@/components/collection-inner"
import styles from "../../../styles/collection-page.module.css"
import Transition from "@/transition"


function AmsterdamCollection() {
    return (
        <div>
            <div className={styles.collectionPage}>
                <div className={styles.collectionPage_container}>
                    <CollectionInner
                        featuredImage="https://images.unsplash.com/photo-1599643332904-ddc6060f3289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1843&q=80"
                        featuredImageAlt="Serca Furniture - Amsterdam collection"
                        h1="Amsterdam collection"
                        h2="Bed / Sidebed tables / closet "
                        p="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                        image1Url="https://images.unsplash.com/photo-1618220985423-db5473de7fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                        image1Alt="Serca Furniture - Amsterdam collection"
                        image2Url="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1227&q=80"
                        image2Alt="Serca Furniture - Amsterdam collection"
                        image3Url="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
                        image3Alt="Serca Furniture - Amsterdam collection"
                        image4Url="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        image4Alt="Serca Furniture - Amsterdam collection"
                        image5Url="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                        image5Alt="Serca Furniture - Amsterdam collection"
                        image6Url="https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                        image6Alt="Serca Furniture - Amsterdam collection"
                    />
                </div>
            </div>
        </div>
    )
}

export default Transition(AmsterdamCollection);