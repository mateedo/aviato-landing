import React from 'react';
import Image from "next/image"
import MerrilLynch from "../../public/merrill-lynch.png"
import Nea from "../../public/nea.png"
import Soma from "../../public/soma-capital.png"
import Uber from "../../public/uber.png"
const ClientsView: React.FC = () => {
  return (
    <div className="bg-gray-50 p-16">
      <h2 className="text-center text-2xl font-normal text-gray-500">
        Trusted by industry leading teams
      </h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-20 md:mt-10 mt-16 opacity-40">
        <svg className="h-10 w-24" viewBox="0 0 73 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.2169 13.7741C16.2329 12.7751 18.1155 10.2585 18.1155 7.16564C18.1155 3.70774 15.4837 0.000100815 9.72054 0.000100815C5.57106 -0.0191097 1.38316 2.43984 1.34474 7.12721C1.34474 9.95117 3.03527 12.4293 5.74395 13.582L6.24343 13.6972C2.43974 14.6962 0 17.5778 0 21.0164C0 24.7625 3.03527 28.7967 9.70133 28.7967C16.3866 28.7967 19.4411 24.7625 19.4411 21.0357C19.4411 17.5201 17.1166 14.8114 13.2169 13.7741ZM16.9437 7.12721C16.9437 10.1817 14.6961 13.2746 9.70133 13.2746C6.20501 13.2746 2.45895 11.3727 2.45895 7.18485C2.45895 3.01616 6.20501 1.13352 9.70133 1.13352C13.1976 1.0951 16.9437 2.97774 16.9437 7.12721ZM9.70133 14.3696C15.599 14.3696 18.2884 17.8467 18.2884 21.0549C18.2884 25.5886 13.8316 27.6633 9.70133 27.6633C3.80369 27.6633 1.11421 24.2438 1.11421 21.0549C1.11421 17.8467 3.80369 14.3696 9.70133 14.3696ZM33.7717 26.357L44.3951 1.34484H45.5862L34.1367 28.182H33.3683L21.938 1.34484H23.1675L33.7717 26.357ZM61.2431 28.6431C66.8718 28.6431 71.1557 25.4157 72.9615 22.342H71.732C70.9828 23.3794 67.5441 27.6633 61.2623 27.6633C54.1544 27.6633 48.4296 22.1883 48.4296 14.7538C48.4296 7.31936 54.1544 1.84435 61.2623 1.84435C67.1983 1.88277 70.7139 5.89778 71.732 7.31936H72.9999C71.0405 4.26488 66.9678 0.903034 61.2431 0.864613C53.5589 0.864613 47.3154 6.70462 47.3154 14.7538C47.3154 22.8031 53.5589 28.6431 61.2431 28.6431Z" fill="#000"></path>
        </svg>
        <Image src={Soma} alt="soma capital" className="h-[46px]"/>
        <Image src={Nea} alt="jpmorgan" className="h-[37px]"/>
        <Image src={Uber} alt="uber" className="h-[76px]"/>
        <Image src={MerrilLynch} alt="merrill lynch" className="h-[76px]"/>
      </div>
    </div>
  );
};

export default ClientsView;