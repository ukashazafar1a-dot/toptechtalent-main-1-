import Image from "next/image";
import HeroBanner from "./_components/HeroBanner";
import HireTrend from "./_components/HireTrend";
import FindYourNextHire from "./_components/FindYourNextHire";
import MakeTheCareer from "./_components/MakeTheCareer";
import CompanyBadge from "./_components/CompanyBadge";
import ConsultingSection from "./_components/ConsultingSection";
import ServicesSection from "./_components/ServicesSection";
import { Suspense } from "react";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <HireTrend />
      <FindYourNextHire />
      <ConsultingSection />
      <MakeTheCareer />
      <ServicesSection />
      <Suspense fallback={<></>}>
        <Testimonials />
      </Suspense>
      <CompanyBadge />
    </div>
  );
}
