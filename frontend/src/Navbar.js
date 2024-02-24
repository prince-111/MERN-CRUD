import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

   const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side - Home, About, Search Box */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white text-lg font-bold">
              Logo
            </Link>
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/about" className="text-white">
              About
            </Link>
          </div>

          {/* Right Side - Profile/Login */}
          <div className="flex items-center space-x-4 me-4">
            {isLoggedIn ? (
              <Link to="/profile" className="text-white">
                Profile
              </Link>
            ) : (
              <Link to="/login" className="text-white">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar