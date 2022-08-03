import { useState, useEffect } from "react";
import styles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

//toggle() is being passed from _app.js to layout to header to burger as onclick

const Layout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  // useEffect(toggleSidebar, []);
  // toggleSidebar();
  // console.log(props);
  return (
    <div>
      <Header toggle={toggleSidebar} />
      <Sidebar show={showSidebar} />
      <Navbar />
      <main className={styles.main_wrapper}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
