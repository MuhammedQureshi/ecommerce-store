import { Tab } from "@headlessui/react";

import { navigation } from "@/constants";
import { cn } from "@/libs/utils";

const NavbarMobileMenu = () => {
  return ( 
    <div className="border-b border-gray-200">
      <Tab.List className="-mb-px flex space-x-8 px-4">
        {navigation.categories.map((category) => (
          <Tab
            key={category.name}
            className={({ selected }) =>
              cn(
                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium',
                selected ? 'border-black text-black font-semibold' : 'border-transparent text-gray-700',
              )
            }
          >
            {category.name}
          </Tab>
        ))}
      </Tab.List>
    </div>
  );
}
 
export default NavbarMobileMenu;
