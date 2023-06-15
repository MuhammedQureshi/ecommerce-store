import Billboard from "@/components/billboard";
import Container from "@/components/container";
import ProductList from "@/components/product-list";
import { lists } from "@/constants";

export default function Home() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          title="Exclusive Collection For Everyone" 
          actionLabel="Check It Out" 
          backgroundColor="#f7f0ea"
          imageUrl="/billboard-bg-2.png"
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList key={lists[0].title} title={lists[0].title} items={lists[0].items} />
        </div>
        <Billboard 
          title="Explore Our New Arrivals" 
          actionLabel="Explore Now" 
          backgroundColor="#A3DCFF"
          imageUrl="/billboard-bg-3.png"
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList key={lists[1].title} title={lists[1].title} items={lists[1].items} />
        </div>
      </div>
    </Container>
  )
}
