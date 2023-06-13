"use client";

import { useState } from 'react'
import { Menu } from 'lucide-react';

import NavbarMenu from './navbar-menu';
import NavbarActions from './navbar-actions';
import NavbarLogo from './navbar-logo';
import NavbarMobile from '../navbar-mobile';
import Container from '../container';
import IconButton from '../icon-button';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <Container>
        <div className="bg-white relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          {/* Mobile Navigation */}
          <NavbarMobile open={open} onClose={() => setOpen(false)} />
          {/* Mobile toggle menu button */}
          <IconButton 
            icon={<Menu size={15} />} 
            onClick={() => setOpen(true)}
            className="lg:hidden"
          />
          {/* Logo */}
          <NavbarLogo />
          {/* Menu */}
          <NavbarMenu />
          {/* Actions (Search, Cart, etc.) */}
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
