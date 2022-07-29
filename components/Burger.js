import React from "react";
import styles from "../styles/Burger.module.css";

const Burger = (props) => {
  //   let toggleClass = "toggle";
  //   if (props.show) {
  //     toggleClass = "toggle-button open";
  //   }

  //   {
  //     `banner ${active ? "active" : ""}`;
  //   }

  return (
    <div className={styles.button_container}>
      <div className={styles.toggle_button} onClick={props.click}>
        <div className={styles.toggle_button__line} id="line1" />
        <div className={styles.toggle_button__line} id="line2" />
        <div className={styles.toggle_button__line} id="line3" />
      </div>
    </div>
  );
};

export default Burger;
