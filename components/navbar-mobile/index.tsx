import { Dialog, Tab, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { Fragment } from "react";

import NavbarMobileMenu from "./navbar-mobile-menu";
import NavbarMobilePanels from "./navbar-mobile-panels";
import IconButton from "../icon-button";

interface NavbarMobileProps {
  open: boolean;
  onClose: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  open,
  onClose
}) => {
  return (
    <Transition show={open} as={Fragment} appear>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        {/* Background Opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="pl-4 pt-3">
                <IconButton icon={<X size={15} />} onClick={onClose} />
              </div>

              {/* Menu & Panels */}
              <Tab.Group as="div" className="mt-2">
                <NavbarMobileMenu />
                <NavbarMobilePanels />
              </Tab.Group>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
   );
}
 
export default NavbarMobile;