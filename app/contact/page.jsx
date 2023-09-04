"use client";
import { useEffect } from "react";
import Contact from "@components/Contact";
import Map from "@components/Map";
import Jumbotron from "@components/Jumbotron";

import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div>
      <Jumbotron
        content="Contact Us"
        url="https://res.cloudinary.com/dsgvwxygr/image/upload/v1693116984/ochexagon/photo_2_2023-08-27_07-07-22_daeby4.jpg"
      />
      <Contact />
      <Map />
    </div>
  );
};

export default page;
