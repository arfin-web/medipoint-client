import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Updateslot = () => {
    const [slotInfo, setSlotinfo] = useState({})
    const { user } = useAuth();
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/appointments/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setSlotinfo(data))
    }, []);

    const nameRef = useRef();
    const descriptionRef = useRef();
    const timeRef = useRef();
    const imageRef = useRef();
    const priceRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const userPhonRef = useRef();
    const statusRef = useRef();

    const handleForm = (e) => {
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const time = timeRef.current.value;
        const image = imageRef.current.value;
        const price = priceRef.current.value;
        const userName = userNameRef.current.value;
        const email = emailRef.current.value;
        const userPhone = userPhonRef.current.value;
        const status = statusRef.current.value;

        const updatedSlot = { name, description, time, image, price, userName, email, userPhone, status };

        fetch(`http://localhost:5000/appointments/${id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedSlot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Slot Updated');
                }
            })
        e.preventDefault();
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="card mb-3 border-0 rounded-3 shadow bg-dark">
                    <form onSubmit={handleForm} >
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 p-5">
                                <img src={slotInfo?.image} className="img-fluid rounded-start w-100" alt="..." />
                            </div>
                            <div className="col-lg-8 col-md-6 col-12 p-5">
                                <p className="fw-bold text-warning mb-4 fs-3">{slotInfo?.name}</p>
                                <p className='text-white'>{slotInfo?.description}</p>
                                <p className="my-3 fs-3 text-white">Price: $ <span className="text-warning">{slotInfo?.price}</span></p>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="inputDestination" className="form-label text-white">Destination</label>
                                        <input ref={nameRef} type="text" value={slotInfo?.name} className="form-control" id="inputName" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputDescription" className="form-label text-white">Description</label>
                                        <input ref={descriptionRef} type="text" value={slotInfo?.description} className="form-control" id="inputName" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputTime" className="form-label text-white">Available Time</label>
                                        <input ref={timeRef} type="text" value={slotInfo?.time} className="form-control" id="inputName" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputPrice" className="form-label text-white">Price</label>
                                        <input ref={priceRef} type="text" value={slotInfo?.price} className="form-control" id="inputName" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputImage" className="form-label text-white">Image</label>
                                        <input ref={imageRef} type="text" value={slotInfo?.image} className="form-control" id="inputName" />
                                    </div>
                                    <div className="col-12">
                                        <input type="submit" className="btn btn-warning" value="Update" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Updateslot;