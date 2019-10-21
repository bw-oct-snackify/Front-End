import React from "react";
import styles from "./shipping.module.scss";

const Shipping = props => {



    return (
    <div className={styles.container}>
        <h2>Shipping Details</h2>
        <form> 
            <label htmlFor="attention">Attention</label>
            <input type="text" name="attention" id="attention" />
            
            <label htmlFor="attention">Address Line 1</label>
            <input type="text" name="address1" id="address1" />
            
            <label htmlFor="attention">Address Line 2</label>
            <input type="text" name="address2" id="address2" />
            
            <label htmlFor="city">Location</label>   
            <input type="text" name="city" id="city" />
            <input type="text" name="state" id="state"/>
        </form>
    </div>)

}


export default Shipping;