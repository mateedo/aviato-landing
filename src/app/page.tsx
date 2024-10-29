"use client";

import { useState } from "react";

import ApiView from "@/components/ApiView";
import ClientsView from "@/components/ClientsView";
import CompanyExplanationView from "@/components/CompanyExplanationView";
import DemoModal from "@/components/DemoModal";
import DemoPromptView from "@/components/DemoPromptView";
import FeaturesView from "@/components/FeaturesView";
import Footer from "@/components/Footer";
import LandingView from "@/components/LandingView";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleDemoButtonClicked = (e: any) => {
    setShowModal(true);
    e.stopPropagation();
  };

  const handleOutsideModalClicked = () => {
    setShowModal(false);
  };

  const mainContentStyle = showModal ? "blur-sm absolute" : "";

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div onClick={handleOutsideModalClicked} className={mainContentStyle}>
        <Navbar onDemoButtonClicked={handleDemoButtonClicked} />
        <LandingView onDemoButtonClicked={handleDemoButtonClicked} />
        <ClientsView/>
        <CompanyExplanationView onDemoButtonClicked={handleDemoButtonClicked} />
        <ApiView onDemoButtonClicked={handleDemoButtonClicked} />
        <FeaturesView/>
        <DemoPromptView onDemoButtonClicked={handleDemoButtonClicked} />
        <Footer/>
      </div>
      {showModal && <DemoModal />}
    </div>
  );
}
