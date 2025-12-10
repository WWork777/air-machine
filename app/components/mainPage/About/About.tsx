import styles from "./About.module.scss"


export default function About(){
    return(
        <section className="container" id="about">
            <div className={styles.aboutContentGrid}>
                <div className={styles.side}>
                    <h2>Компания <br/> «АВИАМАШИНА»</h2>
                    <p>
                        Мы не просто производим дроны. Мы создаем законченные технологические продукты, которые 
                        работают там, где это нужно нашим клиентам: в полях, на стройплощадках, 
                        в небе над магистралями и в зонах чрезвычайных ситуаций.<br/>Что нас отличает:
                    </p>
                </div>
                <div className={styles.line}></div>
                <div className={`${styles.side} ${styles.side__right}` }>
                    <p>
                        Ориентация на результат. Каждый наш комплекс решает конкретную бизнес-задачу: 
                        снижает затраты, повышает точность измерений или исключает риски для людей.
                    </p>
                    <p>
                        Безопасность заложена в основу наших продуктов, чтобы вы 
                        могли быть уверены в результате даже в самых сложных условиях.
                    </p>

                </div>
                
            </div>
        </section>
    );
}