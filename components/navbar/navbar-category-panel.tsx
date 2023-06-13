import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

import NavbarCategoryFeatured from "./navbar-category-featured";
import NavbarCategorySection from "./navbar-category-section";
import Container from "../container";

interface NavbarCategoryPanelProps {
  category: Record<string, any>;
}

const NavbarCategoryPanel: React.FC<NavbarCategoryPanelProps> = ({
  category
}) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
        {/* Add Shadow */}
        <div className="absolute inset-0 top-1/2 bg-white shadow" />

        <Container>
          <div className="relative bg-white px-8">
            {/* Create a Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
              {/* Create a Column */}
              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                {/* Iterate over featured items */}
                {category.featured.map((item: any) => (
                  <NavbarCategoryFeatured key={item.name} item={item} />
                ))}
              </div>
              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                {/* Iterate over sections */}
                {category.sections.map((section: any) => (
                  <NavbarCategorySection key={section.name} section={section} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Popover.Panel>
    </Transition>
   );
}

export default NavbarCategoryPanel;
