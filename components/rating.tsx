import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  total: number;
}

const Rating: React.FC<RatingProps> = ({
  value,
  total
}) => {
  return ( 
    <div className="flex items-center text-sm gap-x-1 text-gray-500">
      <Star size={15} fill="#FFB547" color="#FFB547" />
      <p>{value.toFixed(1)}</p>
      <p>{`(${total} Reviews)`}</p>
    </div>
  );
}
 
export default Rating;
