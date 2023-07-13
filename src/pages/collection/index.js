import CollectionCard from "@/components/collectionCard"
import styles from "../../styles/collection.module.css"
import Intro from "@/components/intro"
import Transition from "@/transition"



function Collection() {
    return (
        <div>
            <div className={styles.collectionThree}>
                <div className={styles.collectionThree_container}>
                    <div className={styles.collectionThree_container_side}>
                        <CollectionCard
                            navigateTo="/collection/amsterdam"
                            imageUrl="https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1297&q=80"
                            alt=""
                            title="Amsterdam collection"
                            year="2023"
                        />
                        <CollectionCard
                            navigateTo="/collection/amsterdam"
                            imageUrl="https://images.unsplash.com/photo-1581783458534-001a466b5487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80"
                            alt=""
                            title="Amsterdam collection"
                            year="2022"
                        />
                        <CollectionCard
                            navigateTo="/collection/amsterdam"
                            imageUrl="https://images.unsplash.com/photo-1508061444661-5df0f7609c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
                            alt=""
                            title="Amsterdam collection"
                            year="2021"
                        />
                        <CollectionCard
                            navigateTo="/collection/amsterdam"
                            imageUrl="https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                            alt=""
                            title="Amsterdam collection"
                            year="2023"
                        />
                    </div>
                    <div className={styles.collectionThree_container_side}>
                        <CollectionCard
                            navigateTo="/collection/amsterdam"
                            imageUrl="https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                            alt=""
                            title="Amsterdam collection"
                            year="2023"
                        />
                        <CollectionCard
                            navigateTo="/collection/amsterdam"
                            imageUrl="https://images.unsplash.com/photo-1597218868981-1b68e15f0065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                            alt=""
                            title="Amsterdam collection"
                            year="2021"
                        />
                        <CollectionCard
                            navigateTo="/collection/amsterdam"
                            imageUrl="https://images.unsplash.com/photo-1625585598750-3535fe40efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt=""
                            title="Amsterdam collection"
                            year="2021"
                        />
                        <CollectionCard
                            navigateTo="/collection/amsterdam"
                            imageUrl="https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1297&q=80"
                            alt=""
                            title="Amsterdam collection"
                            year="2023"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transition(Collection);