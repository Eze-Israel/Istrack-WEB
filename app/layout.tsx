import type { Metadata } from "next";
import "./globals.css";

import {
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "ISTRACK",
  description:
    "Intelligent School Tracking & Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jakarta.variable}`}
      >
        {children}
      </body>
    </html>
  );
}