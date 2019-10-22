import React, { useState, useEffect } from "react";
import checkout from "./checkout.module.scss";
import PackageInfo from "./PackageInfo/PackageInfo";
import Shipping from "./Shipping/Shipping";
import SnackView from "./SnackView/SnackView";
import { axiosInstance } from "../../../utils/axiosInstance";

const Checkout = props => {
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

  //const companyCode = "lambda-school-snackify-123";
  useEffect(() => {
    let instance = axiosInstance();
    instance
      .get(`/company/${1}/snacks`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className={checkout.container}>
      <div className={checkout.infoContainer}>
        <PackageInfo
          totalSnacks={snackList.length}
          deliveryDate={"10/20/19"}
          totalCost="$199.00"
        />
        <Shipping />
        <button className={checkout.submitButton} type="submit">
          Confirm Address and Pay!
        </button>
      </div>
      <SnackView snacks={snackList} />
    </div>
  );
};

export default Checkout;
