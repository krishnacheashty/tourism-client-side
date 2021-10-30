import React from 'react';
import { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import Service from '../services/Service/Service';



const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2>Our Present Events</h2>
            <Row xs={1} md={3} className="g-4">

                {
                    services.map(services=><Service
                    key={services.key}
                    service={services}    
                    
                    ></Service>)
                }
            </Row>
            
        </div>
    );
};

export default Services;