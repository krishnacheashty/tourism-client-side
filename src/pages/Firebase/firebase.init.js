import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializedAuthentication=()=>{
    initializeApp(firebaseConfig);
}

export default initializedAuthentication;