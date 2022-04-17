import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
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
                <Button onClick={() => navigateToServiceDetail(id)} variant='warning'>Details</Button>
            </Card>
        </Col>
    );
};

export default Service;