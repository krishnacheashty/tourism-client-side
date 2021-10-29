import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const BannerTop = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/aboutUs#aboutUs">About Us</Nav.Link>
                <Nav.Link as={HashLink} to="/myOrder#myOrder">My Order</Nav.Link>
                </Nav>
                
                </Container>
                <Nav>
                 <Nav.Link as={Link} to="/login">login</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default BannerTop;