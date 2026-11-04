import Hero from "@/components/Hero";
import KellerSpotlight from "@/components/KellerSpotlight";
import Services from "@/components/Services";
import Pillars from "@/components/Pillars";
import Process from "@/components/Process";
import Owners from "@/components/Owners";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <KellerSpotlight />
      <Services />
      <Pillars />
      <Process />
      <Owners />
      <Reviews compact />
      <CTA />
    </>
  );
}
