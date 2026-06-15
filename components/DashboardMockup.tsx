"use client";

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardCheck,
  BarChart3,
  Bell,
} from "lucide-react";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Students",
    value: "1,482",
    icon: GraduationCap,
  },
  {
    title: "Attendance",
    value: "94.7%",
    icon: ClipboardCheck,
  },
  {
    title: "Results Uploaded",
    value: "341",
    icon: BarChart3,
  },
  {
    title: "Teachers",
    value: "58",
    icon: Users,
  },
];

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      mt-20
      w-full
      max-w-6xl
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white
      shadow-[0_40px_100px_rgba(0,0,0,0.25)]
      "
    >
      <div className="grid lg:grid-cols-[260px_1fr]">
        {/* SIDEBAR */}
        <aside className="bg-[#0A1F44] p-6 text-white">
          <h3 className="mb-8 text-xl font-bold">
            Dashboard
          </h3>

          <div className="space-y-3">
            <SidebarItem
              icon={<LayoutDashboard />}
              text="Overview"
            />
            <SidebarItem
              icon={<GraduationCap />}
              text="Students"
            />
            <SidebarItem
              icon={<Users />}
              text="Teachers"
            />
            <SidebarItem
              icon={<ClipboardCheck />}
              text="Attendance"
            />
            <SidebarItem
              icon={<BarChart3 />}
              text="Results"
            />
            <SidebarItem
              icon={<Bell />}
              text="Notifications"
            />
          </div>
        </aside>

        {/* CONTENT */}
        <main className="p-6 md:p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                School Overview
              </h2>

              <p className="text-slate-500">
                Welcome back Admin
              </p>
            </div>

            <div className="h-12 w-12 rounded-full bg-orange-100" />
          </div>

          {/* CARDS */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon size={24} />
                  </div>

                  <h4 className="text-sm text-slate-500">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-3xl font-bold">
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CHARTS */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-6 font-bold">
                Attendance Trend
              </h3>

              <div className="flex h-56 items-end gap-4">
                {[60, 80, 70, 90, 75, 95, 85].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height,
                      }}
                      transition={{
                        delay: index * 0.1,
                      }}
                      className="flex-1 rounded-t-lg bg-blue-500"
                    />
                  )
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-6 font-bold">
                Performance
              </h3>

              <div className="flex items-center justify-center">
                <div
                  className="
                  flex
                  h-48
                  w-48
                  items-center
                  justify-center
                  rounded-full
                  border-[18px]
                  border-orange-500
                  "
                >
                  <div className="text-center">
                    <h4 className="text-4xl font-black">
                      98%
                    </h4>

                    <p className="text-slate-500">
                      Success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-left">
                    Student
                  </th>
                  <th className="p-4 text-left">
                    Class
                  </th>
                  <th className="p-4 text-left">
                    Result
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    name: "David Johnson",
                    class: "JSS 2",
                    score: "92%",
                  },
                  {
                    name: "Sarah Paul",
                    class: "SSS 1",
                    score: "89%",
                  },
                  {
                    name: "Michael Obi",
                    class: "Primary 6",
                    score: "95%",
                  },
                ].map((student) => (
                  <tr
                    key={student.name}
                    className="border-t"
                  >
                    <td className="p-4">
                      {student.name}
                    </td>

                    <td className="p-4">
                      {student.class}
                    </td>

                    <td className="p-4 font-semibold text-green-600">
                      {student.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

function SidebarItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div
      className="
      flex
      cursor-pointer
      items-center
      gap-3
      rounded-xl
      p-3
      transition
      hover:bg-white/10
      "
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}