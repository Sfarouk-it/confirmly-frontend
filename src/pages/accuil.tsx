import { Link } from 'react-router-dom';

const Accuil = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                  Confimly
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to="/login"
                className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 bg-blue-100 hover:bg-blue-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Accuil;

