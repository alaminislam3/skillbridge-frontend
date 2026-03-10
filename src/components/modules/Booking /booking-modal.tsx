"use client";

import { createBooking } from "@/service/Booking/booking.service";
import { useState } from "react";


type Props = {
  tutorId: string;
};

export default function BookingModal({ tutorId }: Props) {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async () => {
    const payload = {
      tutorId,
      startDate,
      endDate,
    };

    const res = await createBooking(payload);

    console.log(res);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-indigo-600 px-8 py-3 text-white"
      >
        Book Session
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl w-[400px] space-y-4">

            <h2 className="text-xl font-semibold">Book Tutor</h2>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border p-2 w-full"
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border p-2 w-full"
            />

            <div className="flex gap-4">
              <button
                onClick={handleSubmit}
                className="bg-indigo-600 text-white px-4 py-2 rounded"
              >
                Confirm Booking
              </button>

              <button
                onClick={() => setOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}