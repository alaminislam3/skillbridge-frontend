import HeroSection from "@/components/modules/homepage/HeroSection";
import FeatureTutor from "@/components/modules/homepage/featuredTutor";
import HowItWorks from "@/components/modules/homepage/HowItWorks"
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeatureTutor />
      <HowItWorks/>
    </div>
  );
}
