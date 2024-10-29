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
    <div className="bg-[#9b0e8c] text-white p-4 md:p-8 mx-auto my-4 max-w-[90%] lg:max-w-[1400px] rounded-2xl">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Work wherever you work with our API
          </h1>
          <p className="text-md md:text-lg mb-4 leading-snug">
            Aviato connects seamlessly with top CRMs and tools. Powerful API enables an easy transition to data-driven choices, no process disruption.
          </p>
          <button
            className="w-fit h-fit px-5 py-2 bg-white text-purple-700 rounded-md"
            onClick={onDemoButtonClicked}
          >
            Try it
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0 space-x-3">
          <Image
            src={Img1}
            alt="Image1"
            className="rounded-full"
            height={120}
            width={96}
          />
          <Image
            src={Img2}
            alt="Image2"
            className="rounded-full"
            height={120}
            width={96}
          />
          <Image
            src={Img3}
            alt="Image3"
            className="rounded-full"
            height={120}
            width={96}
          />
          <Image
            src={Img4}
            alt="Image4"
            className="rounded-full"
            height={120}
            width={96}
          />
        </div>
      </div>
    </div>
  );
};

export default ApiView;