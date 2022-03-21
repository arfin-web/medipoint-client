import React, { useRef } from 'react';

const Addappointments = () => {
    const nameRef = useRef()
    const desRef = useRef()
    const timeRef = useRef()
    const priceRef = useRef()
    const imageRef = useRef()


    const handleAddAppointments = (e) => {
        const name = nameRef.current.value;
        const description = desRef.current.value;
        const time = timeRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;

        const newAppointments = { name, description, time, price, image };


        fetch('http://localhost:5000/appointments', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newAppointments)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Slot added');
                    e.target.reset()
                }
            })
        e.preventDefault()
    }
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 text-warning">Add Available Slot</p>
                <form onSubmit={handleAddAppointments} className="row g-3">
                    <div className="col-12">
                        <label htmlFor="inputName" className="form-label text-white">Name</label>
                        <input ref={nameRef} type="text" className="form-control" id="inputName" placeholder="Enter Doctor name" autoComplete="off" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputDescription" className="form-label text-white">Description</label>
                        <input ref={desRef} type="text" className="form-control" id="inputDescription" placeholder="Enter description" autoComplete="off" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputTime" className="form-label text-white">Available Time</label>
                        <input ref={timeRef} type="text" className="form-control" id="inputTime" placeholder="Enter Available Time" autoComplete="off" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPrice" className="form-label text-white">Price</label>
                        <input ref={priceRef} type="text" className="form-control" id="inputPrice" placeholder="Enter price" autoComplete="off" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputImage" className="form-label text-white">Image URL</label>
                        <input ref={imageRef} type="text" className="form-control" id="inputImage" placeholder="Give image url" autoComplete="off" required />
                    </div>
                    <div className="col-12">
                        <input type="submit" className="btn btn-warning fw-bold" value="Add" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Addappointments;