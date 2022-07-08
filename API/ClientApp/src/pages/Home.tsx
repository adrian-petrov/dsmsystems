import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { Partners } from '../components/Partners';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Testimonials />
      <Partners />
    </>
  );
};
