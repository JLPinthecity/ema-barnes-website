import Link from "next/link";
import styles from "../styles/About.module.css";
import Image from "next/image";
import ema from "../public/ema-barnes.jpg";
import { motion } from "framer-motion";
import { easing, fadeIn } from "../pages/index";

const About = () => {
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>About Me</h1>

          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.025 }}
            transition={{ ease: easing, duration: 0.5 }}
          >
            <Image
              src={ema}
              alt="Picture of Ema Barnes, freelance book editor"
            />
          </motion.div>

          <div className={styles.services}>
            <h1>Services</h1>

            <div className={styles.services_list}>
              <p>Editorial Assessment</p>
              <p> Developmental Editing</p>
              <p> Copyediting</p>
              <p>Submission Package</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <p>
            As a freelance book editor, I offer structural and substantive edits
            for full-length books and polishing for submission packages.
          </p>
          <p>
            I offer customized quotes and services based on each project. For an
            idea of how much editorial services might cost, please refer to this
            chart from the
            <Link href="https://www.the-efa.org/rates/" className={styles.link}>
              <a target="_blank"> Editorial Freelancers Association</a>
            </Link>
            .
          </p>

          <p>
            My timelines vary from project to project and I&apos;ll outline this
            for you before we begin. Depending on my availability, start dates
            might be anywhere in the next 2-6 months, and generally I return
            projects within one month of beginning.
          </p>

          <p>
            If you know you will have an upcoming project for which you would
            like my services, do be in touch early so we can work with your
            timeline.
          </p>

          <p>
            My structural and substantive edits include a complimentary
            hour-long phone or video call.
          </p>

          <p>
            I do not offer copyediting and/or proofreading services alongside
            structural or substantive editing as the bigger picture edit should
            lead to a lot of revision that will render these services mute, but
            I do occasionally offer these as separate services. If you&apos;re
            interested in my services, please fill out this form [LINK TK] and I
            will get back to you shortly.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
