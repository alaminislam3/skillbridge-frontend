"use server"
import {cookies} from "next/headers"
type BookingPayload = {
  tutorId: string;
  startDate: string;
  endDate: string;
};

export const createBooking = async (payload: BookingPayload) => {
  const store = await cookies()
  const token = store.get("token")?.value
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       Authorization : token!
    },
    body: JSON.stringify(payload),
  });

  return res.json();
};

export const getAllBooking = async () => {
  const store = await cookies()
  const token = store.get("token")?.value
  try {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/v1/booking/all`,{
    method : "GET",
    headers : {
      "Content-Type" : "application/json",
      Authorization : token!
    },
    
  })
  const data = await res.json();
 

  return { data: data, error: null };

  } catch (err){
     console.log(err);
      return { data: null, error: { message: "something went wrong" } };
  }
 
}

export const updateBookingStatus = async (id: string, status: string) => {
  const store = await cookies()
  const token = store.get("token")?.value
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/booking/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization : token!
    },
    body: JSON.stringify({ status }),
    cache: "no-store",
  });

  return res.json();

  }
  catch (error){
    console.log(error)
  }
};