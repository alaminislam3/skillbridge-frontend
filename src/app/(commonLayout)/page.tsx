import HeroSection from "@/components/modules/homepage/HeroSection";
import FeatureTutor from "@/components/modules/homepage/featuredTutor";
import HowItWorks from "@/components/modules/homepage/HowItWorks"
import CTASection from "@/components/modules/homepage/CTASection"
import Footer from "@/components/modules/homepage/Footer"
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeatureTutor />
      <HowItWorks/>
      <CTASection/>
      <Footer/>
    </div>
  );
}
