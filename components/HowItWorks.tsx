"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Settings,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your School",
    description:
      "Register your school and setup your institution profile in minutes.",
  },

  {
    icon: Settings,
    title: "Configure Operations",
    description:
      "Add classes, students, teachers and customize your workflow.",
  },

  {
    icon: BarChart3,
    title: "Manage Efficiently",
    description:
      "Track attendance, results, fees and communication from one dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-medium
            text-blue-600
            "
          >
            How It Works
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
            Get Started In Three Simple Steps
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Launch your digital school
            management system faster than
            ever before.
          </p>
        </div>

        <div className="relative mt-20">

          <div
            className="
            absolute
            left-1/2
            top-12
            hidden
            h-1
            w-[65%]
            -translate-x-1/2
            bg-orange-200
            lg:block
            "
          />

          <div className="grid gap-12 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 40,
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
                  className="relative text-center"
                >
                  <div
                    className="
                    mx-auto
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0A1F44]
                    text-white
                    shadow-xl
                    "
                  >
                    <Icon size={38} />
                  </div>

                  <div
                    className="
                    absolute
                    top-0
                    right-1/2
                    flex
                    h-10
                    w-10
                    translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-500
                    text-sm
                    font-bold
                    text-white
                    "
                  >
                    {index + 1}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#0A1F44]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}