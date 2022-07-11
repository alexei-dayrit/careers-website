import React, { useState } from 'react';
import { Link } from 'react-scroll';
import CompanyLogo from './assets/company-logo';
import { MenuOutlined, Close } from '@material-ui/icons';

const navItems = [
  { name: 'About Us', link: 'about' },
  { name: 'Mission', link: 'mission' },
  { name: 'Values', link: 'values' },
  { name: 'Our Team', link: 'team' },
  { name: 'Jobs', link: 'jobs' }
];

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className='sticky bg-white top-0 w-full flex justify-between p-4 items-center'>

      <h1 className='flex justify-center items-center'>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
          <CompanyLogo alt='Company Logo' />
        </Link>
        <span className='text-lg font-medium pl-1'>Careers at React</span>
      </h1>

      <nav className='text-lg font-semibold'>
        <div className='absolute right-6 md:hidden top-8 scale-150'>
          <MenuOutlined onClick={showMenu} className='scale-125 cursor-pointer' />
        </div>

        <ul className={
          active
            ? 'flex-col flex items-center fixed inset-0 left-1/3 uppercase text-white bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden'
            : 'hidden md:flex gap-8'}>

          {active && <Close onClick={showMenu} className='text-red-700 z-50 scale-125 cursor-pointer' />}

          {navItems.map((item, index) => (
            <li key={index} className='cursor-pointer'>
              <Link to={item.link} smooth={true} offset={-75} duration={500}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
