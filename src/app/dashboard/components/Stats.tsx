"use client";
import { useEffect, useState } from "react";

const statsData = [
  { id: 1, label: "Years of Experience", value: 20, suffix: "+" },
  { id: 2, label: "Products Offered", value: 1000, suffix: "+" },
  { id: 3, label: "Clients Served", value: 500, suffix: "+" },
  { id: 4, label: "Countries Delivered", value: 15, suffix: "+" },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      setCounts((prev) =>
        statsData.map((stat, i) =>
          Math.min(
            Math.round((stat.value / totalFrames) * frame),
            stat.value
          )
        )
      );
      if (frame >= totalFrames) clearInterval(counter);
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="w-full dark:bg-zinc-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
          Numbers That Speak
        </h2>
        <p className="text-4xl sm:text-5xl font-extrabold text-zinc-800 dark:text-white">
          Our Impact in Numbers
        </p>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Trusted by hundreds of clients and delivering excellence every day.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-5xl mx-auto text-center">
        {statsData.map(({ id, label, suffix }, i) => (
          <div key={id} className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-orange-600 dark:text-orange-400">
              {counts[i]}
              {suffix}
            </h3>
            <p className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
