import { BookingData } from "@/app/Types/booking"
import UpdateBookingStatus from "@/components/modules/Booking /UpdateBookingStatus"
import { getAllBooking } from "@/service/Booking/booking.service"

const Mybookingpage = async () => {
  const { data } = await getAllBooking()

  // ✅ correct empty check
  if (!data?.data || data.data.length === 0) {
    return <p className="p-6">No booking found</p>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        My Upcoming Bookings
      </h1>

      <div className="grid gap-4">
        {data.data.map((booking: BookingData) => (
          <div
            key={booking.id}
            className="border rounded-xl p-4 shadow-sm bg-white"
          >
            <p>
              <span className="font-semibold">Booking ID:</span>{" "}
              {booking.id}
            </p>

            <p>
              <span className="font-semibold">Total price:</span>{" "}
              {booking.totalPrice}
            </p>

            <p>
              <span className="font-semibold">Start Date:</span>{" "}
              {new Date(booking.startDate).toLocaleString()}
            </p>

            <p>
              <span className="font-semibold">End Date:</span>{" "}
              {new Date(booking.endDate).toLocaleString()}
            </p>

            <p>
              <span className="font-semibold">Status:</span>{" "}
              {booking.status}
            </p>
             {
              booking.status == "CONFIRMED" ?    "" :  <UpdateBookingStatus id={booking.id} />
             }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mybookingpage