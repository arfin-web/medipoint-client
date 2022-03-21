import React, { useState } from 'react';
import Reactpaypal from '../Reactpaypal/Reactpaypal';
import './Pay.css';

const Pay = () => {
    const [checkout, setCheckout] = useState(false);
    return (
        <>
            <div className="container-fluid pay-container mb-5">
                {(checkout === true)
                    ? <div className="payment-div">
                        <Reactpaypal
                            total={500}
                        />
                    </div>

                    : <div>
                        <p className="fs-4">Pay Your Payment</p>
                        <button onClick={() => { setCheckout(true) }} className="checkout-button btn btn-primary">Checkout</button>
                    </div>
                }
            </div>
        </>
    );
};

export default Pay;