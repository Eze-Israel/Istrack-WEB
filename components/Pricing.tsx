"use client";

import { pricingPlans } from "@/components/data/pricing";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#0A1F44] md:text-5xl">
            Simple & Transparent Pricing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Choose the plan that best fits
            your institution.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {pricingPlans.map(
            (plan, index) => (
              <motion.div
                key={plan.name}
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
                whileHover={{
                  y: -10,
                }}
                className={`
                relative
                rounded-3xl
                border
                p-8
                shadow-sm
                ${
                  plan.popular
                    ? "border-orange-500 bg-[#0A1F44] text-white"
                    : "border-slate-200 bg-white"
                }
                `}
              >
                {plan.popular && (
                  <div
                    className="
                    absolute
                    right-6
                    top-6
                    rounded-full
                    bg-orange-500
                    px-4
                    py-1
                    text-xs
                    font-bold
                    text-white
                    "
                  >
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold">
                  {plan.name}
                </h3>

                <p
                  className={`mt-3 ${
                    plan.popular
                      ? "text-white/70"
                      : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-8">
                  <span className="text-5xl font-black">
                    {plan.price}
                  </span>

                  <span
                    className={`ml-2 ${
                      plan.popular
                        ? "text-white/70"
                        : "text-slate-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <div className="mt-10 space-y-4">
                  {plan.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <Check
                          size={18}
                          className="text-orange-500"
                        />

                        <span>{feature}</span>
                      </div>
                    )
                  )}
                </div>

                <button
                  className={`
                  mt-10
                  w-full
                  rounded-xl
                  py-4
                  font-semibold
                  transition
                  ${
                    plan.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-[#0A1F44] text-white hover:bg-[#112966]"
                  }
                  `}
                >
                  Get Started
                </button>
              </motion.div>
            )
          )}

        </div>
      </div>
    </section>
  );
}