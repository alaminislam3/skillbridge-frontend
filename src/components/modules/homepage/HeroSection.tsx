"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Teacher from "../../../../public/teacher.jpg"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      {/* Decorative Blurs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
              🎓 Learn Smarter, Not Harder
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Connect with Expert Tutors,
              <span className="block text-indigo-600">
                Learn Anything
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              SkillBridge connects students with verified tutors for personalized
              learning. Book sessions instantly, learn at your pace, and grow
              your skills with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/register">
                <Button className="bg-indigo-600 px-8 py-6 text-base hover:bg-indigo-700">
                  Get Started
                </Button>
              </Link>

              <Link href="/tutors">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-base border-slate-300"
                >
                  Browse Tutors
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex items-center gap-8 text-sm text-slate-500">
              <div>
                <span className="font-semibold text-slate-900">500+</span> Tutors
              </div>
              <div>
                <span className="font-semibold text-slate-900">5k+</span>{" "}
                Students
              </div>
              <div>
                <span className="font-semibold text-slate-900">4.9★</span>{" "}
                Average Rating
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur">
              <div className="space-y-4">
                <Image src={Teacher} alt="Teacher image"/>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-indigo-100 p-4 text-center">
                    <p className="text-sm text-slate-600">Live Sessions</p>
                    <p className="text-xl font-bold text-indigo-600">1:1</p>
                  </div>
                  <div className="rounded-lg bg-emerald-100 p-4 text-center">
                    <p className="text-sm text-slate-600">Success Rate</p>
                    <p className="text-xl font-bold text-emerald-600">98%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-6 -top-6 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg">
              Trusted by learners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}