"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Clock } from "lucide-react";
import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const cartCount = 3;

const catalogItems = [
  {
    title: "Soft Drinks",
    href: "/catalogus/frisdranken",
    image: "/images/CocaCola.webp",
    description:
      "Refreshing soft drinks like cola, orange soda, lemon, and more.",
    icon: "🥤",
  },
  {
    title: "Energy Drinks",
    href: "/catalogus/energie",
    image: "/images/Redbull.jpg",
    description: "Boost your day with our energy drinks – perfect on the go.",
    icon: "⚡",
  },
  {
    title: "Water & Juices",
    href: "/catalogus/water-sappen",
    image: "/images/Dolu.png",
    description:
      "Healthy thirst quenchers: spring water, mineral water, and natural juices.",
    icon: "💧",
  },
];

const overOnsItems = [
  {
    title: "Our Story",
    href: "/over-ons/verhaal",
    description:
      "Read how Piya Trading started and grew to become a market leader in beverages.",
    icon: "📖",
  },
  {
    title: "Our Values",
    href: "/over-ons/waarden",
    description:
      "We stand for sustainability, quality, and customer satisfaction.",
    icon: "💎",
  },
  {
    title: "Team",
    href: "/over-ons/team",
    description: "Meet the passionate team behind Piya Trading.",
    icon: "👥",
  },
];

const contactItems = [
  {
    title: "Customer Support",
    href: "/dashboard/contact-us",
    description: "Need help? Our support team is available 24/7.",
    icon: "🎧",
  },
  {
    title: "Email",
    href: "/dashboard/contact-us",
    description: "Send us an email and we'll get back to you promptly.",
    icon: "✉️",
  },
  {
    title: "Location",
    href: "/dashboard/contact-us",
    description: "Visit our headquarters in Amsterdam.",
    icon: "📍",
  },
];

