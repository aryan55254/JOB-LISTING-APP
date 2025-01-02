import React from "react";
import { NavLink , BrowserRouter } from "react-router-dom";

const Card = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row w-full h-auto">
      <div className="w-full md:w-1/2 bg-gradient-to-r from-white to to-blue-500 rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 h-auto m-2">
        <div className="p-4 h-auto flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-800">FOR JOB SEEKERS</h2>
          <p className="text-gray-600 mt-2">
            BROWSE THE JOBS AVAILABLE AND START YOUR CAREER
          </p>
       <BrowserRouter>
       <NavLink to='/alljobs'><button className="mt-4 px-4 py-2 w-full bg-white text-gray-800 font-bold rounded hover:bg-blue-500">
            FIND JOBS
          </button></NavLink>
       </BrowserRouter>   
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-gradient-to-r from-white to to-blue-500 rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 h-auto m-2">
        <div className="p-4 h-auto flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-800">FOR EMPLOYERS</h2>
          <p className="text-gray-600 mt-2">
            LIST YOUR JOBS AVAILABLE AND FIND THE BEST CANDIDATE
          </p>
        <BrowserRouter>
        <NavLink to='/addjobs'><button className="mt-4 px-4 py-2 w-auto bg-white text-gray-800 font-bold rounded hover:bg-blue-500">
            ADD JOBS
          </button></NavLink> 
        </BrowserRouter>
        
        </div>
      </div>
    </div>
  </>
  

  );
};

export default Card;
