import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import styles from "./checkoutform.module.scss";
import SuccessfulPurchase from "./SuccessfulPurchase";

const CheckoutForm = props => {
  const { data, errors, process } = props;

  if (process === "success") return <SuccessfulPurchase />;
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
      {process === "processing" ? (
        <div className={styles.process}>
          <i className="fa fa-cog fa-spin"></i>
        </div>
      ) : (
        <button
          className={styles.submitButton}
          onClick={event => props.submit(event, props.stripe)}
        >
          Purchase
        </button>
      )}
    </div>
  );
};

export default injectStripe(CheckoutForm);
