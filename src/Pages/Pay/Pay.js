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
                        <p className="fs-4 text-white">Pay Your Payment</p>
                        <button onClick={() => { setCheckout(true) }} className="checkout-button btn btn-warning">Checkout</button>
                    </div>
                }
            </div>
        </>
    );
};

export default Pay;