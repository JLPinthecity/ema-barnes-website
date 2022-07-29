import Link from "next/link";
import styles from "../styles/Header.module.css";
import Burger from "../components/Burger";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <section>
          <Burger className={styles.icon} />
        </section>
        <section className={styles.title}>
          <Link href="/">
            <a>Ema Barnes Editorial</a>
          </Link>
        </section>

        <section>
          <button className="contact_button">Contact</button>
        </section>
      </div>
    </div>
  );
};

export default Header;
