import React from "react";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";

const allBlueprints = () => {
  //
  //

  return (
    <div
      className="content-container"
      style={{ display: "grid", justifyContent: "center" }}
    >
      {/* COMBINING TRANSITIONS 
          styles are for visual 
          purposes only */}

      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div
          className="container-1"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10rem",
            backgroundColor: "pink",
          }}
        >
          {/* The content in this container is going to be the 
          first to appear on the screen. The initial opacity is 
          set to 0% and will increase to 100% after 0.17 seconds */}
          <h2 style={{ color: "white" }}> I am here first</h2>
          <motion.div
            className="container-2"
            initial={{ x: "-130vh" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            style={{
              position: "absolute",
            }}
          >
            {/* The content in this container is going to begin it's 
            transition after 0.7 seconds, which is when the first 
            transition has already completed. This transition will
            slide in from the LEFT of the page on the x axis and 
            will have a slight spring back when it's set into it's 
            final position  */}

            <h2> I slide in from the LEFT second</h2>
          </motion.div>{" "}
        </div>
      </motion.div>

      <motion.div
        className="container-3"
        transition={{ delay: 1.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ backgroundColor: "blue" }}
      >
        {/* The content in this container will have it's initial 
          opacity set to 0% and will increase to 100% after 1.7 seconds, 
          which is after the second transition has been completed.  */}

        <h2> I appear third </h2>
      </motion.div>

      <motion.div
        className="container-4"
        transition={{ delay: 2.15 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ backgroundColor: "orange" }}
      >
        {/* The content in this container will have it's initial 
          opacity set to 0% and will increase to 100% after 2.15 seconds. 
          This transition is timed to begin shortly after the third 
          transition has completed to create a flow  */}
        <h2> I appear fourth</h2>
      </motion.div>
    </div>
  );
};

export default allBlueprints;

function blueprints() {
  return (
    <>
      <motion.div
        initial={{ x: -650 }}
        animate={{ x: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        {/* transition slides horizontally from the LEFT of the page and 
        springs back into its final position */}

        <h1>I slide in from the LEFT fast</h1>
      </motion.div>

      {/* stiffness is going to determine how much force is going
      into your spring transition. The lower the number, the slower 
      the transition whereas the higher the number, the faster the 
      transition. Faster transitions create more notable spring 
      backs  */}

      {/* the component is going to be sliding on the x axis, so we 
      set the initial position in 'initial-x' and set the location
      of its final position in 'animate-x'
      */}

      <motion.div
        initial={{ x: 650 }}
        animate={{ x: 10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 1 }}
      >
        {/* transition slides horizontally from RIGHT of the page slowly 
      with no spring back */}

        <h1>I slide in from the RIGHT slowly</h1>
      </motion.div>
    </>
  );
}
