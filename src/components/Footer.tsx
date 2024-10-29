const Footer: React.FC<{}> = () => {
  return (
    <div className="p-16 bg-green-900 text-white">
      <h1 className="text-lg">Company</h1>
      <ul>
        <li><a>Careers</a></li>
        <li><a>Contact</a></li>
        <li><a>X/Twitter</a></li>
        <li><a>LinkedIn</a></li>
      </ul>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a>Terms & Conditions</a>
        <a>Privacy Policy</a>
        <p>© Aviato 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
