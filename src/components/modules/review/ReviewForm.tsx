"use client"

import { createReview } from "@/service/Review/review.service"
import { useState } from "react"
import { toast } from "sonner"


const ReviewForm = ({ bookingId }: {  bookingId : string }) => {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)

    const payload = {
      rating,
      comment,
      
      bookingId
    }
   console.log(payload)
    const res = await createReview(payload)

    setLoading(false)
    setComment("")

    if (res?.success) {
  toast.success("Review submitted ✅")
  setComment("")
} else {
  toast.error("Failed to submit review ❌")
}
  }

  return (
    <div className="mt-4 border-t pt-4">
      <h2 className="font-semibold mb-2">Give Review</h2>

      {/* Rating */}
      <select
        className="border p-2 rounded w-full mb-2"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>
            {r} Star
          </option>
        ))}
      </select>

      {/* Comment */}
      <textarea
        className="border p-2 rounded w-full mb-2"
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </div>
  )
}

export default ReviewForm