"use client";

import { testimonials } from "@/components/data/testimonials";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section
      className="bg-slate-50 py-28"
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* SECTION HEADER */}

        <div className="text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-orange-500">
            Testimonials
          </p>

          <h2 className="text-4xl font-black text-[#0A1F44] md:text-5xl">
            What Schools Are Saying
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Trusted by administrators,
            school owners and educators
            across Nigeria.
          </p>

        </div>

        {/* GRID */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {testimonials.map(
            (testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  boxShadow:
                    "0 20px 40px rgba(15,23,42,0.08)",
                }}
                className="
                rounded-[24px]
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                duration-300
                "
              >
                {/* STARS */}

                {/* <div className="mb-4 flex gap-1 text-orange-500">
                  {Array.from({
                    length: testimonial.stars,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                    />
                  ))}
                </div> */}
                <div
                  className="
                  mb-4
                  text-[14px]
                  tracking-[2px]
                  text-orange-500
                  "
                >
                  ★★★★★
                 </div>

                {/* TEXT */}

                <p
                  className="
                  mb-6
                  text-[14px]
                  italic
                  leading-[1.8]
                  text-slate-600
                  "
                >
                  "{testimonial.text}"
                </p>

                {/* AUTHOR */}

                <div className="flex items-center gap-3">

                  <div
                    className={`
                    flex
                    h-[42px]
                    w-[42px]
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-[14px]
                    font-bold
                    text-white
                    ${testimonial.color}
                    `}
                  >
                    {testimonial.initials}
                  </div>

                  <div>

                    <h4 className="text-[14px] font-bold text-[#0A1F44]">
                      {testimonial.name}
                    </h4>

                    <p className="text-[12px] text-slate-400">
                      {testimonial.role}
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