type DemoPromptViewProps = {
  onDemoButtonClicked: (e: any) => void;
};

import aviatoLogo from "../../public/logo.jpg"
import Image from "next/image"
const DemoPromptView: React.FC<DemoPromptViewProps> = ({ onDemoButtonClicked }) => {
  return (
    <div className="p-16 w-full grid justify-center justify-items-center gap-6">

      <div className="bg-[#00463b] w-16 h-16 rounded-lg mb-8 flex items-center justify-center">
        <Image src={aviatoLogo} height={120} width={120} alt="Logo" className="rounded-full"/> 
      </div>

      <h1 className="text-6xl md:text-7xl font-bold text-center mb-4 mx-auto max-w-4xl text-black">
        Get the clearest picture of what's next in private markets
      </h1>

      <button
        className="text-2xl bg-green-800 text-white py-5 px-12 rounded-full hover:bg-green-700 transition duration-200"
        onClick={onDemoButtonClicked}
      >
        Get a demo
      </button>
    </div>
  );
};

export default DemoPromptView;