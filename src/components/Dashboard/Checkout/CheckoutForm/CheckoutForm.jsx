import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import styles from "./checkoutform.module.scss";
import Checkout from "../Checkout";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = { complete: false };
  }

  async submit(ev) {
    // User clicked submit
    this.props.stripe
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
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className={styles.cardCheckout}>
        <h1 className={styles.cardTitle}>Card Details</h1>
        <CardElement className={styles.cardElement} />
        <button className={styles.submitButton} onClick={this.submit}>
          Purchase
        </button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
