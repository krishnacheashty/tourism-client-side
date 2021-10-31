import React from 'react';
import "./login.css"
import useAuth from '../../Hooks/useAuth';
import {useLocation,useHistory} from 'react-router'
import { Container, Form } from 'react-bootstrap';
import logo from "../../../image-2/logos/google-icon.png"


const Login = () => {
    const {user,signInWithGoogle}=useAuth();
    console.log(user);
    

    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/home'
    
    const handelmail=()=>{
        signInWithGoogle()
        .then(result=>{
            history.push(redirect_uri);
        })
    }

    return (
        <div>
            <Container className='login-container'>
            <Form >
                <Form.Label>Mail :</Form.Label>
                    <input  className='login-from '  /> <br />
                    <Form.Label>Password :</Form.Label>
                    <input className='mb-3 mx-2' type="password"  /> <br />
                    <input className='mb-3' type="submit" />
            </Form>
            <button className="mx-3 p-2" onClick={handelmail}><img src={logo} alt="" />  Google Sign-in</button>
           </Container>
            
            
            
        </div>
    );
};

export default Login;