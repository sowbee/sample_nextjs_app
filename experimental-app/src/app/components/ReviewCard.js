export default function ReviewCard({ review }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm text-center">
        <h4 className="font-bold mb-2">{review.name}</h4>
        <p className="mb-4 text-gray-700">{review.review}</p>
        <div className="text-yellow-500 text-xl">{'★'.repeat(review.rating)}</div>
      </div>
    );
  }
  