export default function Header() {
  return (
    <header className="w-full bg-slate-50 dark:bg-zinc-900 shadow-xl sticky top-0 z-50 p-4">
      <nav className="ml-12 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start space-x-10">
          <Link
            href="/"
            className="text-2xl font-extrabold text-primary dark:text-primary-light"
          >
            <div className="flex items-center justify-start gap-5">
              <Image
                src="/images/PIYALOGO.png"
                alt="Piya Trading Logo"
                width={140}
                height={140}
                className="object-cover"
              />
              <Image
                src="/images/PIYA.png"
                alt="Piya Text"
                width={140}
                height={140}
                className="object-cover"
              />
            </div>
          </Link>
        </div>

        <div className="flex-[2] flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-10">
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="flex items-center justify-center whitespace-nowrap font-semibold text-md w-[140px] h-[50px] rounded-lg transition-all duration-200 ease-in-out text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 px-5 py-2 border hover:border-yellow-300 hover:shadow-yellow-300 hover:border-[2px] border-gray-300 dark:border-zinc-700 shadow-lg hover:shadow-md gap-2">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-lg">🏠</span>
                      <span>Home</span>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center justify-center whitespace-nowrap font-semibold text-md w-[140px] h-[50px] rounded-lg transition-all duration-200 ease-in-out text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 px-5 py-2 border hover:border-yellow-300 hover:shadow-yellow-300 hover:border-[2px] border-gray-300 dark:border-zinc-700 shadow-lg hover:shadow-md gap-2">
                  <span className="text-lg">📦</span>
                  <span>Catalog</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-1 bg-white dark:bg-zinc-800 rounded-md shadow-lg">
                    {catalogItems.map(
                      ({ title, href, image, description, icon }) => (
                        <li key={href} className="row-span-1">
                          <Link
                            href={href}
                            className="group block space-y-1 rounded-md p-3 hover:bg-muted transition-colors relative"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl opacity-100 transition-opacity duration-300">
                                {icon}
                              </span>
                              <div className="text-md font-bold text-gray-900 dark:text-gray-100">
                                {title}
                              </div>
                            </div>
                            <p className="text-md font-medium text-gray-600 border-b-2 border-orange-300 mt-3 pl-8">
                              {description}
                            </p>
                            {image && (
                              <img
                                src={image}
                                alt={title}
                                className="w-full h-24 object-contain rounded-md mt-5"
                              />
                            )}
                          </Link>
                        </li>
                      )
                    )}
                    <div className="text-center mt-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 hover:scale-110 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg"
                      >
                        <a href="/dashboard/products">
                          <span className="mr-2 font-bold">🔍</span>
                          View All Products
                        </a>
                      </Button>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center justify-center whitespace-nowrap font-semibold text-md w-[140px] h-[50px] rounded-lg transition-all duration-200 ease-in-out text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 px-5 py-2 border hover:border-yellow-300 hover:shadow-yellow-300 hover:border-[2px] border-gray-300 dark:border-zinc-700 shadow-lg hover:shadow-md gap-2">
                  <span className="text-lg">👥</span>
                  <span>About Us</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 bg-white dark:bg-zinc-800 rounded-md shadow-lg">
                    {overOnsItems.map(({ title, href, description, icon }) => (
                      <li key={href} className="row-span-1">
                        <Link
                          href={href}
                          className="group block space-y-1 rounded-md p-3 hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl opacity-100 transition-opacity duration-300">
                              {icon}
                            </span>
                            <div className="text-md font-bold leading-none text-gray-900 dark:text-gray-100">
                              {title}
                            </div>
                          </div>
                          <p className="text-md font-medium text-gray-600 border-b-2 border-orange-300 mt-3 pl-8">
                            {description}
                          </p>
                        </Link>
                      </li>
                    ))}
                    <div className="text-center mt-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 hover:scale-110 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg"
                      >
                        <a href="/dashboard/contact-us">
                          <span className="mr-2">🤝</span>
                          Get to Know Us
                        </a>
                      </Button>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/dashboard/services" passHref>
                  <NavigationMenuLink className="flex items-center justify-center whitespace-nowrap font-semibold text-md w-[140px] h-[50px] rounded-lg transition-all duration-200 ease-in-out text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 px-5 py-2 border hover:border-yellow-300 hover:shadow-yellow-300 hover:border-[2px] border-gray-300 dark:border-zinc-700 shadow-lg hover:shadow-md gap-2">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-lg">💼</span>
                      <span>Services</span>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center justify-center whitespace-nowrap font-semibold text-md w-[140px] h-[50px] rounded-lg transition-all duration-200 ease-in-out text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 px-5 py-2 hover:border-yellow-300 hover:shadow-yellow-300 hover:border-[2px] border border-gray-300 dark:border-zinc-700 shadow-lg hover:shadow-md gap-2">
                  <span className="text-lg">📬</span>
                  <span>Contact</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 bg-white dark:bg-zinc-800 rounded-md shadow-lg">
                    {contactItems.map(({ title, href, description, icon }) => (
                      <li key={href} className="row-span-1">
                        <Link
                          href={href}
                          className="group block space-y-1 rounded-md p-3 hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl opacity-100 transition-opacity duration-300">
                              {icon}
                            </span>
                            <div className="text-md font-bold leading-none text-gray-900 dark:text-gray-100">
                              {title}
                            </div>
                          </div>
                          <p className="text-md font-semibold text-gray-600 border-b-2 border-orange-300 mt-3 pl-8">
                            {description}
                          </p>
                        </Link>
                      </li>
                    ))}
                    <div className="text-center mt-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 hover:scale-110 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg"
                      >
                        <a href="/dashboard/contact-us">
                          <span className="mr-2">📞</span>
                          Contact Us Now
                        </a>
                      </Button>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex-1 flex items-center justify-end gap-10">
          <DutchClock />
          <motion.button
            aria-label="Shopping Cart"
            className="relative p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
            whileHover={{
              scale: [1, 2.5, 1],
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors" />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0, opacity: 0, y: -10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="absolute -top-1 -right-1 px-2 py-0.5 text-xs font-bold text-white bg-red-600 rounded-full shadow-lg"
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>

          <Button
            variant="destructive"
            className="w-30 rounded-lg bg-white text-md text-blue-500 hover:text-white hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-lg border-[1px] border-blue-500 dark:bg-zinc-800 dark:text-white dark:hover:bg-red-600 transition-all duration-400 ease-in-out flex items-center gap-2 hover:animate-pulse"
          >
            <User className="w-5 h-5" />
            <span>Login</span>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function DutchClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const nlTime = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/Amsterdam",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(nlTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden sm:flex items-center gap-2 px-4 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-inner transition-all w-[120px]">
      <span className="text-sm font-mono text-gray-700 dark:text-gray-200">
        🇳🇱 Time {time}
      </span>
      <Clock className="w-8 h-8 text-orange-500 dark:text-orange-300 animate-spin-slow" />
    </div>
  );
}
