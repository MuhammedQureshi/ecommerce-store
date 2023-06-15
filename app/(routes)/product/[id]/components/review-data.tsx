import { Star } from "lucide-react";

import { reviews } from "@/constants";
import { cn } from "@/libs/utils";

const ReviewData = () => {
  return (
    <div className="mt-6">
      <div className="space-y-3">
        {reviews.counts.map((count) => (
          <div key={count.rating} className="flex items-center text-sm">
            <dt className="flex flex-1 items-center">
              <div className="ml-1 flex flex-1 items-center">
                <Star
                  className={cn(
                    count.count > 0 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0'
                  )}
                />
                <p className="ml-2 w-3 font-semibold text-gray-900">
                  {count.rating}
                </p>

                <div className="relative ml-3 flex-1">
                  <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                  {count.count > 0 ? (
                    <div
                      className="absolute inset-y-0 rounded-full border border-black bg-black"
                      style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                    />
                  ) : null}
                </div>
              </div>
            </dt>
            <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-600">
              {Math.round((count.count / reviews.totalCount) * 100)}%
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default ReviewData;
