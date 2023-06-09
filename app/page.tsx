import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import { lists } from "@/constants";

export default function Home() {
  return (
    <div className="space-y-10 pb-10">
      <Billboard />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        {lists.map((productList) => (
          <ProductList key={productList.title} title={productList.title} items={productList.items} />
        ))}
      </div>
    </div>
  )
}
