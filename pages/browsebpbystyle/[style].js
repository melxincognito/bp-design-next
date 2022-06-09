import React from "react";
import { useRouter } from "next/router";

// KEEPING THIS FOR NOW
// Not sure how to best utilize it yet

export default function StyleOptions() {
  const router = useRouter();

  const style = router.query.style;

  return (
    <div>
      <h1> {style} </h1>
    </div>
  );
}
