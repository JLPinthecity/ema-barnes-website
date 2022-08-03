import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ show, toggle }) => {
  //   console.log("FROM SIDEBAR, SIDEBAR STATE:", props.show);
  const showState = show ? styles.openSidebar : styles.hideSidebar;
  //   const showSidebar = props.show;
  return (
    <div className={showState}>
      <div className={styles.wrapper}>
        <div className={styles.closeContainer}>
          <CloseIcon onClick={toggle} />
        </div>
        <Link href="/" className={styles.links}>
          <a>Home</a>
        </Link>

        <Link href="/about" className={styles.links}>
          <a>About</a>
        </Link>

        <Link href="/contact" className={styles.links}>
          <a>Request a Quote</a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
