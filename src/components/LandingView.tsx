import React from 'react';

type LandingViewProps = {
  onDemoButtonClicked: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const LandingView: React.FC<LandingViewProps> = ({ onDemoButtonClicked }) => {
  return (
    <div className="w-full bg-[#043E3D] rounded-b-[48px]">
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-normal leading-tight">
            The analytical layer for private markets
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Aviato turns data into deals by delivering high-quality people and company intelligence to your fingertips
          </p>
          <div className="flex justify-center">
            <button 
              className="px-5 py-2.5 mt-4 bg-[#D6FF3C] hover:bg-[#c1e635] text-base text-black rounded transition-colors"
              onClick={onDemoButtonClicked}
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingView;