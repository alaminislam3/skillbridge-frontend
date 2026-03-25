"use server";
import { CreateReview } from "@/app/Types/createReview";
import { cookies } from "next/headers";
export const createReview = async (payload: CreateReview) => {
  const store = await cookies();
  const token = store.get("token")?.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token!,
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();

    return result
  } catch (err) {
    console.log(err);
  }
};
