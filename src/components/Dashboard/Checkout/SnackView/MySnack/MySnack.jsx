import React from "react";
import styles from "./mysnack.module.scss";

const MySnack = props => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src={props.image}
          alt={props.snackName}
        ></img>
        <div className={styles.nameContainer}>
          <p className={styles.snackName}>{props.snackname}</p>
          <p className={styles.brandName}>{props.brandname}</p>
        </div>
      </div>
      <p className={styles.snackAmount}>{props.amount}</p>
    </div>
  );
};

export default MySnack;
