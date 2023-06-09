import ReviewSummary from './review-summary'
import ReviewData from './review-data'
import ReviewAdd from './review-add'
import ReviewList from './review-list'

const Reviews = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-4 rounded-xl p-4">
          <ReviewSummary />
          <ReviewData />
          <ReviewAdd />
        </div>
        <ReviewList />
      </div>
    </div>
  )
}

export default Reviews;

