import React, { useState, useEffect } from 'react';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        const result = await response.json();
        setJobs(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className='min-h-screen bg-[#fafafa] py-6'>
      <div className='text-center'>
        <h1 className='text-4xl font-semibold pb-3'>Open Positions</h1>
        <p>Start a career with us!</p>
      </div>
      <div>
        {jobs.map(job =>
          <div key={job.jobId}>{job.title}</div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
