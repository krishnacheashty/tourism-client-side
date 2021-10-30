import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo1 from "../../../../image-2/logos/1.png"
import logo2 from "../../../../image-2/logos/2.png"
import logo3 from "../../../../image-2/logos/3.png"
import logo4 from "../../../../image-2/logos/4.png"
import logo5 from "../../../../image-2/logos/5.png"
const Logos = () => {
    return (
        <div>
            <Row className="mx-auto">
                <Col xs={12} md={2}><img src={logo1} alt="logo-company" /></Col>
                <Col xs={12} md={2}><img src={logo2} alt="logo-company" /></Col>
                <Col xs={12} md={2}><img src={logo3} alt="logo-company" /></Col>
                <Col xs={12} md={2}><img src={logo4} alt="logo-company" /></Col>
                <Col xs={12} md={2}><img src={logo5} alt="logo-company" /></Col>
                
            </Row>
        </div>
    );
};

export default Logos;