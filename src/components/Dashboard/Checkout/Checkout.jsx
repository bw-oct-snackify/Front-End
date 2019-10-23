import React, { useState, useEffect } from "react";
import checkout from "./checkout.module.scss";
import PackageInfo from "./PackageInfo/PackageInfo";
import Shipping from "./Shipping/Shipping";
import SnackView from "./SnackView/SnackView";
import { axiosInstance } from "../../../utils/axiosInstance";

import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Checkout = props => {
  const [shipDate, setShipDate] = useState("");
  const [totalCost] = useState("$199.00");
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
        "https://images-na.ssl-images-amazon.com/images/I/71dHUI2QzEL._SX425_.jpg",
      quantity: 2
    },
    {
      name: "Original Doritos",
      brand: "Frito-Lay",
      uom: "16 x 9oz bags",
      img_url:
        "https://target.scene7.com/is/image/Target/GUEST_ac2b08b4-12e8-496c-ab09-dd530740da9c?wid=488&hei=488&fmt=pjpeg",
      quantity: 3
    }
  ]);

  //Will set the shipping date 3 days ahead of today.
  //Just to simulate getting shipping date from a mailing/shipping api.
  useEffect(() => {
    let current = new Date();
    current.setDate(current.getDate() + 3);
    let dd = current.getDate();
    let mm = current.getMonth() + 1; // 0-11
    let yy = current.getFullYear();

    let dateFormat = dd + "/" + mm + "/" + yy;
    setShipDate(dateFormat);
  }, []);

  //const companyCode = "lambda-school-snackify-123";
  const companyID = 1;
  useEffect(() => {
    axiosInstance()
      .get(`/company/${companyID}/users`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
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
          deliveryDate={shipDate}
          totalCost={totalCost}
        />
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div className="example">
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
        {/* <Shipping handleData={handleShippingData} /> */}
      </div>
      <SnackView snacks={snackList} />
    </div>
  );
};

export default Checkout;
