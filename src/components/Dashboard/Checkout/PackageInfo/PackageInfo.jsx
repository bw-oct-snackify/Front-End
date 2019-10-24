import React from "react";
import styles from "./packageinfo.module.scss";

const PackageInfo = props => {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>Package Info</h2>

      <div className={styles.textContainer}>
        <span className={styles.subtext}>Company: </span>
        <span className={styles.accentText}>{props.company}</span>
      </div>

      <div className={styles.textContainer}>
        <span className={styles.subtext}>Total Snacks Selected: </span>
        <span className={styles.accentText}>{props.totalSnacks}</span>
      </div>

      <div className={styles.textContainer}>
        <span className={styles.subtext}>Snack Package </span>
        <span className={styles.accentText}>
          {props.totalSnacks} Snacks Monthly
        </span>
      </div>

      <div className={styles.textContainer}>
        <span className={styles.subtext}>Delivery Date: </span>
        <span className={styles.accentText}>{props.deliveryDate}</span>
      </div>

      <div className={styles.textContainer}>
        <span className={styles.subtext}>Total Cost Today: </span>
        <span className={styles.accentText}>${props.totalCost}</span>
      </div>
    </div>
  );
};

export default PackageInfo;
