"use client"
import { useEffect } from 'react';
import '@styles/globals.css';
import Topnav from '@components/TopNav'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';




export const metadata = {
  title: 'O.C. Hexagon - Industrial Chemicals and Solutions',
  description: 'Your trusted partner for industrial chemicals, equipment, and laboratory items.',
  siteUrl: 'https://ochexagon.com',
  author: 'Kwaghuter Raphael',
};

export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <Topnav />
        <Nav/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
