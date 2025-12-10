import styles from "./Footer.module.scss"
import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return(
        <footer>
            <div className={styles.footer}>
                <div className={styles.section}>
                    <h4>Компания</h4>
                    <ul>
                        <li><Link href="#about">О нас</Link></li>
                        <li><Link href="#products">Продукция</Link></li>
                        <li><Link href="#services">Услуги</Link></li>
                        <li><Link href="#contacts">Контакты</Link></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4>Продукты</h4>
                    <ul>
                        <li><Link href="#about">Беспилотники</Link></li>
                        <li><Link href="#products">Беспилотники</Link></li>
                        <li><Link href="#services">Беспилотники</Link></li>
                        <li><Link href="#contacts">Беспилотники</Link></li>
                    </ul>
                </div>
                <div className={`${styles.section} ${styles.section__contacts}`}>
                    <h4>Контакты</h4>
                    <ul>
                        <li>
                            <a className={styles.footerContacts} href="#">
                                <Image 
                                src="/svg/mapPoint.svg"
                                alt="Адрес"
                                width={25}
                                height={25}
                                />
                                г. Кемерово, бульвар Солнечный, 8
                            </a>
                        </li>
                        <li>
                            <a className={styles.footerContacts} href="#">
                                <Image 
                                src="/svg/phone.svg"
                                alt="Адрес"
                                width={25}
                                height={25}
                                />
                                +7 905 965-03-90
                            </a>
                        </li>
                        <li>
                            <a className={styles.footerContacts} href="#">
                                <Image 
                                src="/svg/mail.svg"
                                alt="Адрес"
                                width={25}
                                height={25}
                                />
                                zakharovks@mail.ru
                            </a>
                        </li>

                    </ul>
                </div>

                <div className={`${styles.section} ${styles.section__links}`}>
                    <div className={styles.links}>
                        <Link href="https://m.vk.com/tridsat_dva" target="_blank">
                            <Image
                                className={styles.icon}
                                src="/svg/vkWhite.svg"
                                alt="VK"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link href="https://wa.me/79029830005" target="_blank">
                            <Image
                                className={styles.icon}
                                src="/svg/waWhite.svg"
                                alt="WhatsApp"
                                width={40}
                                height={40}
                            />
                        </Link>

                      </div>
                </div>
            </div>
        </footer>
    );
}