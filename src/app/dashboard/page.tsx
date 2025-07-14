import React from "react";
import Typewriter from "./components/Typewriter";
import Stats from "./components/Stats";
import FuturesRevealCards from "./components/RevealCard";
import Carousel from "./components/Carousel";
import ServicesPage from "../dashboard/services/page";
import ContactUs from ".././dashboard/contact-us/page";
import OrderProcessTimeline from "./components/Timeline";

export default function DashboardPage() {
  return (
    <>
      <div>
        <Typewriter />
        <Carousel />
        <ServicesPage />
        <div className="bg-gradient-to-r to-gray-200 from-slate-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 font-sans py-20 px-4 md:px-8 lg:px-10">
          <OrderProcessTimeline />
        </div>
        <div className="bg-gradient-to-l to-orange-200 from-red-100">
          <FuturesRevealCards />
          <Stats />
        </div>
        <ContactUs />
      </div>
    </>
  );
}
