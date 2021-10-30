import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import logo1 from "../../../image-2/logo1.png"
import logo2 from "../../../image-2/logo2.png"
import logo3 from "../../../image-2/logo3.png"
import logo4 from "../../../image-2/logo4.png"
import logo5 from "../../../image-2/logo5.png"
import logo6 from "../../../image-2/logo6.png"

const UpComingEvents = () => {
    return (
        <div>
            <h2>Our Up-Coming Events</h2>
           <Row xs={1} md={2} className="g-4">
                
                <Col>
                
                    <Card>
                        <Card.Img variant="top" src={logo1} />
                        <Card.Body>
                        <Card.Title>Fishing Sea</Card.Title>
                        <Card.Text>
                          with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={logo2} />
                        <Card.Body>
                        <Card.Title>Driving Under Sea</Card.Title>
                        <Card.Text>
                            This  supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={logo3} />
                        <Card.Body>
                        <Card.Title>Deep swimming</Card.Title>
                        <Card.Text>
                            This is a  text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={logo4} />
                        <Card.Body>
                        <Card.Title>Discoder under sea</Card.Title>
                        <Card.Text>
                            This is a  below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={logo5} />
                        <Card.Body>
                        <Card.Title>Light Swimming Under sea</Card.Title>
                        <Card.Text>
                            card with supporting text 
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={logo6} />
                        <Card.Body>
                        <Card.Title>Visit Under a Sea ship</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </div>
    );
};

export default UpComingEvents;