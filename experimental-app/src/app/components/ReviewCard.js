export default function ReviewCard({ review }) {
  return (
    <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[300px] h-[250px] bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {review.name}
        </h3>
        <p className="text-yellow-400 mb-2">{"⭐".repeat(review.rating)}</p>
        <p className="text-gray-600 h-[120px] overflow-auto">{review.review}</p>
      </div>
    </div>
  );
}
