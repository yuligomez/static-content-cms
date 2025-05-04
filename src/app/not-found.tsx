const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <div className="flex items-center space-x-4 pl-6">
        <h1 className="text-4xl font-bold">404</h1>
        <div className="pl-6 border-l border-gray-300">
          <p className="text-lg">This page could not be found.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
