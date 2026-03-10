"use client";

import { motion } from "framer-motion";

import TutorCard, { Tutor } from "@/components/modules/homepage/tutorCard";
import { useEffect, useState } from "react";
import { getAlltutor } from "@/service/tutor/tutor.service";

export default function Tutors() {
  const [tutors, setTutors] = useState<Tutor[]>([]);

  useEffect(() => {
    async function loadTutors() {
      const { data } = await getAlltutor({
        // cache: "no-store",
      });
      setTutors(data?.data || []);
    }

    loadTutors();
  }, []);
  // console.log(tutors)
  // Duplicate array for smooth infinite effect
  const scrollingTutors = [...tutors, ...tutors];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-indigo-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
             Meet Our All Available Teacher
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Handpicked educators trusted by hundreds of students.
            Learn from the best and accelerate your success.
          </p>
        </div>

        {/* Animated Row */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {scrollingTutors.map((tutor, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px]"
              >
                <TutorCard tutor={tutor} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}