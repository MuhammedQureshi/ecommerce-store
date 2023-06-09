import { Menu } from "lucide-react";

interface NavbarMobileButton {
  onClick: () => void;
}

const NavbarMobileButton: React.FC<NavbarMobileButton> = ({
  onClick
}) => {
  return ( 
    <button
      type="button"
      className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
      onClick={onClick}
    >
      <Menu className="h-6 w-6" />
    </button>
  );
}
 
export default NavbarMobileButton;
