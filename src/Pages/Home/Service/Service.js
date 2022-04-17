import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className='text-center'>
                    <Card.Title className='text-primary'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                        <br />
                        <p>Price: {price} BDT</p>
                    </Card.Text>
                </Card.Body>
                <Button variant='warning'>Details</Button>
            </Card>
        </Col>
    );
};

export default Service;