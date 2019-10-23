import React, { useState } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import styles from "./checkoutform.module.scss";
import Checkout from "../Checkout";

const CheckoutForm = props => {
  const [completePayment, setCompletePayment] = useState(false);
  const [formData, setFormData] = useState({
    name: ""
  });
  const submit = ev => {
    // User clicked submit
    props.stripe
      .createToken({ name: "Name" })
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
  if (completePayment) return <h1>Purchase Complete</h1>;

  return (
    <div className={styles.cardCheckout}>
      <h1 className={styles.labelTitle}>Card Details</h1>
      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input
        className={styles.cardField}
        name="name"
        type="text"
        placeholder="Jane Doe"
      />
      <label className={styles.label}>Card Number</label>
      <CardElement className={styles.cardField} />
      <button className={styles.submitButton} onClick={submit}>
        Purchase
      </button>
    </div>
  );
};

export default injectStripe(CheckoutForm);
