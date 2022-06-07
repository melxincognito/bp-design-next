import React from "react";
import { motion } from "framer-motion";

const allBlueprints = () => {
  //
  //

  return (
    <div style={{ display: "flex" }}>
      {/* transition slides down from the top of the page and 
          springs up to its final position
        */}
      <motion.div
        style={{ float: "left" }}
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1>All the blueprints</h1>
      </motion.div>
      {/* transition slides up from the bottom of the page and 
          springs down to its final position
        */}

      <motion.div
        style={{ float: "right" }}
        initial={{ y: 250 }}
        animate={{ y: 10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1>All the blueprints II</h1>
      </motion.div>
    </div>
  );
};

export default allBlueprints;
