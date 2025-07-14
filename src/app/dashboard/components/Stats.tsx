"use client";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const statsData = [
  { id: 1, label: "Years of Experience", value: 20, suffix: "+" },
  { id: 2, label: "Products Offered", value: 1000, suffix: "+" },
  { id: 3, label: "Clients Served", value: 500, suffix: "+" },
  { id: 4, label: "Countries Delivered", value: 15, suffix: "+" },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1600;
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      setCounts(() =>
        statsData.map((stat) =>
          Math.min(Math.round((stat.value / totalFrames) * frame), stat.value)
        )
      );
      if (frame >= totalFrames) clearInterval(counter);
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="w-full dark:bg-zinc-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-xs uppercase tracking-widest text-orange-400 font-semibold drop-shadow-md">
          Numbers That Speak
        </h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-zinc-800 dark:text-white mt-1 drop-shadow-lg">
          Our Impact in Numbers
        </p>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Trusted by hundreds of clients and delivering excellence every day.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-4xl mx-auto text-center">
        {statsData.map(({ id, label, suffix }, i) => (
          <div
            key={id}
            className="relative flex flex-col items-center bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
          >
            <div className="absolute -top-4 right-4 animate-pulse text-orange-400">
              <Sparkles size={22} />
            </div>
            <h3 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent select-none">
              {counts[i]}
              <span className="text-2xl align-top">{suffix}</span>
            </h3>
            <p className="mt-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 select-none">
              {label}
            </p>
            <div className="mt-2 w-12 h-1 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
