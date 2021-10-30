import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const BannerTop = () => {
    const{isLogup,user,logout}=useAuth()
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/myOrder#myOrder">My Order</Nav.Link>
                <Nav.Link as={HashLink} to="/UpComingEvents#UpComingEvents">UpComing Events</Nav.Link>
                {
                user.email && <span> <Nav.Link as={HashLink} to="/manageAllOrder">Manage All Order</Nav.Link></span>    
                }
                {
                    user.email &&<span> <Nav.Link as={HashLink} to="/AddANewService">Add A New Service</Nav.Link></span>
                }
            
                
                </Nav>
                
                </Container>

                <Nav>
                {isLogup && <span className="text-white"> {user.displayName}</span> }
                 {user.email?<button className="mx-3 p-2" onClick={logout}><Link to='/login'>Logout</Link></button>
                 :<Nav.Link as={Link} to="/login">login</Nav.Link>}
                </Nav>
            </Navbar>
        </div>
    );
};

export default BannerTop;