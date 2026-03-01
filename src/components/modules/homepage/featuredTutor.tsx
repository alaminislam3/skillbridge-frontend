import { tutorService } from "@/service/tutor/tutor.service";
import { Tutor } from "./tutorCard";
import TutorCard from "@/components/modules/homepage/tutorCard";

export default async function FeatureTutor() {
  const { data } = await tutorService.getAlltutor({
    cache: "no-store",
  });
  
  return (
    <div className="grid grid-cols-3 max-w-3xl gap-3 mx-auto">
      {data?.data.map((tutor: Tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
}
