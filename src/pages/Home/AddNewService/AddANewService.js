import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddANewService = () => {
    /* update data here */
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post("https://powerful-bastion-27385.herokuapp.com/services",data)
        .then(result=>{
            if(result){
                alert("your event is updated successfully.")
            }
            reset('')
        })

    
    }
    return (
        <div>
            <div className="div-from">
                

                <form onSubmit={handleSubmit(onSubmit)} className="from-container">
                <label>
                    User Name :
                    <input placeholder="Your Name"  {...register("Your_name")}/>
                </label>
                <label>
                    User Email :
                    <input placeholder="Email"  {...register("email",{ required: true })}/>
                </label>
                <label>
                    Event Name :
                    <input  label="EventName"{...register("name",{ required: true })}  />
                </label>
                <label>
                    Your Address :
                    <input placeholder="Your Address" {...register("address")} />

                </label>
                <label>
                    User PhoneNUmber :
                    <input placeholder="Phone Number " {...register("number",{ required: true })} />
                </label>
                <label>
                    Image_uri:
                    <input placeholder="image_url"  {...register("picture",{ required: true })} />
                </label>
                <label>
                    Description :
                    <textarea  label="description" {...register("discription",{ required: true })} />
                </label>  
                <input type="submit" />
                </form>
                
            </div>
        </div>
    );
};

export default AddANewService;