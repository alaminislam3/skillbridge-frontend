"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="">
      {/* SAME container as other sections */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Inner box (design only) */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-10 md:p-16 shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Start Learning Without Limits
              </h2>
              <p className="text-white/90 text-lg max-w-xl">
                Connect with expert tutors, book sessions instantly, and achieve your goals faster with SkillBridge.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/tutors">
                <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
                  Find Tutors
                </button>
              </Link>

              <Link href="/register">
                <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition">
                  Become a Tutor
                </button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}