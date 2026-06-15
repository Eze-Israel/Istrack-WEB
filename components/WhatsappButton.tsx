"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/2349052041491"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-[999]
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-full
      bg-green-500
      text-white
      shadow-2xl
      transition-all
      duration-300
      hover:scale-110
      "
    >
      <MessageCircle size={30} />
    </a>
  );
}