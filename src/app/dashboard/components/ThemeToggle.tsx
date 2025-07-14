"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <motion.div whileTap={{ scale: 0.9 }} className="rounded-full">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="border-gray-400 dark:border-gray-600 hover:border-yellow-400 dark:hover:border-yellow-300 shadow-sm hover:shadow-yellow-400 transition-all duration-300"
      >
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.8, rotate: 15, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Sun className="h-5 w-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.8, rotate: -15, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
          </motion.div>
        )}
      </Button>
    </motion.div>
  );
}
