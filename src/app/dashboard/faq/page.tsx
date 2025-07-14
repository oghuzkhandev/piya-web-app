"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What's the delivery time?",
    answer:
      "Orders are delivered within 24-48 hours. We ensure fast and reliable shipping for all customers.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Our minimum order quantity is 10 items. For bulk purchases, please contact our sales team.",
  },
  {
    question: "How can I return a product?",
    answer:
      "You can request a return within 7 days of receiving your order. Contact our support team for assistance.",
  },
  {
    question: "How are products packaged?",
    answer:
      "We use eco-friendly and secure packaging materials to keep your products safe and fresh.",
  },
  {
    question: "How are invoices processed?",
    answer:
      "Invoices are automatically generated and emailed to you upon order confirmation.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-orange-600 mb-12">Frequently Asked Questions</h1>

      <section className="w-full max-w-3xl bg-white rounded-xl shadow-lg divide-y divide-gray-200">
        {faqs.map(({ question, answer }, idx) => (
          <div
            key={idx}
            className="cursor-pointer"
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-answer-${idx}`}
          >
            <div className="flex justify-between items-center px-6 py-5 hover:bg-orange-50 transition">
              <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
              <motion.span
                animate={{ rotate: openIndex === idx ? 45 : 0 }}
                className="text-orange-600 font-bold text-3xl select-none"
                aria-hidden="true"
              >
                +
              </motion.span>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  id={`faq-answer-${idx}`}
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 pb-6 text-slate-500 overflow-hidden text-md font-semibold "
                >
                  {answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </main>
  );
}
