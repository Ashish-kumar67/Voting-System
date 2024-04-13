// HomePage.js
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8 p-8 bg-black rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-bold text-white">Welcome to Voting System</h2>
        <div className="flex justify-center mt-8 space-x-4">
          <Link
            to="/AdminPage"
            className=" text-white bg-gray-500 px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Admin Page
          </Link>
          <Link
            to="/VoterLogin"
            className=" text-white bg-gray-500 px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Voter Login Page
          </Link>
          <Link
            to="/VoterSignup"
            className=" text-white bg-gray-500 px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
             New Voter Signup Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
