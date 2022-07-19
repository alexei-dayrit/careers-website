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
    <div className='sticky text-white bg-black opacity-90 top-0 w-full flex justify-between px-4 py-2 items-center'>

      <h1>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}
          className='flex justify-center items-center cursor-pointer'>
          <CompanyLogo alt='Company Logo' />
          <span className='text-lg font-medium pl-1'>Careers at React</span>
        </Link>
      </h1>

      <nav className='text-lg font-semibold'>
        <div className={`absolute right-6 top-8 scale-150 z-50 ${active ? 'block' : 'md:hidden'}`}>
          {!active
            ? <MenuOutlined onClick={showMenu} className='scale-125 cursor-pointer' />
            : <Close onClick={showMenu} className='text-red-500 scale-125 cursor-pointer' />
          }
        </div>

        <ul className={`md:flex gap-8
          ${(active
            ? `flex-col z-10 flex items-center justify-center fixed inset-0 gap-8
              left-1/3 uppercase text-white bg-black/40 backdrop-blur-lg p-8`
            : 'hidden')}
          `}>
          {navItems.map((item, index) => (
            <li key={index} className='cursor-pointer'>
              <Link to={item.link} smooth={true} offset={-80} duration={600}
                onClick={() => setActive(false)} spy={true}
                className='hover:text-gray-400 duration-400 block'>
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
