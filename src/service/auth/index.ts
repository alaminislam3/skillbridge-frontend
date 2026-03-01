"use server"
import {FieldValues} from "react-hook-form";
import {cookies} from "next/headers"

export const loginUser = async (userData : FieldValues) => {
    try {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/login`,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(userData)
    })
    const result = await res.json();
    const storeCookies = await cookies()
    if(result.success){
        storeCookies.set("token", result?.data?.token)
    }
   
     return result;
    } 
    catch (error){
     console.log(error)
    }
}

export const registerUser = async (userData : FieldValues) =>  {
    try{
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/register`,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(userData)
    })    
    const result = await res.json()
    return result

    } catch (error){
        console.log(error)
    }
}