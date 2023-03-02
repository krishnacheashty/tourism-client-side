import React from 'react';
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../../image-2/logos/bannerlogo/logo@2x_white.png'
const Footer = () => {
    return (
        <div>
            <Container>
            <Row className=" footer-container">
                <h1 className='mx-5'>.  .  .</h1>
            </Row>
            </Container>
            <Container>
                <Row className="footer-main">
                    <Col xs={6} md={4} >
                    <img className="logo-2 text-menu-1 " src={logo} alt="logo" />
                        <ul className="mt-3">
                            <h4 className='text-about'>About Us</h4>
                            <li className='text-about' > Our Team</li>
                            <li className='text-about' > Trainer</li>
                            <li className='text-about' > Community</li>

                        </ul>
                    </Col>
                    <Col xs={6} md={4}>
                        <Row>
                            <Col xs={12}md={6}>
                                <h3 className='text-menu'>Menu</h3>
                                <h6>Home</h6>
                                <h6>About Us</h6>
                                <h6>Events</h6>
                                <h6>Blogs</h6>
                                <h6>Manage Order</h6>
                                <h6>My Order</h6>
                            </Col>
                            <Col xs={12}md={6} >
                                <h3 className='text-menu'>Our Popular Place</h3>
                                <h6>Simba Riverside</h6>
                                <h6>Coxs-Bazar sea Beach</h6>
                                <h6>Innani Sea Beach</h6>
                                <h6>Mosheskhaili sea Port</h6>
                                <h6>SeantMartine</h6>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} md={4}>
                      
                        <h4 className='text-menu-1'>Address</h4>
                        <p>Dhandomdi-1/5,Dhaka,Bangladesh</p>
                        <p>phone:0987123</p>
                    </Col>
                    
                </Row>  
            </Container>
            <Container>
                <Row className="footer-bottom">
                    <Col xs={12}md={4}> Copyright @ 2021. krishna presented</Col>
                    <Col xs={12}md={8}>helpline:TravelBazar@gmail.com</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;