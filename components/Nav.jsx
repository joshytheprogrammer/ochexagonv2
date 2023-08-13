"use client"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@assets/logo.svg'
import { useState, useEffect } from 'react';

const Nav = () => {

  const [status, setStatus] = useState('');

  const handleClick = () => {
    setStatus(prevStatus => (prevStatus === '' ? 'active' : ''));
  };

  const closeMenu = (event) => {
    // Check if the click is outside the mobile menu and button
    if (!event.target.closest('.menu-button') && !event.target.closest('.mobile--links')) {
      setStatus('');
    }
  };

  useEffect(() => {
    // Add event listeners when the component mounts
    document.addEventListener('click', closeMenu);
    return () => {
      // Clean up event listeners when the component unmounts
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div className="lg:px-24 md:px-16 px-8 py-8 flex justify-between items-center relative w-full">
      <Link href='/' className="flex items-center">
        <Image
        src={logo}
        alt="Logo"
        className="mr-2 sm:w-[90px] w-[50px] h-auto" 
        />
        <span className="text-[1.25rem] font-black font text-primary sm:block hidden">OCHEXAGON</span>
      </Link>

    {/* -------------------DESKTOP---------------- */}

      <div className="lg:flex  font text-lg hidden">
        <Link href='/' className="ml-3 py-2 px-3">
          Home
        </Link>
        <Link href='/about' className="ml-3 py-2 px-3">
          About
        </Link>
        <Link href='/blog' className="ml-3 py-2 px-3">
          Blog
        </Link>
        <Link href='contact' className="ml-3 py-2 px-3 border-primary rounded-[24px]">
          Contact us
        </Link>
      </div>

      {/* --------------------------------------MOBILE------------------------------------- */}

      <div className='block lg:hidden'>
        
      {/* ----------------MENU---------------- */}

        <div>
          <button className="menu-button" onClick={handleClick} aria-label="Menu Button">
            <div className={`menu-icon-wrapper ${status}`}>
              <div className={`menu-icon-line half first ${status}`}></div>
              <div className="menu-icon-line"></div>
              <div className={`menu-icon-line half last ${status}`}></div>
            </div>
          </button>
        </div>

        <div className={`mobile--links ${status}`}>
          <Link href='/' className="py-3 my-1">
            Home
          </Link>
          <Link href='/about' className="py-3 my-1">
            About
          </Link>
          <Link href='/blog' className="py-3 my-1">
            Blog
          </Link>
          <Link href='contact' className="py-3 my-1">
            Contact us
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Nav