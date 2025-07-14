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
    <footer className="relative bg-zinc-900 text-zinc-100 p-10 sm:px-16 overflow-hidden font-sans">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Location */}
        <section className="flex-1 min-w-[280px]">
          <h2 className="text-orange-400 text-3xl font-extrabold mb-6 tracking-wide drop-shadow-md">
            Our Location
          </h2>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl ring-1 ring-orange-500/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.1148400508346!2d4.866302015712041!3d52.36535047978801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60905104f59e7%3A0x510e6582143a48f!2sPortland%2066%2C%201046BD%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1690461275598!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Piya Trading Location"
              allowFullScreen
              className="rounded-xl"
            />
          </div>
        </section>

        {/* Quick Links + FAQ Search */}
        <section className="flex-1 min-w-[280px] flex flex-col items-center justify-evenly">
          <div className="text-center mb-10 max-w-md">
            <h3 className="text-2xl font-extrabold mb-6 text-orange-400 tracking-wide drop-shadow-md">
              Quick Links
            </h3>
            <ul className="flex flex-wrap justify-center gap-8">
              {[
                { label: "Home", href: "/" },
                { label: "Shop", href: "/dashboard/products" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/dashboard/contact-us" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map(({ label, href }) => (
                <li key={href} className="group relative">
                  <Link
                    href={href}
                    className="text-md font-semibold text-zinc-100 hover:text-orange-400 transition-colors relative"
                    style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                  >
                    {label}
                    <span className="block h-[2.5px] w-0 group-hover:w-full transition-all bg-orange-400 absolute bottom-0 left-0 rounded" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <h2 className="text-orange-400 text-2xl font-extrabold text-center tracking-wide drop-shadow-md mb-5">
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
        <section className="flex-1 min-w-[280px]">
          <h2 className="text-orange-400 text-2xl font-extrabold mb-5 tracking-wide drop-shadow-md">
            Contact Us
          </h2>
          {[
            {
              src: "/images/map.png",
              alt: "location",
              text: "Portland 66, 1046BD Amsterdam, Netherlands",
            },
            { src: "/images/phone-call.png", alt: "phone", text: "+31 6 87059094" },
            { src: "/images/gmail (1).png", alt: "gmail", text: "info@piyatrading.com" },
          ].map(({ src, alt, text }) => (
            <div
              key={alt}
              className="flex items-center font-semibold gap-4 mt-6 select-text"
            >
              <Image src={src} alt={alt} width={28} height={28} />
              <p className="text-zinc-200">{text}</p>
            </div>
          ))}
          <div className="flex items-center font-semibold gap-4 mt-6">
            <Link
              href="https://www.instagram.com/piyatrading"
              target="_blank"
              className="flex items-center gap-3 hover:text-orange-400 transition-colors"
            >
              <Image
                src="/images/instagram.png"
                alt="instagram"
                width={28}
                height={28}
              />
              <p className="text-zinc-200">instagram.com/piyatrading</p>
            </Link>
          </div>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white font-semibold tracking-widest text-md select-none text-center w-full md:w-auto">
          © {new Date().getFullYear()} Piya Trading. All rights reserved.
        </p>
      </div>

      {/* Gradient Background */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-400 via-cyan-400 to-red-500 opacity-10 animate-gradient-move pointer-events-none"
        style={{ animationDuration: "15s" }}
      />
    </footer>
  );
}
