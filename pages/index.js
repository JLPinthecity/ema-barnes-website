import Image from "next/image";
import styles from "../styles/Home.module.css";
import ferns from "../public/ferns.jpg";
import { motion } from "framer-motion";

const Home = () => {
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
            alt="Picture of ferns in front of fog"
            layout="intrinsic"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
