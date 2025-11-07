import LandingPage from "@/components/LandingPage";
import AboutSnippet from "@/components/AboutSnippet";
import OurServiceHomePage from "@/components/OurServiceHomePage";
import WhyChooseCTG from "@/components/WhyChooseCTG";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";


export default function Home() {
  return (
    <>
      <LandingPage />
      <AboutSnippet />
      <OurServiceHomePage />
      <WhyChooseCTG />
      <Testimonials />
      <CTASection />
     
    </>
  );
}
