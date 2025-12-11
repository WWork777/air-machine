import styles from "./Contacts.module.scss"
import "./Maps.scss"
import Link from "next/link";
import Image from "next/image";

export default function Contacts(){
    return(
        <section className="container" id="contacts">
            

            <div className={styles.contactsContentGrid}>
                <div className={styles.side}>
                    <h2>Контакты</h2>
                    <a href="#" className={styles.socials}>
                      <p className={styles.socialTitle}>Адрес</p>
                      <p>г. Кемерово, бульвар Солнечный, 8</p>
                    </a>
                    <a href="#" className={styles.socials}>
                      <p className={styles.socialTitle}>Телефон</p>
                      <p>+7 905 965-03-90</p>
                    </a>
                    <div className={styles.socials}>
                      <p className={styles.socialTitle}>Соцсети</p>
                      <div className={styles.links}>
                        <Link href="https://m.vk.com/tridsat_dva" target="_blank">
                            <Image
                                className={styles.icon}
                                src="/svg/vk.svg"
                                alt="VK"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link href="https://wa.me/79029830005" target="_blank">
                            <Image
                                className={styles.icon}
                                src="/svg/wa.svg"
                                alt="WhatsApp"
                                width={40}
                                height={40}
                            />
                        </Link>

                      </div>
                    </div>
                </div>
            
            <div className={styles.side}>

                <div className={styles.map}>
                    <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A335208877bc6b471f169a3e74947880e08008dc840ffd1cb19b2361acb4aa5b2&amp;source=constructor"
                    width="500"
                    height="400"
                    frameBorder="0"
                    ></iframe>
                </div>

            </div > 
            
        </div>
        </section>
    );
}