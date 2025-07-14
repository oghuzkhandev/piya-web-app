"use client";

import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email!");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="min-h-[900px] p-10 rounded-lg shadow-lg dark:bg-zinc-900 flex flex-col md:flex-row items-center justify-evenly bg-gradient-to-r from-green-100 to-blue-50 dark:from-green-900 dark:to-blue-900 gap-10">
      <div className="flex flex-col items-start justify-center max-w-lg w-full">
        <h2 className="text-4xl font-extrabold mb-3 text-zinc-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-10 text-zinc-700 dark:text-zinc-300 text-lg max-w-xl">
          Have questions about the market? Want to become a vendor? We'd love to
          hear from you!
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-12 mb-12 text-zinc-900 dark:text-white w-full">
          <div className="flex items-center space-x-3 mb-6 sm:mb-0">
            <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
            <span className="font-semibold text-lg">+31 6 87059094</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
            <span className="font-semibold text-lg">info@piyatrading.com</span>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 bg-green-100 dark:bg-green-800 rounded-md text-green-800 dark:text-green-200 font-semibold text-center text-lg">
            Thanks for reaching out! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 font-medium text-zinc-800 dark:text-zinc-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 rounded-md border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 font-medium text-zinc-800 dark:text-zinc-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded-md border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="mb-2 font-medium text-zinc-800 dark:text-zinc-200"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                className="p-3 rounded-md border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 font-medium text-zinc-800 dark:text-zinc-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-md border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 
             bg-white text-zinc-900 placeholder-zinc-500 
             dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400 resize-none transition"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-green-600 border border-green-300 hover:scale-110 hover:border-0 hover:shadow-green-600 hover:shadow-lg text-green-600 hover:text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      <div className="bg-white w-[600px] h-[500px] dark:bg-zinc-800 rounded-lg shadow-md p-6 space-y-6 border border-green-300 dark:border-green-700">
        <h3 className="text-4xl font-extrabold mb-5 text-zinc-900 dark:text-white">
          Market Hours
        </h3>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <CalendarDays className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Days of Operation
            </h4>
          </div>
          <ul className="dark:text-zinc-300 space-y-2 text-slate-400 font-semibold">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-green-500" />
              Monday – Friday (Regular Business Days)
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-green-500" />
              Saturday (Limited Support)
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-green-500" />
              Sunday (Closed)
            </li>
          </ul>
        </div>

        <div className="border-b border-green-300 dark:border-green-700"></div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Hours
            </h4>
          </div>
          <ul className="text-slate-400 font-semibold dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-green-500" />
              <span>
                <strong>Monday:</strong> <span>9:00 AM – 5:30 PM</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-green-500" />
              <span>
                <strong>Tuesday:</strong> <span>9:00 AM – 5:30 PM</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-green-500" />
              <span>
                <strong>Wednesday:</strong> <span>9:00 AM – 5:30 PM</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-green-500" />
              <span>
                <strong>Thursday:</strong> <span>9:00 AM – 5:30 PM</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-green-500" />
              <span>
                <strong>Friday:</strong> <span>9:00 AM – 5:30 PM</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-green-500" />
              <span>
                <strong>Saturday:</strong> <span>10:00 AM – 2:00 PM</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-green-500" />
              <span>
                <strong>Sunday:</strong> <span>Closed</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
