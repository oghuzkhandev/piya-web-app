"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../../components/ui/text-reveal-card";

export default function FeaturesRevealCards() {
  const cards = [
    {
      text: "Fast Delivery",
      revealText: "We deliver your beverages within 24 hours across Europe.",
    },
    {
      text: "Premium Quality",
      revealText:
        "Only the best brands and freshest drinks reach your shelves.",
    },
    {
      text: "Customer Support",
      revealText: "24/7 assistance to keep your business running smoothly.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-20 dark:bg-zinc-900">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-widest text-orange-400 font-medium mb-2">
          What Sets Us Apart
        </h2>
        <p className="text-4xl sm:text-5xl font-extrabold text-zinc-800 dark:text-white leading-tight">
          Why Choose Us
        </p>
        <p className="mt-4 text-md sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          We’re more than just a beverage supplier — we’re your reliable partner in success.
        </p>
      </div>

      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {cards.map(({ text, revealText }, i) => (
          <TextRevealCard
            key={i}
            text={text}
            revealText={revealText}
            className="min-h-[250px] p-6"
          >
            <TextRevealCardTitle className="text-lg sm:text-xl text-orange-500 dark:text-orange-400 font-bold">
              {text}
            </TextRevealCardTitle>
            <TextRevealCardDescription className="text-md sm:text-base text-white dark:text-zinc-300">
              {revealText}
            </TextRevealCardDescription>
          </TextRevealCard>
        ))}
      </div>
    </section>
  );
}
