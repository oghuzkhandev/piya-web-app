"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { Check } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const TickIcon = () => <Check className="w-5 h-5 text-white" strokeWidth={3} />;

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 85%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wider text-zinc-800 dark:text-white mb-3">
          Order Fulfillment Timeline
        </h2>
        <p className="text-gray-600 dark:text-neutral-400 text-md md:text-lg max-w-2xl mx-auto mt-5">
          From placing your order to delivery – a smooth and reliable process.
        </p>
      </div>

      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-1.5 bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] rounded-full"
        style={{ height }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-t from-green-500 via-blue-500 to-transparent rounded-full"
          style={{ height: heightTransform, opacity: opacityTransform }}
        />
      </div>

      <div ref={contentRef} className="relative space-y-20 mt-20">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center md:items-start ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-700 shadow-lg rounded-xl p-6 md:w-[45%] w-full md:mx-8 hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-3">
                  {item.title}
                </h3>
                <div className="text-neutral-700 dark:text-neutral-300 text-base">
                  {item.content}
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-10 h-10 rounded-full bg-green-600 border-4 border-white dark:border-zinc-900 shadow-md z-20 flex items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 -translate-y-4"
              >
                <TickIcon />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
