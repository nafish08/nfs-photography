import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css';

const Review = ({ review }) => {
    const { comment, img, name } = review;
    return (
        <Col className='mx-auto mt-4'>
            <Card className='review_container'>
                <div className='d-flex justify-content-center align-items-center review_header p-3'>
                    <Card.Img className='w-25 rounded-circle me-2' variant="top" src={img} />
                    <Card.Title className='rating'><span className='text-light'>{name}</span><br />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </Card.Title>

                </div>
                <Card.Body className='text-center'>
                    <Card.Text>
                        {comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;