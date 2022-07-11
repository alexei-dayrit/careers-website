import React, { useState, useEffect } from 'react';
import JobForm from '../components/JobForm';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [active, setActive] = useState(false);
  const [selectedJob, setSelectedJob] = useState({ jobId: null, jobTitle: '' });

  const showForm = (jobId, jobTitle) => {
    setSelectedJob({ jobId: jobId, jobTitle: jobTitle });
    setActive(!active);
  };

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
    <>
      <div className='min-h-screen bg-[#fafafa] py-6' id='jobs'>
        <div className='text-center mb-10'>
          <h1 className='text-4xl font-semibold pb-3'>We&#39;re looking for talented individuals.</h1>
          <p className='text-xl'>Start a career with us!</p>
        </div>

        <div className='flex flex-wrap justify-center gap-x-14 gap-y-8'>
          {jobs.map(job =>
            <div key={job.jobId} onClick={() => { showForm(job.jobId, job.title); }}
              className='w-[40%] text-lg text-center cursor-pointer hover:border-b-2'>
              {/* {active &&
                <div>
                  <JobForm showForm={showForm} jobId={job.jobId} jobTitle={job.title} />
                </div>
              } */}
              <span className='italic'>{job.title}</span> - San Francisco (Full-Time)
            </div>
          )}
        </div>
      </div>
      {active && <JobForm showForm={showForm} selectedJob={selectedJob}/>}
    </>
  );
};

export default Jobs;
