
"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#0A1F44] md:text-5xl">
            What Schools Are Saying
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Trusted by administrators, teachers
            and school owners across Nigeria.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map(
            (testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                "
              >
                <Quote
                  size={40}
                  className="mb-6 text-orange-500"
                />

                <p className="leading-8 text-slate-600">
                  "{testimonial.quote}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0A1F44]
                    font-bold
                    text-white
                    "
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0A1F44]">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {testimonial.role}
                    </p>

                    <p className="text-sm text-orange-500">
                      {testimonial.school}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

      </div>
    </section>
  );
}