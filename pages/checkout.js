import React from "react";
import { motion } from "framer-motion";

export default function checkout() {
  return (
    <motion.div
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      checkout
    </motion.div>
  );
}
