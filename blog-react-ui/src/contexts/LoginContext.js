import React, { createContext, useEffect, useState } from "react";
import cookie from "js-cookie";

const LoginContext = createContext();

export const LoginState = (props) => {

    const [isloggedin, setIsloggedin] = useState();
    const [loggedUser, setLoggedUser] = useState({
        id: "", username: ""
    });

    const loginGet = async () => {
        try {
            const res = await fetch("/api/auth/login");
            const result = await res.json();

            if(result.id){
                setLoggedUser(result);
            } else if (result.error) {
                setIsloggedin(false);
            }

        } catch (error) {
            console.log("Catched at login context: ", error);
        }
    }

    useEffect(()=>{
        if (cookie.get("token")){
            setIsloggedin(true);
            loginGet();
        } else {
            setIsloggedin(false);
        }
    }, []);
    

    return (
        <LoginContext.Provider value={{isloggedin, setIsloggedin, loggedUser, setLoggedUser}}>
            {props.children}
        </LoginContext.Provider>
    )
}


export default LoginContext;