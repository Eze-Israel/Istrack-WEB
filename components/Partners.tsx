"use client";

import { schools } from "@/components/data/schools";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Partners() {
  return (
    <section
      id="schools"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Trusted Schools
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#0A1F44]">
            Schools Using ISTRACK
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Join a growing network of schools
            transforming their operations.
          </p>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
            }}
            loop
            spaceBetween={24}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              640: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {schools.map((school) => (
              <SwiperSlide key={school}>
                <div
                  className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-10
                  text-center
                  shadow-sm
                  "
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A1F44] text-xl font-black text-white">
                    {school.charAt(0)}
                  </div>

                  <h3 className="font-bold text-[#0A1F44]">
                    {school}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}