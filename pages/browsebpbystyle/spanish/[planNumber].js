import React from "react";
import { useRouter } from "next/router";

export default function PlanDetails() {
  const router = useRouter();

  const planNumber = router.query.planNumber;

  return (
    <div>
      <h1> {planNumber} </h1>
      <h2> For spanish</h2>
    </div>
  );
}
