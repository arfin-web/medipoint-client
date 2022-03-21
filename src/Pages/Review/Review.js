import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Review = ({ review }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <Zoom>
                    <div className="card rounded-3 shadow bg-dark border-3 border-warning">
                        <div className="card-header fs-4 text-warning">
                            <i className="fab fa-slack-hash"></i> {review.name}
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p className='text-white'><i className="fas fa-quote-left text-warning opacity-75"></i>  {review.review}  <i className="fas fa-quote-right text-warning opacity-75"></i></p>
                                <footer className="blockquote-footer mt-4">From <cite title="Source Title">{review.email}</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    );
};

export default Review;