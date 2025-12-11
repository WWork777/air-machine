import styles from "./Contacts.module.scss"
import "./Maps.scss"
import Link from "next/link";
import Image from "next/image";

export default function Contacts(){

    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE;
    const address = process.env.NEXT_PUBLIC_CONTACT_ADDRESS;
    const addressLink = process.env.NEXT_PUBLIC_CONTACT_ADDRESS_LINK;
    const addressBuilder = process.env.NEXT_PUBLIC_CONTACT_ADDRESS_BUILDER;

    return(
        <section className="container" id="contacts">
            

            <div className={styles.contactsContentGrid}>
                <div className={styles.side}>
                    <h2>Контакты</h2>
                    <a href={addressLink} className={styles.socials}>
                      <p className={styles.socialTitle}>Адрес</p>
                      <p>{address}</p>
                    </a>
                    <a href={`tel:${phone}`} className={styles.socials}>
                      <p className={styles.socialTitle}>Телефон</p>
                      <p>{phone}</p>
                    </a>
                    <a href={`mailto:${email}`} className={styles.socials}>
                      <p className={styles.socialTitle}>Email</p>
                      <p>{email}</p>
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
                    <iframe src={addressBuilder} 
                    width="500" 
                    height="400">
                   </iframe>
                </div>

            </div > 
            
        </div>
        </section>
    );
}