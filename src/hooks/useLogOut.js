import { signOut } from "firebase/auth"
import { auth } from "../firebase.config"

export const useLogOut = () => {
    const logOut = () => {
        console.log("logging out");
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("logged out successfully");
                })
            .catch((error) => {
                // An error happened.
                console.log(error.message)
                console.log("log out unsuccessful");
                });
    }
    return {logOut}
}