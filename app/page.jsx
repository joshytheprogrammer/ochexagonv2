"use client"
import { useEffect } from 'react';
import Hero from '@components/Hero'
import What from '@components/What'
import Why from '@components/Why'
import HomeProducts from '@components/HomeProducts'
import Testimonials from '@components/Testimonials'
import Cta from '@components/Cta'

import AOS from 'aos';
import 'aos/dist/aos.css';

const page = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div>
      <Hero />
      <What />
      <Why />
      <HomeProducts />
      <Testimonials/>
      <Cta />
    </div>
  )
}

export default page