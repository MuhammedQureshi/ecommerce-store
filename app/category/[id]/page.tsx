"use client";

import { useState } from 'react'

import Container from '@/components/container';
import Billboard from '@/components/billboard';

import Filters from './components/filters';
import Results from './components/results';
import MobileToggle from './components/mobile-toggle';
import MobileFilters from './components/mobile-filters';

const Category = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <MobileFilters open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} />
      <Billboard 
        title="Explore The Men's Collection!" 
        backgroundColor="#f7f0ea"
        imageUrl="/billboard-bg-2.png"
      />
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-12 lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileToggle onClick={() => setMobileFiltersOpen(true)} />
          <Filters />
          <Results />
        </div>
      </Container>
    </div>
  );
};

export default Category;
