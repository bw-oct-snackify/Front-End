import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import checkout from "./checkout.module.scss";
import PackageInfo from "./PackageInfo/PackageInfo";
import SnackView from "./SnackView/SnackView";

import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { axiosInstance } from "../../../utils/axiosInstance";

// axios.defaults.withCredentials = true;
// pk_test_wUB22qL2Vb3jUMbGbtVmyDju00dj3coNiz
const Checkout = ({ user }) => {
  const [shipDate, setShipDate] = useState("");
  const [totalCost] = useState("$199.00");
  const [paymentProcess, setPaymentProcess] = useState("idle");
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
    setPaymentProcess("processing");
    stripe
      .createToken({ ...formData })
      .then(res => {
        //Stricly getting token, if token was not returned, display error messages on form
        if (res.error) {
          console.log(res.error.message);
          setFormErrors({ response: res.error.message });
        } else {
          console.log(res);
          if (formErrors.response) {
            setFormErrors({});
          }
          return res.token;
        }
      })
      .then(token => {
        //We now have a token from valid form data. Now send it to backend and then receive
        //confirmation once it's complete.
        console.log("Token: ", token.id);
        axiosInstance
          .post("/billing/stripe", { id: token.id, price: 199 })
          .then(res => {
            if (res.status === 200) {
              setPaymentProcess("success");
            }
          })
          .catch(err => {
            console.log("Response from backend:", err);
            setPaymentProcess("failed");
          });
      })
      .catch(err => {
        setPaymentProcess("failed");
        console.log(err.message);
      });
  };

  useEffect(() => {
    axiosInstance
      .get(`/company/${user.company_id}/snacks`)
      .then(res => {
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
  }, [user.company_id]);

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
        <StripeProvider apiKey="pk_test_wUB22qL2Vb3jUMbGbtVmyDju00dj3coNiz">
          <div className="example">
            <Elements>
              <CheckoutForm
                submit={submit}
                data={formData}
                handleChange={handleFormChange}
                errors={formErrors}
                process={paymentProcess}
              />
            </Elements>
          </div>
        </StripeProvider>
      </div>
      <SnackView snacks={companySnacks.snacks} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.dashboardReducer.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(Checkout);
