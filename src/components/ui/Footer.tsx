const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Acme Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
