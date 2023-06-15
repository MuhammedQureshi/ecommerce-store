import { Star } from "lucide-react";

import { cn } from "@/libs/utils";

interface ReviewBoxProps {
  review: Record<string, any>;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({
  review
}) => {
  return ( 
    <div className="py-12">
      <div className="flex items-center">
        <img src={review.avatarSrc} className="h-12 w-12 rounded-full" />
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
  );
};
 
export default ReviewBox;
