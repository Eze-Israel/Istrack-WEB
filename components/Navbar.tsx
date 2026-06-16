"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Schools", href: "#schools" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1F44]/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/">
          <h1 className="text-3xl font-black tracking-tight text-white">
            IS
            <span className="text-orange-500">
              TRACK
            </span>
          </h1>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="rounded-xl border border-white/20 px-5 py-3 text-white">
            Login
          </button>

          <button className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
            Get Started
          </button>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{opacity: 0, y: -20,}} animate={{opacity: 1, y: 0,}}exit={{opacity: 0,y: -20,}}
            className="border-t border-white/10 bg-[#0A1F44]"
          >
            <div className="flex flex-col gap-4 p-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}