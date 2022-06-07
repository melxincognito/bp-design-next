import React from "react";
import CustomPlanRequestForm from "../components/forms/CustomPlanRequestForm";
import { motion } from "framer-motion";

export default function customplanrequest() {
  return (
    <motion.div
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CustomPlanRequestForm />
    </motion.div>
  );
}
