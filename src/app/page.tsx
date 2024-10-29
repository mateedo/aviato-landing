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

  // Use React.MouseEvent<HTMLButtonElement> if the trigger is specifically from a button
  const handleDemoButtonClicked = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation(); // Prevents the click from bubbling up
    setShowModal(true); // Shows the modal
  };

  const handleOutsideModalClicked = () => {
    setShowModal(false); // Closes the modal
  };

  const mainContentStyle = showModal ? "blur-sm absolute" : "";

  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen bg-white">
      <div onClick={handleOutsideModalClicked} className={mainContentStyle}>
        <div className="bg-gray-50">
          <Navbar onDemoButtonClicked={handleDemoButtonClicked} />
          <LandingView onDemoButtonClicked={handleDemoButtonClicked} />
          <ClientsView />
        </div>
        <CompanyExplanationView onDemoButtonClicked={handleDemoButtonClicked} />
        <ApiView onDemoButtonClicked={handleDemoButtonClicked} />
        <FeaturesView />
        <DemoPromptView onDemoButtonClicked={handleDemoButtonClicked} />
        <Footer />
      </div>
      {showModal && <DemoModal />}
    </div>
  );
}
