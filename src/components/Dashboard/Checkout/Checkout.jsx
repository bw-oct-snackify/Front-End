import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import checkout from "./checkout.module.scss";
import PackageInfo from "./PackageInfo/PackageInfo";
import SnackView from "./SnackView/SnackView";

import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import axios from "axios";

axios.defaults.withCredentials = true;

const Checkout = ({user}) => {
  const [shipDate, setShipDate] = useState("");
  const [totalCost] = useState("$199.00");
  const [companySnacks, setCompanySnacks] = useState({
    name: "",
    snacks: []
  });
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    address_city: "",
    address_state: "",
    address_zip: ""
  });
  const submit = (ev, stripe) => {
    // User clicked submit
    stripe
      .createToken({ ...formData })
      .then(res => {
        if (res.error) {
          console.log(res.error.message);
          setFormErrors({ response: res.error.message });
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

  const companyID = user.company_id;

  useEffect(() => {
    axios
      .get(
        `https://afternoon-tor-81402.herokuapp.com/company/${companyID}/snacks`
      )
      .then(res => {
        console.log("Data: ", res.data);
        setCompanySnacks(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });

    //Will set the shipping date 3 days ahead of today.
    //Just to simulate getting shipping date from a mailing/shipping api.
    let current = new Date();
    current.setDate(current.getDate() + 3);
    let dd = current.getDate();
    let mm = current.getMonth() + 1; // 0-11
    let yy = current.getFullYear();

    let dateFormat = dd + "/" + mm + "/" + yy;
    setShipDate(dateFormat);
  }, [companyID]);

  const handleFormChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className={checkout.container}>
      <div className={checkout.infoContainer}>
        <PackageInfo
          totalSnacks={companySnacks.snacks.length}
          deliveryDate={shipDate}
          totalCost={totalCost}
          company={companySnacks.name}
        />
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div className="example">
            <Elements>
              <CheckoutForm
                submit={submit}
                data={formData}
                handleChange={handleFormChange}
                errors={formErrors}
              />
            </Elements>
          </div>
        </StripeProvider>
      </div>
      <SnackView snacks={companySnacks.snacks} />
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    user: state.dashboardReducer.user,
  };
}

export default connect(mapStateToProps, {})(Checkout);
