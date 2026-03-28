"use client"
import styles from "./Gallery.module.scss"
import Image from "next/image";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const galleryData = [
    { id: 1, image: "/images/Presentation/1.webp"},
    { id: 2, image: "/images/Presentation/2.webp"},
    { id: 3, image: "/images/Presentation/3.webp"},
    { id: 4, image: "/images/Presentation/4.webp"},
];

export default function Gallery(){
    return(
        <section className="container" id="gallery">
            <h2>Презентации проектов</h2>

            <LightGallery
                speed={500}
                elementClassNames={styles.galleryContentGrid}
            >
                {galleryData.map((item) => (
                    <a 
                        key={item.id} 
                        href={item.image} 
                        className={styles.galleryCard}
                    >
                        <Image 
                            className={styles.galleryImage} 
                            src={item.image} 
                            width={600} 
                            height={400} 
                            alt={`Gallery image ${item.id}`}
                        />
                    </a>
                ))}
            </LightGallery>
        </section>
    );
}