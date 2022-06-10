import React from "react";
import { useRouter } from "next/router";

export default function PlanDeets() {
  const router = useRouter();

  const planNumber = router.query.planNumber;

  return (
    <div>
      <h1> {planNumber} </h1>
      <h2> for luxury</h2>
    </div>
  );
}
