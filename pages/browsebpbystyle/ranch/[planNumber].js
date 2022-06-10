import React from "react";
import { useRouter } from "next/router";

export default function RanchPlanDeets() {
  const router = useRouter();

  const planNumber = router.query.planNumber;

  return (
    <div>
      <h1> {planNumber} </h1>
      <h2> for ranch</h2>
    </div>
  );
}
