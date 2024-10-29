import Logo from "./Logo";

type NavbarProps = {
  onDemoButtonClicked: (e: any) => void,
};

const Navbar: React.FC<NavbarProps> = ({ onDemoButtonClicked }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-green-800 text-white">
      <Logo/>
      <div className="flex gap-4">
        <a className="">Sign in</a>
        <button className="w-fit h-fit p-4 bg-green-400 text-black" onClick={onDemoButtonClicked}>Get a demo</button>
      </div>
    </div>
  );
};

export default Navbar;
