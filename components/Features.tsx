"use client";

import { motion } from "framer-motion";
import { features } from "@/components/data/features";

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
            rounded-full
            bg-orange-100
            px-4
            py-2
            text-sm
            font-medium
            text-orange-600
            "
          >
            Features
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-black
            text-[#0A1F44]
            md:text-5xl
            "
          >
            Everything You Need To Run
            A Modern School
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Powerful tools designed
            specifically for schools,
            administrators, teachers,
            students and parents.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                  delay: index * 0.1,
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
                transition
                "
              >
                <div
                  className="
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-orange-100
                  text-orange-500
                  "
                >
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-[#0A1F44]">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}