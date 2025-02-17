"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center px-6 text-center gap-6"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold dark:text-white">
          SNGC-CBSCC 2026
        </h1>

        <h2 className="text-lg md:text-3xl font-semibold  max-w-5xl leading-relaxed">
          First Conference on Synergies in Next Generation CPS: <br />
          Collaboration Between Sensing, Control, and Computation
        </h2>

        <p className="text-base md:text-2xl text-gray-600 dark:text-neutral-300">
          Organized by <span className="font-semibold">Cardiff Metropolitan University, United Kingdom</span>
        </p>

        <p className="text-base md:text-2xl text-gray-700 dark:text-neutral-300">
          <strong>Dates:</strong> 14th - 16th January 2026
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-medium px-6 py-3 rounded-full transition-all shadow-md"
        >
          Register Now
        </motion.button>
      </motion.div>
    </AuroraBackground>
  );
}
