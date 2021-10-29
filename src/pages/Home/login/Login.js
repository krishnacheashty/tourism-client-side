import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {user,signInWithGoogle,logout}=useAuth();
    console.log(user)

    return (
        <div>
            
            <button className="mx-3 p-2" onClick={signInWithGoogle}>Google Sign-in</button>
            <button className="mx-3 p-2" onClick={logout}>logout</button>
        </div>
    );
};

export default Login;