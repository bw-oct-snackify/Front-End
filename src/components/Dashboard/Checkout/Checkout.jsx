import React from 'react';
import checkout from "./checkout.module.scss";
import PackageInfo from "./PackageInfo/PackageInfo";
import Shipping from "./Shipping/Shipping";
import SnackView from "./SnackView/SnackView";


const Checkout = props => {

    return(
        <div className={checkout.container}>
            
            <div className={checkout.infoContainer}>
                <PackageInfo totalSnacks={10} deliveryDate={"10/20/19"} totalCost="$199.00"/>    
                <Shipping />
            </div>
            <SnackView />
        </div>
    );
};

export default Checkout;