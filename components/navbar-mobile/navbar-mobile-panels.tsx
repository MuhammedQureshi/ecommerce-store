import { Fragment } from "react";
import { Tab } from "@headlessui/react";

import { navigation } from "@/constants";

import NavbarMobilePanelFeatured from "./navbar-mobile-panel-featured";
import NavbarMobilePanelSections from "./navbar-mobile-panel-sections";

const NavbarMobilePanels = () => {
  return ( 
    <Tab.Panels as={Fragment}>
      {navigation.categories.map((category) => (
        <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
          <NavbarMobilePanelFeatured category={category} />
          <NavbarMobilePanelSections category={category} />
        </Tab.Panel>
      ))}
    </Tab.Panels>
  );
}
 
export default NavbarMobilePanels;
