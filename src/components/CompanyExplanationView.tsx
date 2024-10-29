import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SS1 from "../../public/screenshot-1.png";
import SS2 from "../../public/screenshot-2.png";
import SS3 from "../../public/screenshot-3.png";

type CompanyExplanationViewProps = {
  onDemoButtonClicked: (e: any) => void,
};

const images = [SS1, SS2, SS3];

const CompanyExplanationView: React.FC<CompanyExplanationViewProps> = ({ onDemoButtonClicked }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white text-black p-6 md:p-12 flex flex-col md:flex-row justify-between items-start mx-auto my-6 max-w-[90%] lg:max-w-[1650px]"> {/* Match padding and width with ApiView */}
      <div className="mb-8 md:mb-0 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">What is Aviato?</h1>
        <p className="text-2xl mb-8 leading-snug">
          The most comprehensive view on private markets there is, made accessible to you
        </p>
        <ul className="text-lg space-y-4 mb-8">
          <li
            className={`cursor-pointer ${activeIndex === 0 ? 'font-bold' : 'text-gray-500'}`}
            onClick={() => handleItemClick(0)}
          >
            Save hundreds of hours on research
          </li>
          <li
            className={`cursor-pointer ${activeIndex === 1 ? 'font-bold' : 'text-gray-500'}`}
            onClick={() => handleItemClick(1)}
          >
            Be the first to find top talent &amp; founders
          </li>
          <li
            className={`cursor-pointer ${activeIndex === 2 ? 'font-bold' : 'text-gray-500'}`}
            onClick={() => handleItemClick(2)}
          >
            Track your portfolio in one place
          </li>
        </ul>
        <button
          className="w-fit h-fit px-6 py-3 bg-black text-white rounded-md"
          onClick={onDemoButtonClicked}
        >
          Try it
        </button>
      </div>
      <div className="md:w-1/2 relative overflow-hidden h-[400px]"> {/* Ensure image section height is appropriate */}
        {/* Render images with opacity control */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={image}
              alt={`Image ${index}`}
              layout="fill"
              objectFit="contain"  // Change to "contain" to see the full image
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyExplanationView;
