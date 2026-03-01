import Image from "next/image";
import Link from "next/link";

export type Tutor = {
  id: string;
  name: string;
  image?: string;
  isGraduated: boolean;
  last_institution: string;
  exprience: string;
  isFeatured: boolean;
  price: number;
  rating: number | null;
};

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      
      {/* Featured badge */}
      {tutor.isFeatured && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
          ⭐ Featured
        </span>
      )}

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src="https://i.ibb.co.com/zHNB6LgT/orginal-cv-picture-2.jpg" 
          alt="tutor picture "
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-slate-900">
          {tutor.name}
        </h3>

        <div className="space-y-1 text-sm text-slate-600">
          <p>
            🎓 {tutor.isGraduated ? "Graduated" : "Undergraduate"} —{" "}
            {tutor.last_institution}
          </p>
          <p>📚 {tutor.exprience} year(s) experience</p>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-slate-700">
            {tutor.rating ? `⭐ ${tutor.rating}` : "No ratings yet"}
          </span>

          <span className="text-lg font-bold text-indigo-600">
            ৳ {tutor.price}
          </span>
        </div>

        <Link
          href={`/tutors/${tutor.id}`}
          className="block w-full rounded-xl bg-indigo-600 py-2 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}