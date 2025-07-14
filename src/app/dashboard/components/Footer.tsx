"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PlaceholdersAndVanishInput } from "../../../components/ui/placeholders-and-vanish-input";

const faqs = [
  "What's the delivery time?",
  "What is the minimum order quantity?",
  "How can I return a product?",
  "How are products packaged?",
  "How are invoices processed?",
];

export default function FAQAndFooter() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (query.trim() !== "") {
      router.push("/dashboard/faq");
    }
  };

  return (
    <footer className="relative bg-zinc-900 text-zinc-100 p-10 sm:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Location */}
        <section className="flex-1 min-w-[250px]">
          <h2 className="text-orange-500 text-3xl font-bold mb-6">
            Our Location
          </h2>
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.1148400508346!2d4.866302015712041!3d52.36535047978801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60905104f59e7%3A0x510e6582143a48f!2sPortland%2066%2C%201046BD%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1690461275598!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Piya Trading Location"
              allowFullScreen
            />
          </div>
        </section>

        <section className="flex-1 min-w-[250px] flex flex-col items-center justify-evenly">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold mb-6 text-orange-500">
              Quick Links
            </h3>
            <ul className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Home", href: "/" },
                { label: "Shop", href: "/shop" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map(({ label, href }) => (
                <li key={href} className="group">
                  <Link
                    href={href}
                    className="text-lg font-semibold text-zinc-100 hover:text-orange-500 transition-colors relative"
                    style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
                  >
                    {label}
                    <span className="block h-[2px] w-0 group-hover:w-full transition-all bg-orange-500 absolute bottom-0 left-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <h2 className="text-orange-500 text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={faqs}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onSubmit={handleSubmit}
          />
        </section>

        {/* Contact */}
        <section className="flex-1 min-w-[250px]">
          <h2 className="text-orange-500 text-3xl font-bold mb-4">
            Contact Us
          </h2>
          <div className="flex items-start font-semibold gap-3 mt-5">
            <Image
              src="/images/map.png"
              alt="location"
              width={25}
              height={25}
            />
            <p>Portland 66, 1046BD Amsterdam, Netherlands</p>
          </div>
          <div className="flex items-start font-semibold gap-3 mt-5">
            <Image
              src="/images/phone-call.png"
              alt="phone"
              width={25}
              height={25}
            />
            <p>+31 6 87059094</p>
          </div>
          <div className="flex items-start font-semibold gap-3 mt-5">
            <Image
              src="/images/gmail (1).png"
              alt="gmail"
              width={25}
              height={25}
            />
            <p>info@piyatrading.com</p>
          </div>
          <div className="flex items-start font-semibold gap-3 mt-5">
            <Link
              href="https://www.instagram.com/piyatrading"
              target="_blank"
              className="flex items-center gap-2"
            >
              <Image
                src="/images/instagram.png"
                alt="instagram"
                width={25}
                height={25}
              />
              <p>instagram.com/piyatrading</p>
            </Link>
          </div>
        </section>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-zinc-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white font-extrabold text-md select-none text-center w-full">
          © {new Date().getFullYear()} Piya Trading. All rights reserved.
        </p>
      </div>

      {/* Arka Plan Efekti */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 via-cyan-500 to-red-500 opacity-10 animate-gradient-move pointer-events-none"
        style={{ animationDuration: "15s" }}
      />
    </footer>
  );
}
