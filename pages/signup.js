import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import { motion } from "framer-motion";

export default function signup() {
  return (
    <motion.div
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SignUpForm />
    </motion.div>
  );
}
