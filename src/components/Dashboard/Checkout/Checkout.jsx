import React, { useState, useEffect } from "react";
import checkout from "./checkout.module.scss";
import PackageInfo from "./PackageInfo/PackageInfo";
import Shipping from "./Shipping/Shipping";
import SnackView from "./SnackView/SnackView";

import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import axios from "axios";

axios.defaults.withCredentials = true;

const Checkout = props => {
  const [shipDate, setShipDate] = useState("");
  const [totalCost] = useState("$199.00");
  const [snackList, setSnackList] = useState([]);
  const [formData, setFormData] = useState({
    name: ""
  });

  const submit = ev => {
    // User clicked submit
    props.stripe
      .createToken({ ...formData })
      .then(res => {
        if (res.error) {
          console.log(res.error.message);
        } else {
          console.log(res);
          return res.token;
        }
      })
      .then(token => {
        console.log("Token: ", token);
      })
      .catch(err => console.log(err.message));
    // let response = await fetch("/charge", {
    //   method: "POST",
    //   headers: { "Content-Type": "text/plain" },
    //   body: token.id
    // });
    // if (response.ok) this.setState({ complete: true });
  };

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
    axios
      .get(
        `https://afternoon-tor-81402.herokuapp.com/company/${companyID}/snacks`
      )
      .then(res => {
        console.log(res.data);
        setSnackList(res.data.snacks);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

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
