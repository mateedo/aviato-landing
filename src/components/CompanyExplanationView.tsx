type CompanyExplanationViewProps = {
  onDemoButtonClicked: (e: any) => void,
};

const CompanyExplanationView: React.FC<CompanyExplanationViewProps> = ({ onDemoButtonClicked }) => {
  return (
    <div className="bg-green-300 p-16">
      <h1>What is Aviato?</h1>
      <p>The most comprehensive view on private markets there is, made accessible to you</p>
      <ul>
        <li>Save hundreds of hours on research</li>
        <li>Be the first to find top talent & founders</li>
        <li>Track your portfolio in one place</li>
      </ul>
      <button className="w-fit h-fit p-4 bg-black text-white" onClick={onDemoButtonClicked}>Try it</button>
    </div>
  );
};

export default CompanyExplanationView;
