import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";

async function getData() {
  const res = await fetch('http://localhost:3000/api/cfdf18cb-ae85-4d73-9928-1ecdee198f48/categories')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
};

const Navbar = async () => {
  const data = await getData();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={data} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
