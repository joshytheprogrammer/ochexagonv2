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
    <div className="sm:px-24 sm:py-6 px-6 flex justify-between items-center relative">
      <Link href='/' className="flex items-center">
        <Image
        src={logo}
        alt="Logo"
        className="mr-2 sm:w-[90px] w-[50px] h-[50px]" 
        />
        <span className="text-[1.25rem] font-black font text-primary sm:block hidden">OCHEXAGON</span>
      </Link>

      {/* -------------------DESKTOP---------------- */}

      <div className="sm:flex font text-lg hidden">
        <Link href='/' className="mx-3 py-2 px-3">
          Home
        </Link>
        <Link href='/about' className="mx-3 py-2 px-3">
          About
        </Link>
        <Link href='/blog' className="mx-3 py-2 px-3">
          Blog
        </Link>
        <Link href='contact' className="mx-3 py-2 px-3 border-primary rounded-[24px]">
          Contact us
        </Link>
      </div>
      <hr className='h-[2px] absolute bottom-0 w-[1330px] hidden sm:block'/>


      {/* --------------------------------------MOBILE------------------------------------- */}
      <div className='block sm:hidden'>
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