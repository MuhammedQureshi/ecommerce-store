import { reviews } from "@/constants";

import ReviewBox from "./review-box";

const ReviewList = () => {
  return ( 
    <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
      <div className="flow-root">
        <div className="-my-12 divide-y divide-gray-200">
          {reviews.featured.map((review) => (
            <ReviewBox key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default ReviewList;
