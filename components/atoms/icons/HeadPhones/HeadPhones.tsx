import React from "react";
import styles from "./headphones.module.scss";

export default function HeadPhones() {
  return (
    <div className={styles.headphones}>
      <div className={styles.headphone_main}>
        <div className={styles.ear_cover__left}></div>
        <div className={styles.ear_cushion}></div>
      </div>
      <div className={styles.headphone_bridge__main}>
        <div className={styles.headphone_bridge}>
          <div className={styles.headphone_bridge__child}></div>
        </div>
      </div>
      <div className={styles.headphone_main}>
        <div className={styles.ear_cushion}></div>
        <div className={styles.ear_cover__right}></div>
      </div>
    </div>
  );
}
