
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/N2nLqWm/photo-1597910037177-4f1c411a3802.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p> a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/0cfN0CG/photo-1625913952332-248f4c3f3daa-jgp-1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second label</h3>
                        <p> amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/kBNpCLh/closeup-shot-stingray-fish-swimming-underwater-with-some-fish-swimming-it.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third label</h3>
                        <p> cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;