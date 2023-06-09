"use client";

import { Heart } from "lucide-react";

import IconButton from "./icon-button";

const FavoriteButton = () => {
  return ( 
    <IconButton icon={<Heart size={20} color="red" fill="red" />} />
  );
}
 
export default FavoriteButton;