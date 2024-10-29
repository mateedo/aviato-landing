const Footer: React.FC<unknown> = () => {
  return (
    <div className="p-8 bg-green-900 text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <h1 className="text-lg font-bold mb-4">Company</h1>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">X/Twitter</a></li>
          <li><a href="#" className="hover:underline">LinkedIn</a></li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center md:items-end">
        <div className="flex space-x-6 mb-4">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <p className="text-sm">© Aviato 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;