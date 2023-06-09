import ProductCard from "./product-card";

interface ProductListProps {
  title: string;
  items: Record<string, any>[]
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item: any) => (
          <ProductCard key={item.title} {...item} />
        ))}
      </div>
    </div>
   );
}
 
export default ProductList;