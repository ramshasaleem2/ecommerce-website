import React, { useContext } from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(localStorage.getItem("currentUserEmail") ? {email: localStorage.getItem("currentUserEmail")}:null)

    const signUp=(email,password)=>{
        const users=JSON.parse(localStorage.getItem("users") || "[]")

        if (users.find((u)=>u.email===email)){
            return {success:false, message:"User already exists"}
        }

        const newUser={email,password};
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("currentUserEmail",email)

        setUser({email})
        return {success:true}

    }


    const logIn=(email,password)=>{
        const users=JSON.parse(localStorage.getItem("users") || "[]")
        const user=users.find((u)=>u.email===email && u.password===password)
        if (!user){
            return {success:false, message:"Invalid email or password"}
        }
        localStorage.setItem("currentUserEmail",email)
        setUser({email})
        return {success:true}

    }

    const logOut=()=>{
        localStorage.removeItem("currentUserEmail")
        setUser(null)
    }







  return (
    <AuthContext.Provider value={{signUp,user,logOut, logIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

