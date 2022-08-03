import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import React, { useState } from "react";

const Layout = ({ children }) => {
  // close = false, open = true
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

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
