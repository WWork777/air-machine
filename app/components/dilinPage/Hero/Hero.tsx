'use client'
import styles from "./Hero.module.scss"

export default function Hero(){
    return(
        <section className={styles.hero}>
                <div className={styles.heroContentGrid}>
                    <div className={`${styles.side} ${styles.side__left}`}>
                        <h1>СВП «Дилин»</h1>
                        <div className={styles.line}></div>
                        <p className="subTitle">Судно предназначено для круглогодичной эксплуатации на водных, грунтовых и заснеженных поверхностях при температуре наружного воздуха от -40°C до +40°C.</p>

                        <button className={styles.orderButton} onClick={() => window.location.href = 'tel:+79059650390'}>
                            Заказать
                        </button>
                    </div>
                    <div className={styles.side}>
                        <ul className={styles.featuresList}>
                            <li>Универсальность и всесезонность: Предназначено для круглогодичной эксплуатации на воде, грунте и снегу при экстремальных температурах от -40°C до +40°C.</li>
                            <li>Высокая динамика: Мощный двигатель до 110 л.с. обеспечивает максимальную скорость до 100 км/ч, позволяя быстро преодолевать сложные участки.</li>
                            <li>Компактность и вместимость: При габаритах 3,5 x 2,4 м судно обладает грузоподъемностью 300 кг и комфортно вмещает до 3 человек.</li>
                            <li>Проходимость: Высота воздушной подушки 0,3 м позволяет уверенно перемещаться по неровным поверхностям и мелководью.</li>
                        </ul>
                    </div>

                </div>

        </section>

    );
}