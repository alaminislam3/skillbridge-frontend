"use server"
import {FieldValues} from "react-hook-form";
import {cookies} from "next/headers"
import {jwtDecode} from "jwt-decode"

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

export const getUser = async () =>{
    const storeCookie = await cookies();
    const token = storeCookie.get("token")?.value
    let decodedData= null
    if(token){
        decodedData = await jwtDecode(token)
        return decodedData
    } else {
        return null
    }
}

export const UserLogOut = async () => {
  const storeCookie = await cookies();
  storeCookie.delete("token");
};