import CartItemAction from "./cart-item-action";
import CartItemInfo from "./cart-item-info";

interface CartItemProps {
  product: Record<string, any>;
}

const CartItem: React.FC<CartItemProps> = ({
  product
}) => {
  return ( 
    <li className="flex py-6">
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
      />

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <CartItemInfo product={product} />
          <CartItemAction />
        </div>
      </div>
    </li>
  );
}
 
export default CartItem;