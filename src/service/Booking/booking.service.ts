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