import React from 'react';
import logo from '../assets/images/jplogo.jpg';
const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white px-4 py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo and Title */}
        <div className="flex items-center space-x-2">
          <img
            src={logo} 
            alt="Job Portal Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold">JOB PORTAL</span>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="space-x-6">
          <a
            href="#home"
            className="hover:text-gray-500 transition-colors"
          >
            HOME
          </a>
          <a
            href="#jobs"
            className="hover:text-gray-500 transition-colors"
          >
            JOBS
          </a>
          <a
            href="#add-jobs"
            className="hover:text-gray-500 transition-colors"
          >
            ADD JOBS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
