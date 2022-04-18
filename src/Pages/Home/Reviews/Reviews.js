import React, { useEffect, useState } from 'react';
import { CardGroup, Col, Row } from 'react-bootstrap';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='container'>
            <CardGroup>
                <Row className='text-center mx-auto my-5'>
                    <h1>Thank You for<br />Your <span className='highlight_text'>Awesome</span> Reviews!</h1>
                    <small>Hear from customers like you</small>
                </Row>
                <Row xs={1} md={3} lg={3} className="g-2 mb-5">
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </CardGroup>
        </div>
    );
};

export default Reviews;