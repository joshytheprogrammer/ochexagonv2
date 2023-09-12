"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@assets/logo.svg'
import { useState, useEffect } from 'react';


const Nav = () => {
  const pathname = usePathname();

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
    <div className="lg:px-24 md:px-16 px-8 md:py-8 py-4 flex justify-between items-center relative ">
      <Link href='/' className="flex items-center">
        <Image
        src={logo}
        alt="Logo"
        className="mr-2 sm:w-48 w-40 h-auto" 
        />
        <span className="text-4xl font-extrabold font text-primary xl:block hidden">O.C HEXAGON</span>
      </Link>

    {/* -----------------------Desktop Links---------------------------- */}

      <div className="lg:flex items-center  font text-lg hidden">
        <Link href='/' className={`py-1 px-3 relative hover:border-blue-800 hover:border-b-[2.5px] hover:text-blue-900  transition duration-500 ${pathname == "/" ? "border-blue-800 border-b-[2.5px]" : ""}`}>
          Home
        </Link>

        <Link href='/about' className={`ml-6 py-1 px-3 relative hover:border-blue-800 hover:border-b-[2.5px] hover:text-blue-900  transition duration-500 ${pathname == "/about" ? "border-blue-800 border-b-[2.5px]" : ""}`}>
          About
        </Link>
        <Link href='/blog' className={`ml-6 py-1 px-3 relative hover:border-blue-800 hover:border-b-[2.5px] hover:text-blue-900  transition duration-500 ${pathname == "/blog" ? "border-blue-800 border-b-[2.5px]" : ""}`}>
          Blog
        </Link>
        <Link href='/contact' className={`ml-6 py-2 px-5 border-primary rounded-[24px] hover:text-white hover:bg-blue-900 transition duration-500 ${pathname == "/contact" ? "bg-blue-900 text-white" : ""}`}>
          Contact us
        </Link>
      </div>

    {/* -------------------------------Mobile Links--------------------------- */}

      <div className='block lg:hidden font'>
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
          <Link href='/' className="py-3 my-1 w-full text-center">
            Home
          </Link>
          <Link href='/about' className="py-3 my-1 w-full text-center">
            About
          </Link>
          <Link href='/blog' className="py-3 my-1 w-full text-center">
            Blog
          </Link>
          <Link href='contact' className="py-3 my-1 w-full text-center">
            Contact us
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Nav