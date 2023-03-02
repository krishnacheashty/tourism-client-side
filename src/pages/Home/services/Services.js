import React from 'react';
import { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import Service from '../services/Service/Service';



const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://tourism-server-side-l69j.onrender.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2 className='mt-5 mb-5'>Our Present Events</h2>
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