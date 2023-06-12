"use client";

import { Expand, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "./currency";
import IconButton from "./icon-button";
import Rating from "./rating";
import usePreviewModal from "@/hooks/usePreviewModal";
import { MouseEventHandler } from "react";

interface ProductCard {
  title: string;
  price: number;
  rating: number;
  ratingCount: number;
  image: string;
}

const ProductCard: React.FC<ProductCard> = ({
  title,
  price,
  rating,
  ratingCount,
  image
}) => {
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push('/product/123');
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen();
  };
  
  return ( 
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & Favorite & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <img src={image} alt="" className="w-full transition translate" />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-2 justify-evenly">
            <IconButton icon={<Heart size={20} className="text-gray-600" />} />
            <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600" />} />
            <IconButton icon={<ShoppingCart size={20} className="text-gray-600" />} />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-bold text-lg">{title}</p>
        <p className="text-sm text-gray-500">Same manufacturer as </p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={price} />
        <Rating value={rating} total={ratingCount} />
      </div>
    </div>
  );
}
 
export default ProductCard;