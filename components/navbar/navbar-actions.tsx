import { Search, ShoppingBag, User } from "lucide-react";

const NavbarActions = () => {
  return ( 
    <div className="ml-auto flex items-center gap-x-4">
        <div className="flex">
          <a href="#" className="p-2 text-black">
            <User size={20} />
          </a>
        </div>

        {/* Search */}
        <div className="flex">
          <a href="#" className="text-black">
            <Search size={20} />
          </a>
        </div>

        {/* Cart */}
        <button className="flex items-center rounded-full bg-black px-4 py-2">
          <ShoppingBag
            size={20}
            color="white"
          />
          <span className="ml-2 text-sm font-medium text-white">0</span>
        </button>
      </div>
   );
}
 
export default NavbarActions;