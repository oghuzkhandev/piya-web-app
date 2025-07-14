"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  RotateCcw,
  Shield,
  Package,
  HeadphonesIcon,
  Info,
  Sparkles,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Lightning Fast Shipping",
    description:
      "Experience next-level delivery speeds with real-time tracking and premium packaging that ensures your orders arrive safely and swiftly.",
    icon: Truck,
    color: "from-blue-500 to-cyan-500",
    stats: "2-Day Delivery",
    link: "#shipping",
  },
  {
    title: "Hassle-Free Returns",
    description:
      "Enjoy peace of mind with our 30-day return policy. No questions asked, no hidden fees - just seamless returns when you need them.",
    icon: RotateCcw,
    color: "from-green-500 to-emerald-500",
    stats: "30-Day Policy",
    link: "#returns",
  },
  {
    title: "Bank-Level Security",
    description:
      "Your transactions are protected by enterprise-grade encryption and advanced fraud detection systems that keep your data safe.",
    icon: Shield,
    color: "from-purple-500 to-violet-500",
    stats: "256-bit Encryption",
    link: "#secure-payment",
  },
  {
    title: "Smart Order Tracking",
    description:
      "Follow your package's journey with precision GPS tracking, delivery predictions, and instant notifications at every milestone.",
    icon: Package,
    color: "from-orange-500 to-red-500",
    stats: "Live Updates",
    link: "#tracking",
  },
  {
    title: "24/7 Expert Support",
    description:
      "Connect with our dedicated support team anytime, anywhere. Get instant help through chat, phone, or email from real humans who care.",
    icon: HeadphonesIcon,
    color: "from-pink-500 to-rose-500",
    stats: "Always Available",
    link: "#support",
  },
  {
    title: "Detailed Product Intel",
    description:
      "Make informed decisions with comprehensive product information, expert reviews, and detailed specifications curated by our team.",
    icon: Info,
    color: "from-indigo-500 to-blue-500",
    stats: "Expert Verified",
    link: "#product-info",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
      duration: 0.8,
    },
  },
};

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const Icon = service.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        rotate: index % 2 === 0 ? 1 : -1,
        transition: { type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.95 }}
      className="group"
    >
      <Card className="relative overflow-hidden bg-card/50 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-elegant)] h-full">
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Floating orb */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="p-8 relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div
              className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <Badge
              variant="secondary"
              className="bg-orange-200 border-2"
            >
              <Sparkles className="w-5 h-5 mr-1" />
              {service.stats}
            </Badge>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function ModernServicesSection() {
  return (
    <section className="relative min-h-screen w-full py-24 px-4 sm:px-8 lg:px-20 bg-gradient-to-r from-slate-100 to-purple-200">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-6 py-2 text-md font-semibold bg-purple-500/20 border-primary/30 text-primary"
            >
              <Sparkles className="w-8 h-8 mr-2" />
              Premium Services
            </Badge>
          </motion.div>

          <motion.h2
            className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-zinc-800 to-gray-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Exceptional
            <br />
            <span className="text-primary">Experience</span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground font-bold max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Discover a new standard of excellence with our premium services
            designed to exceed your expectations at every touchpoint of your
            journey.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-muted-foreground text-lg mb-6">
            Ready to experience the difference?
          </p>
          <motion.button
            className="bg-gradient-to-r from-red-500 to-blue-500 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
