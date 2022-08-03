import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

const Sidebar = ({ show }) => {
  //   console.log("FROM SIDEBAR, SIDEBAR STATE:", props.show);
  const showState = show ? styles.openSidebar : styles.hideSidebar;
  //   const showSidebar = props.show;
  return (
    <div className={showState}>
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
