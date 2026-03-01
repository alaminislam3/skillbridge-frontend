interface ServiceOption {
  cache?: RequestCache;
  revalidate?: number;
}
export const tutorService = {
    getAlltutor : async (options?: ServiceOption) => {
      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }
      try{
        const result = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/v1/tutors`)
        const data = await result.json();
       
        return { data: data, error: null };
      }
      catch(error){
        console.log(error)
        return { data: null, error: { message: "something went wrong " } };
      }
    }
}