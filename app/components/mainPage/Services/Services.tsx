import styles from "./Services.module.scss"

export default function Services(){
    return(
        <section className="container" id="services">
            <h2>Услуги</h2>

            <div className={styles.ServicesTopGrid}>
                <div className={styles.smallText}>
                    <p className={styles.title}>
                        Полный цикл <br/> беспилотных решений
                    </p>
                    <p style={{margin: "0px"}}>
                        Мы предлагаем полный спектр услуг 
                        в области беспилотных авиационных систем — от 
                        индивидуальной разработки до внедрения и поддержки.
                    </p>
                </div>
                <a href="#" className={styles.big}>
                    <h3 className={styles.serviceTitle}>Услуга 1</h3>
                </a>
            </div>

            <div className={styles.ServicesBottomGrid}>
                <a href="#" className={styles.small}>
                    <h3 className={styles.title}>Услуга 2</h3>
                </a>
                <a href="#" className={styles.small}>
                    <h3 className={styles.title}>Услуга 3</h3>
                </a>
                <a href="#" className={styles.small}>
                    <h3 className={styles.title}>Услуга 4</h3>
                </a>
            </div>


        </section>
    );
}