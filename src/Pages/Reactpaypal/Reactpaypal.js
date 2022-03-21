import React, { useEffect, useRef, useState } from 'react';

const Reactpaypal = () => {
    const [paid, setPaid] = useState(false);
    const [error, setError] = useState(null);

    const paypalRef = useRef();

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Your description",
                                amount: {
                                    currency_code: "USD",
                                    value: 500.0,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaid(true);
                    console.log(order);
                },
                onError: (err) => {
                    //setError(err)
                    console.error(err);
                },
            })
            .render(paypalRef.current);
    }, []);

    // If the payment has been made
    if (paid) {
        return <div>Payment successful.!</div>;
    }

    // If any error occurs
    if (error) {
        return <div>Error Occurred in processing payment.! Please try again.</div>;
    }

    return (
        <div>
            <p className="fs-5">Total Amount in USD. : 500 /-</p>
            <div ref={paypalRef} />
        </div>
    );
};

export default Reactpaypal;