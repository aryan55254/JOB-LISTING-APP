import React from 'react';
import jobsData from '../jobs.json'; 
function Jobscard() {
  const jobs = jobsData.jobs; 

  

  return (
    <section className="mt-6 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen py-6">
      <center>
        <h1 className="text-4xl text-blue-800 font-extrabold tracking-wide drop-shadow-md mb-8">
          BROWSE JOBS
        </h1>
      </center>
      
      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 p-4"
            >
              <h2 className="bg-gray-700 text-white text-sm font-semibold inline-block px-2 py-1 rounded-md">
                {job.type}
              </h2>
              <h1 className="text-2xl font-bold mt-3 mb-2">{job.title}</h1>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-indigo-500 font-semibold">{job.salary}</h3>
                <h3 className="text-red-500 font-semibold">{job.location}</h3>
              </div>
              <button className="bg-blue-600 text-white w-full py-2 rounded-md font-semibold hover:bg-blue-700">
                READ MORE
              </button>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Jobscard;
