import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase.config"

export const useSignUp = () => {
    const [error, setError] = useState(null)
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user signed up", user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log("sign up failed");
                setError(errorMessage);
            });
    }

    return {error, signUp}
}