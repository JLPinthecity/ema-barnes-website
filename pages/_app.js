import "../styles/fonts.css";
import "../styles/globals.css";
import Layout from "../components/layout";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export default function App({ Component, pageProps }) {
  // close = false, open = true
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <Layout toggleSidebar={toggleSidebar}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}
