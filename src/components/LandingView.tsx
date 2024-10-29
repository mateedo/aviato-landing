type LandingViewProps = {
  onDemoButtonClicked: (e: any) => void,
};

const LandingView: React.FC<LandingViewProps> = ({ onDemoButtonClicked }) => {
  return (
    <div className="grid justify-center bg-green-800 text-white h-96">
      <h1 className="text-3xl">The analytical layer for private markets</h1>
      <p>Aviato turns data into deals by delivering high-quality people and company intelligence to your fingertips</p>
      <button className="w-fit h-fit p-4 bg-green-400 text-black" onClick={onDemoButtonClicked}>Book a demo</button>
    </div>
  );
};

export default LandingView;
