import { reviews } from "@/constants";
import { cn } from "@/libs/utils";
import { Star } from "lucide-react";

const ReviewList = () => {
  return ( 
    <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
      <div className="flow-root">
        <div className="-my-12 divide-y divide-gray-200">
          {reviews.featured.map((review) => (
            <div key={review.id} className="py-12">
              <div className="flex items-center">
                <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">{review.author}</h4>
                  <div className="mt-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={cn(
                          'h-5 w-5 flex-shrink-0',
                          review.rating > rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300',
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="mt-4 space-y-6 text-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: review.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default ReviewList;