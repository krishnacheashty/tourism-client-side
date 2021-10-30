import React from 'react';
import useAuth from '../../Hooks/useAuth';
import {useLocation,useHistory} from 'react-router'
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
            
            <button className="mx-3 p-2" onClick={handelmail}>Google Sign-in</button>
            
        </div>
    );
};

export default Login;