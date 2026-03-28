"use client"
import styles from "./Hero.module.scss"

export default function Hero(){
    return(
        <section className={styles.hero}>
                <div className={styles.heroContentGrid}>
                    <div className={`${styles.side} ${styles.side__left}`}>
                        <h1>АМ-1 «Урса»</h1>
                        <div className={styles.line}></div>
                        <p className="subTitle">Многоцелевая амфибийная платформа повышенной проходимости</p>

                        <button className={styles.orderButton} onClick={() => window.location.href = 'tel:+79059650390'}>
                            Заказать
                        </button>
                    </div>
                    <div className={styles.side}>
                        <ul className={styles.featuresList}>
                            <li>Прочный корпус: Выполнен из низкотемпературных полимеров. Работает при -40°C и восстанавливается в полевых условиях без специнструмента.</li>
                            <li>Дальнобойность и автономность: До 100 км полета и 120 минут в воздухе. Запуск с руки — не нужны катапульты или подготовленные площадки.</li>
                            <li>Гибкая конфигурация: Подберем частоты управления и видео под ваше ТЗ. Полезная нагрузка до 5 кг для любых типов оборудования.</li>
                        </ul>
                    </div>

                </div>

        </section>

    );
}