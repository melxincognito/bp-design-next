import React from "react";
import CustomPlanRequestForm from "../components/forms/CustomPlanRequestForm";
import { motion } from "framer-motion";

// TODO add instructions above form for how to use form

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
