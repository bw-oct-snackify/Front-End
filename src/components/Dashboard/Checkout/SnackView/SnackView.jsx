import React from "react";
import styles from "./snackview.module.scss";
import MySnack from "./MySnack/MySnack";
const SnackView = props => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Snacks</h2>

      <div className={styles.snacksContainer}>
        {props.snacks.map((snack, index) => (
          <MySnack
            snackname={snack.name}
            brandname={snack.brand}
            image={snack.img_url}
            amount={1}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SnackView;
