import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import ferns from "../public/ferns-image.jpg";

const Home = () => {
  // console.log(toggle);
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeIn = {
    initial: {
      opacity: 0,
      animate: {
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: easing,
        },
      },
    },
  };

  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.main}>
        <motion.div
          variants={fadeIn}
          whileHover={{ scale: 1.025 }}
          transition={{ ease: easing, duration: 0.5 }}
        >
          <Image
            src={ferns}
            alt="Ferns growing in front of blue sky in field"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
