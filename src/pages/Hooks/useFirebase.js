import initializedAuthentication from "../Firebase/firebase.init"
import { useState,useEffect } from "react";
import { getAuth, signInWithPopup,signOut,onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";


initializedAuthentication()
const useFirebase=()=>{
    const [user,setUser]=useState();

    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const signInWithGoogle=()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            setUser(result)
        })

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
        logout
    }




}


export default useFirebase;