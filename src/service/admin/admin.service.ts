"use server";
import { cookies } from "next/headers";

export const getAllUser = async () => {
  const store = await cookies();
  const token = store.get("token")?.value;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/alluser`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token!,
        },
      },
    );
    const data = await res.json();

    return { data: data, error: null };
  } catch (err) {
    console.log(err);
    return { data: null, error: { message: "something went wrong" } };
  }
};

export const toggleUserStatus = async (id: string, currentStatus: string) => {
  const newStatus = currentStatus === "BAN" ? "UNBAN" : "BAN"

  await updateUserStatus(id, newStatus)
}

export const updateUserStatus = async (id: string, status: string) => {
  const store = await cookies()
  const token = store.get("token")?.value

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/ban/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token!,
        },
        body: JSON.stringify({ status }), 
        cache: "no-store",
      }
    )

    return res.json()
  } catch (error) {
    console.log(error)
  }
}
