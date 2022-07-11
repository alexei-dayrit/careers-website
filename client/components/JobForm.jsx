import React, { useState } from 'react';

const JobForm = () => {
  return (
    <div className='fixed inset-0 right-1/4 md:right-3/4
    text-white bg-black/20 backdrop-blur-lg gap-8'>
      <form className='flex flex-col items-center min-h-full justify-center'>
        <h1 className='text-xl font-medium pb-2'>Apply to:</h1>
        <h2 className='text-lg italic pb-2'>SAMPLE Job Title</h2>
        <input type="text" id='name' placeholder='Your Name'
          className='border-2 border-gray-200 px-3 py-3 text-gray-700 bg-white mb-2
                      rounded text-sm shadow focus:outline-none focus:ring-2 ring-sky-600
                      w-3/4 border-opacity-50'
        />
        <input type="email" id='email' placeholder='Your email'
          className='border-2 border-gray-200 px-3 py-3 text-gray-700 bg-white mb-2
                    rounded text-sm shadow focus:outline-none focus:ring-2 ring-sky-600
                     w-3/4 border-opacity-50'
        />
        <input type="text" id='linkedIn' placeholder='Your LinkedIn URL'
          className='border-2 border-gray-200 px-3 py-3 text-gray-700 bg-white mb-2
                    rounded text-sm shadow focus:outline-none focus:ring-2 ring-sky-600
                    w-3/4 border-opacity-50'
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default JobForm;
