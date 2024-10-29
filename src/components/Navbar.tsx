import React from 'react';
import Logo from "./Logo";

type NavbarProps = {
  onDemoButtonClicked: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onDemoButtonClicked }) => {
  return (
    <nav className="w-full bg-[#043E3D]">
      <div className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-8">
          <a 
            href="#" 
            className="text-white text-base hover:text-gray-200 transition-colors"
          >
            Sign in
          </a>
          <button
            onClick={onDemoButtonClicked}
            className="px-5 py-2.5 bg-[#D6FF3C] hover:bg-[#c1e635] text-base text-black rounded transition-colors"
          >
            Get a demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;