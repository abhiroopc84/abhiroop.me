"use client";

import { motion } from "framer-motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="flex flex-1 h-full flex-col p-3 mt-8 justify-between"
    >
      {children}
    </motion.div>
  );
}