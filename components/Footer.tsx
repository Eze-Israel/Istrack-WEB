import {

  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#081730] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* COMPANY */}
          <div>
            <h2 className="text-3xl font-black">
              IS
              <span className="text-orange-500">
                TRACK
              </span>
            </h2>

            <p className="mt-6 text-white/70">
              Intelligent School Tracking &
              Management Platform built for
              modern institutions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Quick Links
            </h3>

            <div className="space-y-3 text-white/70">
              <a
                href="#features"
                className="block"
              >
                Features
              </a>

              <a
                href="#pricing"
                className="block"
              >
                Pricing
              </a>

              <a
                href="#schools"
                className="block"
              >
                Schools
              </a>

              <a
                href="#contact"
                className="block"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="mt-1 text-orange-500"
                />
                <span className="text-white/70">
                  09052041491
                </span>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="mt-1 text-orange-500"
                />
                <span className="text-white/70">
                  info@istrack.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-orange-500"
                />
                <span className="text-white/70">
                  Nigeria
                </span>
              </div>

            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Follow Us
            </h3>

            <div className="flex gap-4">
              

            

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-white/50">
          © {new Date().getFullYear()} ISTRACK.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}