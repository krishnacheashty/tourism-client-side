import initializedAuthentication from "../Firebase/firebase.init"
import { useState,useEffect } from "react";
import { getAuth, signInWithPopup,signOut,onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";


initializedAuthentication()
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const[error,setError]=useState('');
    const [isLogin,setIsLogin]=useState(null)

    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const signInWithGoogle=()=>{
        return signInWithPopup(auth, provider)
        .catch((error)=>{
            setError(error.massage)
        })

    }
    const isLogup=()=>{
        const user = auth.currentUser;
        if(user!==null){
            setIsLogin(isLogin)
        }else{

        }
    }

    const logout=()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })


    },[auth])

    return{
        user,
        signInWithGoogle,
        logout,
        isLogup
    }




}


export default useFirebase;