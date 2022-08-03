import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <Sidebar />
      <main className={styles.main_wrapper}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
