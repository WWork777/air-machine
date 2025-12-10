"use client"
import styles from "./Products.module.scss"
import Image from "next/image";

const dronesData = [
    { id: 1, title: "Беспилотник 123", info: "Информация о модели", image: "/images/Products/1.png"},
    { id: 2, title: "Беспилотник 456", info: "Информация о модели", image: "/images/Products/1.png" },
    { id: 3, title: "Беспилотник 789", info: "Информация о модели", image: "/images/Products/1.png" },
    { id: 4, title: "Беспилотник 101", info: "Информация о модели", image: "/images/Products/1.png" },
    { id: 5, title: "Беспилотник 112", info: "Информация о модели", image: "/images/Products/1.png" },
    { id: 6, title: "Беспилотник 112", info: "Информация о модели", image: "/images/Products/1.png" },
];

export default function Products(){
    return(
        <section className="container" id="products">
            <h2>Наша продукция</h2>

            <div className={styles.ProductsContentGrid}>
                {dronesData.map((drone) => (
                    <a href="#" key={drone.id}>
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