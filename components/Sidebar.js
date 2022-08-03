import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidecarcontainer}>
      <div className={styles.navbar_wrapper}>
        <Link href="/" className={styles.links}>
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/contact">
          <a>Request a Quote</a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
