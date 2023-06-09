import Link from "next/link";

const NavbarLogo = () => {
  return ( 
    <div>
      <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
        <p className="font-bold text-xl">ADIDAS</p>
      </Link>
    </div>
   );
}
 
export default NavbarLogo;