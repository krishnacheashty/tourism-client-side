import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const MyOrder = () => {
    
    const[events,setEvents]=useState([])
    useEffect(()=>{
        fetch('https://powerful-bastion-27385.herokuapp.com/order')
        .then(res=>res.json())
        .then(data =>setEvents(data))
    },[])
    // console.log(events)
    const handelDelete=(id)=>{
        fetch(`https://powerful-bastion-27385.herokuapp.com/order/${id}`,
        {method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deletedCount){
            alert("Do you want to DELETE your Order?")
            const remainingData=events.filter(event=>event._id!==id)
            setEvents(remainingData);
        }
    })
        

    }
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    events.map(event=><Col>
                        <Card>
                            <Card.Img variant="top" src={event.image_url} />
                            <Card.Body>
                            <Card.Title>{event.productName}</Card.Title>
                            <Card.Text>
                                {event.description}
                            </Card.Text>

                            </Card.Body>
                            <button onClick={()=>handelDelete(event._id)}>Delete</button>
                        </Card>
                    
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default MyOrder;

