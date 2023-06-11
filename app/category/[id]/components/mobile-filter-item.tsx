import { Disclosure } from "@headlessui/react";

import MobileFilterItemInput from "./mobile-filter-item-input";
import MobileFilterItemTitle from "./mobile-filter-item-title";

interface MobileFilterItemProps {
  section: Record<string, any>;
}

const MobileFilterItem: React.FC<MobileFilterItemProps> = ({
  section
}) => {
  return ( 
    <Disclosure as="div" className="border-t border-gray-200 pb-4 pt-4">
      {({ open }) => (
        <div>
          <MobileFilterItemTitle open={open} section={section} />
          <Disclosure.Panel className="px-4 pb-2 pt-4">
            <div className="space-y-6">
              {section.options.map((option: Record<string, any>) => (
                <MobileFilterItemInput 
                  key={option.value}
                  option={option} 
                  section={section}
                />
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
   );
}
 
export default MobileFilterItem;
