"use client"
import { useState, useRef } from 'react';
import styles from "./Video.module.scss";
import Image from 'next/image';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const materials = [
    { title: "Благодарность Швабе-медиа", link: "/docs/Благодарность Швабе-медиа.pdf" },
    { title: `Презентация АМ-1 "Урса"`, link: "/docs/Презентация АМ-1 Урса.pdf" },
  ];

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="container">
          <h2>Репортажи и материалы</h2>
        <div className={styles.videoGrid}>
            <div className={styles.videoContainer}>
                <video 
                    ref={videoRef}
                    className={styles.video}
                    poster="/video/rep.png" // Замени на свой путь к превью
                    controls={isPlaying}
                >
                    <source src="/video/rep.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>

                {!isPlaying && (
                    <div className={styles.overlay} onClick={handlePlay}>
                    {/* <button className={styles.playButton} aria-label="Воспроизвести видео">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                        </svg>
                    </button> */}
                    <div className={styles.videoInfo}>
                        <span>Репортаж о нас</span>
                    </div>
                    </div>
                )}
            </div>

            <div className={styles.materials}>
              {materials.map((item, i) => (
                <a key={i} href={item.link} className={styles.materialCard} target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/svg/file.svg" 
                      alt="Файл" 
                      width={30} 
                      height={40} 
                      className={styles.fileIcon}
                    />
                    <span>{item.title}</span>
                    
                </a>
              ))}
            </div>
        </div>
        
    </section>
  );
}