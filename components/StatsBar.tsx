"use client";

import { motion } from "framer-motion";
import {
  School,
  Users,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: School,
    value: "10+",
    label: "Partner Schools",
  },
  {
    icon: Users,
    value: "15,000+",
    label: "Active Students",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    label: "Customer Satisfaction",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Support",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
          grid
          gap-6
          rounded-3xl
          bg-white
          p-8
          shadow-xl
          md:grid-cols-2
          lg:grid-cols-4
          "
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                whileHover={{
                  y: -5,
                }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-black text-[#0A1F44]">
                  {stat.value}
                </h3>

                <p className="mt-2 text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}