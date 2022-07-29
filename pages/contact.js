import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";
import { easing, fadeIn } from "../pages/index";

const Contact = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = {};

    Array.from(event.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    console.log(formData);
  }
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Contact Form</h1>

      <form method="post" onSubmit={handleSubmit} className={styles.wrapper}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <br></br>
          <input type="text" name="name" />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <br></br>
          <input type="text" name="email" />
        </div>

        <div className={styles.field}>
          <label htmlFor="title">Working title</label>
          <br></br>
          <input type="text" name="title" />
        </div>

        <div className={styles.field}>
          <label htmlFor="title">Working title</label>
          <br></br>
          <input type="text" name="title" />
        </div>

        <div className={styles.field}>
          <label htmlFor="services">
            Services requested (Editorial Assessment; Developmental Editing;
            Copyediting; Submission Package):
          </label>
          <br></br>
          <input type="text" name="services" />
        </div>

        <div className={styles.field}>
          <label htmlFor="wordcount">Word count</label>
          <br></br>
          <input type="text" name="wordcount" />
        </div>

        <div className={styles.field}>
          <label htmlFor="genre">Genre</label>
          <br></br>
          <input type="text" name="genre" />
        </div>

        <div className={styles.field}>
          <label htmlFor="description">Brief description of book</label>
          <br></br>
          <input type="text" name="description" />
        </div>

        <div className={styles.field}>
          <label htmlFor="goals">
            Tell me about yourself and your goals for publication:
          </label>
          <br></br>
          <textarea type="text" name="goals" />
        </div>

        <div className={styles.field}>
          <label htmlFor="excerpt">
            Please copy and paste your first 10 pages or 3,000 words (don&apos;t
            worry about formatting!):
          </label>
          <textarea type="text" name="excerpt" />
        </div>
        <br></br>
        <button>Submit</button>
      </form>
    </motion.div>
  );
};

// adding for commit

export default Contact;
