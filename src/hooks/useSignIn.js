import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

export const useSignIn = () => {
    const [error, setError] = useState(null)

    const signIn = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user signed in: ", user);
            
        })
        .catch((error) => {setError(error.message)});
    }

    return {signIn, error}
}
