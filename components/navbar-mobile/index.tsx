import { Dialog, Tab } from "@headlessui/react";

import NavbarMobileClose from "./navbar-mobile-close";
import NavbarMobileMenu from "./navbar-mobile-menu";
import NavbarMobilePanels from "./navbar-mobile-panels";

interface NavbarMobileProps {
  open: boolean;
  onClose: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  open,
  onClose
}) => {
  return ( 
    <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
      {/* Background Opacity */}
      <div className="fixed inset-0 bg-black bg-opacity-25" />

      <div className="fixed inset-0 z-40 flex">
        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
          <NavbarMobileClose onClick={onClose} />

          {/* Menu & Panels */}
          <Tab.Group as="div" className="mt-2">
            <NavbarMobileMenu />
            <NavbarMobilePanels />
          </Tab.Group>
        </Dialog.Panel>
      </div>
    </Dialog>
   );
}
 
export default NavbarMobile;