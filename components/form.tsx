"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

import Button from "@/components/button";
import ColorPicker from "@/components/color-picker";
import SizePicker from "@/components/size-picker";

interface FormProps {
  product: Record<string, any>;
}

const Form: React.FC<FormProps> = ({
  product,
}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return ( 
    <div>
      <div className="flex flex-col gap-y-10">
        <ColorPicker 
          colors={product.colors} 
          onChange={(color: any) => setSelectedColor(color)} 
          selectedColor={selectedColor}
        />

        <SizePicker 
          sizes={product.sizes} 
          onChange={(size: any) => setSelectedSize(size)} 
          selectedSize={selectedSize}
        />
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
        <Button className="bg-white text-black border border-black flex items-center gap-x-2">
          Favorite
          <Heart size={20} />
        </Button>
      </div>
    </div>
   );
}
 
export default Form;
