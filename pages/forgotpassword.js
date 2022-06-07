import React from "react";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
import { motion } from "framer-motion";

export default function forgotpassword() {
  return (
    <motion.div
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ForgotPasswordForm />
    </motion.div>
  );
}
