import React, { useState, useEffect } from "react";
import styles from "./snackview.module.scss";
import MySnack from "./MySnack/MySnack";
import { axiosInstance } from "../../../../utils/axiosInstance";

const SnackView = () => {
  const [snackList, setSnackList] = useState([
    {
      name: "Original Skittles",
      brand: "Wrigley",
      uom: "54 oz bag",
      img_url:
        "https://images-na.ssl-images-amazon.com/images/I/71dHUI2QzEL._SX425_.jpg"
    },
    {
      name: "Original Doritos",
      brand: "Frito-Lay",
      uom: "16 x 9oz bags",
      img_url:
        "https://target.scene7.com/is/image/Target/GUEST_ac2b08b4-12e8-496c-ab09-dd530740da9c?wid=488&hei=488&fmt=pjpeg"
    }
  ]);
  const companyCode = "lambda-school-snackify-123";

  useEffect(() => {
    let instance = axiosInstance();
    instance
      .get(`/company/${companyCode}/snacks`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Snacks</h2>

      <div className={styles.snacksContainer}>
        {snackList.map((snack, index) => (
          <MySnack
            snackname={snack.name}
            brandname={snack.brand}
            image={snack.img_url}
            amount={1}
          />
        ))}
      </div>
    </div>
  );
};

export default SnackView;
