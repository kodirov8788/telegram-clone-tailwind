import { useEffect } from "react";
import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState([])
    
    useEffect(() => {
        const unsub = () => {
            onAuthStateChanged(auth, (user) => {
                setCurrentUser(user)
            })
        }
        return () => {
            unsub()
        }
    }, []);
    console.log("user >>", currentUser)

    return (
        <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
    )

}