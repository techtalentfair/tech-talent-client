"use client"

import CorporateRegisterForm from "@/components/CorporateRegisterForm";
import FSCUStdRegisterForm from "@/components/FSCUStdRegisterForm";
import OtherStdRegisterForm from "@/components/OtherStdRegisterForm";
import SectionHeading from "@/components/SectionHeading";
import TabsList from "@/components/TabsList";
import React, { useState } from "react";

interface RegisterSectionComponentProps {
  eventId: string;
}

export default function RegisterSectionComponent({eventId} : RegisterSectionComponentProps ) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabClick = (index : 0 | 1 | 2) => {
    setSelectedIndex(index);
  };

  const tabs = ["FSCU Student", "Other Student", "Corporate"];

  return (
    <section id="Register" className="flex flex-col items-center justify-start py-20 min-h-screen">
      <SectionHeading title="Register" />
      <TabsList className="my-5" tabs={tabs} selectedIndex={selectedIndex} handleTabClick={handleTabClick} />
      {
        selectedIndex == 0 ? <FSCUStdRegisterForm eventId={eventId} /> :  selectedIndex == 1 ?  <OtherStdRegisterForm eventId={eventId} /> :selectedIndex === 2 ? <CorporateRegisterForm eventId={eventId} /> : null 
      }
    </section>
  );
}
