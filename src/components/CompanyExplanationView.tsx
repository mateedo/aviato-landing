import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SS1 from "../../public/screenshot-1.png";
import SS2 from "../../public/screenshot-2.png";
import SS3 from "../../public/screenshot-3.png";

type CompanyExplanationViewProps = {
  onDemoButtonClicked: (e: any) => void;
};

const images = [SS1, SS2, SS3];
const switchInterval = 5000; // 5 seconds

const CompanyExplanationView: React.FC<CompanyExplanationViewProps> = ({ onDemoButtonClicked }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0); // reset progress bar
    }, switchInterval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
    }, switchInterval / 100);
    return () => clearInterval(progressInterval);
  }, [activeIndex]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0); // reset progress bar on manual click
  };

  return (
    <div className="bg-white text-black p-6 md:p-12 mx-auto my-6 max-w-[90%] lg:max-w-[1400px]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="mb-8 md:mb-0 md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4">What is Aviato?</h1>
          <p className="text-4xl mb-8 leading-snug">
            The most comprehensive view on private markets there is, made accessible to you
          </p>
          <ul className="text-2xl space-y-4 mb-8">
            {[
              "Save hundreds of hours on research",
              "Be the first to find top talent & founders",
              "Track your portfolio in one place"
            ].map((text, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                className="cursor-pointer"
              >
                <div
                  className={`flex flex-col ${
                    activeIndex === index ? 'font-bold' : 'text-gray-500'
                  }`}
                >
                  <span>{text}</span>
                  {activeIndex === index && (
                    <div className="w-full bg-gray-200 rounded h-1 mt-2">
                      <div
                        className="bg-purple-700 h-full rounded transition-all duration-[5s]"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <button
            className="w-fit h-fit px-6 py-3 bg-black text-white rounded-md"
            onClick={onDemoButtonClicked}
          >
            Try it
          </button>
        </div>
        <div className="md:w-1/2 relative overflow-hidden h-[400px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Image ${index}`}
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyExplanationView;