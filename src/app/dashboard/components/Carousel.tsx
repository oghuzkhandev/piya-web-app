"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  CreditCard,
  Tag,
  Mail,
} from "lucide-react";

const slides = [
  {
    title: "Orange Juice",
    titleEmoji: "🍊",
    description:
      "Our orange juice is freshly squeezed and full of vitamin C to kickstart your day with a citrus burst.",
    image: "/images/orange.png",
    buttonText: "See More Products",
    buttonLink: "/dashboard/products",
    buttonIcon: <ShoppingBag className="inline-block w-5 h-5 mr-2 -mb-0.5" />,
    features: ["Vitamin C: 100%", "Calories: 80 kcal"],
    testimonial: {
      text: "This juice is exactly what I wanted, fresh and natural!",
      author: "John Smith",
      rating: 5,
    },
  },
  {
    title: "Sparkling Water",
    titleEmoji: "💧",
    description:
      "Stay refreshed with our crisp, sparkling water—zero calories, full satisfaction.",
    image: "/images/sparkling.png",
    buttonText: "Buy Now",
    buttonLink: "/dashboard/products",
    buttonIcon: <CreditCard className="inline-block w-5 h-5 mr-2 -mb-0.5" />,
    features: ["Zero Calories", "Hydrating & Refreshing"],
    testimonial: {
      text: "Perfect refresher, no worries about calories anymore!",
      author: "Emily Johnson",
      rating: 4,
    },
  },
  {
    title: "Summer Deals",
    titleEmoji: "☀️",
    description:
      "Don't miss our limited-time summer deals on all your favorite beverages. Stay cool, save more!",
    image: "/images/summerdeal.png",
    buttonText: "Get the Deals",
    buttonLink: "/campaigns",
    buttonIcon: <Tag className="inline-block w-5 h-5 mr-2 -mb-0.5" />,
    features: ["Limited Time", "Up to 30% Off"],
    testimonial: {
      text: "The campaigns are great, this is my favorite every summer.",
      author: "Michael Brown",
      rating: 5,
    },
  },
  {
    title: "Partner with Us",
    titleEmoji: "🤝",
    description:
      "Looking for B2B wholesale opportunities? Become a partner and let's grow together.",
    image: "/images/partner.jpg",
    buttonText: "Contact Us",
    buttonLink: "/dashboard/contact-us",
    buttonIcon: <Mail className="inline-block w-5 h-5 mr-2 -mb-0.5" />,
    features: ["Wholesale B2B", "Trusted Partnerships"],
    testimonial: {
      text: "Our business grew thanks to the partnership, thanks a lot!",
      author: "Samantha Lee",
      rating: 5,
    },
  },
];

export default function BeverageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, 7000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        emblaApi?.scrollNext();
      }, 7000);
    }
  };

  const handlePrev = () => {
    emblaApi?.scrollPrev();
    resetInterval();
  };

  const handleNext = () => {
    emblaApi?.scrollNext();
    resetInterval();
  };

  const renderStars = (count: number) =>
    Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < count ? "text-orange-400" : "text-gray-500 dark:text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.38 2.456c-.784.57-1.838-.196-1.539-1.118l1.285-3.967a1 1 0 00-.364-1.118L3.622 9.392c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      ));

  return (
    <div
      className="min-h-[900px] flex flex-col items-center px-6 mx-auto max-w-screen
      bg-gradient-to-br from-orange-100 via-pink-100 to-orange-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
      relative overflow-hidden
      "
    >
      <div
        className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-orange-300 rounded-full opacity-30 blur-3xl pointer-events-none dark:bg-orange-700/40"
      />
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-300 rounded-full opacity-30 blur-3xl pointer-events-none dark:bg-orange-700/40"
      />

      <h1 className="text-5xl font-extrabold mt-20 text-zinc-700 dark:text-zinc-200 tracking-wider z-10 relative">
        Some of Highlights
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full max-w-[1200px] gap-16 z-10 relative">
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10 dark:ring-white/10 mt-20">
          <div className="embla" ref={emblaRef}>
            <div className="flex cursor-grab select-none">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className="embla__slide min-w-full relative h-[600px] flex items-center justify-center bg-gradient-to-tr from-orange-50 via-white to-orange-50 rounded-lg dark:bg-zinc-800"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[100%] h-[100%] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 backdrop-blur-sm hover:bg-white/70 dark:bg-zinc-700/30 dark:hover:bg-zinc-700/70 p-4 rounded-full shadow-lg hover:shadow-orange-400 text-orange-600 dark:text-orange-400 transition-transform duration-300 hover:scale-110 cursor-pointer flex items-center justify-center"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 backdrop-blur-sm hover:bg-white/70 dark:bg-zinc-700/30 dark:hover:bg-zinc-700/70 p-4 rounded-full shadow-lg hover:shadow-orange-400 text-orange-600 dark:text-orange-400 transition-transform duration-300 hover:scale-110 cursor-pointer flex items-center justify-center"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  emblaApi?.scrollTo(idx);
                  resetInterval();
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === idx
                    ? "bg-orange-600 shadow-lg"
                    : "bg-orange-300 hover:bg-orange-500 dark:bg-orange-700 dark:hover:bg-orange-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[480px] text-center lg:text-left space-y-10 mt-10 lg:mt-0 text-zinc-800 dark:text-zinc-200">
          <div className="flex items-center justify-start space-x-5">
            <h2 className="text-4xl font-bold">{slides[current].title}</h2>
            <span className="text-5xl">{slides[current].titleEmoji}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {slides[current].description}
          </p>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {slides[current].features.map((feature, i) => (
              <span
                key={i}
                className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium shadow-lg dark:bg-orange-700/30 dark:text-orange-300"
              >
                {feature}
              </span>
            ))}
          </div>

          <a
            href={slides[current].buttonLink}
            className="w-full max-w-[400px] mx-auto flex items-center justify-center px-8 py-3 bg-slate-100 border-2 shadow-lg hover:-translate-y-1 hover:scale-105 hover:shadow-orange-500 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-full transition-all duration-300 ease-in-out dark:bg-zinc-800 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-zinc-900"
          >
            {slides[current].buttonIcon}
            <div className="text-center">{slides[current].buttonText}</div>
          </a>

          <div className="mt-8 p-6 bg-slate-100 rounded-lg shadow-md max-w-md mx-auto lg:mx-0 text-left gap-5 dark:bg-zinc-800">
            <p className="italic font-semibold text-gray-700 dark:text-gray-300">
              "{slides[current].testimonial.text}"
            </p>
            <div className="mt-2 flex items-center space-x-1 text-orange-400">
              {renderStars(slides[current].testimonial.rating)}
            </div>
            <p className="mt-1 text-sm text-gray-500 font-semibold dark:text-gray-400">
              - {slides[current].testimonial.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
