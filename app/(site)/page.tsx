'use client'

import Navbar from "./campus/components/Navbar-campus";
import Header from "./campus/components/Header";
import WhatToExpect from "./campus/components/WhatToExpect";
import ForSwissTalent from "./campus/components/ForSwissTalent";
import CampusPartners from "./campus/components/CampusPartners";
import SignUp from './campus/components/SignUp';
import FooterCampus from "./campus/components/FooterCampus";
import Faq from "./campus/components/Faq";
import Testimonials from "./campus/components/Testimonials";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import { motion } from "framer-motion";
import Parallax from "./components/Parallax";
import WhileInView from './components/WhileInView';
import Image from "next/image";


function handleWindowResize() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export default function Companies() {
  // useEffect(() => {

  //   {
  //     async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   }
  // })
  useEffect(() => {
    
    const lenis = new Lenis()

    const raf = (time: any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

    // Add event listener when the component mounts
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('load', handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('load', handleWindowResize);
      lenis.stop();
      lenis.destroy();
    };
  }, []);

  return (

    <div className="[--logo-display:block]">
      <Navbar />
      <Header />
      <WhatToExpect />
      <ForSwissTalent />
      <CampusPartners />
      <Faq />
      <Testimonials />
      <SignUp />
      <FooterCampus />
    </div>

  );
}