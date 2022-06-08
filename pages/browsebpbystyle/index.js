import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function browsebpbystyle() {
  return (
    <motion.div
      transition={{ delay: 0.17 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        {stylesOptions.map((option) => (
          <>
            <button key={option.index}>
              <Link href={`/browsebpbystyle/${option.style}`} passHref>
                <a> {option.style}</a>
              </Link>
            </button>
          </>
        ))}
      </div>
    </motion.div>
  );
}

const stylesOptions = [
  {
    style: "luxury",
    index: 0,
  },
  {
    style: "modern",
    index: 1,
  },
  {
    style: "ranch",
    index: 2,
  },
  {
    style: "spanish",
    index: 3,
  },
];
