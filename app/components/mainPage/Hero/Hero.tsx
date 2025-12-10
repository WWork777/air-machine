import styles from "./Hero.module.scss"

export default function Hero(){
    return(
        <section className={styles.hero}>
                <div className={styles.heroContentGrid}>
                    <div className={`${styles.side} ${styles.side__left}`}>
                        <h1>Производство беспилотников</h1>
                        <div className={styles.line}></div>
                        <p className="subTitle">Проектируем, разрабатываем беспилотные авиационные комплексы</p>

                        <button className={styles.orderButton }>Заказать</button>
                    </div>
                    <div className={styles.side}>
                        <ul className={styles.featuresList}>
                            <li>Создаем готовые комплексы — от дронов и наземного оборудования до ПО для управления и анализа.</li>
                            <li>Разрабатываем БПЛА любых классов и типов, которые адаптируем под уникальные задачи заказчика.</li>
                            <li>Резервирование систем, защита от кибератак и функции аварийного возврата гарантируют безопасность в сложных условиях.</li>
                        </ul>
                    </div>

                </div>

        </section>

    );
}