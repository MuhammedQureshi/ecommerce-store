import { Popover } from '@headlessui/react'

import { navigation } from '@/constants';

import NavbarCategoryItem from './navbar-category-item';
import NavbarCategoryPanel from './navbar-category-panel';

const NavbarMenu = () => {
  return (
    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-20">
      <div className="flex h-full space-x-8">
        {navigation.categories.map((category) => (
          <Popover key={category.name} className="flex">
            {({ open }) => (
              <>
                {/* Category Title */}
                <NavbarCategoryItem open={open} name={category.name} href={category.href} />
                {/* Category Popoup panel */}
                <NavbarCategoryPanel category={category} />
              </>
            )}
          </Popover>
        ))}
      </div>
    </Popover.Group>
  );
}
 
export default NavbarMenu;