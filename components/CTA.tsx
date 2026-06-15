"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-[#0A1F44] py-28">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
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
          className="
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          p-12
          text-center
          backdrop-blur-xl
          "
        >
          <h2 className="text-4xl font-black text-white md:text-6xl">
            Ready To Transform
            Your School?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Join schools across Nigeria already
            simplifying administration with
            ISTRACK.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button onClick={() => window.location.href = "/#contact"}  className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600">
              Book Free Demo
            </button>

            <button onClick={() => window.location.href = "/#contact"} className="rounded-xl border border-white/20 px-8 py-4 text-white hover:bg-white/10">
              Contact Sales
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}