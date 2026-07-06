"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] as const }}
    >
      {children}
    </motion.div>
  );
}
