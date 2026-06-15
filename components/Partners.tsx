"use client";

import { schools } from "@/components/data/schools";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function Partners() {
  return (
    <section
      id="schools"
      className="bg-[#0A1F44] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* EYEBROW */}

        <div className="text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#FB923C]">
            Trusted By
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Partner Schools
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
            Schools across Nigeria trust
            ISTRACK to manage attendance,
            results, communication and
            administration.
          </p>

        </div>

        {/* SLIDER */}

        <div className="mt-16">

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={8}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              640: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },

              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {schools.map((school) => (
              <SwiperSlide key={school.name}>
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    m-2
                    cursor-default
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.06]
                    p-8
                    text-center
                    backdrop-blur-sm
                    transition-all
                  "
                >
                  {/* LOGO */}

                  <div
                    className={`
                    mx-auto
                    mb-4
                    flex
                    h-[60px]
                    w-[60px]
                    items-center
                    justify-center
                    rounded-full
                    text-[18px]
                    font-extrabold
                    text-white
                    ${school.color}
                    `}
                  >
                    {school.initials}
                  </div>

                  {/* SCHOOL NAME */}

                  <h3 className="mb-1 text-[15px] font-bold text-white">
                    {school.name}
                  </h3>

                  {/* LOCATION */}

                  <p className="text-[12px] text-white/45">
                    {school.location}
                  </p>

                  {/* BADGE */}

                  <span
                    className="
                    mt-3
                    inline-block
                    rounded-full
                    bg-orange-500/15
                    px-3
                    py-1
                    text-[11px]
                    font-semibold
                    text-[#FB923C]
                    "
                  >
                    {school.since}
                  </span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
}