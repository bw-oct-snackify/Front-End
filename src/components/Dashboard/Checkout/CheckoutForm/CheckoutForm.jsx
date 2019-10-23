import React, { useState } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import styles from "./checkoutform.module.scss";

const CheckoutForm = props => {
  const [completePayment] = useState(false);

  if (completePayment) return <h1>Purchase Complete</h1>;
  const { data, errors } = props;
  console.log("Errors: ", errors);
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
        onChange={props.handleChange}
        value={data.name}
      />
      <label className={styles.label} htmlFor="address_city">
        City
      </label>
      <input
        className={styles.cardField}
        name="address_city"
        type="text"
        placeholder="City"
        onChange={props.handleChange}
        value={data.address_city}
      />
      <label className={styles.label} htmlFor="address_state">
        State
      </label>
      <input
        className={styles.cardField}
        name="address_state"
        type="text"
        placeholder="State"
        onChange={props.handleChange}
        value={data.address_state}
      />

      <label className={styles.label} htmlFor="address_zip">
        Zipcode
      </label>
      <input
        className={styles.cardField}
        name="address_zip"
        type="text"
        placeholder="Zipcode"
        onChange={props.handleChange}
        value={data.address_zip}
      />

      <label className={styles.label}>Card Number</label>
      <CardElement className={styles.cardField} />
      {errors.response && <p className={styles.error}>{errors.response}</p>}
      <button
        className={styles.submitButton}
        onClick={event => props.submit(event, props.stripe)}
      >
        Purchase
      </button>
    </div>
  );
};

export default injectStripe(CheckoutForm);
