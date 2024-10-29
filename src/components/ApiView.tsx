import Image from "next/image";
import Img1 from "../../public/api-cta-1.png";
import Img2 from "../../public/api-cta-2.png";
import Img3 from "../../public/api-cta-3.png";
import Img4 from "../../public/api-cta-4.png";

type ApiViewProps = {
  onDemoButtonClicked: (e: any) => void;
};

const ApiView: React.FC<ApiViewProps> = ({ onDemoButtonClicked }) => {
  return (
    <div className="bg-[#9b0e8c] text-white p-4 md:p-8 rounded-2xl max-w-[90%] lg:max-w-[1600px] mx-auto my-4">
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Work wherever you work with our API
          </h1>
          <p className="text-md md:text-lg mb-4">
            Aviato connects seamlessly with top CRMs and tools. Powerful API enables an easy transition to data-driven choices, no process disruption.
          </p>
          <button
            className="px-4 py-2 bg-white text-purple-700 rounded-md text-md"
            onClick={onDemoButtonClicked}
          >
            Try it
          </button>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end mt-4 lg:mt-0 space-x-2">
          <Image src={Img1} alt="Image1" className="rounded-full" height={150} width={120}/>
          <Image src={Img2} alt="Image2" className="rounded-full" height={150} width={120}/>
          <Image src={Img3} alt="Image3" className="rounded-full" height={150} width={120}/>
          <Image src={Img4} alt="Image4" className="rounded-full" height={150} width={120}/>
        </div>
      </div>
    </div>
  );
};

export default ApiView;
