import IconButton  from "@/components/ui/icon-button";
import { X } from "lucide-react";

const CartItemAction = () => {
  return ( 
    <div className="mt-4 sm:mt-0 sm:pr-9">
      <select className="border rounded-md">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
      </select>

      <div className="absolute right-0 top-0">
        <IconButton icon={<X size={15} />} />
      </div>
    </div>
   );
}
 
export default CartItemAction;
