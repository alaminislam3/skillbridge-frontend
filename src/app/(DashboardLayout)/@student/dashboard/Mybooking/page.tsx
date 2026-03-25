import { BookingData } from "@/app/Types/booking"
import ReviewForm from "@/components/modules/review/ReviewForm"
import { getAllBooking } from "@/service/Booking/booking.service"


const Mybookingpage = async () => {
  const { data } = await getAllBooking()
  console.log(data)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>

      <div className="grid gap-4">
        {data?.data.map((booking: BookingData) => (
          <div
            key={booking.id}
            className="border rounded-xl p-4 shadow-sm bg-white"
          >
            <p><span className="font-semibold">Booking ID:</span> {booking.id}</p>
            <p><span className="font-semibold">Total price:</span> {booking.totalPrice}</p>

            <p>
              <span className="font-semibold">Start Date:</span>{" "}
              {new Date(booking.startDate).toLocaleDateString()}
            </p>

            <p>
              <span className="font-semibold">End Date:</span>{" "}
              {new Date(booking.endDate).toLocaleDateString()}
            </p>

          {booking.status === "CONFIRMED" ? (
  booking.reviews ? (
    <p className="text-green-600 font-medium mt-2">
      Review already given ✅
    </p>
  ) : (
    <ReviewForm bookingId={booking.id} />
  )
) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mybookingpage