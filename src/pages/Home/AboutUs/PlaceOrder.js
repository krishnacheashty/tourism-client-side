import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './placeOrder.css'
import useAuth from '../../Hooks/useAuth';
import { Container } from 'react-bootstrap';
import * as axios from 'axios';



const PlaceOrder = () => {
    const{user}=useAuth()
   const{serviceId}=useParams();
   const[service,setService]=useState({})

   useEffect(()=>{
       fetch(`http://localhost:5000/services/${serviceId}`)
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
           setService(data)
       })
   },[serviceId]);

    const{name,picture,discription}=service
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/order',data)
        .then(result=>{
            if(result){
                alert("you are successfully add you event")
            }
            reset('')
        })
    };
     

    return (
        <Container> 
            <h2>Your Order Details.</h2>
            <div className="div-from">
                

                <form onSubmit={handleSubmit(onSubmit)} className="from-container">
                <label>
                    User Name :
                <input defaultValue={user.displayName} {...register("name")}/>
                </label>
                <input defaultValue={user.email} {...register("email")}/>

                <input defaultValue={name} label="productName"{...register("productName",{ required: true })}  />

                <textarea defaultValue={discription} label="description" {...register("description",{ required: true })} />

                <input placeholder="Your Address" {...register("address", { required: true })} />

                <input placeholder="Phone Number " {...register("number",{ required: true })} />
                <input defaultValue={picture}  {...register("image_url",{ required: true })} />
                
                
                <input type="submit" />
                <span><small> 3 time click on submit to see your product in your order page.</small></span>
                </form>
                
            </div>

        </Container>
    );
};

export default PlaceOrder;