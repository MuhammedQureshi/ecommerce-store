import ProductCard from "@/components/product-card";
import { lists } from "@/constants";

const Results = () => {
  return ( 
    <div className="mt-6 lg:col-span-4 lg:mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {lists[0].items.map((item: any) => (
          <ProductCard key={item.title} {...item} />
        ))}
      </div>
    </div>
   );
}
 
export default Results;
