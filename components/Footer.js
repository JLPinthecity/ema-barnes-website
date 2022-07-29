import Link from "next/link";
import styles from "../styles/Footer.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.left}>
          <Link href="/" className={styles.box_link}>
            <a>Home</a>
          </Link>

          <Link href="/about" className={styles.box_link}>
            <a>About</a>
          </Link>

          <Link href="/contact" className={styles.link}>
            <a>Submit Work</a>
          </Link>

          <Link href="https://reedsy.com/ema-barnes" className={styles.link}>
            <a target="_blank">Reedsy</a>
          </Link>

          <Link href="http://www.emoirs.com/" className={styles.link}>
            <a target="_blank">Emoirs</a>
          </Link>
          <Link href="https://owake.github.io/" className={styles.link}>
            <a>O.Wake Music</a>
          </Link>
        </div>

        <div className={styles.right}>
          <div className={styles.footer_title}>Say hey!</div>
          <div className={styles.footer_email}>
            <p></p>
          </div>
          <Link
            href="mailto: hitherejoann@gmail.com"
            className={styles.get_in_touch}
          >
            <a>
              <button>GET IN TOUCH</button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2022 All Rights Reserved.{" "}
        <Link href="https://joannpan.dev/">
          <a>Site credits.</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
