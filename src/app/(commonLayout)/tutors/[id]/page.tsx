import { getSingleTutor } from "@/service/tutor/tutor.service";
import Image from "next/image";
import BookingModel from "@/components/modules/Booking /booking-modal"

type PageProps = {
  params: {
    id: string;
  };
};

/* working here not getiing tutor  */

export default async function SingleTutor({ params }: PageProps) {
  const { id } =await params;
  
  const {data  } = await getSingleTutor(id);
   console.log(data)
    if(!data){
      return <div>data not found </div>
     }
   return (
    <section className="min-h-screen bg-gradient-to-b from-white to-indigo-50 py-16 px-6">
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-12 lg:grid-cols-2 items-center bg-white shadow-xl rounded-3xl p-8">

          {/* Image Section */}
          <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src={data?.data.image || "https://i.ibb.co.com/Lz7fQq27/o.png"}
              alt="data Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            
            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Professional data
              </h1>

              {data?.data.isFeatured && (
                <span className="inline-block mt-2 rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
                  ⭐ Featured data
                </span>
              )}
            </div>

            {/* Info List */}
            <div className="space-y-3 text-slate-600 text-base">
              <p>
                🎓{" "}
                <span className="font-medium text-slate-800">
                  {data?.data.isGraduated ? "Graduated" : "Undergraduate"}
                </span>{" "}
                from {data?.data.last_institution}
              </p>

              <p>
                📚 {data?.data.exprience} year(s) teaching experience
              </p>

              <p>
                ⭐{" "}
                {data?.data.rating
                  ? `${data.data.rating} / 5`
                  : "No ratings yet"}
              </p>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t">
              
              <div>
                <p className="text-sm text-slate-500">Session Price</p>
                <p className="text-3xl font-bold text-indigo-600">
                  ৳ {data?.data.price}
                </p>
              </div>

              
              <BookingModel tutorId={`${data?.data.userId}`}/>

            </div>

          </div>

        </div>

      </div>
    </section>
  

  );
}