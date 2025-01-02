import React from 'react';
import jobsData from '../jobs.json';
import { useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

function Jobscard() {
  const jobs = jobsData.jobs.slice(0, 6);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleReadMore = (job) => {
    setSelectedJob(job);
  };

  const handleClose = () => {
    setSelectedJob(null);
  };

  return (
    <section className="mt-6 bg-gradient-to-b from-blue-50 to-blue-100 h-auto py-6">
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
            <button
              onClick={() => handleReadMore(job)}
              className="bg-blue-600 text-white w-full py-2 rounded-md font-semibold hover:bg-blue-700"
            >
              READ MORE
            </button>
          </div>
        ))}
      </div>

      <center>
       <BrowserRouter>
       <NavLink to='/alljobs'>
       <button className="rounded-sm w-full py-2 px-2 bg-blue-500 text-white font-bold hover:bg-blue-800 hover:text-black">
          SHOW ALL JOBS
        </button>
        </NavLink>
        </BrowserRouter> 
      </center>

      {selectedJob && (
        <div className="fixed inset-10 bg-black bg-opacity-0 z-40">
          <div className='fixed inset-10 flex justify-center items-center z-50'>
          <div
            key={selectedJob.id}
            className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 p-4"
          >
            <h2 className="bg-gray-700 text-white text-sm font-semibold inline-block px-2 py-1 rounded-md">
              {selectedJob.type}
            </h2>
            <h1 className="text-2xl font-bold mt-3 mb-2">{selectedJob.title}</h1>
            <p className="text-gray-600 mb-4">{selectedJob.description}</p>
            <p className="text-gray-600 mb-4">{selectedJob.company.name}</p>
            <p className="text-gray-600 mb-4">{selectedJob.company.description}</p>
            <p className="text-gray-600 mb-4">{selectedJob.company.contactPhone}</p>
            <p className="text-gray-600 mb-4">{selectedJob.company.contactEmail}</p>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-indigo-500 font-semibold">{selectedJob.salary}</h3>
              <h3 className="text-red-500 font-semibold">{selectedJob.location}</h3>
            </div>
            <button
              onClick={handleClose}
              className="bg-blue-600 text-white w-full py-2 rounded-md font-semibold hover:bg-blue-700"
            >
              CLOSE THIS
            </button>
          </div>
        </div>
        </div>
      )}
    </section>
  );
}

export default Jobscard;
