import "../styles/fonts.css";
import "../styles/globals.css";
import Layout from "../components/layout";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}
