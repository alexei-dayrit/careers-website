import React, { useState } from 'react';

const Navbar = () => {

  return (
    <div className='fixed w-full flex justify-between p-4 items-center'>

      {/* Logo */}
      <h1 className='text-lg font-medium text-center'>
        Careers at React
      </h1>

      <nav className='text-lg font-semibold p-6'>
        <ul className='md:flex gap-8 bg-white/10'>
          <li>About</li>
          <li>Mission</li>
          <li>Values</li>
          <li>Our Team</li>
          <li>Jobs</li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
