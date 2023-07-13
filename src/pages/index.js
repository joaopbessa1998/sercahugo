import CollectionCard from "@/components/collectionCard"
import styles from "../styles/home.module.css"
import Link from "next/link"
import Intro from "@/components/intro"
import Transition from "@/transition"



function Home() {

  return (
    <>
      <div className={styles.homeOne}>
        <Intro
          imageUrl="https://images.unsplash.com/photo-1578500339042-8059dc18b911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          imageAlt="Serca Furniture - sofa"
        />
      </div>
      <div className={styles.homeTwo}>
        <div className={styles.homeTwo_container}>
          <h1>Serca Furniture is a leading Portuguese furniture company, dedicated to creating high quality furniture.</h1>
          <p>Our products are classic and contemporany, innovative in design and of course sustainable.</p>
          <p></p>
        </div>
      </div>
      <div className={styles.homeThree}>
        <div className={styles.homeThree_container}>
          <div className={styles.homeThree_container_side}>
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
          </div>
          <div className={styles.homeThree_container_side}>
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
          </div>
        </div>
        <div className={styles.homeThree_more}>
          <Link href="/collection">Discover more collections</Link>
        </div>
      </div>
      <div className={styles.homeFour}>
        <div className={styles.homeFour_container}>
          <div className={styles.homeFour_container_inner}>
            <p>« Our goal is to make people proud and happy to live with our products. »</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Transition(Home);