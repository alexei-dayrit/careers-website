import React, { useState } from 'react';

const formValues = {
  name: '',
  email: '',
  linkedIn: ''
};

const JobForm = () => {
  const [values, setValues] = useState(formValues);
  const [appSent, setAppSent] = useState(false);
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const placeholderNum = 1;

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/job/${placeholderNum}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          linkedIn: values.linkedIn
        })
      });
      if (response.ok) {
        setAppSent(true);
      } else {
        setDisplayErrorMessage(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='fixed inset-0 right-1/4 md:right-3/4
    text-white bg-black/20 backdrop-blur-lg gap-8'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center min-h-full justify-center'>
        {displayErrorMessage &&
          <p className='text-red-500 text-xl text-center mb-6'>
            <span className='uppercase'>Error:</span> Failed to send Application
          </p>
        }

        <h1 className={`${!appSent ? 'text-red-300' : 'text-green-500 uppercase'} text-xl font-medium pb-2`} >
          {!appSent ? 'Apply to:' : 'Applied'}
        </h1>
        <h2 className='text-xl italic py-4'>
          SAMPLE Job Title
        </h2>

        <input type="text" name='name' placeholder='Your Name' onChange={handleChange} value={values.name}
          className='border-2 border-gray-200 px-3 py-3 text-gray-700 bg-white mb-2
                      rounded text-sm shadow focus:outline-none focus:ring-2 ring-sky-600
                      w-3/4 border-opacity-50'
        />
        <input type="email" name='email' placeholder='Your email' onChange={handleChange} value={values.email}
          className='border-2 border-gray-200 px-3 py-3 text-gray-700 bg-white mb-2
                    rounded text-sm shadow focus:outline-none focus:ring-2 ring-sky-600
                     w-3/4 border-opacity-50'
        />
        <input type="text" name='linkedIn' placeholder='Your LinkedIn URL' onChange={handleChange} value={values.linkedIn}
          className='border-2 border-gray-200 px-3 py-3 text-gray-700 bg-white mb-2
                    rounded text-sm shadow focus:outline-none focus:ring-2 ring-sky-600
                    w-3/4 border-opacity-50'
        />
        <input type="submit" className='hover:text-blue-300'/>
      </form>
    </div>
  );
};

export default JobForm;
