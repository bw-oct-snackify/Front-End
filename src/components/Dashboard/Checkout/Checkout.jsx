import React, { useState, useEffect } from "react";
import checkout from "./checkout.module.scss";
import PackageInfo from "./PackageInfo/PackageInfo";
import Shipping from "./Shipping/Shipping";
import SnackView from "./SnackView/SnackView";
import { axiosInstance } from "../../../utils/axiosInstance";

const Checkout = props => {
  const [shippingData, setShippingData] = useState({
    attention: "",
    address1: "",
    address2: "",
    state: "",
    city: ""
  });

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
  const companyID = 1;
  useEffect(() => {
    let instance = axiosInstance();
    instance
      .get(`/company/${companyID}/snacks`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //Handles shipping form data. Being passed down through props to Shipping component
  const handleShippingData = event => {
    setShippingData({
      ...shippingData,
      [event.target.name]: event.target.value
    });
  };

  //When user clicks 'Confirm Address and Pay' button.
  const submitForm = event => {
    console.log("Shipping Data: ", shippingData);
  };

  return (
    <div className={checkout.container}>
      <div className={checkout.infoContainer}>
        <PackageInfo
          totalSnacks={snackList.length}
          deliveryDate={"10/20/19"}
          totalCost="$199.00"
        />
        <Shipping handleData={handleShippingData} />
        <button className={checkout.submitButton} onClick={submitForm}>
          Confirm Address and Pay!
        </button>
      </div>
      <SnackView snacks={snackList} />
    </div>
  );
};

export default Checkout;
