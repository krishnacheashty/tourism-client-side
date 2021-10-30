import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    console.log(service)
    const{picture,name,discription,_id}=service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                            {discription.slice(0,70)}
                    </Card.Text>
                    <Link to={`/placeOrder/${_id}`}><button className="bg-success">Book now</button></Link>

                    </Card.Body>
                </Card>
            </Col>
            
        </div>
    );
};

export default Service;