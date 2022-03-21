import React, { useRef } from 'react';
import './Makereview.css';
import useAuth from '../../Hooks/useAuth';

const Makereview = () => {
    const { user } = useAuth();
    const makereviewimg = 'https://thumbs.dreamstime.com/b/time-review-clock-text-black-background-to-mean-concept-time-review-clock-text-black-background-134134154.jpg';

    const nameRef = useRef();
    const emailRef = useRef();
    const reviewRef = useRef();

    const handleForm = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const review = reviewRef.current.value;

        const myReview = { name, email, review };

        fetch('https://infinite-anchorage-79745.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(myReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thanks for your Review');
                    e.target.reset()
                }
            })
        e.preventDefault();
    }
    return (
        <>
            <div className="container-fluid makereview-container p-5">
                <div className="card mb-3 border-0 rounded-3 shadow bg-dark">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={makereviewimg} className="img-fluid rounded-start h-100" alt="review" />
                        </div>
                        <div className="col-md-8">
                            <form onSubmit={handleForm}>
                                <div className="card-body">
                                    <p className="fs-3">Give Your Review</p>
                                    <div className="mb-3">
                                        <input ref={nameRef} type="text" value={user?.displayName} className="form-control" id="formGroupExampleInput" placeholder="Enter your name" autoComplete="off" required />
                                    </div>
                                    <div className="mb-3">
                                        <input ref={emailRef} type="email" value={user?.email} className="form-control" id="formGroupExampleInput" placeholder="Enter your email" autoComplete="off" required />
                                    </div>
                                    <div className="mb-3">
                                        <textarea ref={reviewRef} className="form-control" placeholder="Please give your valuable review" id="floatingTextarea" required></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className="btn btn-warning" value="Submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Makereview;