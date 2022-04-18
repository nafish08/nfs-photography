import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <Col>
            <Card className='card_style'>
                <Card.Img variant="top image_style" src={img} />
                <Card.Body className='text-center'>
                    <Card.Title className='text-info'>{name}</Card.Title>
                    <Card.Text className='text-light'>
                        {description}
                        <br />
                        Price: {price} BDT
                    </Card.Text>
                </Card.Body>
                <Button onClick={() => navigateToServiceDetail(id)} className='button_style' variant='warning mb-1'>Details</Button>
            </Card>
        </Col>
    );
};

export default Service;