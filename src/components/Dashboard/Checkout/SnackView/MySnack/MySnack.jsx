import React from "react";
import styles from "./mysnack.module.scss";

const MySnack = props => {
  return (
    <div className={styles.container}>
      <img src={props.image}></img>
      <div className={styles.nameContainer}>
        <p className={styles.snackName}>{props.snackname}</p>
        <p className={styles.brandName}>{props.brandname}</p>
      </div>
      <p className={styles.snackAmount}></p>
    </div>
  );
};

export default MySnack;
