"use client";

import { updateBookingStatus } from "@/service/Booking/booking.service";
import { useState } from "react";
import { toast } from "sonner";

const UpdateBookingStatus = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (status: string) => {
    try {
      setLoading(true);
      const res = await updateBookingStatus(id, status);
      console.log(res);
      toast.success("Status updated!");
      location.reload(); 
    } catch (err) {
      console.log(err);
      toast.error("update failed")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 mt-3">
      <button
        onClick={() => handleUpdate("CONFIRMED")}
        className="px-3 py-1 bg-green-500 text-white rounded"
        disabled={loading}
      >
        Confirm
      </button>

      <button
        onClick={() => handleUpdate("CANCELLED")}
        className="px-3 py-1 bg-red-500 text-white rounded"
        disabled={loading}
      >
        Cancel
      </button>
    </div>
  );
};

export default UpdateBookingStatus;