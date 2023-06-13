import { Dialog } from "@headlessui/react";

import { filters } from "@/constants";

import MobileFilterItem from "./mobile-filter-item";
import IconButton from "@/components/icon-button";
import { X } from "lucide-react";

interface MobileFiltersProps {
  open: boolean;
  onClose: () => void;
};

const MobileFilters: React.FC<MobileFiltersProps> = ({ open, onClose }) => {
  return ( 
    <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
      {/* Background Opacity */}
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      
      <div className="fixed inset-0 z-40 flex">
        <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <IconButton icon={<X size={15} />} onClick={onClose} />
          </div>

          {/* Filters */}
          <form className="mt-4">
            {filters.map((section) => (
              <MobileFilterItem 
                key={section.id} 
                section={section}
              />
            ))}
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
 
export default MobileFilters;
