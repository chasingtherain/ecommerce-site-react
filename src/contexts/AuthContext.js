import { createContext } from "react";

export const AuthContext = createContext()

export const AuthReducer = (state,action) => {
    switch(action.type){
        case "LOGIN":
            return {...state, user: action.payload}
        
        case "LOGOUT":
            return {...state, user: null}
            
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
    
}