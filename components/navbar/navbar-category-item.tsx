import { Popover } from "@headlessui/react";

import { cn } from "@/libs/utils";

interface NavbarCategoryItemProps {
  open: boolean;
  name: string;
};

const NavbarCategoryItem: React.FC<NavbarCategoryItemProps> = ({
  open,
  name
}) => {
  return ( 
    <div className="relative flex">
      <Popover.Button
        className={cn(
          'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition duration-200 ease-out outline-none focus:outline-none',
          open
            ? 'border-black text-black font-semibold'
            : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-black'
        )}
      >
        {name}
      </Popover.Button>
    </div>
   );
}
 
export default NavbarCategoryItem;