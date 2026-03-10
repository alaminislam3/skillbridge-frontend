"use server"
import {cookies} from "next/headers"

interface ServiceOption {
  cache?: RequestCache;
  revalidate?: number;
}

export const getAlltutor =async (options?: ServiceOption) => {
    const config: RequestInit = {};

    if (options?.cache) {
      config.cache = options.cache;
    }

    if (options?.revalidate) {
      config.next = { revalidate: options.revalidate };
    }
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/v1/tutors`,
      );
      const data = await result.json();

      return { data: data, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error: { message: "something went wrong " } };
    }
  }


export const getSingleTutor= async (id: string, options?: ServiceOption) => {
    const store = await cookies()
    const token = store.get("token")?.value
    const config: RequestInit = {};

    if (options?.cache) {
      config.cache = options.cache;
    }

    if (options?.revalidate) {
      config.next = { revalidate: options.revalidate };
    }

    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/v1/tutors/${id}`,{
          method : "GET",
          headers : {
            "Content-Type" : "application/json",
            Authorization : token!,
          }
        }
      );

      const data = await result.json();
//  console.log("Response status:", result.status);

      return { data: data, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error: { message: "something went wrong" } };
    }
  }

