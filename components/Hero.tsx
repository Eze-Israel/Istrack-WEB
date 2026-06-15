import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1F44] pt-32 pb-24">
      {/* Blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
          absolute
          -right-40
          -top-32
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-500/10
          blur-3xl
          "
        />

        <div
          className="
          absolute
          -left-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-orange-500/10
          blur-3xl
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <div className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-300">
          Trusted by Schools Across Nigeria
        </div>

        <h1
          className="
          mx-auto
          mt-8
          max-w-5xl
          text-5xl
          font-black
          leading-tight
          text-white
          md:text-7xl
          "
        >
          The Smartest Way To Manage
          Your School
        </h1>

        <p
          className="
          mx-auto
          mt-6
          max-w-3xl
          text-lg
          text-white/70
          "
        >
          Attendance, results,
          communication, finance and
          administration — all in one
          powerful platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600">
            Start Free Trial
          </button>

          <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-md">
            Watch Demo
          </button>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}