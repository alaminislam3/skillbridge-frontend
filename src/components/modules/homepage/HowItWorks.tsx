"use client";

import { motion } from "framer-motion";
import { BookOpen, Search, GraduationCap } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse Expert Tutors",
    description:
      "Search by subject, rating, and price to find the perfect tutor for your learning goals.",
    icon: Search,
  },
  {
    id: 2,
    title: "Book Instantly",
    description:
      "Check availability and schedule your session in just a few clicks -> no delays.",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Learn & Grow",
    description:
      "Attend your session, master new skills, and leave a review to help others.",
    icon: GraduationCap,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            🚀 How SkillBridge Works
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Start learning in three simple steps and unlock your potential today.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border bg-gradient-to-br from-white to-indigo-50 p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number */}
                <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold shadow-lg">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition-all group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}