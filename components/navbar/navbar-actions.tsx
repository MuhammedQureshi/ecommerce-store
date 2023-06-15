"use client";

import Link from "next/link";
import { OrganizationSwitcher, UserButton, useUser } from "@clerk/nextjs";
import { ShoppingBag, User } from "lucide-react";
import { useRouter } from "next/navigation";

import Button from "../button";

const NavbarActions = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();

  const showUser = isLoaded && isSignedIn;

  return ( 
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
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