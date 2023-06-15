"use client";

import { useState } from 'react'
import { Plus } from 'lucide-react';

import Container from '@/components/container';
import Billboard from '@/components/billboard';
import Button from '@/components/button';

import Filters from './components/filters';
import Results from './components/results';
import MobileFilters from './components/mobile-filters';

const Category = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <MobileFilters open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} />
      <Container>
        <Billboard 
          title="Explore The Men's Collection!" 
          backgroundColor="#f7f0ea"
          imageUrl="/billboard-bg-2.png"
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-12 lg:grid lg:grid-cols-5 lg:gap-x-8">
          <Button 
           onClick={() => setMobileFiltersOpen(true)}
           className="flex items-center gap-x-2 lg:hidden"
          >
            Filters
            <Plus size={20} />
          </Button>
          <Filters />
          <Results />
        </div>
      </Container>
    </div>
  );
};

export default Category;
