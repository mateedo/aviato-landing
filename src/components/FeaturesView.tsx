type FeatureCardViewProps = {
  text: string;
};

const FeatureCardView: React.FC<FeatureCardViewProps> = ({ text }) => {
  return (
    <div className="bg-slate-300 rounded p-4">
      <h1>{text}</h1>
      <p>Visual here</p>
    </div>
  );
};

const FeaturesView: React.FC<{}> = () => {
  return (
    <div className="p-16">
      <h1>What we do</h1>
      <p>Powerful features and datasets for your analysis</p>
      <div className="columns-lg gap-8">
        <FeatureCardView text="Find top engineers"/>
        <FeatureCardView text="Get exclusive datapoints"/>
        <FeatureCardView text="Seamless integrations"/>
        <FeatureCardView text="Accurate employee vesting schedules"/>
        <FeatureCardView text="Company emails and contacts"/>
        <FeatureCardView text="Competitor Maps"/>
      </div>
    </div>
  );
};

export default FeaturesView;
