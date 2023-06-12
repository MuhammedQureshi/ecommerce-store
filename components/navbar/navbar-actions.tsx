"use client";

import { Search, ShoppingBag, User } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const NavbarActions = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const showUser = isLoaded && isSignedIn;

  return ( 
    <div className="ml-auto flex items-center gap-x-4">
      {/* Cart */}
      <button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </button>
      <div className="flex">
        {showUser 
          ? <UserButton afterSignOutUrl="/" />
          : <Link href="/sign-up"><User size={20} /></Link>
        }
      </div>
    </div>
  );
}
 
export default NavbarActions;