type ApiViewProps = {
  onDemoButtonClicked: (e: any) => void,
};

const ApiView: React.FC<ApiViewProps> = ({ onDemoButtonClicked }) => {
  return (
    <div className="bg-purple-300 p-16">
      <h1>Work wherever you work with our API</h1>
      <p>Aviato connects seamlessly with top CRMs and tools. Powerful API enables an easy transition to data-driven choices, no process disruption.</p>
      <button className="w-fit h-fit p-4 bg-black text-white" onClick={onDemoButtonClicked}>Try it</button>
    </div>
  );
};

export default ApiView;
