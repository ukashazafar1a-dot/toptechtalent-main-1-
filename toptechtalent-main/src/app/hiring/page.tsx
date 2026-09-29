import React, { Suspense } from "react";
import HeroSearch from "./_components/HeroSearch";
import TalentSolutions from "./_components/TalentSolutions";
import OfficeFinder from "./_components/OfficeFinder";
import FindTalent from "./_components/FindTalent";
import ServicesSection from "../_components/ServicesSection";
import GlobalExpertise from "./_components/GlobalExpertise";
import HireTheTalent from "./_components/HireTheTalent";
import "./style.css";
import HireInsights from "./_components/HireInsights";

const page = () => {
  return (
    <div>
      <HeroSearch />
      <TalentSolutions />
      <OfficeFinder />
      <FindTalent />
      <ServicesSection />
      <GlobalExpertise />
      <Suspense fallback={<></>}>
        <HireTheTalent />
      </Suspense>
      <HireInsights />
    </div>
  );
};

export default page;
