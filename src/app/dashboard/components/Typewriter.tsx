"use client";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const words = [
    { text: "Fast," },
    { text: "Fresh," },
    { text: "Reliable," },
    {
      text: "Your beverage partner.",
      className: "text-orange-500 dark:text-orange-400",
    },
  ];

  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <Image
        src="/images/warehouse.png"
        alt="Beverage Background"
        fill
        priority
        className="object-cover w-full h-full opacity-60"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/30 via-zinc-900/10 to-black/30 backdrop-blur-[3px]" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 md:px-32 text-center md:text-left ml-24">
        <div className="max-w-5xl space-y-6 text-zinc-900">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-md">
            Elevate Your Beverage Game
            <br />
            with <span className="text-orange-500">Piya Trading</span>
          </h1>

          <p className="text-xl sm:text-xl tracking-wider font-semibold italic drop-shadow-md max-w-3xl">
            Premium drinks, lightning-fast logistics. We serve both domestic and
            international clients with efficiency, care, and quality that stands
            out.
          </p>

          <TypewriterEffectSmooth words={words} />

          <p className="text-2xl font-semibold mt-10">
            Meet the people behind your deliveries:
          </p>

          <FlipWords
            className="text-red-600 font-extrabold text-2xl tracking-wide drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            words={[
              "Logistics experts.",
              "Drink enthusiasts.",
              "Customer-first team.",
              "Always on time.",
            ]}
          />

          <div className="flex flex-col sm:flex-row gap-20 pt-8 items-center justify-center md:justify-start">
            <Link href={"/dashboard/products"}>
              <Button className="bg-orange-600 w-[220px] hover:bg-white hover:border-2 hover:border-orange-600 hover:text-orange-600 hover:animate-bounce hover:shadow-orange-600/50 hover:shadow-xl text-white py-5 text-md font-semibold rounded-xl transition-all duration-300 ease-in-out">
                Browse Catalog <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Link href={"/dashboard/contact-us"}>
              <Button
                variant="outline"
                className="w-[220px] border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:shadow-green-600 hover:shadow-md hover:animate-bounce dark:hover:bg-green-600 dark:bg-white dark:border-green-600 py-5 text-md font-semibold rounded-xl transition-all duration-300 ease-in-out"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
