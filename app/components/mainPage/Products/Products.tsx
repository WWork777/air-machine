"use client"
import styles from "./Products.module.scss"
import Image from "next/image";

const dronesData = [
    { id: 1, title: `АМ-1 "УРСА"`, info: "Информация о комплексе", image: "/images/Products/ursa1.png", link: "/products/ursa" },
    { id: 2, title: `СВП "Дилин"`, info: "Информация о судне", image: "/images/Products/dilin.png", link: "/products/dilin" },
    // { id: 3, title: "Беспилотник 789", info: "Информация о модели", image: "/images/Products/1.png" },
    // { id: 4, title: "Беспилотник 101", info: "Информация о модели", image: "/images/Products/1.png" },
    // { id: 5, title: "Беспилотник 112", info: "Информация о модели", image: "/images/Products/1.png" },
    // { id: 6, title: "Беспилотник 112", info: "Информация о модели", image: "/images/Products/1.png" },
];

export default function Products(){
    return(
        <section className="container" id="products">
            <h2>Наша продукция</h2>

            <div className={styles.ProductsContentGrid}>
                {dronesData.map((drone) => (
                    <a href={drone.link} key={drone.id}>
                        <div className={styles.productCard}>
                            <Image className={styles.productImage} src={drone.image} width={10000} height={10000} alt={""}/>

                            <p className={styles.productTitle}>{drone.title}</p>
                            <p className={styles.productInfo}>{drone.info}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}