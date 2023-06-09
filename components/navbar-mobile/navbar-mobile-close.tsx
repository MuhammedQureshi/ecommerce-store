import { X } from "lucide-react";

interface NavbarMobileCloseProps {
  onClick: () => void;
}

const NavbarMobileClose: React.FC<NavbarMobileCloseProps> = ({
  onClick
}) => {
  return ( 
    <div className="flex px-4 pb-2 pt-5">
      <button
        type="button"
        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
        onClick={onClick}
      >
        <span className="sr-only">Close menu</span>
        <X className="h-6 w-6" />
      </button>
    </div>
   );
}
 
export default NavbarMobileClose;