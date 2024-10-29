import Image, { StaticImageData } from "next/image";
import SS1 from "../../public/screenshot-1.png";
import card1 from "../../public/card1.png";
import card2 from "../../public/card2.png";
import card3 from "../../public/card3.png";
import card4 from "../../public/card4.png";
import card5 from "../../public/card5.png";
import card6 from "../../public/card6.png";

type FeatureCardViewProps = {
  text: string;
  image: StaticImageData;
};

const FeatureCardView: React.FC<FeatureCardViewProps> = ({ text, image }) => {
  return (
    <div className="bg-[#f6f6f6] shadow-sm rounded-md p-4 flex flex-col items-center w-full max-w-[95%] md:max-w-[95%]">
      <h2 className="text-xl font-semibold mb-4 text-black text-center">{text}</h2>
      <div className="w-full flex justify-center mb-2">
        <Image
          src={image}
          alt={text}
          className="rounded-md w-full h-auto max-w-[90%]"
        />
      </div>
    </div>
  );
};

const FeaturesView: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl max-w-[95%] mx-auto my-6">
      <h1 className="text-center uppercase text-gray-600 mb-4">What we do</h1>
      <p className="text-center text-3xl md:text-4xl font-bold mb-12 text-black">
        Powerful features and datasets for your analysis
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto justify-items-center">
        <FeatureCardView text="Find top engineers" image={card1} />
        <FeatureCardView text="Get exclusive datapoints" image={card2} />
        <FeatureCardView text="Seamless integrations" image={card3} />
        <FeatureCardView text="Accurate employee vesting schedules" image={card4} />
        <FeatureCardView text="Company emails and contacts" image={card5} />
        <FeatureCardView text="Competitor Maps" image={card6} />
      </div>
    </div>
  );
};

export default FeaturesView;