type DemoPromptViewProps = {
  onDemoButtonClicked: (e: any) => void,
};

const DemoPromptView: React.FC<DemoPromptViewProps> = ({ onDemoButtonClicked }) => {
  return (
    <div className="p-16 w-full grid justify-center justify-items-center gap-8">
      <h1 className="text-xl">Get the clearest picture of what's next in private markets</h1>
      <button className="text-lg bg-green-800 text-white w-fit h-fit p-8" onClick={onDemoButtonClicked}>Get a demo</button>
    </div>
  );
};

export default DemoPromptView;
