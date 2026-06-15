"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  BarChart3,
  Smartphone,
  Users,
  Globe,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security keeps school data safe and accessible.",
  },

  {
    icon: Clock3,
    title: "Save Time",
    description:
      "Automate attendance, reports, communication and administration.",
  },

  {
    icon: BarChart3,
    title: "Data Driven Decisions",
    description:
      "Gain insights into student performance and school operations.",
  },

  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Access your school dashboard from any device, anywhere.",
  },

  {
    icon: Users,
    title: "Parent Engagement",
    description:
      "Improve communication between school and parents.",
  },

  {
    icon: Globe,
    title: "Cloud Based",
    description:
      "No installation required. Access your data securely online.",
  },
];

export default function WhyIstrack() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
              Why Choose ISTRACK
            </span>

            <h2 className="mt-6 text-4xl font-black text-[#0A1F44] md:text-5xl">
              Built Specifically For Modern Schools
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              ISTRACK combines student management,
              attendance tracking, communication,
              finance management and reporting into
              one seamless platform.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Easy Setup & Onboarding",
                "Powerful Analytics Dashboard",
                "24/7 Support",
                "Automated School Operations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <ShieldCheck
                    size={22}
                    className="text-orange-500"
                  />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
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
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-[#0A1F44]">
                    {benefit.title}
                  </h3>

                  <p className="text-slate-600">
                    {benefit.description}
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