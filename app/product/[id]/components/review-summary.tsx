import { Star } from "lucide-react";

import { cn } from "@/libs/utils";
import { reviews } from "@/constants";

const ReviewSummary = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          265 Reviews
        </h2>
        <div className="flex items-center gap-x-2">
          <Star className="fill-yellow-400 text-yellow-400" />
          <p className="font-semibold text-lg">4.6</p>
        </div>
      </div>
    </div>
   );
}
 
export default ReviewSummary;