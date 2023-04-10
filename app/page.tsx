"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';

import Header from './partials/Header';
import PageIllustration from './partials/PageIllustration';
import HeroHome from './partials/HeroHome';
import FeaturesBlocks from './partials/FeaturesBlocks';
import FeaturesZigZag from './partials/FeaturesZigzag';
import Testimonials from './partials/Testimonials';
import Newsletter from './partials/Newsletter';
import Footer from './partials/Footer';

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesZigZag />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;