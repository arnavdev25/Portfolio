import React, { useEffect, useState } from 'react';
import style from "./About.module.css"

import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='#'>
          <img src="https://media.istockphoto.com/vectors/letter-m-vector-line-logo-design-creative-minimalism-logotype-icon-vector-id1125290347?k=6&m=1125290347&s=170667a&w=0&h=GFmAhf1ESphyTYwzQqy5Em2hOVRgIVUXk_L-8hBS2EY=" alt='' className={style.logo} />
          {/* <h3>Muskan</h3> */}
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
         
        </div>
      </div>
    </header>
  );
};

export default Header;
