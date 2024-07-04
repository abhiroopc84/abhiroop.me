"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default Wrapper;
