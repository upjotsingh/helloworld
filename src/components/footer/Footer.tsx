import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data/footerData/FooterData";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image src={footerData.logo} alt="HelloWorld logo" width={45} height={45} />
            <div>
              <h2 className={styles.logoText}>{footerData.company}</h2>
              <p className={styles.desc}>{footerData.description}</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <span>{footerData.contact.address}</span>
            <span>{footerData.contact.phone}</span>
            <span>{footerData.contact.email}</span>
          </div>
          <div className={styles.socials}>
            {footerData.socials.map((social) => (
              <Link href={social.link} key={social.name} target="_blank" className={styles.socialButton}>
                <Image src={social.icon} alt={social.name} width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.links}>
          {footerData.links.map((group) => (
            <div key={group.title} className={styles.linkGroup}>
              <h3 className={styles.listTitle}>{group.title}</h3>
              {group.items.map((item) => (
                <Link href={item.link} key={item.name} className={styles.linkItem}>
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{footerData.copyright}</p>
        <p>© {new Date().getFullYear()} {footerData.company}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
